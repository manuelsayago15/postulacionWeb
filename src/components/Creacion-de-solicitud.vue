<template>
     <main class="creacion-solicitud" v-if="mostrarCreacionSolicitud == true">
     <header class="header my-5 pb-2">
    <div class="header__container-top">
      <div class="header__logo-container">
        <img src="@/assets/images/logo-CCHC.png" alt="Logo CCHC" class="header__logo img-fluid">
      </div>
      <h3 class="text-uppercase text-primary header__title-top">Solicitud de postulación socios</h3>
      <div class="header__text-container d-flex">
  <h3 class="header__text text-primary mt-1">Contacto Área de Socios</h3>
  <div class="ml-3">
    <p class="header__text">areasocios@cchc.cl</p>
    <p class="header__text">+56225887500</p>
  </div>
</div>

      <!--<div class="header__text-container">
        <p class="header__text">Por favor llene todos los campos solicitados en el formulario de postulación</p>
        <p class="header__text">Puede llenar los datos de cualquiera de los pasos, los datos se guardarán
          automáticamente.</p>
      </div>-->
    </div>
    
  </header>
    <div class="container">

      <h3 class="text-primary text-uppercase py-4">Seleccione que tipo de postulación realiza</h3>
      <div class="creacion-solicitud__radios">
          <div class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="natural" value="persona-natural">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="natural">Persona Natural</label>
          </div>
          <div
            class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container creacion-solicitud__select-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="juridica" value="persona-juridica">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="juridica">Persona jurídica</label>
            <select v-if="valorCheck == 'persona-juridica' || valorCheck == 'empresario-individual'" name="tipoSociedadSelect" id="tipoSociedad" v-model="tipoSociedadSelect" class="creacion-solicitud__select">
              <option value="" selected disabled>Tipo de sociedad</option>
              <option value="S.A">S.A</option>
              <option value="SPA">SPA</option>
            </select>
          </div>
          <div class="fcustom-control custom-radio form-check-inline creacion-solicitud__opt-container py-1">
            <input v-model="valorCheck" class="custom-control-input" type="radio" name="tipo-postulacion" id="empresario"
              value="empresario-individual">
            <label class="custom-control-label text-uppercase font-weight-bold text-small pt-1" for="empresario">Empresario Individual</label>
          </div>
        </div>
    
      <form class="creacion-solicitud__form pt-3" id="datosPersonales">
        <h3 class="text-center text-uppercase text-primary mt-5">Para comenzar el proceso, por favor ingrese RUT del
        postulante, y cámara regional para crear un número de solicitud</h3>
        
        <div class="creacion-solicitud__form-left">
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="rut">RUT*</label>
         <input name="RUT" :class="(formatoRut ? 'is-invalid' : '')"  @change="checkForm" type="text" placeholder="Ej. 11111111-1" v-model="rut" id="rut" class="creacion-solicitud__form-input">
           
       
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="mail">Correo Electrónico*</label>
          <input name="Correo" placeholder="Ej. example@gmail.com"  @change="checkForm" type="email" :class="(formatoCorreo ? 'is-invalid' : '')" v-model="correo" id="correo" class="creacion-solicitud__form-input">
  
       </div>

       <!--<div v-if="formatoRut" class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>RUT no válido</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div v-if="formatoRut" class="creacion-solicitud__form-left">
          <span style="color:red; margin-right: 35%;">RUT no válido</span> 
        </div>

        <div v-if="campoRutReq" class="creacion-solicitud__form-left">
          <span style="color:red; margin-right: 32.1%;">RUT es obligatorio</span> 
        </div>

        <div v-if="formatoCorreo" style="" class="creacion-solicitud__form-left">
          <span style="color:red; margin-right: -35%;">Correo no válido</span> 
        </div>

        <div v-if="campoCorreoReq" class="creacion-solicitud__form-left">
          <span style="color:red; margin-right: -32.1%;">Correo es obligatorio</span> 
        </div>-->

        <div class="creacion-solicitud__form-right">
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="telefono">Teléfono*</label>
          <input type="tel" name="telefono"  v-model="telefono" id="telefono"  @change="checkForm" placeholder="Ej. 9 12345678"   class="creacion-solicitud__form-input" :class="(formatoTelefono ? 'is-invalid' : '')">
          
          <label class="creacion-solicitud__form-label text-small font-weight-bold" for="camara">Cámara Regional</label>
          <select id="camara" class="creacion-solicitud__form-input" @change="checkForm" v-model="camaraSeleccionada" :class="(camaraSeleccionadaStatus ? 'is-invalid' : '')">
            <option value="" disabled>Ubicación</option>
            <option v-for="(camara, key) in camaras" :value="camara.camRegId" :key="key">{{ camara.camRegGls }}</option>
          </select>
        </div>
       <!-- <span style="color:red; margin-left: 28%;"  v-if="formatoTelefono">Teléfono no válido</span>-->
         <!--<span>Selected: {{ camaraSeleccionada }}</span>-->

       <!-- <div v-if="campoTelReq" class="creacion-solicitud__form-left">
          <span style="color:red; margin-left: -30%;">Teléfono es obligatorio</span> 
        </div>-->

      </form>
      
      <div v-if="errores.length" class="alert alert-danger alert-dismissible fade show" role="alert">
          <ul>
            <li v-for="error in errores">{{ error }}</li>
          </ul>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
    
      <div class="creacion-solicitud__buttons py-5">
        <router-link to="/" class="btn btn-danger text-uppercase btn--big m-2">Cancelar</router-link>
        <!--<a  :href="valorCheck" @click="rutEnNumeroSolicitud" class="btn btn-primary text-uppercase btn--big m-2" id="crear">Crear</a>-->
        <button  @click="rutEnNumeroSolicitud" class="btn btn-primary text-uppercase btn--big m-2" id="crear">Crear</button>
      
        <!-- <button class="btn btn-primary" @click="agregarSolicitud()">Guardar</button> -->
      </div>
    </div>

  </main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from "vee-validate";
