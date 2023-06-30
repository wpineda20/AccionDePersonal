<?php

namespace App\Repositories;

use Barryvdh\DomPDF\Facade\Pdf;

use App\Models\HistoryPersonnelAction;
use App\Models\PersonnelAction;
use Illuminate\Http\Request;
use Storage;
use Str;

class HistoryPersonnelActionRepository
{
    public function create(PersonnelAction $personnelAction, $statusId): void
    {
        HistoryPersonnelAction::insert([
            'personnel_action_id' => $personnelAction->id,
            'user_id' => $personnelAction->user_id,
            'status_id' => $statusId,
            'url_file' => null,
            'active' => 1,
        ]);
    }

    public function advanceAp(PersonnelAction $personnelAction, $statusId, $createdFile): void
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
            'user_id' => auth()->user()->inmediate_superior_id,
            'personnel_action_id' => $personnelAction->id,
            'status_id' => $statusId,
            'active' => 1,
            'url_file' => $createdFile,
        ]);
    }

    public function createFile(Request $request): String
    {
        //Generate pdf
        $fileName = 'accion-de-personal-' . Str::random(5) . '.pdf';

        $path = 'public/personnel_actions/' . $fileName;

        $pdf = PDF::loadView("PDF.report", compact("request"))->setPaper("A4", "portrait");

        $content = $pdf->download()->getOriginalContent();

        Storage::put($path, $content);

        $url = Storage::url($path);

        return asset($url);
    }

    public function signFile()
    {
        // try {
        //     $response = Http::dd()->post(
        //         "https://apilogin",
        //         [
        //             'file' => $content,
        //             'user_id' => $personnelAction->user_id,
        //             'coordinatesX' => '',
        //             'coordinatesY' => '',
        //         ]
        //     )->throw()->json();

        //     return $response;
        // } catch (\Throwable $th) {
        //     //throw $th;
        // }
    }
}
