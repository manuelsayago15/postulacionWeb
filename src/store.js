// store.js

import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

Vue.use(Vuex)
//Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
  	rutGlobal: 111111111,
    nombre:'Manuel',
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
  },

  mutations:{

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
        }
    },
      actions: {
    
  }
})
