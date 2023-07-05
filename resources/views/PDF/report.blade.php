<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge"
    />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    />
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

    .fs-8 {
        font-size: 8px;
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
                    <img
                        src="img/cultura_logo.jpg"
                        width="200"
                        height="90"
                    />
                </td>
                <td>
                    <h5
                        class="fw-bold text-center fs-11"
                        style="padding: 0px; margin:0px"
                    >UNIDAD DE TALENTO
                        HUMANO
                    </h5>
                    <h5
                        class="fw-bold text-center fs-11"
                        style="padding: 0px; margin:0px"
                    >FORMULARIO DE
                        ACCIÓN DE PERSONAL</h5>
                </td>
            </tr>
        </table>

        <!-- I- DATOS GENERALES -->
        <h5
            class="fw-bold fs-10 bg-border"
            style="padding: 0px; margin-bottom:4px"
        >I- DATOS GENERALES</h5>
        <table style="padding: 0px; margin:0px; width: 100%;">
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <p
                        style="margin: 0px; padding:0px;"
                        class="fs-9"
                    >NOMBRE DEL EMPLEADO: </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <p
                        style="border-bottom: 1px solid black; margin:0px 20px 0px 0px; padding:0px;"
                        class="fs-11 uppercase"
                    >{{ $ap->name }}
                    </p>
                </td>
            </tr>
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <p
                        style="padding: 0px; margin:0px"
                        class="fs-9"
                    >CARGO: </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <p
                        style="border-bottom: 1px solid black; margin:0px 20px 0px 0px; padding:0px;"
                        class="fs-11 uppercase"
                    >{{ $ap->position_signature }}
                    </p>
                </td>
            </tr>
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px">
                    <p
                        style="padding: 0px; margin:0px"
                        class="fs-9"
                    >UNIDAD DE TRABAJO: </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <p
                        style="border-bottom: 1px solid black; margin:0px 20px 0px 0px; padding:0px;"
                        class="fs-11 uppercase"
                    >{{ $ap->dependency_name }}</p>
                </td>
            </tr>
        </table>
        <!-- I- DATOS GENERALES -->


        <!-- II- NATURALEZA DE LA LICENCIA POR -->
        <h5
            class="fw-bold fs-10 bg-border"
            style="padding: 0px; margin:0px;"
        >II- NATURALEZA DE LA LICENCIA
            POR:</h5>
        <table style="padding: 0px; margin:0px;">
            <tr style="padding: 0; margin:0">
                <td style="height: 30px; vertical-align: top;">
                    <p
                        class="fs-11 uppercase"
                        style="margin: 0; padding:0"
                    >
                        {{ $ap->justification_name }}</p>
                </td>
            </tr>
        </table>
        {{-- <p
            class="fs-11 uppercase"
            style=""
        >{{ $ap->justification_name }}</p> --}}
        <!-- II- NATURALEZA DE LA LICENCIA POR -->

        <!-- III- PERIODO POR -->
        <h5
            class="fw-bold fs-10 bg-border"
            style="padding: 0px; margin:4px 0px;"
        >III- PERIODO POR:</h5>
        <table style="padding: 0px; margin:0px; width: 100%;">
            <tr style="padding: 0px; margin:0px">
                <td style="padding: 0px; margin:0px; border-right: 1px solid black;">
                    <h5
                        class="fw-bold fs-10 text-center"
                        style="padding: 0px; margin:0px"
                    >
                        HORAS:
                    </h5>
                    <div
                        class="text-center"
                        style="padding: 0px; margin:0px"
                    >
                        <p
                            style="padding: 0px; margin:2px; display: inline;"
                            class="fs-10 "
                        >
                            De las <span style="border-bottom: 1px solid black; padding: 0px 25px;">
                                {{ $ap->from_hour }} </span>
                        </p>
                        <p
                            style="padding: 0px; margin:2px; display: inline;"
                            class="fs-10 "
                        >
                            horas a las: <span style="border-bottom: 1px solid black; padding: 0px 25px;">
                                {{ $ap->to_hour }} </span>
                        </p>
                    </div>
                    <p
                        style="padding: 0px; margin:4px 0px"
                        class="fs-10 text-center"
                    >
                        Total de horas: <span style="border-bottom: 1px solid black; padding: 0px 25px;">{{
                            $ap->total_hours }}
                        </span>
                    </p>
                    <p
                        style="padding: 0px; margin:4px 0px"
                        class="fs-10 text-center"
                    >
                        EFECTIVA PARA FECHA:<span style="border-bottom: 1px solid black; padding: 0px 25px;">{{
                            $ap->effective_date }}
                        </span>
                    </p>
                </td>
                <td style="padding: 0px; margin:0px">
                    <h5
                        class="fw-bold fs-10 text-center"
                        style="padding: 0px; margin:0px"
                    >
                        DÍA(S) COMPLETO(S)
                    </h5>

                    <p
                        style="padding: 0px; margin: 4px 0px;"
                        class="fs-10  text-center"
                    >
                        Del <span style="border-bottom: 1px solid black; padding: 0px 35px;">
                            {{ $ap->from_date }}</span>
                        <strong>(dd/mm/aaaa)</strong>
                    </p>
                    <p
                        style="padding: 0px; margin:4px 0px;"
                        class="fs-10  text-center"
                    >
                        Al <span style="border-bottom: 1px solid black; padding: 0px 35px;">
                            {{ $ap->to_date }}
                        </span>
                        <strong>(dd/mm/aaaa)</strong>
                    </p>

                    <p
                        style="padding: 0px; margin:4px 0px;"
                        class="fs-10  text-center"
                    >
                        Total de días <span style="border-bottom: 1px solid black; padding: 0px 40px 0px 65px;">{{
                            $ap->total_days }}
                        </span>
                    </p>
                </td>
            </tr>
        </table>
        <!-- III- PERIODO POR -->

        <!-- IV- JUSTIFICANTES -->
        <h5
            class="fw-bold fs-10 bg-border"
            style="padding-bottom: 0px; margin-bottom:0;"
        >IV- JUSTIFICANTES: (cuando aplique)
        </h5>
        <table style="padding: 0px; margin:0px;">
            <tr style="padding: 0; margin:0">
                <td style="height: 55px; vertical-align: top;">
                    <p
                        class="fs-11 uppercase"
                        style="margin: 0; padding:0"
                    >
                        {{ $ap->justification }}</p>
                </td>
            </tr>
        </table>
        <!-- IV- JUSTIFICANTES -->

        <!-- V- TIEMPO EXTRAORDINARIO / DESCANSO -->
        <h5
            class="fw-bold fs-10 bg-border"
            style="padding: 0px; margin:4px 0px;"
        >V- TIEMPO EXTRAORDINARIO /
            DESCANSO</h5>
        <p class="fw-bold fs-10">En caso de solicitud de descanso compensatorio detallar causa o motivo que lo
            generó:
        </p>
        <p
            class="fs-10"
            style="padding: 0px 80px 0px 0px; margin:0px; display: inline;"
        >
            Trabajo extraordinario en día descanso, vacación o asueto {{ $ap->extraordinary_work }}

        </p>
        <p
            class="fs-10"
            style="padding: 0px; margin:0px; display: inline;"
        >
            Capacitación en día descanso, vacación o asueto {{ $ap->training }}
        </p>
        <p class="fw-bold fs-10">Detalle de la actividad realizada:</p>

        <div>
            <p
                style="padding: 0px 30px 0px 0px; margin: 4px 0px; display: inline;"
                class="fs-10"
            >
                Lugar de ejecución: <span style="border-bottom: 1px solid black; padding: 0px 150px; 0px 35px">
                    {{ $ap->execution_site }}</span>
            </p>
            <p
                style="padding: 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Fecha de ejecución: <span style="border-bottom: 1px solid black; padding: 0px 40px;">
                    {{ $ap->execution_date }}
                </span>
            </p>
        </div>

        <div>
            <p
                style="padding: 0px 30px 0px 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Horario de ejecución: <span style="border-bottom: 1px solid black; padding: 0px 50px;">
                    {{ $ap->execution_schedule }}
                </span>
            </p>
            <p
                style="padding: 0px 30px 0px 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Cantidad de horas: <span style="border-bottom: 1px solid black; padding: 0px 40px;">
                    {{ $ap->execution_number_hours }}
                </span>
            </p>
            <p
                style="padding: 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Asignada por: <span style="border-bottom: 1px solid black; padding: 0px 65px;">
                    {{ $ap->assigned_by }}
                </span>
            </p>
        </div>

        <div>
            <p
                style="padding: 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Cantidad de días solicitados: <span style="border-bottom: 1px solid black; padding: 0px 40px;">
                    {{ $ap->number_days_requested }}
                </span>
            </p>
            <p
                style="padding: 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Fecha que se hará efectivo: <span style="border-bottom: 1px solid black; padding: 0px 40px;">
                    {{ $ap->execution_effective_date }}
                </span>
            </p>
            <p
                style="padding: 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Desde: <span style="border-bottom: 1px solid black; padding: 0px 40px;">
                    {{ $ap->execution_from }}
                </span>
            </p>
            <p
                style="padding: 0px; margin:4px 0px; display: inline;"
                class="fs-10"
            >
                Hasta: <span style="border-bottom: 1px solid black; padding: 0px 40px;">
                    {{ $ap->execution_to }}
                </span>
            </p>
        </div>

        <!-- V- TIEMPO EXTRAORDINARIO / DESCANSO -->

        <div style="padding: 5px 0 0 0">
            <p
                class="fw-bold fs-10"
                style="padding: 1px; margin:0px; border-top: 1px solid black;"
            >Este formulario
                debe
                ser presentado por el empleado solicitante a
                la Unidad de Talento
                Humano, a los
                encargados o encargadas de asistencia de cada dependencia dentro de los primeros 3 días hábiles después
                de haber gozado de licencia. El o La encargada de control de asistencia no es responsable por descuentos
                sino se presenta oportunamente y llena correctamente este formulario.</p>
        </div>
    </div>
    {{-- <div style="page-break-after: always;"></div> --}}
    <h5
        class="fw-bold fs-10 bg-border"
        style="border-right: 1px solid black; border-left: 1px solid black; margin: 0; padding:0px;"
    >VI.
        FIRMAS</h5>
    <table style="width: 100% !important;  border: 1px solid; border-collapse: collapse;">
        <tr style="margin: 0; padding:0px; border: 1px solid;">
            <td style="width:
                    50%
                    !important">
                <h5
                    class="fw-bold fs-9 text-center"
                    style="margin: 0; padding:0px"
                >
                    SOLICITANTE
                </h5>
                <h5
                    class="fs-8 text-center"
                    style="margin: 0; padding:0px"
                >
                    Empleado
                </h5>
            </td>
            <td style="width:
                    50%
                    !important">
                <h5
                    class="fw-bold fs-9 text-center"
                    style="margin: 0; padding:0px"
                >
                    JEFE INMEDIATO
                </h5>
                <h5
                    class="fs-8 text-center"
                    style="margin: 0; padding:0px"
                >
                    Pre-revisión
                </h5>
            </td>
        </tr>
        <tr style="margin: 0; padding:0px; border: 1px solid; wi">
            <td
                height="100"
                style="border: 1px solid; width: 50% !important"
            >
                <img
                    src="img/cuadro.png"
                    style="width: 100%;"
                    height="100"
                />
            </td>
            <td
                height="100"
                style="border: 1px solid; width: 50% !important"
            >
                <img
                    src="img/cuadro.png"
                    style="width: 100%;"
                    height="100"
                />
            </td>
        </tr>
        <tr style="margin: 0; padding:0px;">
            <td
                style="border: 1px solid; width: 100% !important"
                colspan="2"
            >
                <h5
                    class="fw-bold fs-9 text-center"
                    style="margin: 0; padding:0px"
                >
                    JEFE INMEDIATO SUPERIOR
                </h5>
            </td>
        </tr>
        <tr style="margin: 0; padding:0px; border: 1px solid;">
            <td
                height="100"
                style="border: 1px solid; width: 100% !important"
                colspan="2"
            >
                <img
                    src="img/cuadro.png"
                    style="width: 100%;"
                    height="100"
                />
            </td>
        </tr>

    </table>
    </div>

</body>

</html>