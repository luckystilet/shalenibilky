import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import VueAgile from 'vue-agile'

import './css/base.css'
import './css/style.css'

Vue.config.productionTip = false
Vue.use(VueAgile)

firebase.initializeApp({
  apiKey: "AIzaSyCnG_aV5ZP1yAjpW2Sb0oP5ixb89YkDawE",
  authDomain: "shalenibilkyroastery.firebaseapp.com",
  databaseURL: "https://shalenibilkyroastery.firebaseio.com",
  projectId: "shalenibilkyroastery",
  storageBucket: "shalenibilkyroastery.appspot.com",
  messagingSenderId: "196808349319",
  appId: "1:196808349319:web:e61992f5807b397c06ca22",
  measurementId: "G-SQGW14NEYD"
})

let app
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})


