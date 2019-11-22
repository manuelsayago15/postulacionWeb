<template>
	<main class="pj-formulario-4">
		<Header></Header>
	    <div class="container">
	      <div class="row">

	        <!-- LEFT COLUMN -->
	        <div class="col-lg-6">
	          <h3 class="text-primary text-uppercase font-weight-bold">Representante ante la CCHC</h3>
	          <form class="accionarios-participacion__form">
	            <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
	            <input id="rut" type="number" class="form-control accionarios-participacion__input">
	            <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Nombre</label>
	            <input id="name" type="text" class="form-control accionarios-participacion__input">
	            <button id="agregarDatosRepCchc"
	              class="btn--accionarios-participacion btn--accionarios-participacion-repcchc btn--hover-up"><img
	                src="@/assets/images/mas.png" alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
	          </form>
	          <h3 class="text-primary text-uppercase font-weight-bold pt-3">Contacto Cobranza</h3>
	          <form class="accionarios-participacion__form">
	            <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
	            <input id="rut" type="number" class="form-control accionarios-participacion__input">
	            <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Nombre</label>
	            <input id="name" type="text" class="form-control accionarios-participacion__input">
	            <button id="agregarDatosContCobranza"
	              class="btn--accionarios-participacion btn--accionarios-participacion-repcchc btn--hover-up"><img
	                src="@/assets/images/mas.png" alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
	          </form>
	          <!-- <div class="container-fluid">
	            <div class="row">
	              <div class="col-sm-5 col-md-12 col-xl-5">
	                <form>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="representante1">
	                    <label class="custom-control-label text-small pt-1" for="representante1">Representante ante la
	                      CCHC</label>
	                  </div>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="representante2">
	                    <label class="custom-control-label text-small pt-1" for="representante2">Representante Legal</label>
	                  </div>
	                </form>
	              </div>
	              <div class="col-sm-4 col-md-12 col-xl-4">
	                <form>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="contacto1">
	                    <label class="custom-control-label text-small pt-1" for="contacto1">Contacto Cobranza</label>
	                  </div>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="contacto2">
	                    <label class="custom-control-label text-small pt-1" for="contacto2">Contacto Socio</label>
	                  </div>
	                </form>
	              </div>
	              <div class="col-sm-3 col-md-12 col-xl-3">
	                <form>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="contacto3">
	                    <label class="custom-control-label text-small pt-1" for="contacto3">Contacto RRHH</label>
	                  </div>
	                </form>
	              </div>
	            </div>
	          </div> -->

	          <!-- COMITES -->
	          <!-- <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
	            inscribirse:</p>
	          <div class="container-fluid">
	            <div class="row">
	              <div class="col-sm-5 col-md-12 col-xl-5">
	                <p class="text-uppercase">Infraestructura</p>
	                <form>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="contratistas-gen">
	                    <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
	                      Generales</label>
	                  </div>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="infraest-publica">
	                    <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras Infraestructura
	                      Pública</label>
	                  </div>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="concesiones">
	                    <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
	                  </div>
	                </form>
	              </div>
	              <div class="col-sm-4 col-md-12 col-xl-4">
	                <p class="text-uppercase">Vivienda</p>
	                <form>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="inmobiliario">
	                    <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
	                  </div>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="vivienda">
	                    <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
	                  </div>
	                </form>
	              </div>
	              <div class="col-sm-3 col-md-12 col-xl-3">
	                <p class="text-uppercase">Suministros</p>
	                <form>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="proveedores">
	                    <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
	                  </div>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="industriales">
	                    <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
	                  </div>
	                  <div class="custom-control custom-checkbox">
	                    <input type="checkbox" class="custom-control-input" id="especialidades">
	                    <label class="custom-control-label text-small pt-1" for="especialidades">Especialidades</label>
	                  </div>
	                </form>
	              </div>
	            </div>
	          </div> -->

	          <div class="table-responsive pt-3">
	            <table class="table table-sm table--blue-border">
	              <thead class="bg-primary text-white">
	                <tr>
	                  <th scope="col">Nombre</th>
	                  <th scope="col">RUT</th>
	                  <th scope="col">Rol</th>
	                  <th scope="col"> </th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr>
	                  <td>Carlos Vandal</td>
	                  <td>12.345.689-k</td>
	                  <td>Representante CCHC</td>
	                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
	                  </td>
	                </tr>
	                <tr>
	                  <td>Carlos Vandal</td>
	                  <td>12.345.689-k</td>
	                  <td>Contacto Cobranza</td>
	                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
	                  </td>
	                </tr>
	                <tr>
	                  <td>Carlos Vandal</td>
	                  <td>12.345.689-k</td>
	                  <td>Contacto Cobranza</td>
	                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
	                  </td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
	        </div> <!-- col-md-6 -->

	        <!-- RIGHT COLUMN -->
	        <div class="col-lg-6">
	          <div id="carousel-repcchc" class="carousel slide pb-3 d-none" data-interval="false" data-wrap="false"
	            data-touch="false">
	            <h3 class="text-primary text-uppercase font-weight-bold">Datos Representante CCHC</h3>
	            <div class="carousel-inner">
	              <div class="carousel-item active">
	                <form class="personas-asociadas">
	                  <div class="personas-asociadas-form">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="rut">RUT*</label>
	                    <input type="number" id="rut" class="personas-asociadas-form__input--left form-control" required>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="vocativo">Vocativo</label>
	                    <select type="text" id="vocativo"
	                      class="personas-asociadas-form__input--right-big form-control"></select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="nombres">Nombres</label>
	                    <input type="text" id="nombres" class="personas-asociadas-form__input--left-big  form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="apellido-pat">Apellido Paterno</label>
	                    <input type="text" id="apellido-pat"
	                      class="personas-asociadas-form__input--right-big  form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="apellido-mat">Apellido Materno</label>
	                    <input type="text" id="apellido-mat" class="personas-asociadas-form__input--left  form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="email">Email</label>
	                    <input type="email" id="email" class="personas-asociadas-form__input--right form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="telefono">Teléfono</label>
	                    <input type="tel" id="telefono" class="personas-asociadas-form__input--left form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="fecha-nacimiento">Fecha
	                      nacimiento</label>
	                    <input type="date" id="fecha-nacimiento" class="personas-asociadas-form__input--right form-control">
	                  </div>
	                  <p class="text-center font-weight-bold pt-3">1 / 4</p>
	                </form>
	              </div>
	              <div class="carousel-item">
	                <form class="personas-asociadas">
	                  <div class="personas-asociadas-form">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="nacionalidad">Nacionalidad</label>
	                    <input type="text" id="nacionalidad"
	                      class="personas-asociadas-form__input--left datos-personales__input-nacionalidad form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right datos-personales__pasaporte-label invisible text-small font-weight-bold"
	                      for="pasaporte">N° Pasaporte</label>
	                    <input type="number" id="pasaporte"
	                      class="personas-asociadas-form__input--right datos-personales__pasaporte-input invisible form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="sexo">Sexo</label>
	                    <select id="sexo" class="personas-asociadas-form__input--left form-control">
	                      <option value="1">Femenino</option>
	                      <option value="2">Masculino</option>
	                    </select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="edoCivil">Estado civil</label>
	                    <select id="edoCivil" class="personas-asociadas-form__input--right form-control">
	                      <option value="1">Soltero/a</option>
	                      <option value="2">Casado/a</option>
	                      <option value="3">Viudo/a</option>
	                      <option value="4">Divorciado/a</option>
	                      <option value="4">Separado/a</option>
	                    </select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="nivelDeEstudios">Nivel de
	                      estudios</label>
	                    <input type="text" id="nivelDeEstudios" class="personas-asociadas-form__input--left form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="profesion">Profesión</label>
	                    <select type="text" id="profesion"
	                      class="personas-asociadas-form__input--right form-control"></select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="centroDeEstudios">Casa de
	                      estudios</label>
	                    <input type="text" id="centroDeEstudios" class="personas-asociadas-form__input--left form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="cargoEmpresa">Cargo en la
	                      empresa</label>
	                    <input type="text" id="cargoEmpresa" class="personas-asociadas-form__input--right form-control">
	                  </div>
	                  <p class="text-center font-weight-bold pt-3">2 / 4</p>
	                </form>
	              </div>
	              <div class="carousel-item">
	                <form class="personas-asociadas">
	                  <div class="direccion2 pt-2">
	                    <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
	                      for="direccion">Dirección Particular</label>
	                    <input type="text" id="direccion" class="direccion2__input--left-big form-control">
	                    <label class="direccion2__label direccion2__label--smaller1 text-small font-weight-bold"
	                      for="numero-dir">Número</label>
	                    <input type="number" id="numero-dir" class="direccion2__input--smaller1 form-control">
	                    <label class="direccion2__label direccion2__label--smaller2 text-small font-weight-bold"
	                      for="numero-dpto">Depto</label>
	                    <input type="number" id="numero-dpto" class="direccion2__input--smaller2 form-control">
	                    <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
	                      for="pais">País</label>
	                    <input type="text" id="pais" class="direccion2__input--left form-control" placeholder="Chile"
	                      value="Chile" disabled>
	                    <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
	                      for="provincia">Provincia</label>
	                    <select type="text" id="provincia" class="direccion2__input--right form-control"></select>
	                    <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
	                      for="region">Región</label>
	                    <select type="text" id="region" class="direccion2__input--left form-control"></select>
	                    <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
	                      for="comuna">Comuna</label>
	                    <select type="text" id="comuna" class="direccion2__input--right form-control"></select>
	                    <div class="custom-control custom-checkbox direccion2-check direccion2-check--left">
	                      <input type="checkbox" class="custom-control-input" id="direccion1">
	                      <label class="custom-control-label text-small pt-1" for="direccion1">Usar dirección para
	                        correspondencia</label>
	                    </div>
	                    <div class="custom-control custom-checkbox direccion2-check direccion2-check--right">
	                      <input type="checkbox" class="custom-control-input" id="direccion2">
	                      <label class="custom-control-label text-small pt-1" for="direccion2">Usar dirección para
	                        cobranzas</label>
	                    </div>
	                  </div>
	                  <p class="text-center font-weight-bold pt-3">3 / 4</p>
	                </form>
	              </div>
	              <div class="carousel-item">
	                <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
	                  inscribirse:</p>
	                <div class="container-fluid">
	                  <div class="row">
	                    <div class="col-sm-5">
	                      <p class="text-uppercase">Infraestructura</p>
	                      <form>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="contratistas-gen">
	                          <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
	                            Generales</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="infraest-publica">
	                          <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras
	                            Infraestructura
	                            Pública</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="concesiones">
	                          <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
	                        </div>
	                      </form>
	                    </div>
	                    <div class="col-sm-4">
	                      <p class="text-uppercase">Vivienda</p>
	                      <form>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="inmobiliario">
	                          <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="vivienda">
	                          <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
	                        </div>
	                      </form>
	                    </div>
	                    <div class="col-sm-3">
	                      <p class="text-uppercase">Suministros</p>
	                      <form>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="proveedores">
	                          <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="industriales">
	                          <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="especialidades">
	                          <label class="custom-control-label text-small pt-1"
	                            for="especialidades">Especialidades</label>
	                        </div>
	                      </form>
	                    </div>
	                  </div>
	                </div>
	                <p class="text-center font-weight-bold pt-3">4 / 4</p>
	              </div>
	            </div>
	            <div class="d-flex justify-content-between pt-4">
	              <a class="carousel-prev d-none" href="#carousel-repcchc" role="button" data-slide="prev">
	                <span class="btn btn-primary" aria-hidden="true">Anterior</span>
	                <span class="sr-only">Previous</span>
	              </a>
	              <a class="carousel-next ml-auto" href="#carousel-repcchc" role="button" data-slide="next">
	                <span class="btn btn-primary" aria-hidden="true">Siguiente</span>
	                <span class="sr-only">Next</span>
	              </a>
	              <a id="agregarRepCchc" class="carousel-add d-none" href="#carousel-repcchc" role="button">
	                <span class="btn btn-primary" aria-hidden="true">Agregar</span>
	                <span class="sr-only">Next</span>
	              </a>
	            </div>
	          </div>
	          <div id="carousel-contCobranza" class="carousel slide d-none" data-interval="false" data-wrap="false"
	            data-touch="false">
	            <h3 class="text-primary text-uppercase font-weight-bold">Datos Contacto Cobranza</h3>
	            <div class="carousel-inner">
	              <div class="carousel-item active">
	                <form class="personas-asociadas">
	                  <div class="personas-asociadas-form">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="rut">RUT*</label>
	                    <input type="number" id="rut" class="personas-asociadas-form__input--left form-control" required>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="vocativo">Vocativo</label>
	                    <select type="text" id="vocativo"
	                      class="personas-asociadas-form__input--right-big form-control"></select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="nombres">Nombres</label>
	                    <input type="text" id="nombres" class="personas-asociadas-form__input--left-big  form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="apellido-pat">Apellido Paterno</label>
	                    <input type="text" id="apellido-pat"
	                      class="personas-asociadas-form__input--right-big  form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="apellido-mat">Apellido Materno</label>
	                    <input type="text" id="apellido-mat" class="personas-asociadas-form__input--left  form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="email">Email</label>
	                    <input type="email" id="email" class="personas-asociadas-form__input--right form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="telefono">Teléfono</label>
	                    <input type="tel" id="telefono" class="personas-asociadas-form__input--left form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="fecha-nacimiento">Fecha
	                      nacimiento</label>
	                    <input type="date" id="fecha-nacimiento" class="personas-asociadas-form__input--right form-control">
	                  </div>
	                  <p class="text-center font-weight-bold pt-3">1 / 4</p>
	                </form>
	              </div>
	              <div class="carousel-item">
	                <form class="personas-asociadas">
	                  <div class="personas-asociadas-form">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="nacionalidad">Nacionalidad</label>
	                    <input type="text" id="nacionalidad"
	                      class="personas-asociadas-form__input--left datos-personales__input-nacionalidad form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right datos-personales__pasaporte-label invisible text-small font-weight-bold"
	                      for="pasaporte">N° Pasaporte</label>
	                    <input type="number" id="pasaporte"
	                      class="personas-asociadas-form__input--right datos-personales__pasaporte-input invisible form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="sexo">Sexo</label>
	                    <select id="sexo" class="personas-asociadas-form__input--left form-control">
	                      <option value="1">Femenino</option>
	                      <option value="2">Masculino</option>
	                    </select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="edoCivil">Estado civil</label>
	                    <select id="edoCivil" class="personas-asociadas-form__input--right form-control">
	                      <option value="1">Soltero/a</option>
	                      <option value="2">Casado/a</option>
	                      <option value="3">Viudo/a</option>
	                      <option value="4">Divorciado/a</option>
	                      <option value="4">Separado/a</option>
	                    </select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="nivelDeEstudios">Nivel de
	                      estudios</label>
	                    <input type="text" id="nivelDeEstudios" class="personas-asociadas-form__input--left form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="profesion">Profesión</label>
	                    <select type="text" id="profesion"
	                      class="personas-asociadas-form__input--right form-control"></select>
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
	                      for="centroDeEstudios">Casa de
	                      estudios</label>
	                    <input type="text" id="centroDeEstudios" class="personas-asociadas-form__input--left form-control">
	                    <label
	                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
	                      for="cargoEmpresa">Cargo en la
	                      empresa</label>
	                    <input type="text" id="cargoEmpresa" class="personas-asociadas-form__input--right form-control">
	                  </div>
	                  <p class="text-center font-weight-bold pt-3">2 / 4</p>
	                </form>
	              </div>
	              <div class="carousel-item">
	                <form class="personas-asociadas">
	                  <div class="direccion2 pt-2">
	                    <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
	                      for="direccion">Dirección Particular</label>
	                    <input type="text" id="direccion" class="direccion2__input--left-big form-control">
	                    <label class="direccion2__label direccion2__label--smaller1 text-small font-weight-bold"
	                      for="numero-dir">Número</label>
	                    <input type="number" id="numero-dir" class="direccion2__input--smaller1 form-control">
	                    <label class="direccion2__label direccion2__label--smaller2 text-small font-weight-bold"
	                      for="numero-dpto">Depto</label>
	                    <input type="number" id="numero-dpto" class="direccion2__input--smaller2 form-control">
	                    <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
	                      for="pais">País</label>
	                    <input type="text" id="pais" class="direccion2__input--left form-control" placeholder="Chile"
	                      value="Chile" disabled>
	                    <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
	                      for="provincia">Provincia</label>
	                    <select type="text" id="provincia" class="direccion2__input--right form-control"></select>
	                    <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
	                      for="region">Región</label>
	                    <select type="text" id="region" class="direccion2__input--left form-control"></select>
	                    <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
	                      for="comuna">Comuna</label>
	                    <select type="text" id="comuna" class="direccion2__input--right form-control"></select>
	                    <div class="custom-control custom-checkbox direccion2-check direccion2-check--left">
	                      <input type="checkbox" class="custom-control-input" id="direccion1">
	                      <label class="custom-control-label text-small pt-1" for="direccion1">Usar dirección para
	                        correspondencia</label>
	                    </div>
	                    <div class="custom-control custom-checkbox direccion2-check direccion2-check--right">
	                      <input type="checkbox" class="custom-control-input" id="direccion2">
	                      <label class="custom-control-label text-small pt-1" for="direccion2">Usar dirección para
	                        cobranzas</label>
	                    </div>
	                  </div>
	                  <p class="text-center font-weight-bold pt-3">3 / 4</p>
	                </form>
	              </div>
	              <div class="carousel-item">
	                <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
	                  inscribirse:</p>
	                <div class="container-fluid">
	                  <div class="row">
	                    <div class="col-sm-5">
	                      <p class="text-uppercase">Infraestructura</p>
	                      <form>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="contratistas-gen">
	                          <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
	                            Generales</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="infraest-publica">
	                          <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras
	                            Infraestructura
	                            Pública</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="concesiones">
	                          <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
	                        </div>
	                      </form>
	                    </div>
	                    <div class="col-sm-4">
	                      <p class="text-uppercase">Vivienda</p>
	                      <form>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="inmobiliario">
	                          <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="vivienda">
	                          <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
	                        </div>
	                      </form>
	                    </div>
	                    <div class="col-sm-3">
	                      <p class="text-uppercase">Suministros</p>
	                      <form>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="proveedores">
	                          <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="industriales">
	                          <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
	                        </div>
	                        <div class="custom-control custom-checkbox">
	                          <input type="checkbox" class="custom-control-input" id="especialidades">
	                          <label class="custom-control-label text-small pt-1"
	                            for="especialidades">Especialidades</label>
	                        </div>
	                      </form>
	                    </div>
	                  </div>
	                </div>
	                <p class="text-center font-weight-bold pt-3">4 / 4</p>
	              </div>
	            </div>
	            <div class="d-flex justify-content-between pt-4">
	              <a class="carousel-prev d-none" href="#carousel-contCobranza" role="button" data-slide="prev">
	                <span class="btn btn-primary" aria-hidden="true">Anterior</span>
	                <span class="sr-only">Previous</span>
	              </a>
	              <a class="carousel-next ml-auto" href="#carousel-contCobranza" role="button" data-slide="next">
	                <span class="btn btn-primary" aria-hidden="true">Siguiente</span>
	                <span class="sr-only">Next</span>
	              </a>
	              <a id="agregarContCobranza" class="carousel-add d-none" href="#carousel-contCobranza" role="button">
	                <span class="btn btn-primary" aria-hidden="true">Agregar</span>
	                <span class="sr-only">Next</span>
	              </a>
	            </div>
	          </div>
	        </div> <!-- col-lg-6 -->
	      </div> <!-- row -->

	      <div class="creacion-solicitud__buttons py-5">
	        <a href="ingreso-y-consulta.html" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
	        <router-link to="persona-juridica-formulario-3" class="btn btn-primary btn--big m-2"><i
	            class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</router-link>
	        <router-link to="persona-juridica-formulario-5" class="btn btn-primary btn--big m-2">Siguiente <i
	            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
	      </div> <!-- creacion-solicitud__buttons -->

	    </div> <!-- container -->
  	</main>
</template>

<script>
	import Header from '@/components/personaJuridica/header';
	export default {
		name: 'personaJuridicaForm4',
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