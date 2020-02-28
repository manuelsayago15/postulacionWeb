// store.js

import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

Vue.use(Vuex)
//Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    URL: process.env.VUE_APP_URL, 
  	rutGlobal: '',
    nombre:'Manuel',
    emailGlobal:'',
    telefonoGlobal:'',
    camaraGlobal:'',
    camaraNombreGlobal:'',
    estadoSol:'Pendiente',
    tipoSociedad:'',
    nombreGlobal:'',
    apellidoPatGlobal: '',
    pasar: false,
    pasarResultado: false,
    done1: 'header__progress-number-active',
    done2: 'header__progress-number',
    done3: 'header__progress-number',
    done4: 'header__progress-number',
    done5: 'header__progress-number',
    done6: 'header__progress-number',
    pjform1: true,
    pjform2: false,
    pjform3: false,
    pjform4: false,
    pjform5: false,
    pjform6: false,
    slider1: false,
    slider2: false,
    slider3: false,
    slider4: false,
    prox1: false,
    prox2: true,
    prox3: true,
    prox4: true
  },

  mutations:{

        rutEnNumeroSolicitud(state, payload){
            state.rutGlobal = payload.rut;
            state.emailGlobal = payload.correo;
            state.telefonoGlobal = payload.telefono;
            state.camaraGlobal = payload.camara;
            state.camaraNombreGlobal = payload.camara;
            state.tipoSociedad = payload.tipoSociedad;
        },

        resultadoConsulta(state, payload){
            state.rutGlobal = payload.rut;
            state.nombreGlobal = payload.nombre;
            state.apellidoPatGlobal = payload.apellidoPat;
        },

        form1(state){

            state.pjform1 = true;
            state.done1= 'header__progress-number-active';
            state.done2 = 'header__progress-number';
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = false;
             
        },

        form2(state){
            state.pjform1 = false;
            state.pjform2 = true;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-active';
            state.done3 = 'header__progress-number';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        form3 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = true;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-active';
            state.done4 = 'header__progress-number';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        form4 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = true;
            state.pjform5 = false;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-active';
            state.done5 = 'header__progress-number';
            state.done6 = 'header__progress-number';
        },

        form5 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = true;
            state.pjform6 = false;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-done';
            state.done5 = 'header__progress-number-active';
            state.done6 = 'header__progress-number';
        },

        form6 (state) {
            state.pjform1 = false;
            state.pjform2 = false;
            state.pjform3 = false;
            state.pjform4 = false;
            state.pjform5 = false;
            state.pjform6 = true;

            state.done1 = 'header__progress-number-done';
            state.done2 = 'header__progress-number-done';
            state.done3 = 'header__progress-number-done';
            state.done4 = 'header__progress-number-done';
            state.done5 = 'header__progress-number-done';
            state.done6 = 'header__progress-number-active';
        },

        nextSlider1 (state) {
            state.slider1 = true;
            state.slider2 = false;
            state.slider3 = false;
            state.slider4 = false;

        },

        nextSlider2 (state) {
            state.slider1 = false;
            state.slider2 = true;
            state.slider3 = false;
            state.slider4 = false;

        },

        nextSlider3 (state) {
            state.slider1 = false;
            state.slider2 = false;
            state.slider3 = true;
            state.slider4 = false;

        },

        nextSlider4 (state) {
            state.slider1 = false;
            state.slider2 = false;
            state.slider3 = false;
            state.slider4 = true;

        },

        proximoSlider1 (state) {
            //alert("desde el store slider 1");
            state.prox1 = true;
            state.prox2 = false;
            state.prox3 = false;
            state.prox4 = false;

        },

        proximoSlider2 (state) {
            //alert("desde el store slider 2");
            state.prox1 = false;
            state.prox2 = true;
            state.prox3 = false;
            state.prox4 = false;

        },

        proximoSlider3 (state) {
            //alert("desde el store slider 3");
            state.prox1 = false;
            state.prox2 = false;
            state.prox3 = true;
            state.prox4 = false;

        },

        proximoSlider4 (state) {
            //alert("desde el store slider 4");
            state.prox1 = false;
            state.prox2 = false;
            state.prox3 = false;
            state.prox4 = true;

        }
    },
      actions: {
    
  }
})
