<template>
  <main class="pj-formulario-1">
    <!-- Formulario 1 -->
      <div class="container" style="margin-top: 15px;" v-if="pjform1">
        <div class="row">
          <!-- LEFT COLUMN -->
          <div class="col-md-6 col-xl-7">
            <h3 class="text-uppercase text-primary">Información de la empresa</h3>
            <div class="row">
              <div class="col-lg-7">
                <form class="info-empresa-form pb-4">
                  <label class="info-empresa-form__label text-small font-weight-bold" for="RUT">RUT*</label>
                  
                   
                  <input type="text" disabled v-on:keyup="updateRutNum()" maxlength="11" :class="rutNoValido ? campoValido : campoNoValido" v-model="rut" id="rutInput" name="rut"  class="datos-personales__input">
                  <!--<template>
                    <div v-if="!rutNoValido" class="alert alert-danger posicion-mensaje">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>

                    <p>El RUT es invalido</p>
                  </div>
                  </template>-->

                  <p class="text-small font-weight-bold info-empresa-form__question">¿Con qué nombre quiere quedar en los
                    registros de la CChC?</p>
                  <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
                    for="Nombre">Nombre de
                    Fantasía</label>
                  <input type="text" v-on:keyup="validationAlphanumeric()" v-model="fantasyName" id="name"
                    class="info-empresa-form__input info-empresa-form__input--razon-name form-control val">
                  <label class="info-empresa-form__check-container">
                    <input type="checkbox" :disabled="disabledTwo" @click="disabled = !disabled" class="info-empresa-form__check">
                    <span class="info-empresa-form__check-style"></span>
                  </label>
                  
                  <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
                    for="Razón Social">Razón social*</label>
                  <input name="Razón Social" v-on:keyup="validationAlphanumeric()" type="text" v-model="razonSocialJuridica" id="razon"
                    class="info-empresa-form__input info-empresa-form__input--razon-name form-control val" required>
                  <label class="info-empresa-form__check-container">
                    <input type="checkbox" :disabled="disabled" @click="disabledTwo = !disabledTwo" class="info-empresa-form__check">
                    <span class="info-empresa-form__check-style"></span>
                  </label>
                  <div class="invalid-feedback">
                    {{errors.first('razonSocialJuridica')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="fechaConst">Fecha de
                    Constitución*</label>
                  <input v-model="date" type="date" id="date" class="datos-personales__input datos-personales__input--date form-control">
                  <div class="invalid-feedback">
                    {{errors.first('date')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="giro">Giro*</label>
                  <select name="Giro" id="giro" type="text" class="info-empresa-form__input form-control" v-model="giroModel">
                    <option value="" disabled>Seleccione un Giro</option>
                    <option v-for="(giroArray, key) in giros" :value="giroArray.giro" :key="key">{{ giroArray.giro }}</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('giro')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="actividad">Actividad*</label>
                  <select name="Actividad" id="actividad" class="info-empresa-form__input form-control" required v-model="activity">
                    <option value="" disabled>Seleccione una Actividad</option>
                    <option v-for="(actividad, key) in actividades" :value="actividad.ActividadId" :key="key">{{ actividad.actividad }}</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('activity')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="categoria">Categoría*</label>
                  <select name="Categoría" v-model="category" id="categoria" class="info-empresa-form__input form-control" required>
                    <option value="" disabled>Seleccione una Categoría</option>
                    <option v-for="(categoria, key) in categorias" :value="categoria.categoriaId" :key="key">{{ categoria.categoria }}</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('category')}}
                  </div>
                </form>

                <!--<form action="#" method="post" enctype="multipart/form-data">
                  <label>Select File</label>
                  <input type="file" name="fileToUpload" id="fileToUpload" v-validate="'required'"> <br> <br>
                  <input type="button" class="btn btn-primary upload" value="Subir">
                </form>

                <form action="#" method="post" enctype="multipart/form-data">
                  <label>Select File</label>
                  <input type="file" name="fileToUpload" id="fileToUpload" v-validate="'required'"> <br> <br>
                  <input type="button" class="btn btn-primary upload" value="Subir">
                </form>-->













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
                        <input id="add-company" class="d-none images" type="file" ref="fileImage" accept="image/jpeg, image/png, image/jpg" @change="onFileChange">
                      </template>


                      <template v-else>
                        <img style="max-width: 100%;height: auto;" :src="image" />
                        <i @click="removeImage" style="color: red; cursor:pointer" class="fas fa-minus-circle"></i>
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
                      <input type="file" id="escritura" ref="file" class="d-none" required @change="onFileSelected">

                      
                    </template>
                    
                    <template v-if="fileType == true">
                      <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                        <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                      </div>
                      
                      
                      <!--<button @click="onUpload">Upload!</button>-->
                    </template>

                     <template v-else>
                      <span v-for="(file, key) in selectedFile" :value="selectedFile" :key="key">
                        Archivo seleccionado: {{ file.name }}
                        <i @click="removeFile" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                      </span>
                      
                      <!--<button @click="onUpload">Upload!</button>-->
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
                      <input type="file" id="modificaciones" ref="filetm" class="d-none" multiple required @change="onFileSelectedTM($event)">
                    </template>

                    <template v-if="fileTypeTM == true">
                      <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                        <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                      </div>
                    </template>

                    <template v-else>
                      <input type="file" id="modificaciones" class="d-none" multiple required @change="onFileSelectedTM">
                      <span v-for="(file, i) in selectedFileTM " :value="selectedFileTM" :key="'`A-${key}'">
                        Archivo seleccionado: {{ file.name }}
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
                      <input type="file" ref="filecv" id="cvEmpresa" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required @change="onFileSelectedCV">
                    </template>

                     <template v-if="fileTypeCV == true">
                      <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                        <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                      </div>
                    </template>

                    <template v-if="selectedFileCV.length != 0 && fileTypeCV == false">
                      <span v-for="(file, key) in selectedFileCV" :value="selectedFileCV" :key="'B-${key}'">
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
                      <input type="file" id="escritura-social-srl" ref="filesrl" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedSRL">
                    </template>

                    <template v-if="fileTypeSRL == true">
                      <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                        <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                      </div>
                    </template>


                    <template v-if="selectedFileSRL.length != 0 && fileTypeSRL == false">
                      <span v-for="(file, key) in selectedFileSRL" :value="selectedFileSRL" :key="'C-${key}'">
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
                      <input type="file" id="escritura-social-sa" ref="filesa" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedSA">
                    </template>

                    <template v-if="fileTypeSA == true">
                      <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                        <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                      </div>
                    </template>

                    <template v-if="selectedFileSA.length != 0 && fileTypeSA == false">
                        <span v-for="(file, key) in selectedFileSA" :value="selectedFileSA" :key="'D-${key}'">
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
                  <input name="Calle" type="text" v-on:keyup="validationAlphanumeric()" v-model="calle" id="calle" class="direccion3__input direccion3__input--left-big form-control">

              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="numero">Número*</label>
              <input name="Número" type="number" v-model="numero" id="numero" class="direccion3__input direccion3__input--left form-control" required>
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="oficina">Oficina</label>
              <input type="text" v-model="oficina" id="oficina" class="direccion3__input direccion3__input--right form-control">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="continuacion">Puntos de Referencia</label>
              <input type="text" v-model="continuacion" id="continuacion" class="direccion3__input direccion3__input--left form-control">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="pais">País</label>
              <input type="text" v-model="pais" class="direccion3__input direccion3__input--left form-control"
                disabled placeholder="Chile" value="Chile">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="region">Región*</label>
              <select 
                type="text"
                name="Región" 
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

                <!--<span 
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
                </span>-->

            </form>
            <div class="container">
              <div class="row">
                <div class="col-md-6 pt-2">
                  <div class="row" v-for="(inputTel,k) in inputsTel" :key="k">
                    <div
                      class="col-12 col-sm-3 col-md-4 col-lg-3 col-xl-4 d-flex align-items-center direccion__tel-mail-left">
                      <label class="text-small font-weight-bold" for="telefono1">Teléfono*</label>
                    </div>
                    <div class="col-2 p-0 direccion__tel-mail-center direccion__tel-mail-center--pj phone-type-input">
                      <select v-model="tipoTelArray[k]"  id="tipoTel" class="form-control p-0" name="Tipo">
                        <option value="0">Fijo</option>
                        <option value="1">Celular</option>
                        <option value="2">Principal</option>
                        <!--<option value="2">Principal</option>-->
                      </select>
                    </div>
                    <div class="col-8 col-sm-6 col-md-5 col-lg-6 col-xl-5 direccion__tel-mail-center direccion__tel-mail-center--pj valTel">
                        <input type="text" 
                          id="telefono1" 
                           name="telefono" 
                           class="form-control" 
                           v-model="telefonosArray[k]" 
                           required
                           placeholder="ej 9 12345678"
                           @keyup="validarTelefono(k)"
                           >
                          <i class="fas fa-minus-circle eliminar-input" @click="removeTel(k)" v-show="k || ( !k && inputsTel.length > 1)" ></i>
                          <!--<button class="btn btn-primary" @click="validarTelefono(k)">Validar</button>-->
                          <span style="color:red;font-size:14px;" v-if="formatoTelefono">Formato incorrecto</span>
                      </div>
                    <div class="col-2 col-sm-1 col-md-2 col-lg-1 direccion__tel-mail-right">
                      <button v-if="mostrarAdd" class="btn--direccion1-tel btn--hover-up"  @click="addTel()"><img src="@/assets/images/mas.png"
                          alt="Añadir teléfono" class="img-fluid"></button>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 pt-2">
                  <div class="row" v-for="(inputEmail,j) in inputsEmail" :key="j+10">
                    <div class="col-12 col-sm-3 col-md-4 col-lg-3 col-xl-4 d-flex align-items-center direccion__tel-mail-left">
                      <label class="text-small font-weight-bold">Email*</label>
                    </div>
                    <div class="col-10 col-sm-8 col-md-7 col-lg-8 col-xl-6 email-input">
                      <input type="email" id="mail1" name="email" class="form-control" v-model="emailsArray[j]" required>
                      <i class="fas fa-minus-circle eliminar-input" @click="removeEmail(j)" v-show="j || ( !j && inputsEmail.length > 1)"></i>
                    </div>
                    <div class="col-2 col-sm-1 col-md-1 direccion__tel-mail-right">
                      <button class="btn--direccion1-mail btn--hover-up" @click="addEmail()"><img src="@/assets/images/mas.png"
                          alt="Añadir teléfono" height="33px"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="text-uppercase text-primary redes-digitales__title pt-5">Redes digitales de la empresa</h3>
            <form class="redes-digitales__form">
              <label for="sitio-web" class="text-small font-weight-bold">Sitio web</label>
              <input type="url" id="sitio-web" v-model="sitioWeb" class="form-control">
            </form>

          </div> <!-- col-md-6 -->
        </div> <!-- row -->

        
        <br><br><br><br><br><br><br><br><br><br>
        <div v-show="errors.all().length" class="alert alert-danger posicion-mensaje">

          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <ul class="ul-decorater">
              <li v-for="(error, i) in errors.all()">{{error}}</li>
          </ul>

        </div>

        <div v-if="errorRut.length" class="alert alert-danger posicion-mensaje">

          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <ul class="ul-decorater">
              <li v-for="(error, i) in errorRut">{{error}}</li>
          </ul>

        </div>

        
         <!--<button type="button" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion">Enviar postulación</button>-->

        <div class="creacion-solicitud__buttons py-5">
          <button @click="guardar" class="btn btn-danger btn--big m-2 upload">Guardar y cerrar</button>
          <button class="btn btn-primary btn--big m-2" @click="siguiente" id="siguiente">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div>
      </div> <!-- container -->
      <!--<div class="d-flex justify-content-center pt-5">
          <button type="submit" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion()">Enviar postulación</button>
        </div>-->






















      <!-- Formulario 2 -->
      
      <div class="container" v-if="pjform2 == true">
        <div class="row" >

          <!-- LEFT COLUMN -->
          <div class="col-md-8 col-lg-6 formulario-3__left-column">

            <h3 class="text-primary text-uppercase py-3 m-0">Información trabajadores</h3>
            <form class="d-grid info-trabajadores__form">
              <label class="info-trabajadores__label--left text-small font-weight-bold" for="nro-prof">N° de
                Profesionales</label>
              <input type="number" v-model="profesionales" id="nro-prof" class="info-trabajadores__input--left form-control">
              <label class="info-trabajadores__label--right info-trabajadores__label--right-1 text-small font-weight-bold"
                for="nro-tec">N° de Técnicos</label>
              <input type="number" v-model="tecnicos" id="nro-tec" class="info-trabajadores__input--right form-control">
              <label class="info-trabajadores__label--left text-small font-weight-bold" for="nro-adm">N° de
                Administrativos</label>
              <input type="number" v-model="administrativos" id="nro-adm"  class="info-trabajadores__input--left form-control">
              <label class="info-trabajadores__label--right info-trabajadores__label--right-2 text-small font-weight-bold"
                for="nro-trab">N° Total de Trabajadores</label>
              <input type="number" :value="parseInt(tecnicos)+parseInt(profesionales)+parseInt(administrativos)" id="nro-trab" class="info-trabajadores__input--right form-control" disabled>
            </form>

            <h3 class="text-primary text-uppercase py-3">Información comercial</h3>
            <form class="d-grid info-comercial-top__form info-comercial-top__form--pjuridica">
              <label class="info-comercial-top__label text-small  font-weight-bold" for="facturacion">Rango de Facturación según ventas anuales</label>
              <select id="facturacion" v-model="rangosModel" class="info-comercia-top__input form-control">
                <option value="" disabled>Seleccione un Rango</option>
                <option 
                  v-for="(rangoArray, key) in rangos" 
                  :value="rangoArray.rangoId" 
                  :key="key">
                  {{ rangoArray.rango }}
                </option>
              </select>
              
              <div class="info-comercial-attachment info-comercial-attachment__top" v-if="dateValidation == false">
                <label for="ult-estados" class="text-small font-weight-bold pt-2 info-comercial-attachment__label"><img src="@/assets/images/mas.png"
                    alt="Adjuntar últimos estados financieros" height="33px" class="btn--sibling-hover-right"> <span
                    class="btn--hover-right">Últimos estados financieros: Balance y estado de resultados</span></label>
                <template v-if="selectedFileBalance.length == 0">
                <input type="file" id="ult-estados" v-validate="'required'" ref="fileBalance" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedBalance">
                </template>

                <template v-if="fileTypeBalance == true">
                  <div class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                    <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                  </div>
                </template>

                <template v-if="selectedFileBalance.length != 0 && fileTypeBalance == false">
                    <span v-for="(file, key) in selectedFileBalance" :value="selectedFileBalance" :key="'E-${key}'">
                  Archivo seleccionado: {{ file.name }}
                  </span>
                  <i @click="removeFileBalance" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                </template>
                
              </div>

              <div class="info-comercial-attachment info-comercial-attachment__top" v-else-if="dateValidation == true">
                <label for="ult-estados" class="text-small font-weight-bold pt-2 info-comercial-attachment__label"><img src="@/assets/images/mas.png"
                    alt="Adjuntar últimos estados financieros" height="33px" class="btn--sibling-hover-right"> <span
                    class="btn--hover-right">Últimos estados financieros: Balance y estado de resultados*</span></label>
                <template v-if="selectedFileBalance.length == 0">
                <input type="file" id="ult-estados" v-validate="'required'" ref="fileBalance" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedBalance">
                </template>

                <template v-if="fileTypeBalance == true">
                  <div class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                    <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                  </div>
                </template>

                <template v-if="selectedFileBalance.length != 0 && fileTypeBalance == false">
                    <span v-for="(file, key) in selectedFileBalance" :value="selectedFileBalance" :key="'E-${key}'">
                  Archivo seleccionado: {{ file.name }}
                  </span>
                  <i @click="removeFileBalance" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                </template>
              </div>
              <div class="info-comercial-attachment info-comercial-attachment__top">
                <label for="estado-renta" class="text-small font-weight-bold pt-2 info-comercial-attachment__label"><img src="@/assets/images/mas.png"
                    alt="Adjuntar Declaración Estado a la Renta" height="33px" class="btn--sibling-hover-right"> <span
                    class="btn--hover-right">Declaración Impuesto a la Renta*</span></label>

                <template v-if="selectedFileISRL.length == 0">
                  <input type="file" id="estado-renta" v-validate="'required'" ref="fileISRL" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedISRL">
                </template>

                <template v-if="fileTypeISRL == true">
                  <div class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                    <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                  </div>
                </template>

                <template v-if="selectedFileISRL.length != 0 && fileTypeISRL == false">
                    <span v-for="(file, key) in selectedFileISRL" :value="selectedFileISRL" :key="'F-${key}'">
                  Archivo seleccionado: {{ file.name }}
                  </span>
                  <i @click="removeFileISRL" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                </template>
              </div>
            </form>

            <form class="info-comercial-bottom__form pt-4 pb-3">
              <label class="info-comercial-bottom__label text-small font-weight-bold" for="monto-pat">Patrimonio según último balance o Capital Inicial para empresas < 1 año*</label>
              <input type="number" v-model="patrimonio" id="monto-pat" class="info-comercial-bottom__input form-control" required>
              <span class="text-small font-weight-bold">UF</span>
              <!--<label class="info-comercial-bottom__label info-comercial-bottom__label--right text-small font-weight-bold" for="para-construccion">% Dedicado a la Construcción*</label>
              <input type="number" id="para-construccion" class="info-comercial-bottom__input info-comercial-bottom__input--right form-control" required>-->

              <div class="info-comercial-attachment info-comercial-attachment__bottom">
                <label for="capital-propio" class="text-small font-weight-bold pt-2"><img src="@/assets/images/mas.png"
                    alt="Adjuntar declaración de capital propio" height="33px" class="btn--sibling-hover-right">
                  <span class="btn--hover-right">Declaración de capital propio*</span></label>
                <template v-if="selectedFileCapital.length == 0">
                  <input type="file" id="capital-propio" v-validate="'required'" ref="fileCapital" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedCapital">
                </template> 

                <template v-if="fileTypeCapital == true">
                  <div class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                    <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                  </div>
                </template>

                <template v-if="selectedFileCapital.length != 0 && fileTypeCapital == false">
                    <span v-for="(file, key) in selectedFileCapital" :value="selectedFileCapital" :key="'G-${key}'">
                  Archivo seleccionado: {{ file.name }}
                  </span>
                  <i @click="removeFileCapital" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                </template>
              </div>


              <div class="info-comercial-attachment info-comercial-attachment__bottom">
                <label for="facturacion-ant" class="text-small font-weight-bold pt-2"><img src="@/assets/images/mas.png"
                    alt="Adjuntar Facturación años anteriores" height="33px" class="btn--sibling-hover-right">
                  <span class="btn--hover-right">Facturación años anteriores*</span></label>

              <template v-if="selectedFileFact.length == 0">
                  <input type="file" id="facturacion-ant" ref="fileFact" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedFact">
              </template>

                <template v-if="fileTypeFact == true">
                  <div class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                    <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                  </div>
                </template>

                <template v-if="selectedFileFact.length != 0 && fileTypeFact == false">
                    <span v-for="(file, key) in selectedFileFact" :value="selectedFileFact" :key="'G-${key}'">
                  Archivo seleccionado: {{ file.name }}
                  </span>
                  <i @click="removeFileFact" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                </template>
              </div>
              <label class="info-comercial-bottom__label text-small font-weight-bold" for="fact-ant">Volumen facturado año anterior*</label>
              <input type="number" id="fact-ant" v-model="volumenFacturado" class="info-comercial-bottom__input info-comercial-bottom__input--vol-fact form-control" required>

              <span class="text-small font-weight-bold">UF</span>
            </form>
          </div> <!-- col-md-6 -->

          <!-- RIGHT COLUMN -->
          <div class="col-md-4 col-lg-6 right-column">
          </div> <!-- col-md-6 -->
        </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5">
          <!--<button type="button" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion">Enviar postulación</button>-->
          <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
          <button @click="anterior" class="btn btn-primary btn--big m-2"><i
              class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
          <button @click="siguiente2" class="btn btn-primary btn--big m-2">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div> <!-- creacion-solicitud__buttons -->
      </div>













      <!-- Formulario 3 -->
      <div class="pn-formulario-3" v-show="pjform3 == true">
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-md-7 col-lg-6">
          <h3 class="text-primary text-uppercase font-weight-bold">Composición accionaria</h3>
         <form action="">
            <div class="form-group">
              <div class="row">
               

                <div class="col-lg-3">
                  <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
                  <input v-model="rutPersonaJuridica" id="rut"  @keyup="updateRutNum()" maxlength="11" :class="rutNoValido ? campoValido : campoNoValido" @click="getPersonaJuridica" :disabled="disabled == 1" type="text" class="form-control">
                  <!--<input type="text" class="patrocinante__input form-control" v-model="rutComp" style="display:none;">-->
                    <ul class="mt-2" :class="mostrarListaPersonaJuridicaScroll" v-if="mostrarListadoPersonaJuridica" style="width:150%;padding-left:0">
                      <li v-for="(item, index) in buscarPersonaJuridicaFiltro" :key="index" @click="itemClickedPersonaJuridica(item)" class="list-group-item listLine" style="cursor:pointer;">
                        <span>{{ item.rut }}-{{ item.dv }}</span><br>
                        <span>{{ item.nombre }} {{ item.apePat }}</span>
                        
                      </li>
                    </ul>
                </div>

                <div class="col-lg-3">
                  <label for="porcentaje"
                  class="accionarios-participacion__label text-small 
                  font-weight-bold">Razón Social</label>
                  <input :disabled="disabled == 1" v-model="razonSocial"  
                  id="razonSocial" type="text" 
                  class="form-control accionarios-participacion__input">
                </div>
                <div class="col-lg-3" @click="cerrarScrollPersonaJuridica">
                  <label for="porcentaje"
                  class="accionarios-participacion__label text-small 
                  font-weight-bold">Porcentaje</label>
                  <input v-model="porcentaje" ref="porcentaje" 
                  id="porcentaje" type="number" 
                  class="form-control accionarios-participacion__input">
                </div>

                <div class="col-lg-3" style="padding-left:0%;" @click="cerrarScrollPersonaJuridica">
                <button type="button" 
                class="btn--accionarios-participacion btn--hover-up" 
                @click="buscar" style="margin-top:18%;"><img src="@/assets/images/mas.png"
                alt="Adjuntar declaración de impuestos a la renta" 
                height="33px"></button>
                </div>

                <!--<div class="col-lg-4" style="padding-left:0%;" @click="cerrarScrollPersonaJuridica">
                <button type="button" 
                class="btn btn-primary" 
                @click="crearPersonaJuridicaNueva" style="margin-top:13%;"></button>
                </div>-->

              </div>
            </div>
          </form>

          <div class="table-responsive pt-3" @click="cerrarScrollPersonaJuridica">
            <table class="table table-sm table--blue-border">
              <thead class="bg-primary text-white">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">RUT</th>
                  <th scope="col">Porcentaje</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
            <tbody v-for="(com, indice) in composicion" :key='indice'>
                <tr>
                  <td> {{com.nombre}} </td>
                  <td>{{ com.rutPersonaJuridica }}-{{ com.dvComp }}</td>
                  <td>{{ com.porcentaje }}%</td>
                  <td><a @click="editarPorcentaje(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> <a @click="eliminarComposicion(indice)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>
                 <!-- <td v-if="!com.editing">{{ com.porcentaje }}%</td>-->
                 <!-- <td v-else style="text-align: center; width: 1%;"><input type="number" @keyup.enter="updateComposicion(indice)" v-model="porcentaje" class="edit-composicion">%</td>-->
                  <!--<td><a @click="editarPorcentaje(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> <a @click="eliminarComposicion(indice)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>-->
                </tr> 
              </tbody>
            </table>
          </div>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-md-5 col-lg-6" @click="cerrarScrollPersonaJuridica">
          <div class="container">

            <div>
            <b-modal ref="modal-crear" hide-footer title="Crear Persona">
              <div class="d-block text-center">
                <h3 style="padding:5%;">La persona no existe ¿Desea crearlo?</h3>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="aceptarCreacion()">Si</b-button>
                <b-button size="sm" variant="danger" @click="cancelarCreacion()">No</b-button></div>
            </b-modal>
            </div>

            <div>
            <b-modal ref="modal-editar" hide-footer title="Editar Porcentaje">
              <div class="d-block text-center">
                <h3 style="padding:5%;">¿Seguro que desea editar el porcentaje con el RUT {{ rutPersonaJuridica }}</h3>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="aceptarEdicion()">Si</b-button>
                <b-button size="sm" variant="danger" @click="cancelarEdicion()">No</b-button></div>
            </b-modal>
            </div>

            <div>
            <b-modal ref="modal-eliminar" hide-footer title="Eliminar Persona">
              <div class="d-block text-center">
                <h3 style="padding:5%;">¿Seguro que desea eliminar a la persona con el RUT {{ rutPersonaJuridica }}?</h3>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="aceptarEliminacion()">Si</b-button>
                <b-button size="sm" variant="danger" @click="cancelarEliminacion()">No</b-button></div>
            </b-modal>
            </div>
<form v-if="formRegistrarPersona">
  <div class="row">
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="nombre">Nombre</label>
      <input type="text" class="form-control" placeholder="" v-model="nombrePersonaJuridicaNueva">
    </div>
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="nombre">RUT</label>
      <input type="text" class="form-control" placeholder="" v-model="rutPersonaJuridicaNueva">
    </div>
   <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="nombre">DV</label>
      <input type="text" class="form-control" placeholder="" v-model="dvPersonaJuridicaNueva">
    </div> 
    </div>
    <!-- <div class="row">
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="porcentaje">Porcentaje</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="social">Razón Social</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    </div> -->
  <button  type="button" class="btn btn-danger" @click="cerrarCreacionPersonaJuridica" style="float:right; padding: 2% 5% 2% 5%; margin-top: 2%; margin-left:2%;">Cerrar</button>  
  <button type="button" class="btn btn-primary" @click="crearPersonaJuridicaNueva" style="float:right; padding: 2% 5% 2% 5%; margin-top: 2%;">Crear</button>
</form>
              <!--<form class="personas-asociadas" v-if="formRegistrarPersona">
                  <div class="personas-asociadas-form">
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                      for="rut">RUT*</label>
                    <input type="number" id="rut" class="personas-asociadas-form__input--left form-control" required>
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                      for="vocativo">Nombres</label>
                      <input type="text" id="nombres" class="personas-asociadas-form__input--right-big  form-control">
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                      for="porcentaje">Porcentaje</label>
                    <input type="number" id="porcentaje" class="personas-asociadas-form__input--left-big  form-control">
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                      for="razon-social">Razón Social</label>
                    <input type="text" id="razon-social"
                      class="personas-asociadas-form__input--right-big  form-control">
                  
                   
                  </div>
                </form>-->

                 <div  v-if="!rutNoValido" class="alert alert-danger posicion-mensaje">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

              <p>El RUT es invalido</p>
          </div>
          </div>
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

      <div class="creacion-solicitud__buttons py-5 mt-5">
        <div class="container text-center pt-5">
               <p>
                  <span>
                    <img src="@/assets/images/icono alerta-25.png" alt="" style="margin-bottom: 30px;with:45px; height:45px;" class="img-fluid">
                    </span> 
                    Mantener los datos actualizados es de exclusiva responsabilidad del Socio
                  </p>
          </div>
          <!--<button type="button" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion">Enviar postulación</button>-->
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <button @click="form2" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="siguiente3" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->
    </div>
</div>    










      <!-- Formulario 4 -->
      <div class="container" v-show="pjform4 == true">
        <div class="row">
          <!-- LEFT COLUMN -->
          <div class="col-lg-6">
            <h3 class="text-primary text-uppercase font-weight-bold">Representante ante la CCHC</h3>
            <form class="accionarios-participacion__form">
              <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label> 

              <div class="col-lg-12">
               <input v-model="rutPersonaJuridicaCchc" id="rut" @click="getPersonaJuridicaCcch" :disabled="disabled == 1" type="text" class="form-control">
               <ul class="mt-2" :class="mostrarListaPersonaJuridicaScroll" v-if="mostrarListadoPersonaJuridicaCchc" style="width:70%;padding-left:0"> 
                  <li v-for="(item, index) in buscarPersonaJuridicaFiltro" :key="index" @click="itemClickedPersonaJuridicaCchc(item)" class="list-group-item listLine" style="cursor:pointer;">
                    <span>{{ item.rut }}-{{ item.dv }}</span><br>
                    <span>{{ item.nombre }} {{ item.apePat }}</span>
                  </li>
                </ul>
              </div>
              <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Nombre</label>
              <input :disabled="disabled == 1" v-model="nombreCchc"  
                  id="nombre" type="text" 
                  class="form-control accionarios-participacion__input">
              <div class="col-lg-12" @click="cerrarScrollPersonaJuridicaCchc">
                <button id=""
                class="btn--accionarios-participacion btn--accionarios-participacion-repcchc btn--hover-up" @click="buscarCchc"> <img
                  src="@/assets/images/mas.png" alt="Adjuntar declaración de impuestos a la renta" height="33px">
                </button>  
              </div>
            </form>

            <!-- RIGHT COLUMN -->
          <div class="col-md-5 col-lg-6" @click="cerrarScrollPersonaJuridicaCchc">
            <div class="container">

              <div>
                <b-modal ref="modal-crear-cchc" hide-footer title="Crear Persona">
                  <div class="d-block text-center">
                    <h3 style="padding:5%;">La persona no existe ¿Desea crearlo?</h3>
                  </div>
                  <div class="d-block text-center">
                    <b-button size="sm" variant="primary" @click="aceptarCreacionCchc()">Si</b-button>
                    <b-button size="sm" variant="danger" @click="cancelarCreacionCchc()">No</b-button></div>
                </b-modal>
              </div>

              <!--<div>
                <b-modal ref="modal-editar-Cchc" hide-footer title="Editar Porcentaje">
                  <div class="d-block text-center">
                    <h3 style="padding:5%;">¿Seguro que desea editar el porcentaje con el RUT {{ rutPersonaJuridicaCchc }}?</h3>
                  </div>
                  <div class="d-block text-center">
                    <b-button size="sm" variant="primary" @click="aceptarEdicionCchc()">Si</b-button>
                    <b-button size="sm" variant="danger" @click="cancelarEdicionCchc()">No</b-button></div>
                </b-modal>
              </div>-->

              <div>
                <b-modal ref="modal-eliminar-Cchc" hide-footer title="Eliminar Persona">
                  <div class="d-block text-center">
                    <h3 style="padding:5%;">¿Seguro que desea eliminar a la persona con el RUT {{ rutPersonaJuridicaCchc }}?</h3>
                  </div>
                  <div class="d-block text-center">
                    <b-button size="sm" variant="primary" @click="aceptarEliminacionCchc()">Si</b-button>
                    <b-button size="sm" variant="danger" @click="cancelarEliminacionCchc()">No</b-button>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
          
          

            <h3 class="text-primary text-uppercase font-weight-bold pt-3">Contacto Cobranza</h3>
            <form class="accionarios-participacion__form">
              <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
              <div class="col-lg-12">
                <input v-model="rutPersonaJuridicaCobranza" id="rut" @click="getPersonaJuridicaCobranza" :disabled="disabled == 1" type="text" class="form-control">
                <div>
                  <ul class="mt-2" :class="mostrarListaPersonaJuridicaScroll" v-if="mostrarListadoPersonaJuridicaCobranza" style="width:150%;padding-left:0">
                  <li v-for="(item, index) in buscarPersonaJuridicaFiltro" :key="index" @click="itemClickedPersonaJuridicaCobranza(item)" class="list-group-item listLine" style="cursor:pointer;">
                    <span>{{ item.rut }}-{{ item.dv }}</span><br>
                    <span>{{ item.nombre }} {{ item.apePat }}</span>
                  </li>
                </ul>  
                </div>
                
              </div>
              <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Nombre</label>
              <input id="name" type="text" v-model="nombreCobranza" class="form-control accionarios-participacion__input">
              <div @click="cerrarScrollPersonaJuridicaCobranza">
                <button id="agregarDatosContCobranza"
                  class="btn--accionarios-participacion btn--accionarios-participacion-repcchc btn--hover-up" @click="buscarCobranza"><img
                    src="@/assets/images/mas.png" alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
                
              </div>
            </form>

            <!-- RIGHT COLUMN -->
            <div class="col-md-5 col-lg-6" @click="cerrarScrollPersonaJuridicaCobranza">
              <div class="container">

                <div>
                  <b-modal ref="modal-crear-cobranza" hide-footer title="Crear Persona">
                    <div class="d-block text-center">
                      <h3 style="padding:5%;">La persona no existe ¿Desea crearlo?</h3>
                    </div>
                    <div class="d-block text-center">
                      <b-button size="sm" variant="primary" @click="aceptarCreacionCobranza()">Si</b-button>
                      <b-button size="sm" variant="danger" @click="cancelarCreacionCobranza()">No</b-button></div>
                  </b-modal>
                </div>

                <!--<div>
                  <b-modal ref="modal-editar-Cchc" hide-footer title="Editar Porcentaje">
                    <div class="d-block text-center">
                      <h3 style="padding:5%;">¿Seguro que desea editar el porcentaje con el RUT {{ rutPersonaJuridicaCchc }}?</h3>
                    </div>
                    <div class="d-block text-center">
                      <b-button size="sm" variant="primary" @click="aceptarEdicionCchc()">Si</b-button>
                      <b-button size="sm" variant="danger" @click="cancelarEdicionCchc()">No</b-button></div>
                  </b-modal>
                </div>-->

                <div>
                  <b-modal ref="modal-eliminar-Cobranza" hide-footer title="Eliminar Persona">
                    <div class="d-block text-center">
                      <h3 style="padding:5%;">¿Seguro que desea eliminar a la persona con el RUT {{ rutPersonaJuridicaCchc }}?</h3>
                    </div>
                    <div class="d-block text-center">
                      <b-button size="sm" variant="primary" @click="aceptarEliminacionCobranza()">Si</b-button>
                      <b-button size="sm" variant="danger" @click="cancelarEliminacionCobranza()">No</b-button>
                    </div>
                  </b-modal>
                </div>
              </div>
            </div>

            <div class="table-responsive pt-3" @click="cerrarScrollPersonaJuridicaCchc">
              <table class="table table-sm table--blue-border">
                <thead class="bg-primary text-white">
                  <tr>
                    <th scope="col">Nombre</th> 
                    <th scope="col">RUT</th>
                    <th scope="col">Rol</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody v-for="(com, indice) in composicionCchc" :key='indice'>
                  <tr>
                  <td> {{com.nombre }} {{com.apellido1}} </td>
                  <td>{{ com.rutPersonaJuridicaCchc }}-{{ com.dvComp }}</td>
                  <td>Representante ante la CCHC</td>
                  <td><!--<a @click="editarRol(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> -->
                    <a @click="eliminarComposicionCchc(indice)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>
                 <!-- <td v-if="!com.editing">{{ com.porcentaje }}%</td>-->
                 <!-- <td v-else style="text-align: center; width: 1%;"><input type="number" @keyup.enter="updateComposicion(indice)" v-model="porcentaje" class="edit-composicion">%</td>-->
                  <!--<td><a @click="editarPorcentaje(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> <a @click="eliminarComposicion(indice)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>-->
                </tr> 
                 
                </tbody>
                <tbody v-for="(comCob, indiceCob) in composicionCobranza" :key='indiceCob'>
                  <tr>
                  <td> {{comCob.nombre }} {{comCob.apellido1}} </td>
                  <td>{{ comCob.rutPersonaJuridicaCobranza }}-{{ comCob.dvComp }}</td>
                  <td>Contacto Cobranza</td>
                  <td><!--<a @click="editarRol(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> -->
                    <a @click="eliminarComposicionCobranza(indiceCob)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>
                 <!-- <td v-if="!com.editing">{{ com.porcentaje }}%</td>-->
                 <!-- <td v-else style="text-align: center; width: 1%;"><input type="number" @keyup.enter="updateComposicion(indice)" v-model="porcentaje" class="edit-composicion">%</td>-->
                  <!--<td><a @click="editarPorcentaje(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> <a @click="eliminarComposicion(indice)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>-->
                </tr> 
                 
                </tbody>
              </table>
            </div>
          </div> <!-- col-md-6 -->

          <!-- RIGHT COLUMN -->
          <div class="col-lg-6">
            <!-- DATOS REPRESENTANTE CCHC -->
            <div v-if="formRegistrarPersonaCchc">
              <h3 class="text-primary text-uppercase font-weight-bold">Datos Representante CCHC</h3>
              <div class="carousel-inner" >
                <div class="carousel-item active">
                  <form class="personas-asociadas" v-show="slider1 == true">
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="rut">RUT*</label>
                      <input type="text" id="rut" v-model="rutPersonaJuridicaNuevaCchc" class="personas-asociadas-form__input--left form-control" required>

                      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="DV">DV</label>
                      <input type="text" class="form-control" placeholder="" v-model="dvPersonaJuridicaNuevaCchc">
                      <!--<label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="vocativo">Vocativo</label>
                      <select type="text" id="vocativo"
                        class="personas-asociadas-form__input--right-big form-control"></select>-->
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nombres">Nombres</label> 
                      <input type="text" id="nombres" v-model="nombrePersonaJuridicaNuevaCchc" class="personas-asociadas-form__input--left-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="apellido-pat">Apellido Paterno</label>
                      <input type="text" v-model="first_lastname" id="apellido-pat"
                        class="personas-asociadas-form__input--right-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="apellido-mat">Apellido Materno</label>
                      <input type="text" v-model="second_lastname" id="apellido-mat" class="personas-asociadas-form__input--left  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="email">Email</label>
                      <input type="email" id="email" v-model="emailcchc" class="personas-asociadas-form__input--right form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="telefono">Teléfono</label>
                      <input type="tel" v-model="phone" id="telefono" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="fecha-nacimiento">Fecha
                        nacimiento</label>
                      <input type="date" v-model="dateCchc" id="fecha-nacimiento" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">1 / 4</p>
                    <button class="btn btn-primary" @click="next2" aria-hidden="true" style="margin-left: 450px;">
                    Siguiente
                  </button>
                  </form>
                  
                </div>
                <div class="carousel-items" v-show="slider2 == true">
                  <form class="personas-asociadas">
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nacionalidad">Nacionalidad</label>
                      <input type="text" v-model="nationality" id="nacionalidad"
                        class="personas-asociadas-form__input--left datos-personales__input-nacionalidad form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right datos-personales__pasaporte-label invisible text-small font-weight-bold"
                        for="pasaporte">N° Pasaporte</label>
                      <input type="number" id="pasaporte"
                        class="personas-asociadas-form__input--right datos-personales__pasaporte-input invisible form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="sexo">Sexo</label>
                      <select id="sexo" v-model="sex" class="personas-asociadas-form__input--left form-control">
                        <option value="1">Femenino</option>
                        <option value="2">Masculino</option>
                      </select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="edoCivil">Estado civil</label>
                      <select id="edoCivil" v-model="estadoCivil" class="personas-asociadas-form__input--right form-control">
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
                      <input type="text" v-model="nivelDeEstudios" id="nivelDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="profesion">Profesión</label>
                      <select type="text" v-model="profesion" id="profesion"
                        class="personas-asociadas-form__input--right form-control"></select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="centroDeEstudios">Casa de
                        estudios</label>
                      <input type="text" v-model="casaEstudios" id="centroDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="cargoEmpresa">Cargo en la
                        empresa</label>
                      <input type="text" v-model="cargo" id="cargoEmpresa" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">2 / 4</p>
                    <button class="btn btn-primary" @click="next1" aria-hidden="true">
                      Anterior
                    </button>
                    <button class="btn btn-primary" @click="next3" aria-hidden="true" style="margin-left: 350px;">
                      Siguiente
                    </button>
                  </form>
                </div>
                <div class="carousel-items" v-show="slider3 == true">
                  <form class="personas-asociadas">
                    <div class="direccion2 pt-2">
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="direccion">Dirección Particular</label>
                      <input type="text" id="direccion" v-model="direccionPart" class="direccion2__input--left-big form-control">
                      <label class="direccion2__label direccion2__label--smaller1 text-small font-weight-bold"
                        for="numero-dir">Número</label>
                      <input type="number" v-model="numeroCchc" id="numero-dir" class="direccion2__input--smaller1 form-control">
                      <label class="direccion2__label direccion2__label--smaller2 text-small font-weight-bold"
                        for="numero-dpto">Depto</label>
                      <input type="number" v-model="dpto" id="numero-dpto" class="direccion2__input--smaller2 form-control">
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="pais">País</label>
                      <input type="text" id="pais" v-model="country" class="direccion2__input--left form-control" placeholder="Chile"
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
                    <button class="btn btn-primary" @click="next2" aria-hidden="true">
                      Anterior
                    </button>
                    <button class="btn btn-primary" @click="next4" aria-hidden="true" style="margin-left: 350px;">
                      Siguiente
                    </button>
                  </form>
                </div>
                <div class="carousel-items" v-show="slider4 == true">
                  <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
                    inscribirse:</p>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-5">
                        <p class="text-uppercase">Infraestructura</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="contratistasGenerales" class="custom-control-input" id="contratistas-gen">
                            <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
                              Generales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="obrasInfra" class="custom-control-input" id="infraest-publica">
                            <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras
                              Infraestructura
                              Pública</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="conseciones" class="custom-control-input" id="concesiones">
                            <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-4">
                        <p class="text-uppercase">Vivienda</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="inmobiliario" class="custom-control-input" id="inmobiliario">
                            <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="vivienda" class="custom-control-input" id="vivienda">
                            <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-3">
                        <p class="text-uppercase">Suministros</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="proveedores" class="custom-control-input" id="proveedores">
                            <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="industriales" class="custom-control-input" id="industriales">
                            <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="especialidades" class="custom-control-input" id="especialidades">
                            <label class="custom-control-label text-small pt-1"
                              for="especialidades">Especialidades</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <p class="text-center font-weight-bold pt-3">4 / 4</p>
                  <button class="btn btn-primary" @click="nextSlider3" aria-hidden="true">
                    Anterior
                  </button>

                  <button class="btn btn-primary" @click="crearPersonaJuridicaNuevaCchc" aria-hidden="true">
                    Agregar
                  </button>
                </div>
              </div>
              <!--<div class="d-flex justify-content-between pt-4">
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
              </div>-->
            </div>


            <!-- DATOS CONTACTO DE COBRANZA -->
            <div v-if="formRegistrarPersonaCobranza">
              <h3 class="text-primary text-uppercase font-weight-bold">Datos Contacto Cobranza</h3>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <form class="personas-asociadas" v-show="prox1 == true">
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="rut">RUT*</label>
                      <input type="text" id="rut" v-model="rutPersonaJuridicaNuevaCobranza" class="personas-asociadas-form__input--left form-control" required>
                      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="DV">DV</label>
                      <input type="text" class="form-control" placeholder="" v-model="dvPersonaJuridicaNuevaCobranza">
                      <!--<label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="vocativo">Vocativo</label>
                      <select type="text" id="vocativo"
                        class="personas-asociadas-form__input--right-big form-control"></select>-->
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nombres">Nombres</label>
                      <input type="text" id="nombres" v-model="nombrePersonaJuridicaNuevaCobranza" class="personas-asociadas-form__input--left-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="apellido-pat">Apellido Paterno</label>
                      <input type="text" v-model="firstLastnameCobranza" id="apellido-pat"
                        class="personas-asociadas-form__input--right-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="apellido-mat">Apellido Materno</label>
                      <input type="text" v-model="seconLastnameCobranza" id="apellido-mat" class="personas-asociadas-form__input--left  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="email">Email</label>
                      <input type="email" v-model="emailCobranza" id="email" class="personas-asociadas-form__input--right form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="telefono">Teléfono</label>
                      <input type="tel" v-model="telefonoCobranza" id="telefono" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="fecha-nacimiento">Fecha
                        nacimiento</label>
                      <input type="date" v-model="dateCobranza" id="fecha-nacimiento" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">1 / 4</p>
                    <button class="btn btn-primary" @click="sliderNext2" aria-hidden="true" style="margin-left: 450px;">
                    Siguiente
                  </button>
                  </form>
                </div>
                <div class="carousel-items" v-show="prox2 == true">
                  <form class="personas-asociadas" >
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nacionalidad">Nacionalidad</label>
                      <input type="text" v-model="nacionCobranza" id="nacionalidad"
                        class="personas-asociadas-form__input--left datos-personales__input-nacionalidad form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right datos-personales__pasaporte-label invisible text-small font-weight-bold"
                        for="pasaporte">N° Pasaporte</label>
                      <input type="number" id="pasaporte"
                        class="personas-asociadas-form__input--right datos-personales__pasaporte-input invisible form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="sexo">Sexo</label>
                      <select id="sexo" v-model="sexCobranza" class="personas-asociadas-form__input--left form-control">
                        <option value="1">Femenino</option>
                        <option value="2">Masculino</option>
                      </select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="edoCivil">Estado civil</label>
                      <select id="edoCivil" v-model="edocivilCobranza" class="personas-asociadas-form__input--right form-control">
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
                      <input type="text" v-model="nivelCobranza" id="nivelDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="profesion">Profesión</label>
                      <select type="text" v-model="profesionCobranza" id="profesion"
                        class="personas-asociadas-form__input--right form-control"></select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="centroDeEstudios">Casa de
                        estudios</label>
                      <input type="text" v-model="casaCobranza" id="centroDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="cargoEmpresa">Cargo en la
                        empresa</label>
                      <input type="text" v-model="cargoCobranza" id="cargoEmpresa" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">2 / 4</p>
                    <button class="btn btn-primary" @click="sliderNext1" aria-hidden="true">
                      Anterior
                    </button>
                    <button class="btn btn-primary" @click="sliderNext3" aria-hidden="true" style="margin-left: 350px;">
                      Siguiente
                    </button>
                  </form>
                </div>
                <div class="carousel-items" v-show="prox3 == true">
                  <form class="personas-asociadas">
                    <div class="direccion2 pt-2" >
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="direccion">Dirección Particular</label>
                      <input type="text" v-model="dirCobranza" id="direccion" class="direccion2__input--left-big form-control">
                      <label class="direccion2__label direccion2__label--smaller1 text-small font-weight-bold"
                        for="numero-dir">Número</label>
                      <input type="number" v-model="numberCobranza" id="numero-dir" class="direccion2__input--smaller1 form-control">
                      <label class="direccion2__label direccion2__label--smaller2 text-small font-weight-bold"
                        for="numero-dpto">Depto</label>
                      <input type="number" v-model="dptoCobranza" id="numero-dpto" class="direccion2__input--smaller2 form-control">
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="pais">País</label>
                      <input type="text" v-model="countryCobranza" id="pais" class="direccion2__input--left form-control" placeholder="Chile"
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
                        <input type="checkbox" v-model="correspondenciaCobranza" class="custom-control-input" id="direccion1">
                        <label class="custom-control-label text-small pt-1" for="direccion1">Usar dirección para
                          correspondencia</label>
                      </div>
                      <div class="custom-control custom-checkbox direccion2-check direccion2-check--right">
                        <input type="checkbox" v-model="cobranzaCobr" class="custom-control-input" id="direccion2">
                        <label class="custom-control-label text-small pt-1" for="direccion2">Usar dirección para
                          cobranzas</label>
                      </div>
                    </div>
                    <p class="text-center font-weight-bold pt-3">3 / 4</p>
                     <button class="btn btn-primary" @click="sliderNext2" aria-hidden="true">
                      Anterior
                    </button>
                    <button class="btn btn-primary" @click="sliderNext4" aria-hidden="true" style="margin-left: 350px;">
                      Siguiente
                    </button>
                  </form>
                </div>
                <div class="carousel-items" v-show="prox4 == true">
                  <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
                    inscribirse:</p>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-5">
                        <p class="text-uppercase">Infraestructura</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="ContCobranza" class="custom-control-input" id="contratistas-gen">
                            <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
                              Generales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="obraCobranza" class="custom-control-input" id="infraest-publica">
                            <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras
                              Infraestructura
                              Pública</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="conceCobranza" class="custom-control-input" id="concesiones">
                            <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-4">
                        <p class="text-uppercase">Vivienda</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="inmCobranza" class="custom-control-input" id="inmobiliario">
                            <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="viviendaCobranza" class="custom-control-input" id="vivienda">
                            <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-3">
                        <p class="text-uppercase">Suministros</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="proveeCobranza" class="custom-control-input" id="proveedores">
                            <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="indusCobranza" class="custom-control-input" id="industriales">
                            <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="espeCobranza" class="custom-control-input" id="especialidades">
                            <label class="custom-control-label text-small pt-1"
                              for="especialidades">Especialidades</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <p class="text-center font-weight-bold pt-3">4 / 4</p>
                  <button class="btn btn-primary" @click="sliderNext3" aria-hidden="true">
                    Anterior
                  </button>

                  <button class="btn btn-primary" @click="crearPersonaJuridicaNuevaCobranza" aria-hidden="true">
                    Agregar
                  </button>
                </div>
              </div>
              <!--<div class="d-flex justify-content-between pt-4">
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
              </div>-->
            </div>
          </div> <!-- col-lg-6 -->
        </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5">
          <!--<button type="button" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion">Enviar postulación</button>-->
          <a href="ingreso-y-consulta.html" @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
          <button @click="form3" class="btn btn-primary btn--big m-2"><i
              class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
          <button @click="siguiente4" class="btn btn-primary btn--big m-2">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div> <!-- creacion-solicitud__buttons -->
      </div> <!-- container -->












      <!-- Formulario 5 -->
      <div class="container" v-show="pjform5 == true">
        <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-sm-12 col-md-9 col-lg-7">
          <h3 class="text-primary text-uppercase">Patrocinantes</h3>
          <p class="text-muted text-small">Ambos socios deben tener sus cuotas al día</p>

<!-- Modales de Ayuda-->
<b-modal ref="modal-ayuda-patrocinante" hide-footer title="Ayuda">
              <div class="d-block text-center">
                <p style="padding:5%;">Los patrocinantes son los socios...</p>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="okAyuda()">ok</b-button>
              </div>
</b-modal>

<b-modal ref="modal-ayuda-patrocinador" hide-footer title="Ayuda">
              <div class="d-block text-center">
                <p style="padding:5%;">Los Representantes del Socio son los socios...</p>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="okAyudaPatrocinador()">ok</b-button>
              </div>
</b-modal>
<!-- Fin devModales de Ayuda -->
<form class="pt-3">
  <div class="row">
<div class="col-lg-6">
<label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyudaPatrocinador()" class="fas fa-question-circle question-icon"></i> Socio Patrocinante 1*</label>
<!-- HTML title specified via default slot -->
<input type="text" class="patrocinante__input form-control" v-model="nombrePatro"  @click="getListarPatrocinante">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinante" style="display:none;">
         <!-- <ul class="mt-2" :class="listaHov" style="padding-left:0" v-if="nombrePatro.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinanteScroll" style="padding-left:0" v-if="mostrarListadoPatrocinante">
            <li v-for="(item, index) in buscarPatrocinante" :key="index" @click="itemClicked(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{ item.apePat }}</span><br>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>

<div class="col-lg-6">
  <label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyudaPatrocinador()" class="fas fa-question-circle question-icon"></i>Representante del Socio*</label>  
<input type="text" class="patrocinante__input form-control" v-model="nombrePatrocinador" @click="getListarPatrocinador">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinador" style="display:none;">
          <!--<ul class="mt-2" :class="listaHov" v-if="nombrePatrocinador.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinadorScroll" style="padding-left:0" v-if="mostrarListadoPatrocinador">
            <li v-for="(item, index) in buscarPatrocinador" :key="index" @click="itemClickedPatrocinador(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{item.apePat}}</span>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>
  </div>
<br>
  <div class="row" @click="cerrarScrollPostulacion">
    <div class="col-lg-6">
      <a :href="url+'download/Solicitud Incorp Persona Jurídica v032019.docx'" download="SolicitudPersonaJuridica" class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <!--<input type="file" class="d-none" id="respaldo" required>-->
              
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

              <template v-if="selectedFilePatro.length == 0">
                <input type="file" id="respaldo" ref="filePatro" class="d-none" required @change="onFileSelectedPatrocinanteUno">

              </template>
              
              <template v-if="fileTypePatro == true">
                <div class="alert alert-danger alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                  <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                </div>
                
              </template>

               <template v-else>
                <span v-for="(file, key) in selectedFilePatro" :value="selectedFilePatro" :key="'X-${key}'">
                  Archivo seleccionado: {{ file.name }}
                  <i @click="removeFilePatro" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                </span>
                
                <!--<button @click="onUpload">Upload!</button>-->
              </template>
            </div>
    </div>
  </div>
</form>

<form class="pt-3">
  <div class="row">
<div class="col-lg-6">
<label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyuda()" class="fas fa-question-circle question-icon"></i> Socio Patrocinante 2*</label>  
<input type="text" class="patrocinante__input form-control" v-model="nombrePatrocinante2"  @click="getListarPatrocinante2">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinante2" style="display:none;">
         <!-- <ul class="mt-2" :class="listaHov" style="padding-left:0" v-if="nombrePatro.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinanteScroll2" style="padding-left:0" v-if="mostrarListadoPatrocinante2">
            <li v-for="(item, index) in buscarPatrocinante2" :key="index" @click="itemClicked2(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{ item.apePat }}</span><br>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>

<div class="col-lg-6">
  <label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyudaPatrocinador()" class="fas fa-question-circle question-icon"></i>Representante del Socio*</label>  
<input type="text" class="patrocinante__input form-control" v-model="nombrePatrocinador2" @click="getListarPatrocinador2">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinador2" style="display:none;">
          <!--<ul class="mt-2" :class="listaHov" v-if="nombrePatrocinador.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinadorScroll2" style="padding-left:0" v-if="mostrarListadoPatrocinador2">
            <li v-for="(item, index) in buscarPatrocinador2" :key="index" @click="itemClickedPatrocinador2(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{item.apePat}}</span>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>
  </div>
<br>
  <div class="row"  @click="cerrarScrollPostulacion">
    <div class="col-lg-6">
      <a :href="url+'download/Solicitud Incorp Persona Jurídica v032019.docx'" download="SolicitudPersonaJuridica" class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <!--<input type="file" class="d-none" id="respaldo" required>-->
              
              
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

              <div>
                <template v-if="selectedFilePatroDos.length == 0">
                <input type="file" id="respaldo" ref="filePatroDos" class="d-none" required @change="onFileSelectedPatrocinanteDos">

              </template>
              
              <template v-if="fileTypePatroDos == true">
                <div class="alert alert-danger alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label=""><span aria-hidden="true">&times;</span></button>
                  <strong>¡Error! adjunte solo archivos .pdf, .doc, .docx</strong> 
                </div>
                
              </template>

               <template v-else>
                <span v-for="(file2, key) in selectedFilePatroDos" :value="selectedFilePatroDos" :key="'Z-${key}'">
                  Archivo seleccionado: {{ file2.name }}
                  <i @click="removeFilePatroDos" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                </span>

                </template>
              </div>
            </div>
    </div>
  </div>
</form> 

 <!--<form class="d-grid patrocinante__form pt-3">
            <label class="patrocinante__label text-small font-weight-bold" for="rut1">RUT*</label>-->
            <!--<suggestions
    v-model="query"
    :options="options"
    :onInputChange="onCountryInputChange"
    :onItemSelected="onSearchItemSelected"
    ></suggestions>-->
        <!--  <input type="text" placeholder="Buscar" class="patrocinante__input form-control" v-model="nombrePatro">
          <ul class="patrocinante__attachment pt-2" style="width:27%;" v-if="nombrePatro.length > 0 ? mostrarListadoPatro=true : ''">
            <li v-for="(item, index) in buscarPatrocinante" :key="index" @click="itemClicked(item)" class="list-group-item" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }}</span>
              <span>{{ item.camara }}</span>
            </li>
          </ul>-->
            <!--<input id="rut1" class="patrocinante__input form-control" required>-->
            <!--<label class="patrocinante__label text-small font-weight-bold" for="patrocinante1">Patrocinante 1*</label>
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
          </form>-->

          <!--<form class="d-grid patrocinante__form pt-5">
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
          </form>-->
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-sm-3 col-md-3 col-lg-5"  @click="cerrarScrollPostulacion">
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

       <div class="creacion-solicitud__buttons py-5 mt-5">
        <!--<button type="button" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion">Enviar postulación</button>-->
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <button @click="form4" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
        
        <button class="btn btn-primary btn--big m-2" @click="siguiente5">Siguiente <i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->





















      <!-- Formulario 6 -->
      <div class="pn-formulario-6" v-show="pjform6 == true">
       
    <div class="container">
      <form>
        <div class="row">

          <!-- LEFT COLUMN -->
          <div class="col-md-6">
            <h3 class="text-primary text-uppercase">Compromisos</h3>
            <div class="compromisos">
              <div class="compromisos__header bg-primary p-3">
                <h3 class="text-uppercase text-white text-center m-0 font-weight-normal">Por favor leer los compromisos ante
                  la CCHC antes de
                  enviar la postulación</h3>
              </div>
              <div class="compromisos__body p-3">
                <div class="compromisos__text-container">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header d-flex align-items-center" id="headingOne">
                        <h3 class="mb-0">CÓDIGO DE BUENAS PRÁCTICAS EN LA INDUSTRIA DE LA CONSTRUCCIÓN</h3>
                        <button class="btn btn-link ml-auto" type="button" data-toggle="collapse"
                          data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <i class="fas fa-plus-circle"></i>
                        </button>
                      </div>

                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="card-body">
                          <p>El Código de Buenas Prácticas en la Industria de la Construcción, en adelante “El Código” fue aprobado en la sesión N°
                          162 del Consejo Nacional, celebrada los días 4 y 5 de noviembre  de 2011, en Puyehue, Región de Los Lagos.</p><br>
                          <p>Este Código regula el comportamiento ético y las buenas  prácticas  de los socios  de la Cámara  Chilena  de la
                          Construcción, ya sea en sus relaciones o bien con terceros y es de carácter obligatorio. Capítulos y Anexos que contiene el Código.</p><br>
                          <p>Capítulos:</p>
                          <ul style="list-style:none;">
                            <li>I. Probidad;</li>
                            <li>II. Calidad del Proyecto;</li>
                            <li>III. Relación en Actores que Participan en el Proceso de Construcción; IV. Prevención de Riesgos y Salud Ocupacional;</li>
                            <li>V. Protección del Medio Ambiente;</li>
                            <li>VI. Mecanismos de Relación con la comunidad;</li>
                            <li>VII. Métodos de Prevención y Resolución Temprana de Controversias; VIII. Relación con el Cliente.</li>
                          </ul>
                         
                         <p>Anexos:</p>
                         <ul style="list-style:none;">
                          <li>I. Declaración de Principios de la Cámara Chilena de la Construcción A.G.</li>
                          <li>II. Código de Ética Federación Interamericana de la Industria de la Construcción.</li>
                          <li>III. Código de Comportamiento de la Cámara Chilena de la Construcción.</li>
                         </ul>

                          <p>En este acto, se hace entrega de una copia oficial del Código de Buenas Prácticas en la Industria de la Construcción que contiene la información precedentemente señalada.
                          El Postulante declara que toma conocimiento de lo antes señalado y se obliga al cumplimiento de las disposiciones contenidas en el Código y sus Anexos.</p>

                          <div class="compromisos__input pt-5">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" v-model="terms" class="custom-control-input" id="leido1" required>
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
                        <h3 class="mb-0">DECLARACIÓN DE PRINCIPIOS</h3>
                        <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <i class="fas fa-plus-circle"></i>
                        </button>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                        data-parent="#accordionExample">
                        <div class="card-body">
                          <p>La Cámara Chilena de la Construcción, es una Asociación Gremial Empresarial de inspiración amplia y unitaria.</p>
                          <p>La Institución afirma el postulado de los valores éticos, y sostiene la vigencia de los principios que orientan su decidida vocación humanista y de servicio, los que han dado forma a su espíritu fraterno, solidario, democrático y participativo.</p>
                          <br>
                        <h4>EL ESPIRITU DE LA CAMARA CHILENA DE LA CONSTRUCCIÓN</h4>

                        <h5>VALORES Y PRINCIPIOS</h5>
                        <p>La Cámara Chilena de la Construcción reconoce en su accionar y en el de sus Socios, desde el inicio de su existencia, el imperativo de valores éticos tales como el respeto a la verdad, la libertad y dignidad de las personas, la buena fe y la equidad de sus relaciones mutuas, la honestidad y la lealtad.</p>
                        <p>El conjunto de esos valores y principios que la inspiran constituye un acervo valioso, que caracteriza a la Institución, la que se ha preocupado de plasmar en acciones concretas y, a través del tiempo, trasmitir, consolidar e incrementar.</p>
                        <br>
                        <h5>GREMIALISMO AMPLIO Y UNITARIOS</h5>
                        <p>Encuentran ubicación en la Institución todas aquellas Personas o Empresas que ejercen actividades vinculadas con la construcción.</p>
                        <p>Al mismo tiempo, la Cámara se ocupa no solamente de los problemas que podrían definirse como netamente Gremiales, sino también del desarrollo y perfeccionamiento de la actividad nacional en su conjunto, fomentando, asimismo, la más amplia concurrencia en la adjudicación de los contratos, y la atención de los intereses que pudieran aparecer como contrapuestos por el diálogo y la concertación.</p>
                        <br>
                        <h5>VISIÓN HUMANISTA</h5>
                        <p>La Institución sostiene una visión humanista del quehacer de la producción y de la empresa, considerando que el hombre y su dignidad deben constituir una preferente preocupación de cuantos la integran, visión que así mismo ha impulsado a la Institución, que no ha vacilado jamás en emprender, también por cuenta propia, como colaboradora de la Comunidad Constructora, especialmente cuando ello ha resultado necesario, dada la movilidad laboral del sector.</p>
                        <br>
                        <h5>VOCACIÓN DE SERVICIO</h5>
                        <p>La Cámara está inspirada en una verdadera vocación de servicio, comprometida especialmente en la promoción social, en una perspectiva cuyo fundamento radica en sus valores y principios, y en el derecho de todos a tener acceso a oportunidades para compartir los frutos del desarrollo.</p>
                        <br>
                        <h5>ESPÍRITU DEMOCRÁTICO PARTICIPATIVO</h5>
                        <p>La Cámara sostiene que la obtención del bien común de la sociedad es responsabilidad compartida por los sectores público y privado, actuando cada cual, según su rol propio, de tal manera que corresponda al primero el estímulo a la iniciativa privada y planificación indicativa o la regulación de ciertas actividades, siendo el campo propio del sector privado ejercer la libertad de emprender, buscando una asignación de recursos eficiente y equitativa.</p>
                        <p>La Institución postula que el Estado debe actuar en la producción de Bienes y Servicios solamente en condiciones de subsidiariedad y cuando así lo demande el Bien Común.</p>
                        <br>
                        <h5>FRATERNIDAD Y ESPÍRITU SOLIDARIO</h5>
                        <p>La Cámara promueve entre sus socios, la igualdad de oportunidades, la participación, y la fraternidad, preservando de este modo uno de los valores más resaltantes de los Antiguos Gremios.</p>
                        <p>Es en esta perspectiva que la Cámara ha logrado concitar los aportes de todos los adherentes, como también el compromiso y lealtad de su Administración, para realizar una labor que se debe a todos y a todos enorgullece.</p>
                        <p>La Cámara por otra parte, como genuina representante del Sector, hace permanentemente aportes en orden al desarrollo de la actividad, abriendo también canales para dar cauce a las iniciativas que impulsa.</p>
                        <br>
                        <h5>REAFIRMACIÓN HISTÓRICA</h5>
                        <p>La historia misma de la Institución, la materialización de tantas iniciativas inspiradas en aquellos valores y, fundamentalmente, su vocación de servicio, constituyen la más cabal expresión de la existencia de caracteres institucionales propios y permanentes, los que forman, en su conjunto, el Espíritu de la Cámara Chilena de la Construcción.</p>
                        <br>
                        <h5>IMPERATIVO ÉTICO</h5>
                        <p>Quienes adhieren a la Institución deben compartir su Espíritu, y no podrá pertenecer a ella quienquiera que no respete sus valores y principios.</p>

                          <div class="compromisos__input pt-5">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" v-model="terms2" class="custom-control-input" id="leido2" required>
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
                        <h3 class="mb-0">CÓDIGO DE COMPORTAMIENTO CÁMARA CHILENA DE LA CONSTRUCCIÓN</h3>
                        <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <i class="fas fa-plus-circle"></i>
                        </button>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                        data-parent="#accordionExample">
                        <div class="card-body">
                        <p>Los socios de la Cámara dignificarán los valores éticos que la inspiran, en especial, el respeto a la verdad, la libertad y dignidad de las personas, la buena fe y la equidad de sus relaciones mutuas, la honestidad y la lealtad, asumiendo también el deber de promover y difundir dichos valores.</p><br>
                        <p>La Cámara velará por el irrestricto respeto de sus Socios y de sus Entidades a los valores éticos que animan a la Institución; quienes se incorporen deben compartir su espíritu y no podrá pertenecer a ella quien no respete sus valores y principios.</p><br>
                        <p>El presente Código regula la conducta y honorabilidad de los socios entre sí y con respecto a sus clientes, trabajadores y proveedores, estableciendo deberes y responsabilidades.</p><br>
                        <p>En el ejercicio de sus actividades los Socios de la Cámara Chilena de la Construcción se desempeñarán de acuerdo a las siguientes normas:</p><br>
