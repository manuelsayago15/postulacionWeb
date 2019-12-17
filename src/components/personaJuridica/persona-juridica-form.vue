<template>
  <main class="pj-formulario-1">
    <!-- Formulario 1 -->
      <div class="container" style="margin-top: 15px;">
        <div class="row">
          <!-- LEFT COLUMN -->
          <div class="col-md-6 col-xl-7">
            <h3 class="text-uppercase text-primary">Información de la empresa</h3>
            <div class="row">
              <div class="col-lg-7">
                <form class="info-empresa-form pb-4">
                  <label class="info-empresa-form__label text-small font-weight-bold" for="RUT">RUT*</label>
                  <input type="number" v-model="rut" id="rut" class="info-empresa-form__input form-control" required>
                  <p>{{rut}}</p>
                  <!--{{ $data }}-->
                  <!--<div v-if="!rutNoValido" class="alert alert-danger" role="alert">
                    <strong>Error!</strong> RUT no válido.
                  </div>-->
                  <p class="text-small font-weight-bold info-empresa-form__question">¿Con qué nombre quiere quedar en los
                    registros de la CChC?</p>
                  <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
                    for="Nombre">Nombre de
                    Fantasía</label>
                  <input type="text" v-model="fantasyName" id="name"
                    class="info-empresa-form__input info-empresa-form__input--razon-name form-control">
                  <label class="info-empresa-form__check-container">
                    <input type="checkbox" class="info-empresa-form__check">
                    <span class="info-empresa-form__check-style"></span>
                  </label>
                  
                  <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
                    for="Razón Social">Razón social*</label>
                  <input name="Razón Social" type="text" v-validate="'required'" v-model="razonSocial" id="razon"
                    class="info-empresa-form__input info-empresa-form__input--razon-name form-control" required>
                  <label class="info-empresa-form__check-container">
                    <input type="checkbox" class="info-empresa-form__check">
                    <span class="info-empresa-form__check-style"></span>
                  </label>
                  <div class="invalid-feedback">
                    {{errors.first('razonSocial')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="fechaConst">Fecha de
                    Constitución*</label>
                  <datepicker v-model="date" :disabled-dates="disabledDates" v-validate="'required'" :language="es"></datepicker>
                  <div class="invalid-feedback">
                    {{errors.first('date')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="giro">Giro*</label>
                  <select name="Giro" type="text" v-validate="'required'" v-model="giro" id="giro" class="info-empresa-form__input form-control" required>
                    <option value="" disabled>Seleccione un Giro</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('giro')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="actividad">Actividad*</label>
                  <select name="Actividad" id="actividad" class="info-empresa-form__input form-control" required v-model="activity" v-validate="'required'">
                    <option value="" disabled>Seleccione una Actividad</option>
                    <option v-for="(actividad, key) in actividades" :value="actividad.ActividadId" :key="key">{{ actividad.actividad }}</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('activity')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="categoria">Categoría*</label>
                  <select name="Categoría" v-validate="'required'" v-model="category" id="categoria" class="info-empresa-form__input form-control" required>
                    <option value="" disabled>Seleccione una Categoría</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('category')}}
                  </div>
                </form>
              </div> <!-- col-lg-7 -->

              <div class="col-lg-5 d-flex flex-column">
                <div class="info-empresa__img-icon">
                  
                  <div class="info-empresa__icon-container">
                    <form>
                      <template v-if="!image">
                        <div class="info-empresa__img-container">
                          <img src="@/assets/images/empresa.png" alt="Logo empresa" class="img-fluid">
                        </div>
                        <label for="add-company"
                          class="text-small font-weight-bold d-flex align-items-center info-empresa__icon-container-label"><img style="height: 33px;" 
                            src="@/assets/images/mas.png" alt="Añadir logo"
                            class="img-fluid pr-1 btn--sibling-hover-right">
                          <span class="btn--hover-right">
                            Logo
                          </span>
                        </label>  
                        <input id="add-company" class="d-none" type="file" accept="image/jpeg, image/png, image/jpg" @change="onFileChange">
                      </template>
                      <template v-else>
                        <img style="max-width: 100%;height: auto;" :src="image" />
                        <i @click="removeImage" style="color: red; height: 33px; cursor:pointer" class="fas fa-minus-circle"></i>
                      </template>
                    </form>
                  </div>
                </div>
                <form class="info-empresa-attachment__form d-flex flex-column align-items-center py-2">
                  <div>
                    <!--<input type="file" id="escritura" class="d-none" required>-->
                    <!-- Escritura constitución -->
                    <label for="escritura"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1">
                      <img
                        src="@/assets/images/mas.png" alt="Adjuntar Escritura constitución" height="33px"
                        class="btn--sibling-hover-right">
                        <span class="btn--hover-right">
                          Escritura constitución*
                        </span>
                    </label>
                    <div class="invalid-feedback">
                      {{errors.first('selectedFile')}}
                    </div>
                    <template v-if="selectedFile.length == 0">
                      <input type="file" v-validate="'required'" id="escritura" class="d-none" required @change="onFileSelected">
                      <button @click="onUpload">Upload!</button>
                      <!--<select>
                        <option v-for="(file, key) in selectedFile " :value="selectedFile" :key="key">{{ file.name }}</option>
                      </select>-->
                      
                      <!--<button @click="onUpload">Upload!</button>
                      {{this.selectedFile[0].name}}-->
                    </template>
                    <template v-else>
                      <span v-for="(file, key) in selectedFile" :value="selectedFile" :key="key">
                        Archivo seleccionado: {{ file.name }}
                      </span>
                      <i @click="removeFile" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>


                    <!-- Transformaciones y modificaciones -->
                    <label for="modificaciones"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
                        src="@/assets/images/mas.png" alt="Adjuntar Transformaciones y modificaciones" height="33px"
                        class="btn--sibling-hover-right">
                      <span class="btn--hover-right">Transformaciones y modificaciones (max 10 adjuntos)
                      </span>
                    </label>
                    <template v-if="selectedFileTM.length == 0">
                      <input type="file" id="modificaciones" class="d-none" multiple required @change="onFileSelectedTM">
                    </template>
                    <template v-else>
                      <input type="file" id="modificaciones" class="d-none" multiple required @change="onFileSelectedTM">
                      <span v-for="(file, key) in selectedFileTM " :value="selectedFileTM" :key="key">
                        Archivo seleccionado: {{ file.name }} {{key}}
                      <i @click="removeFileTM(key)" style="color: red; width: 15px; cursor:pointer" class="fas fa-minus-circle"></i>
                      </span>
                    </template>

                    <!-- Memoria o CV de la empresa -->
                    <!--<input type="file" id="cvEmpresa" class="d-none" required>-->
                    <label for="cvEmpresa"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
                        src="@/assets/images/mas.png" alt="Adjuntar Memoria o CV de la empresa" height="33px"
                        class="btn--sibling-hover-right">
                      <span class="btn--hover-right">Memoria o CV de la empresa*</span>
                    </label>
                    <template v-if="selectedFileCV.length == 0">
                      <input type="file" v-validate="'required'" id="cvEmpresa" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required @change="onFileSelectedCV">
                    </template>
                    <template v-else>
                      <span v-for="(file, key) in selectedFileCV" :value="selectedFileCV" :key="key">
                      Archivo seleccionado: {{ file.name }}
                    </span>
                    <i @click="removeFileCV" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>
                      
                    <!-- -->
                    <!--<input type="file" id="escritura-social-srl" class="d-none" required>-->
                    <label for="escritura-social-srl"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1">
                      <img
                        src="@/assets/images/mas.png" alt="Adjuntar Escritura social" height="33px"
                        class="btn--sibling-hover-right">
                      <span class="btn--hover-right">
                        Escritura social (S.R.L.)
                      </span>
                    </label>
                    <template v-if="selectedFileSRL.length == 0">
                      <input type="file" id="escritura-social-srl" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedSRL">
                    </template>
                    <template v-else>
                      <span v-for="(file, key) in selectedFileSRL" :value="selectedFileSRL" :key="key">
                      Archivo seleccionado: {{ file.name }}
                      </span>
                      <i @click="removeFileSRL" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>

                    <!-- Escritura social (S.A.) -->
                    <!--<input type="file" id="escritura-social-sa" class="d-none" required>-->
                    <label for="escritura-social-sa"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
                        src="@/assets/images/mas.png" alt="Adjuntar Escritura social" height="33px"
                        class="btn--sibling-hover-right">
                        <span class="btn--hover-right">Escritura
                        social (S.A.)
                      </span>
                    </label>
                    <template v-if="selectedFileSA.length == 0">
                      <input type="file" id="escritura-social-sa" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedSA">
                    </template>
                    <template v-else>
                        <span v-for="(file, key) in selectedFileSA" :value="selectedFileSA" :key="key">
                      Archivo seleccionado: {{ file.name }}
                      </span>
                      <i @click="removeFileSA" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>
                      
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
                  <input name="Calle" type="text" v-validate="'required'" v-model="calle" id="calle" class="direccion3__input direccion3__input--left-big form-control" required>

              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="numero">Número*</label>
              <input name="Número" type="number" v-validate="'required'" v-model="numero" id="numero" class="direccion3__input direccion3__input--left form-control" required>
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="oficina">Oficina</label>
              <input type="text" v-model="oficina" id="oficina" class="direccion3__input direccion3__input--right form-control">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="continuacion">Continuación</label>
              <input type="text" v-model="continuacion" id="continuacion" class="direccion3__input direccion3__input--left form-control">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="pais">País</label>
              <input type="text" class="direccion3__input direccion3__input--left form-control"
                disabled placeholder="Chile" value="Chile">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="region">Región*</label>
              <select 
                type="text"
                name="Región" 
                v-validate="'required'" 
                v-model="regionSeleccionada" 
                @change="getListadoProvincia" 
                id="region" 
                class="direccion3__input direccion3__input--right form-control"
                required>
                  <option 
                    v-for="(regionUno, key) in listadoRegiones" :value="regionUno.regionId" :key="key">
                    {{ regionUno.region }}
                  </option>
              </select>

              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="provincia">Provincia*</label>
              <select 
                v-validate="'required'"
                name="Provincia" 
                v-model="provinciaSeleccionada" 
                @change="getListadoComuna" 
                type="text" 
                id="provincia" 
                class="ddireccion3__input direccion3__input--left form-control"
                required>
                <option 
                  v-for="(provincia, key) in provincias" 
                  :value="provincia.provinciaId" 
                  :key="key">
                  {{ provincia.provincia }}
                </option>
              </select>
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="comuna">Comuna*</label>
              <select 
                type="text" 
                name="Comuna" 
                v-validate="'required'" 
                v-model="comunaSeleccionada" 
                id="comuna" 
                class="direccion3__input direccion3__input--right form-control"
                required>
                <option 
                  v-for="(comuna, key) in comunas" 
                  :value="comuna.comunaId" 
                  :key="key">
                  {{ comuna.comuna }}
                </option>
              </select>

                <span 
                style="" v-for="(inputTel,k) in inputsTel" :key="k">
                <label class="text-small font-weight-bold direccion3__label direccion3__label--left" for="telefono1">Teléfonos</label>
                <input type="tel" id="telefono1" class="direccion3__input direccion3__input--tel direccion3__input--left form-control" v-model="telefonosArray[k]" required>
                <button 
                  class="btn--direccion1-tel btn--hover-up" 
                  @click="addTel()">
                  <img src="@/assets/images/mas.png"
                  alt="Añadir teléfono" class="img-fluid">
                </button>
                <i class="fas fa-minus-circle delete-input cursor" @click="removeTel(k)" v-show="k || ( !k && inputsTel.length > 1)" ></i>
                </span>
                <span v-for="(inputEmail,j) in inputsEmail" :key="j+10">
                  <label
                    class="text-small font-weight-bold direccion3__label direccion3__label--mail direccion3__label--r ight "
                    for="mail">Emails</label>
                  <input type="email" id="mail" v-model="emailsArray[j]"
                    class="direccion3__input direccion3__input--mail direccion3__input--right form-control" required>
                  <button class="btn--direccion3-mail btn--hover-up" @click="addEmail()"><img src="@/assets/images/mas.png"
                      alt="Añadir email" height="33px"></button>
                  <i class="fas fa-minus-circle delete-input cursor" @click="removeEmail(j)" v-show="j || ( !j && inputsEmail.length > 1)"></i>
                </span>
            </form>
            <h3 class="text-uppercase text-primary redes-digitales__title pt-5">Redes digitales de la empresa</h3>
            <form class="redes-digitales__form">
              <label for="sitio-web" class="text-small font-weight-bold">Sitio web</label>
              <input type="url" id="sitio-web" class="form-control">
            </form>

          </div> <!-- col-md-6 -->
        </div> <!-- row -->
        <div v-show="errors.all().length" class="alert alert-danger">
          <ul>
              <li v-for="(error, i) in errors.all()">{{error}}</li>
          </ul>
        </div>
        <div class="creacion-solicitud__buttons py-5">
          <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
          <button class="btn btn-primary btn--big m-2">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div>
      </div> <!-- container -->

      <!-- Formulario 2 -->
      
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
      </div>

      <!-- Formulario 3 -->
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

      <!-- Formulario 4 -->
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

      <!-- Formulario 5 -->
      <div class="container">
        <div class="row">

          <!-- LEFT COLUMN -->
          <div class="col-sm-12 col-md-9 col-lg-7">
            <h3 class="text-primary text-uppercase">Patrocinantes</h3>
            <p class="text-muted text-small">Ambos socios deben tener sus cuotas al día</p>

            <form class="d-grid patrocinante__form pt-3">
              <label class="patrocinante__label text-small font-weight-bold" for="rut1">RUT*</label>
              <input id="rut1" class="patrocinante__input form-control" required>
              <label class="patrocinante__label text-small font-weight-bold" for="patrocinante1">Patrocinante 1*</label>
              <input id="patrocinante1" class="patrocinante__input form-control" required>
              <label class="patrocinante__label text-small font-weight-bold" for="patrocinador1">Patrocinador*</label>
              <select id="patrocinador1" class="patrocinante__input form-control" required></select>
              <a href="" download class="patrocinante__download">
                <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
                <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
              </a>
              <div class="patrocinante__attachment pt-2">
                <input type="file" class="d-none" id="respaldo" required>
                <label for="respaldo" class="d-flex patrocinante__attachment-label">
                  <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                    <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                  </div>
                  <div class="btn--hover-right">
                    <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                    <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                      gremio</p>
                  </div>
                </label>
              </div>
            </form>

            <form class="d-grid patrocinante__form pt-5">
              <label class="patrocinante__label text-small font-weight-bold" for="rut2">RUT*</label>
              <input id="rut2" class="patrocinante__input form-control" required>
              <label class="patrocinante__label text-small font-weight-bold" for="patrocinante2">Patrocinante 2*</label>
              <input id="patrocinante2" class="patrocinante__input form-control" required>
              <label class="patrocinante__label text-small font-weight-bold" for="patrocinador2">Patrocinador*</label>
              <select id="patrocinador2" class="patrocinante__input form-control" required></select>
              <a href="" download class="patrocinante__download">
                <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
                <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
              </a>
              <div class="patrocinante__attachment pt-2">
                <input type="file" class="d-none" id="respaldo" required>
                <label for="respaldo" class="d-flex patrocinante__attachment-label">
                  <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                    <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                  </div>
                  <div class="btn--hover-right">
                    <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                    <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                      gremio</p>
                  </div>
                </label>
              </div>
            </form>
          </div> <!-- col-md-6 -->

          <!-- RIGHT COLUMN -->
          <div class="col-sm-3 col-md-3 col-lg-5">
          </div> <!-- col-md-6 -->
        </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5 my-5">
          <a href="ingreso-y-consulta.html" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
          <router-link to="/persona-juridica-formulario-4" class="btn btn-primary btn--big m-2"><i
              class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</router-link>
          <router-link to="/persona-juridica-formulario-6" class="btn btn-primary btn--big m-2">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
        </div> <!-- creacion-solicitud__buttons -->
      </div> <!-- container -->

      <!-- Formulario 6 -->
      <div class="container">
          <form>
            <div class="row">

              <!-- LEFT COLUMN -->
              <div class="col-md-6">
                <h3 class="text-primary text-uppercase">Compromisos</h3>
                <div class="compromisos">
                  <div class="compromisos__header bg-primary p-3">
                    <h3 class="text-uppercase text-white text-center m-0 font-weight-normal">Por favor leer compromisos ante
                      la CCHC antes de
                      enviar la postulación</h3>
                  </div>
                  <div class="compromisos__body p-3">
                    <div class="compromisos__text-container">
                      <div class="accordion" id="accordionExample">
                        <div class="card">
                          <div class="card-header d-flex align-items-center" id="headingOne">
                            <h3 class="mb-0">Lorem Ipsum</h3>
                            <button class="btn btn-link ml-auto" type="button" data-toggle="collapse"
                              data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              <i class="fas fa-plus-circle"></i>
                            </button>
                          </div>

                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                              labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven't heard of them accusamus labore sustainable VHS.
                              <div class="compromisos__input pt-5">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="leido1" required>
                                  <label class="custom-control-label font-weight-bold pt-1" for="leido1">He leído las
                                    condiciones y
                                    términos de la CCHC</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header d-flex align-items-center" id="headingTwo">
                            <h3 class="mb-0">Lorem Ipsum</h3>
                            <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                              data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <i class="fas fa-plus-circle"></i>
                            </button>
                          </div>
                          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                              labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven't heard of them accusamus labore sustainable VHS.
                              <div class="compromisos__input pt-5">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="leido2" required>
                                  <label class="custom-control-label font-weight-bold pt-1" for="leido2">He leído las
                                    condiciones y
                                    términos de la CCHC</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header d-flex align-items-center" id="headingThree">
                            <h3 class="mb-0">Lorem Ipsum</h3>
                            <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                              data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              <i class="fas fa-plus-circle"></i>
                            </button>
                          </div>
                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                            data-parent="#accordionExample">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                              labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven't heard of them accusamus labore sustainable VHS.
                              <div class="compromisos__input pt-5">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="leido3" required>
                                  <label class="custom-control-label font-weight-bold pt-1" for="leido3">He leído las
                                    condiciones y
                                    términos de la CCHC</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> <!-- col-md-6 -->

              <!-- RIGHT COLUMN -->
              <div class="col-md-6 right-column">
                <h3 class="text-primary text-uppercase compromisos__confirmacion-title">Confirmación</h3>
                <p class="text-muted text-small font-weight-bold">Antes de enviar su postulación revise toda la información
                  adjunta en los formularios.</p>

                <div class="card mt-3">
                  <div class="card-header text-white text-uppercase bg-primary py-3 px-5">Datos del solicitante</div>
                  <div class="card-body pt-4 pb-5 px-5 card__form card__form--pjuridica">
                    <p class="card__form-label">Nombre: <span class="card__form-data">Carlos Vandal</span></p>
                    <p class="card__form-label">Teléfono: <span class="card__form-data">+569 9999 9999</span></p>
                    <p class="card__form-label">Email: <span class="card__form-data">carlos.vandal@bri.cl</span></p>
                    <p class="card__form-label">Empresa: <span class="card__form-data">Colibrí</span></p>
                    <p class="card__form-label">Dirección: <span class="card__form-data">Eliodoro Yañez 1163, Providencia,
                        Santiago</span></p>
                  </div>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="enviar-copia">
                  <label class="custom-control-label font-weight-bold text-muted pt-1" for="enviar-copia">Enviar una copia
                    de los datos entregados en la solicitud a mi correo electrónico</label>
                </div>
              </div> <!-- col-md-6 -->
            </div> <!-- row -->
            <div class="d-flex justify-content-center pt-5">
              <button class="btn btn--big btn--submit text-white text-uppercase">Enviar postulación</button>
            </div>
          </form>

          <div class="creacion-solicitud__buttons py-5">
            <router-link to="ingreso-y-consulta" class="btn btn-danger btn--big m-2">Guardar y cerrar</router-link>
            <router-link to="persona-juridica-formulario-4" class="btn btn-primary btn--big m-2"><i
                class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</router-link>
            <a href="resumen-formulario.html" class="btn btn-primary btn--big m-2">Siguiente <i
                class="fas fa-long-arrow-alt-right fa-lg"></i></a>
         </div> <!-- creacion-solicitud__buttons -->

        <!---->
      </div> <!-- container -->
  </main>
</template>

<script>

  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import { mapState, mapMutations } from 'vuex';
  import Datepicker from 'vuejs-datepicker';
  import moment from "moment";
  import { es } from 'vuejs-datepicker/dist/locale'
  import VeeValidate, { Validator } from "vee-validate";
  // Indicar uso de idioma español
  Validator.localize("es", es);
  
  VeeValidate.Validator.localize("es");
  Vue.use(VeeValidate, {
  classes: true,// Sí queremos que ponga clases automáticamente
  // Indicar qué clase poner al input en caso de que sea
  // válido o inválido. Usamos Bootstrap 4
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
  // Podría ser blur, change, etcétera. Si está vacío
  // entonces se tiene que validar manualmente
  events: "change|blur|keyup",
});

  export default{
     props: ['attribute_name', 'errors_form'],
  name: 'personaJuridicaForm',
  components: {
      Datepicker
    },
  data () {
    return {
      //rutNoValido: true,
      es: es,
      language: "es",
      date: new Date(),
      format: 'dd-MM-yyyy',
      disabledDates:{
      from: new Date() //Deshabilita fechas futuras
      },
     personaJuridica:[{
       datosPersonales:{

       },
       informacionComercial:{

       },
       composicion:{

       },
       cchc:{

       },
       patrocinantes:{

       },

       compromisos:{

       }
     }],

     // Data Form 1
     array:[],
     files:[],
     listadoRegiones:[],
     provincias:[],
     provinciaSeleccionada:'',
     regionSeleccionada:'',
    comunas:[],
      comunaSeleccionada:'',
     selectedFile: [],
     selectedFileTM: [],
     selectedFileCV: [],
     selectedFileSRL: [],
     selectedFileSA: [],
     actividades:[],
     rut:'',
     fantasyName:'',
     razonSocial:'',
     date:'',
     giro:'',
     activity:'',
     category:'',
     image: '',
     calle:'',
     numero: '',
     oficina:'',
     continuacion:'',
     pais:'',
     provincia:'',
     comuna:'',
     telefonosArray:[],
     emailsArray:[],
     inputsTel: [
        {
          telEx:''
        }
      ],
      inputsEmail: [
        {
          email:''
        }
      ],
     reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
     website: ''
    }
  },

  methods:{

    ...mapMutations(['frmDatosPrincipales','frmInformacionComercial','frmComposicionAccionaria', 
                     'frmParticipacionCCHC','frmPatrocinantes','frmCompromisos']),
    onFileSelected(event) {
      this.selectedFile = event.target.files
    },
    onFileSelectedCV(event) {
      this.selectedFileCV = event.target.files
    },
    onFileSelectedTM(event) {
      this.selectedFileTM = event.target.files
    },
    onFileSelectedSRL(event) {
      this.selectedFileSRL = event.target.files
    },
    onFileSelectedSA(event) {
      this.selectedFileSA = event.target.files
    },
    onFileChanged (event) {
      const file = event.target.files[0]
    },
    onUpload() {
      const fd = new FormData();
      fd.append('file', this.selectedFile)
      axios.post('http://socios.isc.cl/files/documents', fd)
      .then(res => {
        console.log(res)
      });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    },
    removeFile: function (e) {
      this.selectedFile = '';
    },
    removeFileTM: function (e) {
      this.selectedFileTM = [];
    },
    removeFileCV: function (e) {
      this.selectedFileCV = '';
    },
    removeFileSRL: function (e) {
      this.selectedFileSRL = '';
    },
    removeFileSA: function (e) {
      this.selectedFileSA = '';
    },
    addTel() {
      this.inputsTel.push({ telEx: '' });
      this.inputsTel.reverse();  
    },
    removeTel(index) {
      this.inputsTel.splice(index, 1);
    },
    addEmail() {
      this.inputsEmail.push({ email: '' });
      this.inputsEmail.reverse();
    },
    removeEmail(index) {
      this.inputsEmail.splice(index, 1);
    },
    getListadoRegion: function(){
      Vue.axios.get('http://postulacion.isc.cl/listarRegion').then((response) => {
        console.log(response);
        this.listadoRegiones = response.data;
        console.log(this.listadoRegiones);
      })
    },

    getListadoProvincia: function(){
      let idReg = this.regionSeleccionada;
      
      Vue.axios.get('http://postulacion.isc.cl/listarProvincias/'+idReg).then((response) => {
        this.provincias = response.data;
        console.log(this.provincias);
      })
    
    },

    getListadoComuna: function(){
       let idComuna = this.provinciaSeleccionada;

      Vue.axios.get('http://postulacion.isc.cl/listarComuna/'+idComuna).then((response) => {
        this.comunas = response.data;
        console.log(this.comunas);
      })
    
    },

    isEmailValid: function() {
      return (this.emails == "")? "" : (this.reg.test(this.emails)) ? 'has-success' : 'has-error';
    },

    guardar: function(){

      this.personaJuridica.push({
        datosPersonales:{
        rut: this.rut,
        fantasyName: this.fantasyName,
        razonSocial: this.razonSocial,
        date: this.date,
        giro: this.giro,
        activity: this.activity,
        category: this.category,
        image: this.image,
        selectedFile: this.selectedFile,
        selectedFileTM: this.selectedFileTM,
        selectedFileCV: this.selectedFileCV,
        selectedFileSRL: this.selectedFileSRL,
        selectedFileSA: this.selectedFileSA,
        calle: this.calle,
        numero: this.numero,
        oficina: this.oficina,
        continuacion: this.continuacion,
        pais: this.pais,
        region: this.region,
        provincia: this.provincia,
        comuna: this.comuna,
        telefonosArray: this.telefonosArray,
        emails: this.emails,
        website: this.website,
        listadoRegiones: this.listadoRegiones
        },
        
        direcciones:{
          calle:this.calle
          
        }
      });

      console.log(this.personaJuridica[1]);
    },
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function(rutCompleto) {
      rutCompleto = rutCompleto.replace("‐","-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
          return false;
      var tmp     = rutCompleto.split('-');
      var digv    = tmp[1];
      var rut     = tmp[0];
      if ( digv == 'K' ) digv = 'k' ;

      return (this.dv(rut) == digv );
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
    }
  },
  created: function(){
    Vue.axios.get('http://postulacionms.isc.cl/listarActividad').then((response) => {
        this.actividades = response.data;
        console.log(this.actividades);
    })

    this.getListadoRegion();
  },
  computed:{
    ...mapState(['rutGlobal','pjform1', 'pjform2', 'pjform3',
                 'pjform4','pjform5','pjform6']) 
  }
}
</script>
<style type="text/css">

.delete-input{
  color: red;
}
.cursor {
  cursor: pointer;
}
</style>