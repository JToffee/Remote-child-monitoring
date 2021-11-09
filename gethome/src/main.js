
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes';
import './firebase';
import firebase from "firebsae/app"

//import VureFire from 'vuefire';
//Vue.use(VureFire);

//import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
//Vue.use(VueGeolocation)


import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps,{
  load: {
    key : 'AIzaSyDPrIjCm_BqDoISfR43gzpD04DHp_anXW8',
    libraries: "places",
    libraries: 'geometry'
  },
  installComponents : true
})



const firebaseConfig = {
  apiKey: "AIzaSyDk_YscJWHNCfHzqNj8ImjB6C-TNUORJbQ",
  authDomain: "get-home-1.firebaseapp.com",
  databaseURL: "https://get-home-1-default-rtdb.firebaseio.com",
  projectId: "get-home-1",
  storageBucket: "get-home-1.appspot.com",
  messagingSenderId: "834790648522",
  appId: "1:834790648522:web:baefe759aafc19e6b26233",
  measurementId: "G-F9ZKWZB4W1"
};

firebase.initializeApp(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);


Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

new Vue({
  el: "#about",
  data: {

  }
});