<p><span style="color:#2072BE;">PRIMERO:</span> Velar por el desarrollo, prestigio y calidad de la actividad de la construcción, procurando la existencia de un ambiente de cooperación y entendimiento que contribuya al bien común.</p><br>
<p><span style="color:#2072BE;">SEGUNDO:</span> Respetar las leyes y demás normas jurídicas que regulan la actividad, propiciando su actualización y perfeccionamiento.</p><br>
<p><span style="color:#2072BE;">TERCERO:</span> Respetar las creencias religiosas, políticas, características étnicas y el derecho a la privacidad de las personas.</p><br>
<p><span style="color:#2072BE;">CUARTO:</span> Propiciar la aplicación del principio de desarrollo sustentable, y advertir las condiciones que sean peligrosas o que constituyan una amenaza contra la vida, la salud o la propiedad en los trabajos que se desarrollen.</p><br>
<p><span style="color:#2072BE;">QUINTO:</span> Promover una sana competencia basada en el profesionalismo, calidad de las tecnologías empleadas y excelencia del trabajo, evitando acciones que desacrediten al competidor.</p><br>
<p><span style="color:#2072BE;">SEXTO:</span> No proponer, no otorgar ni aceptar favores especiales en virtud del pago de sobornos, prebendas; tráfico de información privilegiada o aprovechamiento del cargo que se ocupa.</p><br>
<p><span style="color:#2072BE;">SÉPTIMO:</span> Cumplir los compromisos contractuales en la forma y en los plazos establecidos. Asimismo, evitar compromisos cuando se sepa de antemano la imposibilidad de su cumplimiento a tiempo o cuando no se cuente con la capacidad necesaria para su ejecución.</p><br>
<p><span style="color:#2072BE;">OCTAVO:</span> Respetar las obligaciones legales y contractuales de sus trabajadores, especialmente pagar oportunamente las remuneraciones y cotizaciones previsionales; respetar la jornada de trabajo; procurar favorables condiciones de higiene, seguridad y prevención de riesgos laborales en la empresa; preocuparse por el desarrollo integral de sus trabajadores.</p><br>
<p><span style="color:#2072BE;">NOVENO:</span> El presente Código de Comportamiento siempre deberá ser interpretado como un complemento de la Declaración de Principios que inspira a la Cámara Chilena de la Construcción, y todo aquello que no se encuentre regulado por el mismo, será resuelto conforme a los principios y valores éticos contenidos en dicha Declaración.</p><br>
<p><span style="color:#2072BE;">DÉCIMO:</span> En caso que un socio de la CChC considere que uno de sus pares ha transgredido alguna de estas disposiciones podrá acudir a la Comisión de Conciliación del Comité Gremial o Cámara Regional en la que participa. De no lograrse solución podrá apelar a la Comisión de Ética y Disciplina de la CChC.</p><br>

                          <div class="compromisos__input pt-5">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" v-model="terms3" class="custom-control-input" id="leido3" required>
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
          <div class="col-md-6">
            <h3 class="text-primary text-uppercase compromisos__confirmacion-title">Confirmación</h3>
            <p class="text-muted text-small font-weight-bold">Antes de enviar su postulación revise toda la información
              adjunta en los formularios.</p>

            <div class="card mt-3">
              <div class="card-header text-white text-uppercase bg-primary py-3 px-5">Datos del solicitante</div>
              <div class="card-body pt-4 pb-5 px-5 card__form">
                <p class="card__form-label">Nombre: <span class="card__form-data">{{ fantasyName }} {{ razonSocialJuridica }}</span></p>
                <p class="card__form-label">Teléfono: <span class="card__form-data">{{ telefonosArray[0] }}</span><span v-if="valorCheckDir =='particular'" class="card__form-data">{{ telefonosParArray[0] }}</span></p>
                <p class="card__form-label">Email: <span class="card__form-data">{{ emailsArray[0] }}</span> <span class="card__form-data" v-if="valorCheckDir =='particular'">{{ emailsParArray[0] }}</span></p>
                <!--<p class="card__form-label">Empresa: <span class="card__form-data">{{ empresa }}</span></p>-->
                <p class="card__form-label">Dirección: <span class="card__form-data">{{ calle }} {{ numero }}, {{ comunaSeleccionada }}, {{ provinciaSeleccionada }}
                </span></p>
              </div>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="enviar-copia" v-model="enviarCopiaMail">
              <label class="custom-control-label font-weight-bold text-muted pt-1" for="enviar-copia">Enviar una copia
                de los datos entregados en la solicitud a mi correo electrónico</label>
            </div>
          </div> <!-- col-md-6 -->
        </div> <!-- row -->
        <span v-if="msgTerm" class="font-weight-bold pt-1" style="color:red">*Debe aceptar términos y condiciones</span>
        <div class="d-flex justify-content-center pt-5">
          <!--<button type="button" :disabled="isDisabled" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion">Enviar postulación</button>-->
        </div>
      </form>

      <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <button @click="form5" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        <button type="button" :disabled="isDisabled" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion">Enviar postulación</button>
        <!--<router-link to="/" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>-->
      </div>  <!-- creacion-solicitud__buttons -->

     

    </div> <!-- container -->
  </div> 


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
      es: es,
      language: "es",
      date: new Date(),
      format: 'dd-MM-yyyy',
      disabledDates:{
      from: new Date() //Deshabilita fechas futuras
      },
     
     listaGente:[
      {
      id:'1',
      nombre:'Leo',
      rut:'1',
      razon: 'Leonardo C.A',
      editing: false
      },
      {
      id:'2',
      nombre:'Gaby',
      rut:'2',
      razon:'Gabriela C.A',
      editing: false
      },
      {
        id:'3',
        nombre:'Gene',
        rut:'3',
        razon: 'Genesis C.A',
        editing: false
      }
      ],


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
     url: this.$store.state.URL,
     rut:null,
     errorRut:[],
     rutNoValido: true,
     campoNoValido: 'rut-invalido',
     campoValido: 'rut-valido',
     camposCorrectos: false,
     camposCorrectosDir: true,
     imagen: '',
     fileImageName: null,
     file: '',
     fileName: null,
     filetm: '',
     filetmName: null,
     filecv: '',
     filecvName: null,
     filesrl: '',
     filesrlName: null,
     filesa: '',
     filesaName: null,
     fileBalance: '',
     fileBalanceName: null,
     fileISRL: '',
     fileISRLName: null,
     fileCapital: '',
     fileCapitalName: null,
     fileFact: '',
     fileFactName: null,
     filePatro: '',
     filePatroName: null,
     filePatroDos: '',
     filePatroDosName: null,
     files: '',
     fileType: false,
     fileTypeImage: false,
     fileTypeTM: false,
     fileTypeCV: false,
     fileTypeSRL: false,
     fileTypeSA: false,
     fileTypeBalance: false,
     fileTypeISRL: false,
     fileTypeCapital: false,
     fileTypeFact: false,
     fileTypePatro: false,
     fileTypePatroDos: false,
     disabled: false,
     disabledTwo: false,
     array:[],
     listadoRegiones:[],
     provincias:[],
     provinciaSeleccionada:'',
     regionSeleccionada:'',
     comunas:[],
     comunaSeleccionada:'',
     fileImage: [],
     selectedFile: [],
     selectedFileTM: [],
     selectedFileCV: [],
     selectedFileSRL: [],
     selectedFileSA: [],
     selectedFileBalance: [],
     selectedFileISRL: [],
     selectedFileCapital: [],
     selectedFileFact: [],
     selectedFilePatro: [],
     selectedFilePatroDos: [],
     actividades:[],
     giros:[],
     categorias:[],
     rut:'',
     rutAcom:'',
     nombre: '',
     fantasyName:'',
     razonSocialJuridica:'',
     razonSocial:'',
     date:'',
     giroModel:'',
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
     sitioWeb: '',
     telefonosArray:[],
      tipoTelArray:[],
      emailsArray:[],
      telefonosParArray:[],
      tipoTelParArray:[],
      emailsParArray:[],
      dateValidation: false,
      valorCheckDir:'',
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
      formatoTelefono: false,
      mostrarAdd: true,
     reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
     website: '',
     trabajadores: '',
      administrativos:'',
      tecnicos:'',
      profesionales:'',
      balance: [],
      impuestoRenta: [],
      patrimonio: '',
      capitalPropio: [],
      facturacion: [],
      volumenFacturado: '',
      rangos: [],
      rangosModel: '',

     //Data para el formulario Composicion Accionaria
      listaPersonaJuridica:[],
      listaPersonaJuridicaCchc:[],
      listaPersonaJuridicaCobranza:[],
      rutComp:'',
      dvComp:'',
      //razonSocial:'',
      razonSocialComp:'',
      porcentaje:0,
      rol:0,
      composicion:[],
      composicionCchc:[],
      composicionCobranza:[],
      formRegistrarPersona: false,
      formRegistrarPersonaCchc: false,
      formRegistrarPersonaCobranza: false,
      disabled: 0,
      encuentra:'',
      encuentraCchc:'',
      encuentraCobranza:'',
      editPor: false,
      editRol: false,
      respuesta: false,
      respuestaCchc: false,
      respuestaCobranza: false,
      mostrarListaPersonaJuridicaScroll:'listaHov',
      mostrarListadoPersonaJuridica:false,
      mostrarListadoPersonaJuridicaCchc:false,
      mostrarListadoPersonaJuridicaCobranza:false,
      rutPersonaJuridica:'',
      rutPersonaJuridicaCchc:'',
      rutPersonaJuridicaCobranza:'',
      nombrePersonaJuridicaNueva:'',
      nombrePersonaJuridicaNuevaCchc:'',
      nombrePersonaJuridicaNuevaCobranza:'',
      rutPersonaJuridicaNueva:'',
      rutPersonaJuridicaNuevaCchc:'',
      rutPersonaJuridicaNuevaCobranza:'',
      dvPersonaJuridicaNueva:'',
      dvPersonaJuridicaNuevaCchc:'',
      dvPersonaJuridicaNuevaCobranza:'',
      personasJuridicasNuevas:[],
      personasJuridicasNuevasCchc:[],
      personasJuridicasNuevasCobranza:[],
      juridicoEnArray: false,
      personasJuridicaId: '',
      arrAux: [],
      arrAuxCchc: [],
      arrAuxCobranza: [],
      encuentraAux:'',
      encuentraAuxCchc:'',
      encuentraAuxCobranza:'',
      eliminarAux: false,
      eliminarAuxCchc: false,
      eliminarAuxCobranza: false,


 
            
