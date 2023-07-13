<template>
    <v-dialog
        v-model="showBannerInmediate"
        max-width="500px"
    >
        <v-card class="h-100">
            <!-- <v-row> -->
            <v-container class="text-center">
                <v-icon
                    style="font-size: 72px; color: #3558AB"
                    class="text-center"
                    large
                    color="blue"
                >
                    mdi-alert-circle
                </v-icon>
                <h3 class="black-secondary-close text-center mt-3 mb-3">
                    Tu jefe inmediato aún no ha iniciado sesión
                </h3>
                <p>No podrás registrar tus acciones de personal hasta que tu jefe inmediato inicie sesión dentro de la
                    plataforma.</p>

                <a
                    href="#"
                    class="btn btn-normal-close"
                    @click="$emit('update-dialog', false)"
                >Cerrar</a>
            </v-container>
            <!-- </v-row> -->
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        showBannerInmediate: {
            required: true,
            default: false,
        }
    }
}
</script>