<template>
	<main class="pj-formulario-3">
		<Header></Header>
	    <div class="container">
	      <div class="row">

	        <!-- LEFT COLUMN -->
	        <div class="col-md-8 col-lg-6">
	          <h3 class="text-primary text-uppercase font-weight-bold">Composición accionaria</h3>
	          <form class="accionarios-participacion__form">
	            <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
	            <input id="rut" type="number" class="form-control accionarios-participacion__input">
	            <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Nombre</label>
	            <input id="name" type="text" class="form-control accionarios-participacion__input">
	            <label for="porcentaje"
	              class="accionarios-participacion__label text-small font-weight-bold">Porcentaje</label>
	            <input id="porcentaje" type="number" class="form-control accionarios-participacion__input">
	            <button id="agregarDatosAccionario" class="btn--accionarios-participacion btn--hover-up"><img
	                src="@/assets/images/mas.png" alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
	          </form>

	          <div class="table-responsive pt-3">
	            <table class="table table-sm table--blue-border">
	              <thead class="bg-primary text-white">
	                <tr>
	                  <th scope="col">Nombre</th>
	                  <th scope="col">RUT</th>
	                  <th scope="col">Porcentaje</th>
	                  <th scope="col"> </th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr>
	                  <td>Carlos Vandal</td>
	                  <td>12.345.689-k</td>
	                  <td>50%</td>
	                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
	                  </td>
	                </tr>
	                <tr>
	                  <td>Carlos Vandal</td>
	                  <td>12.345.689-k</td>
	                  <td>20%</td>
	                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
	                  </td>
	                </tr>
	                <tr>
	                  <td>Carlos Vandal</td>
	                  <td>12.345.689-k</td>
	                  <td>30%</td>
	                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
	                  </td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
	        </div> <!-- col-md-6 -->

	        <!-- RIGHT COLUMN -->
	        <div class="col-md-4 col-lg-6">
	        </div> <!-- col-md-6 -->
	      </div> <!-- row -->

	      <div class="creacion-solicitud__buttons py-5 mt-5">
	        <a href="ingreso-y-consulta.html" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
	        <router-link to="persona-juridica-formulario-2" class="btn btn-primary btn--big m-2"><i
	            class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</router-link>
	        <router-link to="persona-juridica-formulario-4" class="btn btn-primary btn--big m-2">Siguiente <i
	            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
	      </div> <!-- creacion-solicitud__buttons -->

	    </div> <!-- container -->
  	</main>
</template>
<script>
	import Header from '@/components/personaJuridica/header';
	export default {
		name: 'personaJuridicaForm3',
		components:{
			Header
		},
		data () {
		  return {
		    name: ''
		  }
		}
	}
</script>