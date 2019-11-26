<template>
	<main class="pj-formulario-1">
		<Header></Header>
	    <div class="container" v-if="seen">
	      <div class="row">
	        <!-- LEFT COLUMN -->
	        <div class="col-md-6 col-xl-7">
	          <h3 class="text-uppercase text-primary">Información de la empresa</h3>
	          <div class="row">

	            <div class="col-lg-7">
	              <form class="info-empresa-form pb-4">
	                <label class="info-empresa-form__label text-small font-weight-bold" v-model="rut" for="RUT">RUT*</label>
	                <input type="number" id="rut" class="info-empresa-form__input form-control" required>
	                <p class="text-small font-weight-bold info-empresa-form__question">¿Con qué nombre quiere quedar en los
	                  registros de la CChC?</p>
	                <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
	                  for="name">Nombre de
	                  Fantasía</label>
	                <input type="text" id="name"
	                  class="info-empresa-form__input info-empresa-form__input--razon-name form-control">
	                <label class="info-empresa-form__check-container">
	                  <input type="checkbox" class="info-empresa-form__check">
	                  <span class="info-empresa-form__check-style"></span>
	                </label>
	                <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
	                  for="razon">Razón social*</label>
	                <input type="text" id="razon"
	                  class="info-empresa-form__input info-empresa-form__input--razon-name form-control" required>
	                <label class="info-empresa-form__check-container">
	                  <input type="checkbox" class="info-empresa-form__check">
	                  <span class="info-empresa-form__check-style"></span>
	                </label>
	                <label class="info-empresa-form__label text-small font-weight-bold" for="fechaConst">Fecha de
	                  Constitución*</label>
	                <input type="date" id="fechaConst" class="info-empresa-form__input form-control" required>
	                <label class="info-empresa-form__label text-small font-weight-bold" for="giro">Giro*</label>
	                <select type="text" id="giro" class="info-empresa-form__input form-control" required></select>
	                <label class="info-empresa-form__label text-small font-weight-bold" for="actividad">Actividad*</label>
	                <select name="actividad" id="actividad" class="info-empresa-form__input form-control" required></select>
	                <label class="info-empresa-form__label text-small font-weight-bold" for="categoria">Categoría*</label>
	                <select name="categoria" id="categoria" class="info-empresa-form__input form-control" required></select>
	              </form>
	            </div> <!-- col-lg-7 -->

	            <div class="col-lg-5 d-flex flex-column">
	              <div class="info-empresa__img-icon">
	                <div class="info-empresa__img-container">
	                  <img src="@/assets/images/empresa.png" alt="Logo empresa" class="img-fluid">
	                </div>
	                <div class="info-empresa__icon-container">
	                  <form>
	                    <label for="add-company"
	                      class="text-small font-weight-bold d-flex align-items-center info-empresa__icon-container-label"><img
	                        src="@/assets/images/mas.png" alt="Añadir logo"
	                        class="img-fluid pr-1 btn--sibling-hover-right"><span
	                        class="btn--hover-right">Logo</span></label>
	                    <input type="file" id="add-company" class="d-none"
	                      accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document">
	                  </form>
	                </div>
	              </div>
	              <form class="info-empresa-attachment__form d-flex flex-column align-items-center py-2">
	                <div>
	                  <input type="file" id="escritura" class="d-none" required>
	                  <label for="escritura"
	                    class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
	                      src="@/assets/images/mas.png" alt="Adjuntar Escritura constitución" height="33px"
	                      class="btn--sibling-hover-right"> <span class="btn--hover-right">Escritura
	                      constitución*</span></label>
	                  <input type="file" id="modificaciones" class="d-none">
	                  <label for="modificaciones"
	                    class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
	                      src="@/assets/images/mas.png" alt="Adjuntar Transformaciones y modificaciones" height="33px"
	                      class="btn--sibling-hover-right">
	                    <span class="btn--hover-right">Transformaciones y modificaciones (max 10 adjuntos)</span></label>
	                  <input type="file" id="cvEmpresa" class="d-none" required>
	                  <label for="cvEmpresa"
	                    class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
	                      src="@/assets/images/mas.png" alt="Adjuntar Memoria o CV de la empresa" height="33px"
	                      class="btn--sibling-hover-right">
	                    <span class="btn--hover-right">Memoria o CV de la empresa*</span></label>
	                  <input type="file" id="escritura-social-srl" class="d-none" required>
	                  <label for="escritura-social-srl"
	                    class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
	                      src="@/assets/images/mas.png" alt="Adjuntar Escritura social" height="33px"
	                      class="btn--sibling-hover-right"> <span class="btn--hover-right">Escritura
	                      social (S.R.L.)</span></label>
	                  <input type="file" id="escritura-social-sa" class="d-none" required>
	                  <label for="escritura-social-sa"
	                    class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
	                      src="@/assets/images/mas.png" alt="Adjuntar Escritura social" height="33px"
	                      class="btn--sibling-hover-right"> <span class="btn--hover-right">Escritura
	                      social (S.A.)</span></label>
	                </div>
	              </form>
	            </div> <!-- col-lg-5 -->
	          </div> <!-- row -->
	        </div> <!-- col-md-6 -->

	        <!-- RIGHT COLUMN -->
	        <div class="col-md-6 col-xl-5">
	          <h3 class="text-primary text-uppercase text-primary informacion-contacto">Dirección comercial</h3>
	          <form class="direccion3">
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
	              for="calle">Calle*</label>
	            <input type="text" id="calle" class="direccion3__input direccion3__input--left-big form-control" required>
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
	              for="numero">Número*</label>
	            <input type="number" id="numero" class="direccion3__input direccion3__input--left form-control" required>
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
	              for="oficina">Oficina</label>
	            <input type="text" id="oficina" class="direccion3__input direccion3__input--right form-control">
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
	              for="continuacion">Continuación</label>
	            <input type="text" id="continuacion" class="direccion3__input direccion3__input--left form-control">
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
	              for="pais">País</label>
	            <input type="text" class="direccion3__input direccion3__input--left form-control"
	              disabled placeholder="Chile" value="Chile">
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
	              for="region">Región*</label>
	            <select type="text" id="region" class="direccion3__input direccion3__input--right form-control"
	              required></select>
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
	              for="provincia">Provincia*</label>
	            <select type="text" id="provincia" class="direccion3__input direccion3__input--left form-control"
	              required></select>
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
	              for="comuna">Comuna*</label>
	            <select type="text" id="comuna" class="direccion3__input direccion3__input--right form-control"
	              required></select>
	            <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
	              for="telefonos">Teléfonos</label>
	            <input type="tel" id="telefonos"
	              class="direccion3__input direccion3__input--tel direccion3__input--left form-control" required>
	            <button class="btn--direccion3-tel btn--hover-up"><img src="@/assets/images/mas.png"
	                alt="Añadir teléfono" height="33px"></button>
	            <label
	              class="text-small font-weight-bold direccion3__label direccion3__label--mail direccion3__label--right"
	              for="mail">Emails</label>
	            <input type="email" id="mail"
	              class="direccion3__input direccion3__input--mail direccion3__input--right form-control" required>
	            <button class="btn--direccion3-mail btn--hover-up"><img src="@/assets/images/mas.png"
	                alt="Añadir email" height="33px"></button>
	          </form>

	          <h3 class="text-uppercase text-primary redes-digitales__title pt-5">Redes digitales de la empresa</h3>
	          <form class="redes-digitales__form">
	            <label for="sitio-web" class="text-small font-weight-bold">Sitio web</label>
	            <input type="url" id="sitio-web" class="form-control">
	          </form>

	        </div> <!-- col-md-6 -->
	      </div> <!-- row -->

	      <div class="creacion-solicitud__buttons py-5">
	        <a href="ingreso-y-consulta.html" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
	        <button v-on:click="seen =! seen" class="btn btn-primary btn--big m-2">Siguiente <i
	            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
	      </div>
	      
	    </div> <!-- container -->
  <personaJuridicaForm2></personaJuridicaForm2>
  <personaJuridicaForm3></personaJuridicaForm3>
  <personaJuridicaForm4></personaJuridicaForm4>
  <personaJuridicaForm5></personaJuridicaForm5>
  <personaJuridicaForm6></personaJuridicaForm6>
  </main> <!-- formulario-1 -->
</template>


<script>
	import Header from '@/components/personaJuridica/header';
	//import personaJuridicaForm1 from '@/components/personaJuridica/persona-juridica-formulario-1'
	import personaJuridicaForm2 from '@/components/personaJuridica/persona-juridica-formulario-2'
	import personaJuridicaForm3 from '@/components/personaJuridica/persona-juridica-formulario-3'
	import personaJuridicaForm4 from '@/components/personaJuridica/persona-juridica-formulario-4'
	import personaJuridicaForm5 from '@/components/personaJuridica/persona-juridica-formulario-5'
	import personaJuridicaForm6 from '@/components/personaJuridica/persona-juridica-formulario-6'
	export default {
		name: 'personaJuridicaForm1',
		components:{
			Header,
			personaJuridicaForm2,
			personaJuridicaForm3,
			personaJuridicaForm4,
			personaJuridicaForm5,
			personaJuridicaForm6,
		},
		data () {
		  return {
		    name: '',
		    seen: true,
		  }
		}
	}
</script>