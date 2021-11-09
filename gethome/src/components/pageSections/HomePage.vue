<template>
 <div id = "homepage" class="container homepage">
  <Welcome></Welcome>
  <SignInForm></SignInForm>
  
 </div>
 
</template>

<script>
//import Header from './components/layout/Header.vue' ;
//import Navbar from './components/layout/Navbar.vue';
import Welcome from '../../components/layout/Welcome.vue';
import SignInForm from '../../components/layout/SignInForm.vue';
//import Footer from './components/layout/Footer.vue' ;

export default {
  name: 'HomePage',
  components: {
    Welcome,
    SignInForm,
  }
}
</script>
<style scoped>
footer{
  background: linear-gradient(90deg, #3a3939,#8ad1cb, #000000);
 
}
</style>