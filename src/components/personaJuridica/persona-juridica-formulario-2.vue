<template>
    <main class="pj-formulario-2">
  		<!--<Header></Header>-->
	    <div class="container">
	      <div class="row">

	        <!-- LEFT COLUMN -->
	        <div class="col-md-8 col-lg-6 formulario-3__left-column">

	          <h3 class="text-primary text-uppercase py-3 m-0">Información trabajadores</h3>
	          <form class="d-grid info-trabajadores__form">
	            <label class="info-trabajadores__label--left text-small font-weight-bold" for="nro-prof">N° de
	              Profesionales</label>
	            <input type="number" id="nro-prof" class="info-trabajadores__input--left form-control">
	            <label class="info-trabajadores__label--right info-trabajadores__label--right-1 text-small font-weight-bold"
	              for="nro-tec">N° de Técnicos</label>
	            <input type="number" id="nro-tec" class="info-trabajadores__input--right form-control">
	            <label class="info-trabajadores__label--left text-small font-weight-bold" for="nro-adm">N° de
	              Administrativos</label>
	            <input type="number" id="nro-adm" class="info-trabajadores__input--left form-control">
	            <label class="info-trabajadores__label--right info-trabajadores__label--right-2 text-small font-weight-bold"
	              for="nro-trab">N° Total de Trabajadores</label>
	            <input type="number" id="nro-trab" class="info-trabajadores__input--right form-control" disabled>
	          </form>

	          <h3 class="text-primary text-uppercase py-3">Información comercial</h3>
	          <form class="d-grid info-comercial-top__form info-comercial-top__form--pjuridica">
	            <label class="info-comercial-top__label text-small  font-weight-bold" for="facturacion">Rango de Facturación según ventas anuales</label>
	            <select id="facturacion" class="info-comercia-top__input form-control">
	              <option value="1">0 a 2.400UF anuales</option>
	              <option value="2">2.401 a 25.000UF anuales</option>
	              <option value="3">25.001 a 100.000UF anuales</option>
	              <option value="4">100.000 a 1.000.000UF anuales y más</option>
	            </select>
	            <div class="info-comercial-attachment info-comercial-attachment__top">
	              <input type="file" id="ult-estados" class="d-none" required>
	              <label for="ult-estados" class="text-small font-weight-bold pt-2 info-comercial-attachment__label"><img src="@/assets/images/mas.png"
	                  alt="Adjuntar últimos estados financieros" height="33px" class="btn--sibling-hover-right"> <span
	                  class="btn--hover-right">Últimos estados financieros: Balance y estado de resultados*</span></label>
	            </div>
	            <div class="info-comercial-attachment info-comercial-attachment__top">
	              <input type="file" id="estado-renta" class="d-none" required>
	              <label for="estado-renta" class="text-small font-weight-bold pt-2 info-comercial-attachment__label"><img src="@/assets/images/mas.png"
	                  alt="Adjuntar Declaración Estado a la Renta" height="33px" class="btn--sibling-hover-right"> <span
	                  class="btn--hover-right">Declaración Impuesto a la Renta*</span></label>
	            </div>
	          </form>

	          <form class="info-comercial-bottom__form pt-4 pb-3">
	            <label class="info-comercial-bottom__label text-small font-weight-bold" for="monto-pat">Patrimonio según último balance o Capital Inicial para empresas < 1 año*</label>
	            <input type="number" id="monto-pat" class="info-comercial-bottom__input form-control" required>
	            <label class="info-comercial-bottom__label info-comercial-bottom__label--right text-small font-weight-bold" for="para-construccion">% Dedicado a la Construcción*</label>
	            <input type="number" id="para-construccion" class="info-comercial-bottom__input info-comercial-bottom__input--right form-control" required>
	            <div class="info-comercial-attachment info-comercial-attachment__bottom">
	              <input type="file" id="capital-propio" class="d-none" required>
	              <label for="capital-propio" class="text-small font-weight-bold pt-2"><img src="@/assets/images/mas.png"
	                  alt="Adjuntar declaración de capital propio" height="33px" class="btn--sibling-hover-right">
	                <span class="btn--hover-right">Declaración de capital propio*</span></label>
	            </div>
	            <div class="info-comercial-attachment info-comercial-attachment__bottom">
	              <input type="file" id="facturacion-ant" class="d-none" required>
	              <label for="facturacion-ant" class="text-small font-weight-bold pt-2"><img src="@/assets/images/mas.png"
	                  alt="Adjuntar Facturación años anteriores" height="33px" class="btn--sibling-hover-right">
	                <span class="btn--hover-right">Facturación años anteriores*</span></label>
	            </div>
	            <label class="info-comercial-bottom__label text-small font-weight-bold" for="fact-ant">Volumen facturado año anterior*</label>
	            <input type="number" id="fact-ant" class="info-comercial-bottom__input info-comercial-bottom__input--vol-fact form-control" required>
	            <span class="text-small font-weight-bold">UF</span>
	          </form>
	        </div> <!-- col-md-6 -->

	        <!-- RIGHT COLUMN -->
	        <div class="col-md-4 col-lg-6 right-column">
	        </div> <!-- col-md-6 -->
	      </div> <!-- row -->

	      <div class="creacion-solicitud__buttons py-5">
	        <a href="ingreso-y-consulta.html" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
	        <button class="btn btn-primary btn--big m-2"><i
	            class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
	        <button class="btn btn-primary btn--big m-2">Siguiente <i
	            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
	      </div> <!-- creacion-solicitud__buttons -->

	    </div> <!-- container -->
  	</main> <!-- formulario-2 -->

</template>

<script>
	import Header from '@/components/personaJuridica/header';
	export default {
		name: 'personaJuridicaForm2',
		components:{
			Header
		},
		data () {
		  return {
		    name: '',
		    seen: false
		  }
		}
	}
</script>