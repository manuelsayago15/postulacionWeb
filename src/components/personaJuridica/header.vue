<template>
	<header class="header mt-5 mb-3">
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
	    </div>
	    <div class="header__container-bottom">
	      <div class="header__bottom-left">
	        <h3 class="header__bottom-text text-uppercase text-primary">Persona jurídica</h3>
	        <h3 class="header__bottom-text text-primary">N° Solicitud:</h3>
	      </div>
	      <div class="header__bottom-right">
	        <span class="header__progress-line"></span>
	        <div class="header__progress-number-container">
	          <span class="header__progress-number header__progress-number-active" :class="done1">1</span>
	          <p class="header__progress-text px-1">Datos principales</p></b-tabs>
	        </div>
	        <div class="header__progress-number-container">
	          <span class="header__progress-number" :class="done2">2</span>
	          <p class="header__progress-text px-1">Información comercial</p>
	        </div>
	        <div class="header__progress-number-container">
	          <span class="header__progress-number" :class="done3">3</span>
	          <p class="header__progress-text px-1">Composición accionaria</p>
	        </div>
	        <div class="header__progress-number-container">
	          <span class="header__progress-number" :class="done4">4</span>
	          <p class="header__progress-text px-1">Participación CCHC</p>
	        </div>
	        <div class="header__progress-number-container">
	          <span class="header__progress-number" :class="done5">5</span>
	          <p class="header__progress-text px-1">Patrocinantes</p>
	        </div>
	        <div class="header__progress-number-container">
	          <span class="header__progress-number" :class="done6">6</span>
	          <p class="header__progress-text px-1">Compromisos</p>
	        </div>
	      </div>
	    </div>

	    <personaJuridicaForm></personaJuridicaForm>

	</header>

</template>


<script>
	import personaJuridicaForm from '@/components/personaJuridica/persona-juridica-form'
	import { mapState, mapMutations } from 'vuex'
  export default {
   name: 'cabecera',
   components: {
   	personaJuridicaForm
   },
    data () {
      return {
      }
    },
    computed:{
	    ...mapState(['done1', 'done2', 'done3', 'done4', 'done5', 'done6'])
	 }
  }
</script>