//Data Compromisos
      terms: false,
      terms2: false,
      terms3: false,
      msgTerm: true,

//Data para Patrocinantes
       patrocinantes:[],
       patrocinadores:[],
       patrocinantes2:[],
       patrocinadores2:[],
       nombrePatro:'',
       nombrePatrocinador:'',
       mostrarListadoPatrocinante: false,
       mostrarListadoPatrocinador: false,
       mostrarListadoPatrocinante2: false,
       mostrarListadoPatrocinador2: false,
       patrocinanteSelec:'',
       patrocinadorSelec:'',
       patrocinanteSelec2:'',
       patrocinadorSelec2:'',
       mostrarListaPatrocinanteScroll:'listaHov',
       mostrarListaPatrocinadorScroll:'listaHov',
       mostrarListaPatrocinanteScroll2:'listaHov',
       mostrarListaPatrocinadorScroll2:'listaHov',
       nombrePatrocinante2:'',
       nombrePatrocinador2:'',
       perIdPatrocinante:'',
       perIdPatrocinador:'',
       perIdPatrocinante2:'',
       perIdPatrocinador2:'',
       respaldo1:'',
       selectedRespaldo1:[],
       respaldo2:'',
       selectedRespaldo2:[],
       

       //Data Slider
       enviarCopiaMail: false,
       rutcchc: '',
       nombreCchc: '',
       first_lastname: '',
       second_lastname: '',
       emailcchc: '',
       dateCchc: '',
       phone: '',
       nationality: '',
       sex: '',
       estadoCivil: '',
       nivelDeEstudios: '',
       profesion: '',
       casaEstudios: '',
       cargo: '',
       direccionPart: '',
       numeroCchc: '',
       dpto: '',
       country: '',
       //Data para Selección de comités
      contratistasGenerales:false,
      obrasInfra:false,
      conseciones:false,
      inmobiliario:false,
      vivienda:false,
      proveedores:false,
      industriales:false,
      especialidades:false, 

      //Slider 2 - Cobranza
      nombreCobranza: '',
      firstLastnameCobranza: '',
      seconLastnameCobranza: '',
      emailCobranza: '',
      telefonoCobranza: '',
      dateCobranza: '',
      nacionCobranza: '',
      sexCobranza: '',
      edocivilCobranza: '',
      nivelCobranza: '',
      profesionCobranza: '',
      casaCobranza: '',
      cargoCobranza: '',
      dirCobranza: '',
      numberCobranza: '',
      dptoCobranza: '',
      countryCobranza: '',
      correspondenciaCobranza: '',
      cobranzaCobr: '',
      ContCobranza: false,
      obraCobranza: false,
      conceCobranza: false,
      inmCobranza: false,
      viviendaCobranza: false,
      proveeCobranza: false,
      indusCobranza: false,
      espeCobranza: false

       
    }
  },

  mounted: function () {
    console.log("mounted...");
  },

  methods:{

    ...mapMutations(['form1','form2','form3', 
                     'form4','form5','form6', 'nextSlider1', 'nextSlider2', 'nextSlider3', 
                     'nextSlider4', 'rutEnNumeroSolicitud', 'proximoSlider1', 'proximoSlider2', 'proximoSlider3', 'proximoSlider4']),
    onFileSelected() {
      //this.selectedFile = event.target.files
      //console.log(this.selectedFile);
      let today = new Date();
      let day =  today.getDate();
      let month =  today.getMonth() + 1;
      let year =  today.getFullYear();
      this.file = this.$refs.file.files[0];
      this.fileName = this.$refs.file.files[0].name;
        console.log(this.file.type);
        console.log(this.file.name);
        console.log(day+'/'+month+'/'+year+'_'+this.razonSocial+'Escritura_Constitucion');
      if (this.file.type == "application/pdf" || this.file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileType = false;
        this.selectedFile = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.file);
      } else {
        console.log("Mostrar error");
        this.fileType = true;
        console.log(this.file);
        this.file = '';
        this.removeFile();
      }
    },
    onFileSelectedCV(event) {
      this.filecv = this.$refs.filecv.files[0];
      this.filecvName = this.$refs.filecv.files[0].name;
      console.log(this.filecv.name);
      console.log(this.filecv.type);

      if (this.filecv.type == "application/pdf" || this.filecv.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeCV = false;
        this.selectedFileCV = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.filecv);
        console.log(this.selectedFileCV);
      } else {
        console.log("Mostrar error");
        this.fileTypeCV = true;
        this.filecv = '';
        this.removeFile();
      }
    },
    onFileSelectedTM(event) {
      this.filetm = this.$refs.filetm.files[0];
      this.filetmName = this.$refs.filetm.files[0].name;
      //this.selectedFileTM = event.target.files
      console.log(this.filetm.name);
      console.log(this.filetm.type);

      if (this.filetm.type == "application/pdf" || this.filetm.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeTM = false;
        this.selectedFileTM = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.filetm);
      } else {
        console.log("Mostrar error");
        this.fileTypeTM = true;
        //this.removeFile();
      }
    },
    onFileSelectedSRL(event) {
      this.filesrl = this.$refs.filesrl.files[0];
      this.filesrlName = this.$refs.filesrl.files[0].name;
      console.log(this.filesrl.name);
      console.log(this.filesrl.type);

       if (this.filesrl.type == "application/pdf" || this.filesrl.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeSRL = false;
        this.selectedFileSRL = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.filesrl);
      } else {
        console.log("Mostrar error");
        this.fileTypeSRL = true;
        //this.removeFile();
      }
    },
    onFileSelectedSA(event) {
      this.filesa = this.$refs.filesa.files[0];
      this.filesaName= this.$refs.filesa.files[0].name;
      console.log(this.filesa.name);
      console.log(this.filesa.type);
      //alert(this.filesa.name);
      //$("div").append("Hello <b>world</b>!");
      
      if (this.filesa.type == "application/pdf" || this.filesa.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeSA = false;
        this.selectedFileSA = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.filesa);
      } else {
        console.log("Mostrar error");
        this.fileTypeSA = true;
        //this.removeFile();
      }
    },

    onFileSelectedBalance(event) {
      this.fileBalance = this.$refs.fileBalance.files[0];
      this.fileBalanceName = this.$refs.fileBalance.files[0].name;
      console.log(this.fileBalance.name);
      console.log(this.fileBalance.type);
      //alert(this.filesa.name);
      //$("div").append("Hello <b>world</b>!");
      
      if (this.fileBalance.type == "application/pdf" || this.fileBalance.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeBalance = false;
        this.selectedFileBalance = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.fileBalance);
      } else {
        console.log("Mostrar error");
        this.fileTypeBalance = true;
        //this.removeFile();
      }
    },
    onFileSelectedISRL(event) {
      this.fileISRL = this.$refs.fileISRL.files[0];
      this.fileISRLName = this.$refs.fileISRL.files[0].name;
      console.log(this.fileISRL.name);
      console.log(this.fileISRL.type);
      //alert(this.filesa.name);
      //$("div").append("Hello <b>world</b>!");
      
      if (this.fileISRL.type == "application/pdf" || this.fileISRL.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeISRL = false;
        this.selectedFileISRL = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.fileISRL);
      } else {
        console.log("Mostrar error");
        this.fileTypeISRL = true;
        //this.removeFile();
      }
    },
    onFileSelectedCapital(event) {
      this.fileCapital = this.$refs.fileCapital.files[0];
      this.fileCapitalName = this.$refs.fileCapital.files[0].name;
      console.log(this.fileCapitalName);
      console.log(this.fileCapital.type);
      //alert(this.filesa.name);
      //$("div").append("Hello <b>world</b>!");
      
      if (this.fileCapital.type == "application/pdf" || this.fileCapital.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeCapital = false;
        this.selectedFileCapital = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.fileCapital);
      } else {
        console.log("Mostrar error");
        this.fileTypeCapital = true;
        //this.removeFile();
      }
    },
    onFileSelectedFact(event) {
      this.fileFact = this.$refs.fileFact.files[0];
      this.fileFactName = this.$refs.fileFact.files[0].name;
      console.log(this.fileFactName);
      console.log(this.fileFact.type);
      //alert(this.filesa.name);
      //$("div").append("Hello <b>world</b>!");
      
      if (this.fileFact.type == "application/pdf" || this.fileFact.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypeFact = false;
        this.selectedFileFact = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.fileFact);
      } else {
        console.log("Mostrar error");
        this.fileTypeFact = true;
        //this.removeFile();
      }
    },

    onFileSelectedPatrocinanteUno(event) {
      this.filePatro = this.$refs.filePatro.files[0];
      this.filePatroName = this.$refs.filePatro.files[0].name;
      console.log(this.filePatroName);
      console.log(this.filePatro.type);
      //alert(this.filesa.name);
      //$("div").append("Hello <b>world</b>!");
      
      if (this.filePatro.type == "application/pdf" || this.filePatro.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypePatro = false;
        this.selectedFilePatro = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.filePatro);
      } else {
        console.log("Mostrar error");
        this.fileTypePatro = true;
        //this.removeFile();
      }
    },
    onFileSelectedPatrocinanteDos(event) {
      this.filePatroDos = this.$refs.filePatroDos.files[0];
      this.filePatroDosName = this.$refs.filePatroDos.files[0].name;
      console.log(this.filePatroDosName);
      console.log(this.filePatroDos.type);
      //alert(this.filesa.name);
      //$("div").append("Hello <b>world</b>!");
      
      if (this.filePatroDos.type == "application/pdf" || this.filePatroDos.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        this.fileTypePatroDos = false;
        this.selectedFilePatroDos = event.target.files
        console.log("Muestro el archivo adjuntado");
        console.log(this.filePatroDos);
      } else {
        console.log("Mostrar error");
        this.fileTypePatroDos = true;
        //this.removeFile();
      }
    },
    onFileChange(e) {
      
      this.fileImage = this.$refs.fileImage.files[0];
      this.fileImageName = this.$refs.fileImage.files[0].name;
      console.log(this.fileImage);

      if (this.fileImage.type == "image/png" || this.fileImage.type == "image/jpeg") {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
        this.fileTypeImage = false;
        this.fileImage = this.$refs.fileImage.files[0];
        console.log(this.fileImage);
      } else {
        console.log("Mostrar error");
        alert("¡Error! adjunte solo imágenes .png, .jpg");
        this.fileTypeImage = true;
        //this.removeFile();
      }
      
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
    onFileChanged (event) {
      const file = event.target.files[0]
      this.fileImage = this.$refs.fileImage.files[0];
      console.log(this.fileImage);
    },
    onUpload() {
      let fd = new FormData();
      fd.append('file', this.file)
      /*let params = new URLSearchParams();
      params.append('selectedFile', 'fileToUpload' );
      var inputFileImage = document.getElementById("fileToUpload");
      axios.post('http://postulacion.isc.cl/uploadfile', params,
      {
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
      });*/

      axios.post( this.url+'uploadfile',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadTM() {
      let fd = new FormData();
     // fd.append('filetm', this.filetm)
      
      for( var i = 0; i < this.files.length; i++ ){
        let file = this.files[i];

        fd.append('filetm[' + i + ']', file);
      }

      axios.post( this.url+'uploadfiletm',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },
    onUploadCV() {
      let fd = new FormData();
      fd.append('filecv', this.filecv)
      axios.post( this.url+'uploadfilecv',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadSRL() {
      let fd = new FormData();
      fd.append('filesrl', this.filesrl)
      axios.post( this.url+'uploadfilesrl',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadSA() {
      let fd = new FormData();
      fd.append('filesa', this.filesa)
      axios.post( this.url+'uploadfilesa',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFileImage() {
      let fd = new FormData();
      fd.append('fileImage', this.fileImage)
      axios.post( this.url+'uploadfileimage',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFileBalance() {
      let fd = new FormData();
      fd.append('fileBalance', this.fileBalance)
      axios.post( this.url+'uploadfilebalance',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFileISRL() {
      let fd = new FormData();
      fd.append('fileISRL', this.fileISRL)
      axios.post( this.url+'uploadfileisrl',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFileCapital() {
      let fd = new FormData();
      fd.append('fileCapital', this.fileCapital)
      axios.post( this.url+'uploadfilecapital',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFileFact() {
      let fd = new FormData();
      fd.append('fileFact', this.fileFact)
      axios.post( this.url+'uploadfilefact',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFilePatro() {
      let fd = new FormData();
      fd.append('filePatro', this.filePatro)
      axios.post( this.url+'uploadfilePatroncinanteUno',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFilePatroDos() {
      let fd = new FormData();
      fd.append('filePatroDos', this.filePatroDos)
      axios.post( this.url+'uploadfilePatroncinanteDos',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
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
    removeFileBalance: function (e) {
      this.selectedFileBalance = '';
    },
    removeFileISRL: function (e) {
      this.selectedFileISRL = '';
    },
    removeFileCapital: function (e) {
      this.selectedFileCapital = '';
    },
    removeFileFact: function (e) {
      this.selectedFileFact = '';
    },
    removeFilePatro: function (e) {
      this.selectedFilePatro = '';
    },
    removeFilePatroDos: function (e) {
      this.selectedFilePatroDos = '';
    },
    addTel() {

      if(this.inputsTel.length <= 2){

            this.inputsTel.push({ telEx: '' });
            this.inputsTel.reverse();
           
      }
            //mostrarAdd = false;
            
        },
    removeTel(index) {
      this.inputsTel.splice(index, 1);
    },
    addEmail() {   
        if(this.inputsEmail.length <= 2){
          this.inputsEmail.push({ email: '' });
          this.inputsEmail.reverse();
        }
    },
    removeEmail(index) {
      this.inputsEmail.splice(index, 1);
    },
    getListadoRegion: function(){
      Vue.axios.get(this.url+'listarRegion').then((response) => {
        console.log(response);
        this.listadoRegiones = response.data;
        console.log(this.listadoRegiones);
      })
    },

    getListadoProvincia: function(){
      let idReg = this.regionSeleccionada;
      
      Vue.axios.get(this.url+'listarProvincias/'+idReg).then((response) => {
        this.provincias = response.data;
        console.log(this.provincias);
      })
    
    },

    getListadoComuna: function(){
       let idComuna = this.provinciaSeleccionada;

      Vue.axios.get(this.url+'listarComuna/'+idComuna).then((response) => {
        this.comunas = response.data;
        console.log(this.comunas);
      })
    
    },

    getListadoRango: function(){
      Vue.axios.get(this.url+'listarRango').then((response) => {
        this.rangos = response.data;
        console.log(this.rangos);
      })
    
    },

    getListadoGiro: function(){
      Vue.axios.get(this.url+'listarGiro').then((response) => {
        this.giros = response.data;
        console.log(this.giros);
      })
    
    },

    getListadoCategoria: function(){
      Vue.axios.get(this.url+'listarCategoria').then((response) => {
        this.categorias = response.data;
        console.log(this.categorias);
      })
    
    },

    isEmailValid: function() {
      return (this.emails == "")? "" : (this.reg.test(this.emails)) ? 'has-success' : 'has-error';
    },

    //Composición Accionaria Methods
    editarPorcentaje: function (indice){
      this.showModalEditar();
/*console.log(this.juridicoEnArray);
      if(this.juridicoEnArray == true){
        this.porcentaje = this.composicion[indice].porcentaje;
        this.rutPersonaJuridica = this.composicion[indice].rutPersonaJuridica;
        this.razonSocial = this.composicion[indice].nombre;
        this.disabled = 1;
        this.editPor = true;
        //this.juridicoEnArray = false;
      }else{*/
console.log(this.composicion[indice]);
        this.porcentaje = this.composicion[indice].porcentaje;
        this.rutPersonaJuridica = this.composicion[indice].rutPersonaJuridica + '-' +this.composicion[indice].dvComp;
        this.razonSocial = this.composicion[indice].nombre;
        this.disabled = 1;
        this.editPor = true;

     // }
       
     
},

    /*editarRol: function (indice){
      console.log("editarRol");
      this.showModalEditarCchc();
      this.rol = this.composicionCchc[indice].rol;
      this.rutComp = this.composicionCchc[indice].rutComp;
      this.disabled = 1;
      this.editRol = true;
    },*/

    eliminarComposicion: function (indice){

      var opcion = confirm("¿Desea eliminar a esta persona?");
        if (opcion == true) {
            this.composicion.splice(indice, 1);
            this.rutPersonaJuridica = '';
            this.razonSocial = '';
            this.porcentaje = '';
            this.disabled = 0;
            this.eliminarAux = true;
      } else {
         console.log("Chao");
      }
  //this.rutComp = this.composicion[indice].rutComp;
 
      //if(this.respuesta == true){
        
        /*this.composicion.splice(indice, 1);
        this.rutComp = '';
        this.razonSocial = '';
        this.porcentaje = '';
        this.disabled = 0;*/
     /* }else{
        console.log("No eliminar");
        this.showModalEliminar();
        
      }*/
          
     
},

    eliminarComposicionCchc: function (indice){
      if(this.respuestaCchc == true){
        this.composicionCchc.splice(indice, 1);
        this.rutComp = '';
        this.nombreCchc = '',
        this.razonSocial = '';
        this.rol = '';
        this.disabled = 0;
        this.eliminarAuxCchc = true;
      }else{
        this.showModalEliminarCchc();
        
      }
    },

    eliminarComposicionCobranza: function (indiceCob){
      if(this.respuestaCobranza == true){
        this.composicionCobranza.splice(indiceCob, 1);
        this.rutComp = '';
        this.nombreCobranza = '',
        this.razonSocial = '';
        this.rol = '';
        this.disabled = 0;
        this.eliminarAuxCobranza = true;
      }else{
        this.showModalEliminarCobranza();
        
      }
    },
    showModalCrear(){
      this.$refs['modal-crear'].show();
    },

    showModalCrearCchc(){
      this.$refs['modal-crear-cchc'].show();
    },

    showModalCrearCobranza(){
      this.$refs['modal-crear-cobranza'].show();
    },

    aceptarCreacion(){
   let dvExtraido = this.rutPersonaJuridica.substr(9,1);
   let rutSinDv = this.rutPersonaJuridica.substr(0,8);

   this.formRegistrarPersona = true;
   this.$refs['modal-crear'].hide();
   this.rutPersonaJuridicaNueva = rutSinDv;
   this.nombrePersonaJuridicaNueva = this.razonSocial;
   this.dvPersonaJuridicaNueva = dvExtraido;


   this.rutPersonaJuridica = '';
   this.razonSocial = '';
   
},

    aceptarCreacionCchc(){
     let dvExtraido = this.rutPersonaJuridicaCchc.substr(9,1);
     let rutSinDv = this.rutPersonaJuridicaCchc.substr(0,8);

     this.formRegistrarPersonaCchc = true;
     this.$refs['modal-crear-cchc'].hide();
     this.rutPersonaJuridicaNuevaCchc = rutSinDv;
     this.nombrePersonaJuridicaNuevaCchc = this.nombreCchc;
     this.dvPersonaJuridicaNuevaCchc = dvExtraido;


     this.rutPersonaJuridicaCchc = '';
     this.nombreCchc = '';

     this.next1();
     
},

aceptarCreacionCobranza(){
     let dvExtraido = this.rutPersonaJuridicaCobranza.substr(9,1);
     let rutSinDv = this.rutPersonaJuridicaCobranza.substr(0,8);

     this.formRegistrarPersonaCobranza = true;
     this.$refs['modal-crear-cobranza'].hide();
     this.rutPersonaJuridicaNuevaCobranza = rutSinDv;
     this.nombrePersonaJuridicaNuevaCobranza = this.nombreCobranza;
     this.dvPersonaJuridicaNuevaCobranza = dvExtraido;


     this.rutPersonaJuridicaCobranza = '';
     this.razonSocial = '';

     
     this.sliderNext1();
     
},

    cancelarCreacion(){
      this.formRegistrarPersona = false;
      //this.rutComp = '';
      this.rutPersonaJuridica = '';
      this.razonSocial = '';
      this.porcentaje = '';
      this.disabled = 0;
      this.$refs['modal-crear'].hide();

    },

      cancelarCreacionCchc(){
        this.formRegistrarPersonaCchc = false;
        this.rutComp = '';
        //this.razonSocialComp = '';
        this.rol = '';
        this.disabled = 0;
        this.$refs['modal-crear-cchc'].hide();

      },

      cancelarCreacionCobranza(){
        this.formRegistrarPersonaCobranza = false;
        this.rutComp = '';
        //this.razonSocialComp = '';
        this.rol = '';
        this.disabled = 0;
        this.$refs['modal-crear-cobranza'].hide();

      },

    showModalEliminar(){
          this.$refs['modal-eliminar'].show();
    },

    showModalEliminarCchc(){
          this.$refs['modal-eliminar-Cchc'].show();
    },

    showModalEliminarCobranza(){
          this.$refs['modal-eliminar-Cobranza'].show();
    },

   /* aceptarEliminacion(){
          this.$refs['modal-eliminar'].hide();
          this.respuesta = true;
          this.eliminarComposicion();
    },*/

    aceptarEliminacionCchc(){
          this.$refs['modal-eliminar-Cchc'].hide();
          this.respuestaCchc = true;
          this.eliminarComposicionCchc();
    },

    aceptarEliminacionCobranza(){
          this.$refs['modal-eliminar-Cobranza'].hide();
          this.respuestaCobranza = true;
          this.eliminarComposicionCobranza();
    },

    cancelarEliminacion(){
      this.$refs['modal-eliminar'].hide();
      this.respuesta = false;

    },

    cancelarEliminacionCchc(){
        this.$refs['modal-eliminar-Cchc'].hide();
        this.respuestaCchc = false;

      },

      cancelarEliminacionCobranza(){
        this.$refs['modal-eliminar-Cobranza'].hide();
        this.respuestaCobranza = false;

      },

    showModalEditar() {
        this.$refs['modal-editar'].show();
    },

    showModalEditarCchc() {
        this.$refs['modal-editar-Cchc'].show();
    },

    aceptarEdicion(){
          this.$refs['modal-editar'].hide();
          this.setFocus();
    },

    aceptarEdicionCchc(){
          this.$refs['modal-editar-Cchc'].hide();
          this.setFocus();
    },

    cancelarEdicion(){
        this.$refs['modal-editar'].hide();
        this.rutComp = '';
        this.razonSocialComp = '';
        this.porcentaje = '';
        this.disabled = 0;
        this.editPor = false;

    },

    cancelarEdicionCchc(){
        this.$refs['modal-editar-Cchc'].hide();
        this.rutComp = '';
        this.razonSocialComp = '';
        this.rol = '';
        this.disabled = 0;
        this.editRol = false;

    },

    okAyuda(){
      this.$refs['modal-ayuda-patrocinante'].hide();
    },

    showAyuda(){
      this.$refs['modal-ayuda-patrocinante'].show();
    },

    okAyudaPatrocinador(){
      this.$refs['modal-ayuda-patrocinador'].hide();
    },

    showAyudaPatrocinador(){
      this.$refs['modal-ayuda-patrocinador'].show();
    },

    setFocus(){
        this.$refs.porcentaje.focus();
    },
 
    enviarPostulacion: function(){
        this.guardar();
        let obj = JSON.stringify(this.personaJuridica);
    //console.log(obj);
        Vue.axios.post(this.url+'personaJuridica', obj).then((response) => {
          alert("Postulacion Enviada");
          console.log(response.data);
          //console.log(response);
          //this.resultadoConsulta();
          //this.$store.state.pasarResultado = true;
          //this.$router.replace('/resultado-consulta');
        }).catch(function (error) {
          console.log("AXIOS ERROR: ", error);
          });

    },

    sendFile: function() {
      let obj = JSON.stringify(this.personaJuridica);
      console.log(obj);
    },

    itemClicked(item) {
      console.log(item.detId);
      this.patrocinanteSelec = item.perId;
      this.perIdPatrocinante = item.detId;
      this.nombrePatro = item.nombre + ' ' + item.rut + '-' + item.dv + ' ' + item.camara;
      this.mostrarListaPatrocinanteScroll = 'listaHovHidden';
   },

    itemClicked2(item) {
       //console.log(item.perId);
        
        
        if(this.patrocinanteSelec != item.perId){
          this.patrocinanteSelec2 = item.perId;
          this.perIdPatrocinante2 = item.detId;
          this.nombrePatrocinante2 = item.nombre + ' ' + item.rut + '-' + item.dv + ' ' + item.camara;
          this.mostrarListaPatrocinanteScroll2 = 'listaHovHidden';
        }else{
          alert("No puede ser el mismo patrocinante");
          this.mostrarListadoPatrocinante2=false;
          this.nombrePatrocinante2 = '';
        }
        
    },

 itemClickedPatrocinador(item) {
   console.log(item.perId);
   
    this.patrocinadorSelec = item.perId;
    this.perIdPatrocinador = item.perId;
    this.nombrePatrocinador = item.nombre + ' ' + item.apePat + ' ' + item.rut + '-' + item.dv;
    this.mostrarListaPatrocinadorScroll = 'listaHovHidden'; 
   
    
        
 },

 itemClickedPatrocinador2(item) {
   console.log(item.perId);
    this.patrocinadorSelec2 = item.perId;
    this.perIdPatrocinador2 = item.perId;
    this.nombrePatrocinador2 = item.nombre + ' ' + item.apePat + ' ' + item.rut + '-' + item.dv;
    this.mostrarListaPatrocinadorScroll2 = 'listaHovHidden'; 
        
 },
 

    getListarPatrocinante: function(){
      console.log('Buscando...');
      Vue.axios.get(this.url+'listarPatrocinante').then((response) => {
      this.patrocinantes = response.data;
      });
      this.mostrarListaPatrocinanteScroll='listaHov';
      this.mostrarListaPatrocinadorScroll='listaHovHidden';
      this.mostrarListadoPatrocinante=true;
      this.nombrePatrocinador='';
      this.mostrarListadoPatrocinador=false;

    },

    getListarPatrocinante2: function(){
      console.log('Buscando...');
      Vue.axios.get(this.url+'listarPatrocinante').then((response) => {
      this.patrocinantes2 = response.data;
      });

      this.mostrarListaPatrocinanteScroll2='listaHov';
      this.mostrarListaPatrocinadorScroll2='listaHovHidden';
      this.mostrarListadoPatrocinante2=true;
      this.nombrePatrocinador2='';
      this.mostrarListadoPatrocinador2=false;

    },

    getListarPatrocinador: function(){
      console.log("Buscando Patrocinador...");
      let idPatrocinante = this.patrocinanteSelec;

      if(idPatrocinante !='' && this.nombrePatro !=''){

      Vue.axios.get(this.url+'listarPatrocinador/'+idPatrocinante).then((response) => {
      this.patrocinadores = response.data;
      }).catch(function (error) {
        // handle error
      console.log(error);
      });

      this.mostrarListaPatrocinadorScroll='listaHov';
      this.mostrarListaPatrocinanteScroll='listaHovHidden';
      this.mostrarListadoPatrocinador=true;
      this.mostrarListadoPatrocinante=false;

      }else{
        console.log("Debe introducir un patrocinante");
        this.mostrarListadoPatrocinador=false;
        this.mostrarListaPatrocinadorScroll='listaHovHidden';
      }
      

    },

    getListarPatrocinador2: function(){
      console.log("Buscando Patrocinador2...");
      let idPatrocinante = this.patrocinanteSelec2;

      if(idPatrocinante !='' && this.nombrePatrocinante2 !=''){

      Vue.axios.get(this.url+'listarPatrocinador/'+idPatrocinante).then((response) => {
      this.patrocinadores2 = response.data;
      this.mostrarListaPatrocinadorScroll2='listaHov';
      this.mostrarListaPatrocinanteScroll2='listaHovHidden';
      this.mostrarListadoPatrocinador2=true;
      this.mostrarListadoPatrocinante2=false;
      }).catch(function (error) {
        // handle error
      console.log(error);
      });

      }else{
        console.log("Debe introducir un patrocinante");
        this.mostrarListadoPatrocinador2=false;
        this.mostrarListaPatrocinadorScroll2='listaHovHidden';
      }
      
    },

    cerrarScrollPostulacion(){
      console.log("Le estoy dando click");
      this.mostrarListadoPatrocinador2=false;
      this.mostrarListadoPatrocinante2=false;
      this.mostrarListadoPatrocinador=false;
      this.mostrarListadoPatrocinante=false;
    },

    validarTelefono(i) {
      this.validationNumbersOnly();
      let telefono = this.telefonosArray[i];
      let expreg = /^(\+?56)?(\s?)(0?9)(\s?)[987654]\d{7}$/;
      
      if(expreg.test(telefono)){
        this.formatoTelefono = false;
      }
      
      else {
        this.formatoTelefono = true;
      }

    },

    getPersonaJuridica: function(){
     
     /*if(this.composicion.length > 0){
       //for(var i=0; i< this.listaPersonaJuridica.length; i++){
        for(var k = 0; k < this.composicion.length; k++) {
          console.log(this.composicion[k].rutPersonaJuridica);
          console.log(this.rutPersonaJuridica);
          if(this.composicion[k].rutPersonaJuridica == this.rutPersonaJuridica){
              console.log("existe");
              return this.listaPersonaJuridica;
          }else{
             console.log('Buscando...');
            Vue.axios.get('http://postulacion.isc.cl/listarJuridicos').then((response) => {
      this.listaPersonaJuridica= response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridica = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
          }
        }
      //}
     }else{

       Vue.axios.get('http://postulacion.isc.cl/listarJuridicos').then((response) => {
      this.listaPersonaJuridica= response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridica = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';

     }*/
      
      console.log('Buscando...');
      Vue.axios.get(this.url+'listarJuridicos').then((response) => {
      this.listaPersonaJuridica= response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridica = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
     

    },

     getPersonaJuridicaEmpresa: function(){
      console.log('Buscando...');
      Vue.axios.get(this.url+'listarJuridicos').then((response) => {
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
     

    },

    itemClickedPersonaJuridica(item) {
      //this.rutComp = item.rut;
      this.rutPersonaJuridica = item.rut +'-'+ item.dv;
      this.razonSocial = item.nombre;
      this.personasJuridicaId = item.perId;
      
      this.mostrarListaPersonaJuridicaScroll = 'listaHovHidden';
      this.mostrarListadoPersonaJuridica =false;
     
      
  },

  itemClickedPersonaJuridicaEmpresa(item){
    console.log(item);
    this.empresa = item.nombre;
    this.empresaPerId = item.perId;
    this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHovHidden'
    this.mostrarListadoPersonaJuridicaEmpresa = false;
  },

  cerrarScrollPersonaJuridicaEmpresa(){
    this.mostrarListadoPersonaJuridicaEmpresa = false;
  },

  cerrarScrollPersonaJuridica(){
    this.mostrarListadoPersonaJuridica = false;
  },

  cerrarCreacionPersonaJuridica(){
    this.formRegistrarPersona = false;
  },

  crearPersonaJuridicaNueva(){

this.arrAux.push({
        rut: this.rutPersonaJuridicaNueva,
        nombre: this.nombrePersonaJuridicaNueva,
        porcentaje: this.porcentaje,
        dv: this.dvPersonaJuridicaNueva
        
      });
this.composicion.push({
        rutPersonaJuridica: this.rutPersonaJuridicaNueva,
        nombre: this.nombrePersonaJuridicaNueva,
        porcentaje: this.porcentaje,
        dvComp: this.dvPersonaJuridicaNueva
        
      });

      this.rutPersonaJuridica = '';
      this.razonSocial = '';
      this.porcentaje = '';
      this.juridicoEnArray = true;
      this.formRegistrarPersona = false;

         
      
  },

    getPersonaJuridicaCcch: function(){
      
      console.log('Buscando...');
      Vue.axios.get(this.url+'listarJuridicos').then((response) => {
      this.listaPersonaJuridica = response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridicaCchc = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
     

    },

    getPersonaJuridicaCobranza: function(){
      
      console.log('Buscando...');
      Vue.axios.get(this.url+'listarJuridicos').then((response) => {
      this.listaPersonaJuridica = response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridicaCobranza = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
     

    },

  itemClickedPersonaJuridicaCchc(item) {
      //this.rutComp = item.rut;
      this.rutPersonaJuridicaCchc = item.rut +'-'+ item.dv;
      this.nombreCchc = item.nombre;
      this.mostrarListaPersonaJuridicaScroll = 'listaHovHidden';
      this.mostrarListadoPersonaJuridicaCchc =false;
  },

  itemClickedPersonaJuridicaCobranza(item) {
      //this.rutComp = item.rut;
      this.rutPersonaJuridicaCobranza = item.rut +'-'+ item.dv;
      this.nombreCobranza = item.nombre;
      this.mostrarListaPersonaJuridicaScroll = 'listaHovHidden';
      this.mostrarListadoPersonaJuridicaCobranza =false;
  },

  cerrarScrollPersonaJuridicaCchc(){
    this.mostrarListadoPersonaJuridicaCchc = false;
    this.mostrarListadoPersonaJuridicaCobranza = false;
  },

  cerrarScrollPersonaJuridicaCobranza(){
    this.mostrarListadoPersonaJuridicaCobranza = false;
  },

  cerrarCreacionPersonaJuridicaCchc(){
    this.formRegistrarPersonaCchc = false;
  },


  crearPersonaJuridicaNuevaCchc(){

    /*this.listaPersonaJuridicaCchc.push({
            rut: this.rutPersonaJuridicaCchc,
            nombre: this.nombreCchc,
            rol: this.rol,
            //dv: this.dvPersonaJuridicaNueva
            
          });*/
    this.arrAuxCchc.push({
        rut: this.rutPersonaJuridicaNuevaCchc,
        nombre: this.nombrePersonaJuridicaNuevaCchc,
        dv: this.dvPersonaJuridicaNuevaCchc,
        nombres: this.nombreCchc,
        apellido1:  this.first_lastname,
        apelido2: this.second_lastname,
        email: this.emailcchc,
        fechaNuevaCchc: this.dateCchc,
        phone: this.phone,
        nationality: this.nationality,
        sexo: this.sex,
        estadoCivil: this.estadoCivil,
        nivelDeEstudios: this.nivelDeEstudios,
        profesion: this.profesion,
        casaEstudios: this.casaEstudios,
        cargo: this.cargo,
        direccionPart: this.direccionPart,
        numeroCchc: this.numeroCchc,
        dpto: this.dpto,
        country: this.country,
        //Data para Selección de comités
        contratistasGenerales: this.contratistasGenerales,
        obrasInfra: this.obrasInfra,
        conseciones: this.conseciones,
        inmobiliario: this.inmobiliario,
        vivienda: this.vivienda,
        proveedores: this.proveedores,
        industriales: this.industriales,
        especialidades: this.especialidades 
        
      });
      
      console.log(this.arrAuxCchc);

    this.composicionCchc.push({
        rutPersonaJuridicaCchc: this.rutPersonaJuridicaNuevaCchc,
        nombre: this.nombrePersonaJuridicaNuevaCchc,
        dvComp: this.dvPersonaJuridicaNuevaCchc,
        nombres: this.nombreCchc,
        apellido1:  this.first_lastname,
        apelido2: this.second_lastname,
        email: this.emailcchc,
        fechaNuevaCchc: this.dateCchc,
        phone: this.phone,
        nationality: this.nationality,
        sexo: this.sex,
        estadoCivil: this.estadoCivil,
        nivelDeEstudios: this.nivelDeEstudios,
        profesion: this.profesion,
        casaEstudios: this.casaEstudios,
        cargo: this.cargo,
        direccionPart: this.direccionPart,
        numeroCchc: this.numeroCchc,
        dpto: this.dpto,
        country: this.country,
        //Data para Selección de comités
        contratistasGenerales: this.contratistasGenerales,
        obrasInfra: this.obrasInfra,
        conseciones: this.conseciones,
        inmobiliario: this.inmobiliario,
        vivienda: this.vivienda,
        proveedores: this.proveedores,
        industriales: this.industriales,
        especialidades: this.especialidades 

    });

          this.rutPersonaJuridicaCchc = '';
          //this.razonSocial = '';
          this.juridicoEnArray = true;
          this.formRegistrarPersonaCchc = false;
          this.rutPersonaJuridicaNuevaCchc = '';
          this.nombrePersonaJuridicaNuevaCchc = '';
          this.dvPersonaJuridicaNuevaCchc = '';
          this.nombreCchc = '';
          this.first_lastname = '';
          this.second_lastname = '';
          this.emailcchc = '';
          this.dateCchc = '';
          this.phone = '',
          this.nationality = '';
          this.sex = '';
          this.estadoCivil = '';
          this.nivelDeEstudios = '';
          this.profesion = '';
          this.casaEstudios = '';
          this.cargo = '';
          this.direccionPart = '';
          this.numeroCchc = '';
          this.dpto = '';
          this.country = '';
          //Data para Selección de comités
          this.contratistasGenerales = '';
          this.obrasInfra = '';
          this.conseciones = '';
          this.inmobiliario = '';
          this.vivienda = '';
          this.proveedores = '';
          this.industriales = '';
          this.especialidades 
  },

  crearPersonaJuridicaNuevaCobranza(){

    /*this.listaPersonaJuridicaCchc.push({
            rut: this.rutPersonaJuridicaCchc,
            nombre: this.nombreCchc,
            rol: this.rol,
            //dv: this.dvPersonaJuridicaNueva
            
          });*/
    this.arrAuxCobranza.push({
        rut: this.rutPersonaJuridicaNuevaCobranza,
        nombre: this.nombrePersonaJuridicaNuevaCobranza,
        dv: this.dvPersonaJuridicaNuevaCobranza,
        nombres: this.nombreCobranza,
        apellido1:  this.firstLastnameCobranza,
        apelido2: this.seconLastnameCobranza,
        email: this.emailCobranza,
        fechaNuevaCchc: this.dateCobranza,
        phone: this.phone,
        nationality: this.nationality,
        sexo: this.sex,
        estadoCivil: this.estadoCivil,
        nivelDeEstudios: this.nivelDeEstudios,
        profesion: this.profesion,
        casaEstudios: this.casaEstudios,
        cargo: this.cargo,
        direccionPart: this.direccionPart,
        numeroCchc: this.numeroCchc,
        dpto: this.dpto,
        country: this.country,
        //Data para Selección de comités
        contratistasGenerales: this.contratistasGenerales,
        obrasInfra: this.obrasInfra,
        conseciones: this.conseciones,
        inmobiliario: this.inmobiliario,
        vivienda: this.vivienda,
        proveedores: this.proveedores,
        industriales: this.industriales,
        especialidades: this.especialidades 
        
      });
      
      console.log(this.arrAuxCobranza);

    this.composicionCobranza.push({
        rutPersonaJuridicaCobranza: this.rutPersonaJuridicaNuevaCobranza,
        nombre: this.nombrePersonaJuridicaNuevaCobranza,
        dvComp: this.dvPersonaJuridicaNuevaCobranza,
        nombres: this.nombreCobranza,
        apellido1:  this.first_lastname,
        apelido2: this.second_lastname,
        email: this.emailcchc,
        fechaNuevaCchc: this.dateCchc,
        phone: this.phone,
        nationality: this.nationality,
        sexo: this.sex,
        estadoCivil: this.estadoCivil,
        nivelDeEstudios: this.nivelDeEstudios,
        profesion: this.profesion,
        casaEstudios: this.casaEstudios,
        cargo: this.cargo,
        direccionPart: this.direccionPart,
        numeroCchc: this.numeroCchc,
        dpto: this.dpto,
        country: this.country,
        //Data para Selección de comités
        contratistasGenerales: this.contratistasGenerales,
        obrasInfra: this.obrasInfra,
        conseciones: this.conseciones,
        inmobiliario: this.inmobiliario,
        vivienda: this.vivienda,
        proveedores: this.proveedores,
        industriales: this.industriales,
        especialidades: this.especialidades 

    });

          this.rutPersonaJuridicaCchc = '';
          //this.razonSocial = '';
          //this.rol = '';
          this.juridicoEnArray = true;
          this.formRegistrarPersonaCchc = false;
          this.rutPersonaJuridicaNuevaCchc = '';
          this.nombrePersonaJuridicaNuevaCchc = '';
          //rol: this.rol,
          this.dvPersonaJuridicaNuevaCchc = '';
          this.nombreCchc = '';
          this.first_lastname = '';
          this.second_lastname = '';
          this.emailcchc = '';
          this.dateCchc = '';
          this.phone = '',
          this.nationality = '';
          this.sex = '';
          this.estadoCivil = '';
          this.nivelDeEstudios = '';
          this.profesion = '';
          this.casaEstudios = '';
          this.cargo = '';
          this.direccionPart = '';
          this.numeroCchc = '';
          this.dpto = '';
          this.country = '';
          //Data para Selección de comités
          this.contratistasGenerales = '';
          this.obrasInfra = '';
          this.conseciones = '';
          this.inmobiliario = '';
          this.vivienda = '';
          this.proveedores = '';
          this.industriales = '';
          this.especialidades 
  },

    checkForm: function () {
      console.log(this.camposCorrectos);
      console.log(this.rut);
      console.log(this.razonSocial);
      console.log(this.date);
      console.log(this.giroModel);
      console.log(this.activity);
      console.log(this.category);
      console.log(this.selectedFile.length);
      console.log(this.fileType);
      console.log(this.selectedFileCV.length);
      console.log(this.fileTypeCV);
      console.log(this.calle);
      console.log(this.numero);
      console.log((this.razonSocialJuridica !='' && this.date !='' && this.giroModel !='' 
      && this.activity !='' && this.category != '' && this.selectedFile.length > 0 
      && this.fileType == false && this.selectedFileCV.length > 0 
      && this.fileTypeCV == false && this.calle !='' && this.numero !=''));


      if (this.razonSocialJuridica !='' && this.date !='' && this.giroModel !='' 
      && this.activity !='' && this.category != '' && this.selectedFile.length > 0 
      && this.fileType == false && this.selectedFileCV.length > 0 
      && this.fileTypeCV == false && this.calle !='' && this.numero !='') {
        this.camposCorrectos = true;
        return true;
      }


      if(this.regionSeleccionada !='' && this.provinciaSeleccionada !='' 
        && this.comunaSeleccionada !='' && this.telefonosArray[0] != '' 
        && this.emailsArray[0] != '' && this.tipoTelArray != ''){
          this.camposCorrectosDir = true;
          return true;
      }

      this.errorRut = [];

      if (!this.rut) {
        this.errorRut.push('El RUT es obligatorio.');
        
      }
      
      if (this.razonSocialJuridica == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Razón Social es obligatorio.');
        
      }

      if (this.date == '') {
        this.camposCorrectos = false;
        this.errorRut.push('La fecha es obligatoria.');
        
      }

      if (this.giroModel == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Giro es obligatorio.');
        
      }


      if (this.activity == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Actividad es obligatorio.');
        
      }

      if (this.category == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Categoría es obligatorio.');
        
      }

      if (this.file == '' && this.selectedFile.length == 0) {
        this.camposCorrectos = false;
        this.errorRut.push('Escritura Constitución es obligatorio.');
        
      }

      if (this.filecv == '' && this.selectedFileCV.length == 0) {
        this.camposCorrectos = false;
        this.errorRut.push('El CV es obligatorio.');
        
      }

      if (this.calle == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Calle es obligatorio.');
        
      }

      if (this.numero == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Número es obligatorio.');
        
      }

      if (this.regionSeleccionada == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Región es obligatorio.');
        
      }

      if (this.provinciaSeleccionada == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Provincia es obligatorio.');
        
      }

      if (this.comunaSeleccionada == '') {
        this.camposCorrectos = false;
        this.errorRut.push('El campo Comuna es obligatorio.');
        
      }

      if (this.calle == '') {
        this.camposCorrectosDir = false;
        this.errorRut.push('El campo calle es obligatorio.');
        
      }

      if (this.regionSeleccionada == '') {
        this.camposCorrectosDir = false;
        this.errorRut.push('El campo Región es obligatorio.');
        
      }

      if (this.provinciaSeleccionada == '') {
        this.camposCorrectosDir = false;
        this.errorRut.push('El campo provincia es obligatorio.');
        
      }

      if (this.comunaSeleccionada == '') {
        this.camposCorrectosDir = false;
        this.errorRut.push('El campo comuna es obligatorio.');
        
      }

      if (this.emailsArray == '') {
        this.camposCorrectosDir = false;
        this.errorRut.push('El campo email es obligatorio.');
        
      }

      if (this.tipoTelArray == '') {
        this.camposCorrectosDir = false;
        this.errorRut.push('El campo Tipo teléfono es obligatorio.');
        
      }

      if (this.telefonosArray == '') {
        this.camposCorrectosDir = false;
        this.errorRut.push('El campo Tipo teléfono es obligatorio.');
        
      }

      

      this.camposCorrectos = false;
      //alert(this.camposCorrectos);
    },

    checkformSecond() {
      this.camposCorrectos = false;

      console.log("Segunda pestaña");
      console.log(this.selectedFileBalance.length);
      console.log(this.fileTypeBalance);
      console.log(this.selectedFileISRL.length);
      console.log(this.fileTypeISRL);
      console.log(this.selectedFileCapital);
      console.log(this.fileTypeCapital);
      console.log(this.selectedFileCapital.length);
      console.log(this.fileTypeCapital);
      console.log(this.selectedFileFact.length);
      console.log(this.fileTypeFact);
      console.log(this.selectedFileBalance.length > 0 && this.fileTypeBalance == false 
        && this.selectedFileISRL.length > 0 && this.fileTypeISRL == false 
        && this.selectedFileCapital.length > 0 && this.fileTypeCapital == false  
        && this.selectedFileFact.length > 0 && this.fileTypeFact == false 
        && this.volumenFacturado != '' && this.patrimonio != '');


      if (this.dateValidation == true) {
        if(this.selectedFileBalance.length > 0 && this.fileTypeBalance == false
          && this.selectedFileISRL.length > 0 && this.fileTypeISRL == false 
          && this.selectedFileCapital.length > 0 && this.fileTypeCapital == false  
          && this.selectedFileFact.length > 0 && this.fileTypeFact == false 
          && this.volumenFacturado != '' && this.patrimonio != ''){
          this.camposCorrectos = true;
          return true;
        }

        if (this.fileCapital == '' && this.selectedFileCapital.length == 0) {
          this.camposCorrectosDir = false;
          this.errorRut.push('El campo Capital es obligatorio.');
        }
      } else if (this.dateValidation == false) {
          if(this.selectedFileISRL.length > 0 && this.fileTypeISRL == false 
            && this.selectedFileCapital.length > 0 && this.fileTypeCapital == false  
            && this.selectedFileFact.length > 0 && this.fileTypeFact == false 
            && this.volumenFacturado != '' && this.patrimonio != ''){
            this.camposCorrectos = true;
            return true;
          }

          if (this.fileCapital == '' && this.selectedFileCapital.length == 0) {
            this.camposCorrectosDir = false;
            this.errorRut.push('El campo Capital es obligatorio.');
          }
        }
    },

    primeraMayuscula(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    siguiente(){
      this.guardar();
      this.camposCorrectos = false;
      this.checkForm();
      if(this.camposCorrectos == true && this.rutNoValido == true){
        //Fecha Constitución
        var date = new Date($('#date').val());
        let dayDate = date.getDate();
        let monthDate = date.getMonth() + 1;
        let yearDate = date.getFullYear();
        //alert([yearDate].join('/'));
        //alert([monthDate].join('/'));

        //Fecha de hoy
        let today = new Date();
        let day =  today.getDate();
        let month =  today.getMonth() + 1;
        let year =  today.getFullYear();
        let completeDate = year+''+month+''+day;
        let fecha = [year, month, day].join('-');

        console.log(fecha);
        let resultDate = moment(fecha);
        let newDate = moment(this.date);
        console.log("Moment: ");
        console.log(resultDate.diff(newDate, 'days'));
        console.log("Fecha Constitución: ");
        console.log(moment(this.date));
        console.log("Fecha de hoy: ");
        console.log(moment(resultDate));

        if (resultDate.diff(newDate, 'days') < 365) {
          this.dateValidation = false;
        } else {
          this.dateValidation = true;
        }

        this.guardar();
        this.form2();
        this.onUpload();
        this.onUploadTM();
        this.onUploadCV();
        this.onUploadSRL();
        this.onUploadSA();
        this.onUploadFileImage();
      }
          
      else {
        alert("Debe completar campos requeridos");
      }
    },            

    siguiente2(){
      this.guardar();
      this.camposCorrectos = false;
      this.checkformSecond();
      if(this.camposCorrectos == true && this.rutNoValido == true){
          
          this.guardar();
          this.form3();
        }
          
        else {
          alert("Debe completar campos requeridos");
        }
    },

    siguiente3(){
      this.guardar();
      this.checkForm();
      if(this.camposCorrectos == true && this.rutNoValido == true){
          
          this.guardar();
          this.form4();
        }
          
        else {
          alert("Debe completar campos requeridos");
        }
    },

    siguiente4(){
     this.guardar();
      this.checkForm();
      if(this.camposCorrectos == true && this.rutNoValido == true){
          
          this.guardar();
          this.form5();
        }
          
        else {
          alert("Debe llenar campos requeridos");
        }
    },

    siguiente5(){
     this.guardar();
      this.checkForm();
      if(this.camposCorrectos == true && this.rutNoValido == true){
          
          this.guardar();
          this.form6();
        }
          
        else {
          alert("Debe llenar campos requeridos");
        }
    },

    anterior(){
      console.log(this.camposCorrectos);
      this.camposCorrectos = false;
      console.log(this.camposCorrectos);
      this.checkForm();
      this.form1();
    },

    next1(){
      this.nextSlider1();
    },

    next2(){
      this.nextSlider2();
    },

    next3(){
      this.nextSlider3();
    },

    next4(){
      this.nextSlider4();
    },

    sliderNext1(){
      //alert("Soy el slider 1");
      this.proximoSlider1();
    },

    sliderNext2(){
      //alert("Soy el slider 2");
      this.proximoSlider2();
    },

    sliderNext3(){
      //alert("Soy el slider 3");
      this.proximoSlider3();
    },

    sliderNext4(){
      //alert("Soy el slider 4");
      this.proximoSlider4();
    },

    guardar: function(){
      this.personaJuridica.push({
        datosPersonales:{
        rut: this.rut,
        rutAcom: this.rutAcom,
        files: this.files,
        fileName: this.fileName,
        filecvName: this.filecvName,
        filetmName: this.filetmName,
        fileImageName: this.fileImageName,
        fileBalanceName : this.fileBalanceName,
        fileISRLName: this.fileISRLName,
        fileCapitalName: this.fileCapitalName,
        fileFactName: this.fileFactName,
        filePatroName: this.filePatroName,
        filePatroDosName: this.filePatroDosName,
        filesrlName: this.filesrlName,
        filesaName: this.filesaName,
        fantasyName: this.fantasyName,
        razonSocialJuridica: this.razonSocialJuridica,
        razonSocial: this.razonSocial,
        razonSocialComp: this.razonSocialComp,
        date: this.date,
        giroModel: this.giroModel,
        rangosModel: this.rangosModel,
        activity: this.activity,
        category: this.category,
        image: this.image,
        selectedFile: this.selectedFile,
        selectedFileTM: this.selectedFileTM,
        selectedFileCV: this.selectedFileCV,
        selectedFileSRL: this.selectedFileSRL,
        selectedFileSA: this.selectedFileSA,
        selectedFileBalance: this.selectedFileBalance,
        selectedFileISRL: this.selectedFileISRL,
        selectedFileCapital: this.selectedFileCapital,
        selectedFileFact: this.selectedFileFact,
        selectedFilePatro: this.selectedFilePatro,
        selectedFilePatroDos: this.selectedFilePatroDos,
        calle: this.calle,
        numero: this.numero,
        oficina: this.oficina,
        continuacion: this.continuacion,
        pais: this.pais,
        regionSeleccionada: this.regionSeleccionada,
        comuna: this.comunaSeleccionada,
        provinciaSeleccionada: this.provinciaSeleccionada,
        rangos: this.rangos,
        telefonosArray: this.telefonosArray,
        //listadoRegiones: this.listadoRegiones,
        profesionales: this.profesionales,
        administrativos: this.administrativos,
        tecnicos: this.tecnicos,
        trabajadores: parseInt(this.tecnicos)+parseInt(this.profesionales)+parseInt(this.administrativos),
        volumenFacturado: this.volumenFacturado,
        sitioWeb: this.sitioWeb,
        fileValidation: this.fileValidation,
        rutcchc: this.rutcchc,
        nombreCchc: this.nombreCchc,
        first_lastname: this.first_lastname,
        second_lastname: this.second_lastname,
        emailcchc: this.emailcchc,
        dateCchc: this.dateCchc,
        phone: this.phone,
        nationality: this.nationality,
        sex: this.sex,
        estadoCivil: this.estadoCivil,
        nivelDeEstudios: this.nivelDeEstudios,
        profesion: this.profesion,
        casaEstudios: this.casaEstudios,
        cargo: this.cargo,
        direccionPart: this.direccionPart,
        numeroCchc: this.numeroCchc,
        dpto: this.dpto,
        country: this.country,
        contratistasGenerales: this.contratistasGenerales,
        obrasInfra: this.obrasInfra,
        concesiones: this.concesiones,
        inmobiliario: this.inmobiliario,
        vivienda: this.vivienda,
        proveedores: this.proveedores,
        industriales: this.industriales,
        especialidades: this.especialidades,
        patrimonio: this.patrimonio
      },
        
        direcciones:{
          calle:this.calle,
          telefonosArray: this.telefonosArray,
          tipoTelArray: this.tipoTelArray,
          emailsArray: this.emailsArray
          
        },

        composicion:{
          com: this.composicion,
          comCchc: this.composicionCchc,
          comCob: this.composicionCobranza
        },
        patrocinantes:{
          patrocinante1: this.perIdPatrocinante,
          patrocinador1: this.perIdPatrocinador,
          patrocinante2: this.perIdPatrocinante2,
          patrocinador2: this.perIdPatrocinador2
        },


      });



      /*this.trabajadores.push({
        values: {
          administrativos: this.administrativos,
          tecnicos: this.tecnicos,
          profesionales: this.profesionales
        }
      });*/
      this.sendFile();
      console.log(this.personaJuridica);
    },

    buscarCchc: function (indice){
    
      if(this.rutPersonaJuridicaCchc == ''){
       
         alert("Debe completar el campo RUT");

       
      }else if (this.rutNoValido == false){

        alert("RUT no válido");

      }
      else{
     
      for(var i=0; i< this.listaPersonaJuridica.length; i++){

        this.encuentraAuxCchc = '';
        console.log("arrAuxCchc 4060");
        console.log(this.arrAuxCchc);
        
        for(var z=0; z < this.arrAuxCchc.length; z++){

          if(this.eliminarAuxCchc){

            this.arrAuxCchc.splice(z, 1);

          }else{
              //formateo rut
              let arrAuxRut = this.arrAuxCchc[z].rut +'-'+this.arrAuxCchc[z].dv;

              console.log(arrAuxRut);
              console.log(this.rutPersonaJuridicaCchc);

             if (arrAuxRut == this.rutPersonaJuridicaCchc) {
                this.encuentraAuxCchc = this.rutPersonaJuridicaCchc;
                 console.log(this.encuentraAuxCchc);
                break;
              }

          }

        }

      //formateo de rut del servicio
       let listaPersonaJuridica = this.listaPersonaJuridica[i].rut+'-'+this.listaPersonaJuridica[i].dv
       //console.log(listaPersonaJuridica);
       //console.log(this.rutPersonaJuridicaCchc);
       //console.log(this.encuentraAuxCchc);
        if(listaPersonaJuridica == this.rutPersonaJuridicaCchc || this.encuentraAuxCchc == this.rutPersonaJuridicaCchc){

          this.encuentraCchc = '';
          
         
          let posi = '';
         
          for(let k = 0; k < this.composicionCchc.length; k++) {
            
          

            let rutPersonaJuridica = this.composicionCchc[k].rutPersonaJuridicaCchc+'-'+this.composicionCchc[k].dvComp; 

            

            if (rutPersonaJuridica == this.rutPersonaJuridicaCchc) {
              this.encuentraCchc = this.rutPersonaJuridicaCchc;
              posi = k;
              break;
            }
            
          }
        
        
          if(this.editPor == true){
              
        if(this.encuentraAuxCchc != ''){

            this.composicionCchc.splice(posi, 1);
              this.composicionCchc.push({
            rutPersonaJuridica: this.arrAux[z].rut,
            dvComp: this.arrAux[z].dv,
            nombre: this.arrAux[z].nombre,
            porcentaje: this.porcentaje,
            perId: this.arrAux[z].perId});
          
              
            this.guardar();
            this.editPor = false;

        }else{

            this.composicionCchc.splice(posi, 1);
              this.composicionCchc.push({
            rutPersonaJuridicaCchc: this.listaPersonaJuridica[i].rut,
            dvComp: this.listaPersonaJuridica[i].dv,
            nombre: this.listaPersonaJuridica[i].nombre,
            //porcentaje: this.porcentaje,
            perId: this.listaPersonaJuridica[i].perId});
          
              
            this.guardar();
            this.editPor = false;
        }
            

          }else{

            if(this.encuentraCchc == ''){
              this.composicionCchc.push({
              rutPersonaJuridicaCchc: this.listaPersonaJuridica[i].rut,
              nombre: this.listaPersonaJuridica[i].nombre,
              //porcentaje: this.porcentaje,
              dvComp: this.listaPersonaJuridica[i].dv,
              personasJuridicaId: this.listaPersonaJuridica[i].perId
              //editing: this.listaPersonaJuridica[i].editing

            });

             this.guardar();
             this.editPor = false;
             
            }else{

              alert("El Rut " +this.rutPersonaJuridicaCchc+" ya existe");
              this.nombreCchc = '';
            }  

          }
            
          this.formRegistrarPersonaCchc = false;
          this.disabled = 0;
          //this.rutPersonaJuridica = this.rutComp;
          this.rutPersonaJuridicaCchc = '';
          this.nombreCchc = '';
          //this.razonSocial = '';
          //this.porcentaje = '';
         
          return;
        
      }
      
      } 
        this.showModalCrearCchc();
            
    }
        
      
    },

    buscar: function (indice){
    
      if(this.rutPersonaJuridica == ''){
       
         alert("El campo Rut debe estar lleno");

       
      }else if (this.rutNoValido == false){

        alert("RUT no válido");

      }
      else{
     

      for(var i=0; i< this.listaPersonaJuridica.length; i++){
        

        this.encuentraAux = '';

        
        for(var z=0; z < this.arrAux.length; z++){

          if(this.eliminarAux){

          this.arrAux.splice(z, 1);

        }else{
            let arrAuxRut = this.arrAux[z].rut +'-'+this.arrAux[z].dv;

           if (arrAuxRut == this.rutPersonaJuridica) {
              this.encuentraAux = this.rutPersonaJuridica;
              break;
            }
        }

        }
       
       let listaPersonaJuridica = this.listaPersonaJuridica[i].rut+'-'+this.listaPersonaJuridica[i].dv
       
        if(listaPersonaJuridica == this.rutPersonaJuridica || this.encuentraAux == this.rutPersonaJuridica){

          this.encuentra = '';
         
          let posi = '';
         
          for(let k = 0; k < this.composicion.length; k++) {
            
          

            let rutPersonaJuridica = this.composicion[k].rutPersonaJuridica+'-'+this.composicion[k].dvComp; 

            

            if (rutPersonaJuridica== this.rutPersonaJuridica) {
              this.encuentra = this.rutPersonaJuridica;
              
              posi = k;
              break;
            }
            
          }
        
        
          if(this.editPor == true){
              
        if(this.encuentraAux != ''){

            this.composicion.splice(posi, 1);
              this.composicion.push({
            rutPersonaJuridica: this.arrAux[z].rut,
            dvComp: this.arrAux[z].dv,
            nombre: this.arrAux[z].nombre,
            porcentaje: this.porcentaje,
            perId: this.arrAux[z].perId});
          
              
            this.guardar();
            this.editPor = false;

        }else{

            this.composicion.splice(posi, 1);
              this.composicion.push({
            rutPersonaJuridica: this.listaPersonaJuridica[i].rut,
            dvComp: this.listaPersonaJuridica[i].dv,
            nombre: this.listaPersonaJuridica[i].nombre,
            porcentaje: this.porcentaje,
            perId: this.listaPersonaJuridica[i].perId});
          
              
            this.guardar();
            this.editPor = false;
        }
            

          }else{

          if(this.encuentra == ''){
            
            this.composicion.push({
            rutPersonaJuridica: this.listaPersonaJuridica[i].rut,
            nombre: this.listaPersonaJuridica[i].nombre,
            porcentaje: this.porcentaje,
            dvComp: this.listaPersonaJuridica[i].dv,
            personasJuridicaId: this.listaPersonaJuridica[i].perId
            //editing: this.listaPersonaJuridica[i].editing

          });

           this.guardar();
           this.editPor = false;
           
          }else{


              alert("El Rut " +this.rutPersonaJuridica+" ya exite");
            this.razonSocial = '';
          }  

          }
            
          this.formRegistrarPersona = false;
          this.disabled = 0;
          //this.rutPersonaJuridica = this.rutComp;
          this.rutPersonaJuridica = '';
          this.razonSocial = '';
          this.porcentaje = '';
         
          return;
        
      }
      
      } 
        this.showModalCrear();
            
    }
        
      
    },

    buscarCobranza: function (indice){
    
      if(this.rutPersonaJuridicaCobranza == ''){
       
         alert("Debe completar el campo RUT");

       
      }else if (this.rutNoValido == false){

        alert("RUT no válido");

      }
      else{
     
      for(var i=0; i< this.listaPersonaJuridica.length; i++){

        this.encuentraAuxCobranza = '';
        console.log("arrAuxCchc 4060");
        console.log(this.arrAuxCobranza);
        
        for(var z=0; z < this.arrAuxCobranza.length; z++){

          if(this.eliminarAuxCobranza){

            this.arrAuxCobranza.splice(z, 1);

          }else{
              //formateo rut
              let arrAuxRut = this.arrAuxCobranza[z].rut +'-'+this.arrAuxCobranza[z].dv;

              console.log(arrAuxRut);
              console.log(this.rutPersonaJuridicaCobranza);

             if (arrAuxRut == this.rutPersonaJuridicaCobranza) {
                this.encuentraAuxCobranza = this.rutPersonaJuridicaCobranza;
                 console.log(this.encuentraAuxCobranza);
                break;
              }

          }

        }

      //formateo de rut del servicio
       let listaPersonaJuridica = this.listaPersonaJuridica[i].rut+'-'+this.listaPersonaJuridica[i].dv
       //console.log(listaPersonaJuridica);
       //console.log(this.rutPersonaJuridicaCchc);
       //console.log(this.encuentraAuxCchc);
        if(listaPersonaJuridica == this.rutPersonaJuridicaCobranza || this.encuentraAuxCobranza == this.rutPersonaJuridicaCobranza){

          this.encuentraCobranza = '';
          
         
          let posi = '';
         
          for(let k = 0; k < this.composicionCobranza.length; k++) {
            
          

            let rutPersonaJuridica = this.composicionCobranza[k].rutPersonaJuridicaCobranza+'-'+this.composicionCobranza[k].dvComp; 

            

            if (rutPersonaJuridica == this.rutPersonaJuridicaCobranza) {
              this.encuentraCobranza = this.rutPersonaJuridicaCobranza;
              posi = k;
              break;
            }
            
          }
        
        
          if(this.editPor == true){
              
        if(this.encuentraAuxCobranza != ''){

            this.composicionCobranza.splice(posi, 1);
              this.composicionCobranza.push({
            rutPersonaJuridica: this.arrAux[z].rut,
            dvComp: this.arrAux[z].dv,
            nombre: this.arrAux[z].nombre,
            porcentaje: this.porcentaje,
            perId: this.arrAux[z].perId});
          
              
            this.guardar();
            this.editPor = false;

        }else{

            this.composicionCobranza.splice(posi, 1);
              this.composicionCobranza.push({
            rutPersonaJuridicaCobranza: this.listaPersonaJuridica[i].rut,
            dvComp: this.listaPersonaJuridica[i].dv,
            nombre: this.listaPersonaJuridica[i].nombre,
            //porcentaje: this.porcentaje,
            perId: this.listaPersonaJuridica[i].perId});
          
              
            this.guardar();
            this.editPor = false;
        }
            

          }else{

            if(this.encuentraCobranza == ''){
              this.composicionCobranza.push({
              rutPersonaJuridicaCobranza: this.listaPersonaJuridica[i].rut,
              nombre: this.listaPersonaJuridica[i].nombre,
              //porcentaje: this.porcentaje,
              dvComp: this.listaPersonaJuridica[i].dv,
              personasJuridicaId: this.listaPersonaJuridica[i].perId
              //editing: this.listaPersonaJuridica[i].editing

            });

             this.guardar();
             this.editPor = false;
             
            }else{

              alert("El Rut " +this.rutPersonaJuridicaCobranza+" ya existe");
              this.nombreCobranza = '';
            }  

          }
            
          this.formRegistrarPersonaCobranza = false;
          this.disabled = 0;
          //this.rutPersonaJuridica = this.rutComp;
          this.rutPersonaJuridicaCobranza = '';
          this.nombreCobranza = '';
          //this.razonSocial = '';
          //this.porcentaje = '';
         
          return;
        
      }
      
      } 
        this.showModalCrearCobranza();
            
    }
        
      
    },



     eliminarComposicion: function (indice){

        var opcion = confirm("¿Desea eliminar a esta persona?");
          if (opcion == true) {
              this.composicion.splice(indice, 1);
              this.rutPersonaJuridica = '';
              this.razonSocial = '';
              this.porcentaje = '';
              this.disabled = 0;
              this.eliminarAux = true;
        } else {
           console.log("Chao");
        }
        //this.rutComp = this.composicion[indice].rutComp;
       
            //if(this.respuesta == true){
              
              /*this.composicion.splice(indice, 1);
              this.rutComp = '';
              this.razonSocial = '';
              this.porcentaje = '';
              this.disabled = 0;*/
           /* }else{
              console.log("No eliminar");
              this.showModalEliminar();
              
            }*/
                
           
      },

      eliminarComposicionCchc: function (indice){

        var opcion = confirm("¿Desea eliminar a esta persona?");
          if (opcion == true) {
              this.composicionCchc.splice(indice, 1);
              this.rutPersonaJuridicaCchc = '';
              this.nombreCchc = '';
              this.rol = '';
              this.disabled = 0;
              this.eliminarAuxCchc = true;
        } else {
           console.log("Chao");
        }
                
           
      },

      editarPorcentaje: function (indice){
            this.showModalEditar();
      /*console.log(this.juridicoEnArray);
            if(this.juridicoEnArray == true){
              this.porcentaje = this.composicion[indice].porcentaje;
              this.rutPersonaJuridica = this.composicion[indice].rutPersonaJuridica;
              this.razonSocial = this.composicion[indice].nombre;
              this.disabled = 1;
              this.editPor = true;
              //this.juridicoEnArray = false;
            }else{*/
      console.log(this.composicion[indice]);
              this.porcentaje = this.composicion[indice].porcentaje;
              this.rutPersonaJuridica = this.composicion[indice].rutPersonaJuridica + '-' +this.composicion[indice].dvComp;
              this.razonSocial = this.composicion[indice].nombre;
              this.disabled = 1;
              this.editPor = true;

           // }
             
           
      },

      editarRol: function (indice){
            this.showModalEditarCchc();
      /*console.log(this.juridicoEnArray);
            if(this.juridicoEnArray == true){
              this.porcentaje = this.composicion[indice].porcentaje;
              this.rutPersonaJuridica = this.composicion[indice].rutPersonaJuridica;
              this.razonSocial = this.composicion[indice].nombre;
              this.disabled = 1;
              this.editPor = true;
              //this.juridicoEnArray = false;
            }else{*/

              this.rol = this.composicionCchc[indice].rol;
              this.rutPersonaJuridicaCchc = this.composicionCchc[indice].rutPersonaJuridicaCchc;
              this.razonSocial = this.composicionCchc[indice].nombre;
              this.disabled = 1;
              this.editRol = true;

           // }
             
           
      },

      //Funciones para los modales de Informacion Comercial

    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      var rutCompleto = rutCompleto.replace('‐', '-')

      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)){
        return false
      }

      var tmp = rutCompleto.split('-')
      var digv = tmp[1]
      var rut = tmp[0]
      
    if ( digv === 'K' ){
      digv = 'k'
    } 

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
      let estadoRutAcom = this.validaRut(this.rutAcom);
      let estadoRutJuridico = this.validaRut(this.rutPersonaJuridica);
      this.rutNoValido = estadoRut;
      this.rutNoValido = estadoRutAcom;
      this.rutNoValido = estadoRutJuridico;
    },

    validationLettersOnly: function(){
     $(".val").keypress(function (key) {
      console.log("test");
            //window.console.log(key.charCode)
            if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
                && (key.charCode < 65 || key.charCode > 90) //letras minusculas
                && (key.charCode != 45) //retroceso
                && (key.charCode != 241) //ñ
                 && (key.charCode != 209) //Ñ
                 && (key.charCode != 32) //espacio
                 && (key.charCode != 225) //á
                 && (key.charCode != 233) //é
                 && (key.charCode != 237) //í
                 && (key.charCode != 243) //ó
                 && (key.charCode != 250) //ú
                 && (key.charCode != 193) //Á
                 && (key.charCode != 201) //É
                 && (key.charCode != 205) //Í
                 && (key.charCode != 211) //Ó
                 && (key.charCode != 218) //Ú
 
                )
                return false;
        });
    },

    validationNumbersOnly: function(){
      $(".valTel").bind('keypress', function(event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
          event.preventDefault();
          return false;
        }
      });
    },

    validationAlphanumeric: function(){
     $(".val").bind('keypress', function(event) {
        var regex = new RegExp("^[a-zA-Z0-9 ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
          event.preventDefault();
          return false;
       }
      });
    },

    valorRutDesdeVuex(){
    this.rut = this.$store.state.rutGlobal;
    this.emailsArray[0] = this.$store.state.emailGlobal;
    this.telefonosArray[0]= this.$store.state.telefonoGlobal;
    this.camara  = this.$store.state.camaraGlobal;

    if(this.$store.state.tipoSociedad == undefined){
      this.razonSocial = '';
      this.fantasyName = '';
    }else{
      this.razonSocial = this.$store.state.tipoSociedad;
      this.fantasyName = this.$store.state.tipoSociedad;
    }
  }



  },


  created: function(){
    Vue.axios.get(this.url+'listarActividad').then((response) => {
        this.actividades = response.data;
        console.log(this.actividades);
    })

    this.getListadoRegion();
    this.getListadoGiro();
    this.getListadoRango();
    this.getListadoCategoria();
    this.isEmailValid();
    this.valorRutDesdeVuex();
  },
  computed:{
    ...mapState(['rutGlobal','pjform1', 'pjform2', 'pjform3',
                 'pjform4','pjform5','pjform6', 'slider1', 'slider2', 'slider3', 'slider4', 'URL','resultadoConsulta', 'prox1', 'prox2', 'prox3', 'prox4']),

    isDisabled: function(){
    
    if(this.terms==true && this.terms2==true && this.terms3==true){
      this.msgTerm = false;
      return false;
    }
      this.msgTerm = true;
      return true; 
    },

    buscarPersonaJuridicaEmpresaFiltro: function () {
      return this.listaPersonaJuridicaEmpresa.filter((item) => {
                return item.nombre.toLowerCase().includes(this.empresa.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.empresa.toLowerCase());
            });
    },             
    buscarPersonaJuridicaFiltro: function () {
      return this.listaPersonaJuridica.filter((item) => {
                return item.nombre.toLowerCase().includes(this.rutPersonaJuridica.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.rutPersonaJuridica.toLowerCase());
            });
    },

    buscarPatrocinante: function () {
      return this.patrocinantes.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatro.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatro.toLowerCase());
            });
    },
    buscarPatrocinante2: function () {
      return this.patrocinantes2.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatrocinante2.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatrocinante2.toLowerCase());
            });
    },
    buscarPatrocinador: function () {
      return this.patrocinadores.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatrocinador.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatrocinador.toLowerCase());
            });
    },
    buscarPatrocinador2: function () {
      return this.patrocinadores2.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatrocinador2.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatrocinador2.toLowerCase());
            });
    } 
  }
}



$("input.rutInput").bind('keypress', function(event) {
  var regex = new RegExp("^[0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$(document).ready(function() {
    $(".upload").on('click', function() {
        $(".upload-msg").text('Cargando...');
        console.log("Subiendo archivo...");
        var inputFileImage = document.getElementById("fileToUpload");
        var file = inputFileImage.files[0];
        var data = new FormData();
        data.append('fileToUpload',file);
        
        /*jQuery.each($('#fileToUpload')[0].files, function(i, file) {
          data.append('file'+i, file);
        });*/
              
        $.ajax({
          url: "http://postulacion.isc.cl/uploadfile",        // Url to which the request is send
          type: "POST",             // Type of request to be send, called as method
          data: data,         // Data sent to server, a set of key/value pairs (i.e. form fields and values)
          contentType: false,       // The content type used when sending data to the server.
          cache: false,             // To unable request pages to be cached
          processData:false,        // To send DOMDocument or non processed data file it is set to false
          success: function(data)   // A function to be called if request succeeds
          {
            $(".upload-msg").html(data);
            window.setTimeout(function() {
            $(".alert-dismissible").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove();
            }); }, 5000);
          }
        });
    });
});
</script>
<style type="text/css">

.delete-input{
  color: red;
}
.cursor {
  cursor: pointer;
}

.ul-decorater{
    /*list-style: none;*/
    margin: 0;
    padding-left: 3%;
}

.posicion-mensaje{
  position: absolute;
    right: 0;
    z-index: 99999;
    bottom: 0;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
}

.close{
  color: #bf371f;
}

.eliminar-input{
  color: red;
}

  @keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.form-control:disabled, .ingreso__form-input:disabled, .datos-personales__input:disabled, .creacion-solicitud__select:disabled, .creacion-solicitud__form-input:disabled, .form-control[readonly], [readonly].ingreso__form-input, [readonly].datos-personales__input, [readonly].creacion-solicitud__select, [readonly].creacion-solicitud__form-input {
    background-color: white;
    opacity: 1;
}


.edit-composicion{
  background: transparent;
  border: none;
  text-align: center;
  width: 40%;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #2072BE;
    opacity: 0.1;
}

.input{
  display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #D3D3D3;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.listaHov :hover{
background-color: #f8f9fa;
}

.listaHov{
  overflow: scroll;
  max-height: 300px;
}

.listaHovHidden{
overflow:none;
}

.listLine{
  border-left:solid 8px #2072BE;
}

.question-icon{
    margin-right: 5px;
    color: #2072BE;
    font-size: 16px;
    cursor:pointer;
}

.direccion__tel-mail-left {
  padding: 0;
}
.direccion__tel-mail-center {
  padding: 0;
}

.email-input {
  padding-left: 10px;
}

.phone-type-input {
  padding-left: 6px !important;
}
.direccion__tel-mail-right {
  text-align: center;
}

@media (min-width: 576px) {
  .direccion__tel-mail-left {
    justify-content: flex-end;
  }
  .direccion__tel-mail-center {
    padding-left: 15px;
  }
  .direccion__tel-mail-right {
    padding: 0;
  }
}

@media (min-width: 768px) {
  .direccion__tel-mail-left {
    padding-right: 0.5em;
  }
  .direccion__tel-mail-center {
    padding-left: 0;
    padding-right: 10px;
  }
  .direccion__tel-mail-right {
    text-align: left;
  }
}

@media (min-width: 1200px) {
  .direccion__tel-mail-center--pj {
    padding-left: 0.4em;
  }
}


@media (min-width: 1200px){
  .datos-personales--cv {
    grid-column: 2/3;
    padding-left: 0;
}

.rut-invalido{
  border-color: #f14d31;
    padding-right: calc(1.5em + 0.75rem);
    background-repeat: no-repeat;
    background-position: center right calc(0.375em + 0.1875rem);
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
}
</style>