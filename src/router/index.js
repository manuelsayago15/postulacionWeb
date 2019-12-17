import Vue from 'vue'
import Router from 'vue-router'
import ingresoConsulta from '@/components/ingreso-y-consulta'
import creacionSolicitud from '@/components/Creacion-de-solicitud'
import personaJuridicaForm1 from '@/components/personaJuridica/persona-juridica-formulario-1'
import personaJuridicaForm2 from '@/components/personaJuridica/persona-juridica-formulario-2'
import personaJuridicaForm3 from '@/components/personaJuridica/persona-juridica-formulario-3'
import personaJuridicaForm4 from '@/components/personaJuridica/persona-juridica-formulario-4'
import personaJuridicaForm5 from '@/components/personaJuridica/persona-juridica-formulario-5'
import personaJuridicaForm6 from '@/components/personaJuridica/persona-juridica-formulario-6'
import Header from '@/components/personaJuridica/header.vue'
import personaJuridicaForm from '@/components/personaJuridica/persona-juridica-form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ingresoConsulta',
      component: ingresoConsulta
    },
    {
      path: '/creacion-de-solicitud',
      name: 'creacionSolicitud',
      component: creacionSolicitud
    },
    {
      path: '/persona-juridica-form',
      name: 'personaJuridicaForm',
      component: Header
    },
    {
      path: '/persona-juridica-formulario-1',
      name: 'personaJuridicaForm1',
      component: personaJuridicaForm1
    },
    {
      path: '/persona-juridica-formulario-2',
      name: 'personaJuridicaForm2',
      component: personaJuridicaForm2
    },
    {
      path: '/persona-juridica-formulario-3',
      name: 'personaJuridicaForm3',
      component: personaJuridicaForm3
    },
    {
      path: '/persona-juridica-formulario-4',
      name: 'personaJuridicaForm4',
      component: personaJuridicaForm4
    },
    {
      path: '/persona-juridica-formulario-5',
      name: 'personaJuridicaForm5',
      component: personaJuridicaForm5
    },
    {
      path: '/persona-juridica-formulario-6',
      name: 'personaJuridicaForm6',
      component: personaJuridicaForm6
    }
     
  ]
})