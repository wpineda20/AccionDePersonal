<?php

namespace App\Repositories;

use Barryvdh\DomPDF\Facade\Pdf;

use App\Models\HistoryPersonnelAction;
use App\Models\PersonnelAction;
use Http;
use Illuminate\Http\Request;
use Storage;
use Str;

class HistoryPersonnelActionRepository
{
    public function create(PersonnelAction $personnelAction, int $statusId): void
    {
        HistoryPersonnelAction::insert([
            'personnel_action_id' => $personnelAction->id,
            'user_id' => $personnelAction->user_id,
            'status_id' => $statusId,
            'url_file' => null,
            'active' => 1,
        ]);
    }

    public function advanceAp(PersonnelAction $personnelAction, int $statusId, $createdFile = null, int $userId): void
    {
        // Deactivate the current history action
        HistoryPersonnelAction::where([
            'personnel_action_id' => $personnelAction->id,
            'active' => 1,
        ])->update([
            'active' => false,
        ]);

        // Create the new history action
        HistoryPersonnelAction::create([
            'user_id' => $userId,
            'personnel_action_id' => $personnelAction->id,
            'status_id' => $statusId,
            'active' => 1,
            'url_file' => $createdFile,
        ]);
    }

    public function createFile($ap, int $apId): array
    {
        //Generate pdf
        $fileName = "ap-$apId.pdf";

        $path = 'public/personnel_actions/' . $fileName;

        $pdf = PDF::loadView("PDF.report", compact("ap"))->setPaper("A4", "portrait");

        $content = $pdf->download()->getOriginalContent();

        return [
            'name' => $fileName,
            'content' => $content,
        ];
    }

    public function signFile(String $fileContent, String $fileName, String $email, bool $visibleSign, int $positionX, int $positionY): array
    {

        try {
            $response = Http::attach(
                'document',
                $fileContent,
                $fileName
            )
                ->post('https://dev.login.cultura.gob.sv/api/sign/document', [
                    'email' => $email,
                    'folderName' => 'AP',
                    'visibleSign' => $visibleSign,
                    'positionX' => $positionX,
                    'positionY' => $positionY,
                ]);

            return $response->json();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function updateSign(String $pathFile, String $email, bool $visibleSign, int $positionX, int $positionY): array
    {

        try {
            $response = Http::post('https://dev.login.cultura.gob.sv/api/sign/document/update', [
                'pathFile' => $pathFile,
                'email' => $email,
                'folderName' => 'AP',
                'visibleSign' => $visibleSign,
                'positionX' => $positionX,
                'positionY' => $positionY,
            ]);

            return $response->json();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function calculatePositionOfSign(int $apId): array
    {
        $records = HistoryPersonnelAction::where([
            'personnel_action_id' => $apId,
        ])
            ->where('url_file', '<>', null)
            ->get();

        $total = count($records);

        if ($total == 0) {
            $positions = [
                'positionX' => 15,
                'positionY' => 27
            ];
        } else if ($total == 1 && auth()->user()->send_to_rrhh == 1) { // When the boss can send to rrhh
            $positions = [
                'positionX' => 70,
                'positionY' => 65
            ];
        } else if ($total == 1) {
            $positions = [
                'positionX' => 112,
                'positionY' => 27
            ];
        } else {
            $positions = [
                'positionX' => 70,
                'positionY' => 65
            ];
        }

        return array_merge($positions, ['url_file' => $records[$total - 1]->url_file]);
    }
}