import Validator from "vee-validate";
import es from 'vee-validate/dist/locale/es';
import { mapState, mapMutations } from 'vuex'
Vue.use(VueAxios, axios)

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
  
  events: "change|blur|keyup",
  
  
});

VeeValidate.Validator.localize('es',es);

export default {
  name: 'creacionSolicitud',

  components: {
   
  },

  
  data () {
    return {
      url: this.$store.state.URL,
      formatoTelefono: false,
      formatoCorreo:false,
      formatoRut:false,
      camposCorrectos: false,
      valorCheck: '',
      camaras: [],
      camaraSeleccionada: '',
      tipoSociedadSelect:'',
      rut: '',
      telefono: '',
      correo: '',
      rutNoValido: true,
      nuevaSolicitud: [],
      mostrarForm1: false,
      mostrarForm2: false,
      mostrarCreacionSolicitud: true,
      campoNoValido: 'rut-invalido',
      campoValido: 'rut-valido',
      errores:[],
      personas: ['11111111-1', '22222222-2', '33333333-3'],
      //campoRutReq: false,
      campoCorreoReq: false,
      campoTelReq: false,
      camaraSeleccionadaStatus: false,
      formatoRutBien: ''
    }
  },

  methods: {

      ...mapMutations(['rutEnNumeroSolicitud']),


    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {

      rutCompleto = rutCompleto.replace('.', '')
      rutCompleto = rutCompleto.replace('‐', '')
       

      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)){
        return false
      }

      var tmp = rutCompleto.split('-')
      
      var digv = tmp[1]
      var rut = tmp[0]
      
    if ( digv === 'K' ){
      digv = 'k'
    } 

    
    if(this.dv(rut) == digv){
      return this.rut = rut + '-' + digv;
    }
    
},

dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
},
updateRutNum: function(){
  
  let estadoRut = this.validaRut(this.rut);
  this.rutNoValido = estadoRut;


},

 

