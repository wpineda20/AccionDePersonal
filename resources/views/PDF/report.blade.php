<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Report</title>
</head>
<style>
    body {
        /* font-family: "Nunito", sans-serif; */
        font-family: Arial, Helvetica, sans-serif;
        margin: 5px;
    }

    .border {
        border: solid 1px black;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .fw-bold {
        font-weight: bold;
    }

    .text-center {
        text-align: center;
    }

    .fs-9 {
        font-size: 9px;
    }

    .fs-10 {
        font-size: 10px;
    }

    .fs-11 {
        font-size: 11px;
    }

    .bg-border {
        background-color: #eee;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        padding: 1px;
    }

    .uppercase {
        text-transform: uppercase;
    }
</style>

<body>
    <div class="border">
        <table style="width:100%; padding: 0px; margin:0px;">
            <tr>
                <td>
                    <img src="img/cultura_logo.jpg" width="200" height="90" />
                </td>
                <td>
                    <h5 class="fw-bold text-center fs-11" style="padding: 0px; margin:0px">UNIDAD DE TALENTO
                        HUMANO
                    </h5>
                    <h5 class="fw-bold text-center fs-11" style="padding: 0px; margin:0px">FORMULARIO DE
                        ACCIÓN DE PERSONAL</h5>
                </td>
            </tr>
        </table>

        <!-- I- DATOS GENERALES -->
        <h5 class="fw-bold fs-10 bg-border" style="padding: 0px; margin-bottom:4px">I- DATOS GENERALES</h5>
        <table style="padding: 0px; margin:0px; width: 100%;">
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <p style="margin: 0px; padding:0px;" class="fs-9">NOMBRE DEL EMPLEADO: </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <p style="border-bottom: 1px solid black; margin:0px 20px 0px 0px; padding:0px;"
                        class="fs-11 uppercase">{{
                        $request->employee_name }}
                    </p>
                </td>
            </tr>
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <p style="padding: 0px; margin:0px" class="fs-9">CARGO: </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <p style="border-bottom: 1px solid black; margin:0px 20px 0px 0px; padding:0px;"
                        class="fs-11 uppercase">{{
                        $request->position_signature }}
                    </p>
                </td>
            </tr>
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <p style="padding: 0px; margin:0px" class="fs-9">UNIDAD DE TRABAJO: </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <p style="border-bottom: 1px solid black; margin:0px 20px 0px 0px; padding:0px;"
                        class="fs-11 uppercase">{{
                        $request->dependency_name }}</p>
                </td>
            </tr>
        </table>
        <!-- I- DATOS GENERALES -->


        <!-- II- NATURALEZA DE LA LICENCIA POR -->
        <h5 class="fw-bold fs-10 bg-border" style="padding: 0px; margin:4px 0px;">II- NATURALEZA DE LA LICENCIA
            POR:</h5>
        <!-- <table style="padding: 0px; margin:0px; width: 100%;">
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <p style="padding: 0px; margin:0px" class="fs-9">TIPO DE JUSTIFICACIÓN: </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <p style="border-bottom: 1px solid black; margin:0px 20px 0px 0px;" class="fs-11 uppercase">
                        {{ $request->justification_name }}
                    </p>
                </td>
            </tr>
        </table> -->
        <p class="fs-11 uppercase" style="margin: 2px">{{$request->justification_name }}</p>
        <!-- II- NATURALEZA DE LA LICENCIA POR -->

        <!-- III- PERIODO POR -->
        <h5 class="fw-bold fs-10 bg-border" style="padding: 0px; margin:4px 0px;">III- PERIODO POR:</h5>
        <table style="padding: 0px; margin:0px; width: 100%;">
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <h5 class="fw-bold fs-10 text-center" style="padding: 0px; margin:0px">
                        HORAS:
                    </h5>
                    <div class="text-center" style="padding: 0px; margin:0px">
                        <p style="padding: 0px; margin:2px; display: inline;" class="fs-10 ">
                            De las <span style="border-bottom: 1px solid black; padding: 0px 25px;">
                                {{$request->from_hour }} </span>
                        </p>
                        <p style="padding: 0px; margin:2px; display: inline;" class="fs-10 ">
                            horas a las: <span style="border-bottom: 1px solid black; padding: 0px 25px;">
                                {{$request->to_hour }} </span>
                        </p>
                    </div>
                    <p style="padding: 0px; margin:4px 0px" class="fs-10 text-center">
                        Total de horas: <span
                            style="border-bottom: 1px solid black; padding: 0px 25px;">{{$request->total_hours
                            }} </span>
                    </p>
                    <p style="padding: 0px; margin:4px 0px" class="fs-10 text-center">
                        EFECTIVA PARA FECHA:<span
                            style="border-bottom: 1px solid black; padding: 0px 25px;">{{$request->effective_date
                            }}
                        </span>
                    </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <h5 class="fw-bold fs-10 text-center" style="padding: 0px; margin:0px">
                        DÍA(S) COMPLETO(S)
                    </h5>

                    <p style="padding: 0px; margin: 4px 0px;" class="fs-10  text-center">
                        Del <span style="border-bottom: 1px solid black; padding: 0px 35px;">
                            {{$request->from_date }}</span>
                        <strong>(dd/mm/aaaa)</strong>
                    </p>
                    <p style="padding: 0px; margin:4px 0px;" class="fs-10  text-center">
                        Al <span style="border-bottom: 1px solid black; padding: 0px 35px;">
                            {{$request->to_date
                            }}
                        </span>
                        <strong>(dd/mm/aaaa)</strong>
                    </p>

                    <p style="padding: 0px; margin:4px 0px;" class="fs-10  text-center">
                        Total de días <span
                            style="border-bottom: 1px solid black; padding: 0px 40px 0px 65px;">{{$request->total_days
                            }}
                        </span>
                    </p>
                </td>
            </tr>
        </table>
        <!-- III- PERIODO POR -->

        <!-- IV- JUSTIFICANTES -->
        <h5 class="fw-bold fs-10 bg-border" style="padding: 0px; margin:4px 0px;">IV- JUSTIFICANTES: (cuando aplique)
        </h5>
        <p class="fs-11 uppercase" style="margin: 2px">{{$request->justification }}</p>
        <!-- IV- JUSTIFICANTES -->
        <div>
            <h5 class="fw-bold fs-10 bg-border">V- TIEMPO EXTRAORDINARIO / DESCANSO</h5>
        </div>
        <div>
            <h5 class="fw-bold fs-10 bg-border">VI. FIRMAS</h5>
        </div>
        <div>
            <p class="fw-bold fs-10" style="padding: 1px; margin:0px; border-top: 1px solid black;">Este formulario debe
                ser presentado por el empleado solicitante a
                la Unidad de Talento
                Humano, a los
                encargados o encargadas de asistencia de cada dependencia dentro de los primeros 3 días hábiles después
                de haber gozado de licencia. El o La encargada de control de asistencia no es responsable por descuentos
                sino se presenta oportunamente y llena correctamente este formulario.</p>
        </div>
        <div>
            <p class="fw-bold fs-10" style="padding: 1px; margin:0px; border-top: 1px solid black;">ANEXAR DOCUMENTOS
                ORIGINALES QUE JUSTIFIQUEN LA
                ACCION DE PERSONAL (cuando aplique)
            </p>
        </div>
    </div>
</body>

</html>