<template>
       <main class="resultado-consulta-formulario my-5">
        <div class="container resultado-consulta-formulario__container">

            <div class="resultado-consulta-formulario__img-container">
                <img src="@/assets/images/logo-CCHC.png" alt="Logo CCHC" class="resultado-consulta-formulario__img img-fluid">
            </div>

            <div class="card my-4">
                <div class="card-header text-white text-uppercase bg-primary text-center">¡Muchas gracias por postular!
                    Solicitud N° {{ rut }}</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table-borderless" cellpadding="7">
                            <tr>
                                <td class="text-uppercase text-right font-weight-bold">Nombre Postulante: </td>
                                <td class="text-uppercase text-left font-weight-bold">{{ nombre }} {{ apellidoPat }}</td>
                            </tr>
                            <tr>
                                <td class="text-uppercase text-right font-weight-bold">Rut: </td>
                                <td class="text-left font-weight-bold">{{ rut }}</td>
                            </tr>
                            <tr>
                                <td class="text-uppercase text-right font-weight-bold">Estado: </td>
                                <td class="text-uppercase text-left text-warning font-weight-bold">{{ estado }}</td>
                            </tr>
                        </table>
                    </div>

                    <p class="resultado-consulta-formulario__bottom-info pt-4">El plazo de respuesta a su
                        solicitud es de 30 días</p>
                    <p class="resultado-consulta-formulario__bottom-info">Si necesita más información sobre el proceso, por favor comuníquese a través de nuestro
                        formulario de <a href="" class="text-primary text-decoration-none">contacto</a></p>
                </div>
            </div>

            <div class="text-center pt-3">
                <button type="button" @click="volver" class="btn btn-primary text-uppercase">Volver al sitio de CCHC</button>
                <!--<router-link to="/" class="btn btn-primary text-uppercase">Volver al sitio de CCHC</router-link>-->
            </div>
        </div>
    </main>
  </template>

<script>

export default{
  name: 'resultado',
  data () {
    return {
        rut:  this.$store.state.rutGlobal,
        nombre: this.$store.state.nombreGlobal,
        apellidoPat: this.$store.state.apellidoPatGlobal,
        estado: this.$store.state.estadoSol
    }
  },

  methods:{
      volver(){
          this.$store.state.formulario1 = true;
          this.$store.state.formulario2 = false;
          this.$store.state.formulario3 = false;
          this.$store.state.formulario4 = false;
          this.$store.state.formulario5 = false;
          this.$store.state.formulario6 = false;

          this.$store.state.done1= 'header__progress-number-active';
          this.$store.state.done2= 'header__progress-number';
          this.$store.state.done3= 'header__progress-number';
          this.$store.state.done4= 'header__progress-number';
          this.$store.state.done5= 'header__progress-number';
          this.$store.state.done6= 'header__progress-number';
          this.$router.push('/');
      }
  }
}
</script>