validarTelefono(telefono) {
 
  //let telefono = telefono;
  let expreg = /^(\+?56)?(\s?)(0?9)(\s?)[987654]\d{7}$/;
  
  if(expreg.test(telefono)){
    this.formatoTelefono = false;
    return true;
  }
  
  else {
    this.formatoTelefono = true;
    return false;
  }

    
},

validarEmail: function (correo) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(correo);
},

/*completado(){
console.log(this.validaRut(this.rut));
  if(this.validaRut(this.rut)){
    this.formatoRutBien = true;
  }
 
},*/

checkForm(){
    
    
      if (!this.rut) {
        this.errores.push("El rut es obligatorio.");
        this.camposCorrectos = false;
        this.formatoRut = true;
      
      }else if (!this.validaRut(this.rut)) {
        this.errores.push('El rut no es válido.');
        this.formatoRut = true;
        this.camposCorrectos = false;
        
      }else{
        this.formatoRut = false;
        this.camposCorrectos = true;
        
        
      }

      if (!this.correo) {
        
        this.errores.push('El correo electrónico es obligatorio.');
        this.formatoCorreo = true;
        this.camposCorrectos = false;
        this.campoCorreoReq = true;
      } else if (!this.validarEmail(this.correo)) {
        
        this.errores.push('El correo electrónico debe ser válido.');
        this.formatoCorreo = true;
        this.camposCorrectos = false;
        this.campoCorreoReq = false;
      }else{
        this.formatoCorreo = false;
        this.camposCorrectos = true;
      }

      if (!this.telefono) {
        
        this.errores.push("El teléfono es obligatorio.");
        this.formatoTelefono = true;
        this.camposCorrectos = false;
        this.campoTelReq = true;
      } else if (!this.validarTelefono(this.telefono)) {
       
        this.errores.push('El teléfono debe ser válido.');
        this.formatoTelefono = true;
        this.camposCorrectos = false;
        this.campoTelReq = false;

      }else{
        this.formatoTelefono = false;
        
        this.camposCorrectos = true;
      }

      if(!this.camaraSeleccionada){
        this.errores.push("La cámara es obligatoria");
        this.camposCorrectos = false;
        this.camaraSeleccionadaStatus = true;

      }else{
        this.camaraSeleccionadaStatus = false;
        this.camposCorrectos = true;
       
      }

       if (!this.errores.length) {
        return true;
      }

      if(this.camposCorrectos == true){
        this.errores.length = 0;
      }
      

      
},



rutEnNumeroSolicitud: function() {

          this.checkForm();

        

          /*for(var i=0; i < this.personas.length; i++){
           
            if(this.rut == this.personas[i]){
              alert("Esta persona es socio no puede postular");
            }
            else{
              alert("Puede postular");
            }

          }*/
          if(this.valorCheck != ''){
              if(this.camposCorrectos == true && this.formatoRut == false && this.formatoTelefono == false && this.formatoCorreo == false && this.camaraSeleccionadaStatus == false){
                 this.$router.push(this.valorCheck);
    
                  this.$store.commit({
                  type: 'rutEnNumeroSolicitud', 
                  rut: this.rut,
                  correo: this.correo,
                  telefono: this.telefono,
                  camara: this.camaraSeleccionada,
                  tipoSociedad: this.tipoSociedadSelect
              });
              }else{
                 alert("Debe llenar los campos requeridos");
              } 
          }else{
              alert("Debe selecionar un tipo de postulación");
          }
         
  
}


  },
  created: function(){
    Vue.axios.get(this.url+'listarCamaras').then((response) => {
        this.camaras = response.data;
        console.log(this.camaras);
        
    })
  },
  computed:{
    ...mapState(['rutGlobal', 'emailGlobal'])
  }
}
</script>

<style>

.rut-invalido{
  border-color: #f14d31;
    padding-right: calc(1.5em + 0.75rem);
    background-repeat: no-repeat;
    background-position: center right calc(0.375em + 0.1875rem);
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}


.alert {
    position: absolute;
    padding: 1% 5% 1% 4%;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    bottom: 25%;
    right: 2%;
}

</style>