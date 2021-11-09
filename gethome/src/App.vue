<template>
 <div id = "app" class="container">
  <Navbar> </Navbar>
  <router-view></router-view>
  <Footer></Footer>
 </div>
 
</template>

<script>
//import Header from './components/layout/Header.vue' ;
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 0.2vw;
}
.container {
  max-width: 100vw;
  margin-top: 2vw;
  
}
body {
  /*background: #a5e9e3;
  /*background: #31867f; 
  background: linear-gradient(90deg, #3a3939,#76a197,#8ad1cb, #000000);*/
  max-width: 100vw;
  padding: 0;
  scroll-behavior: smooth;
  max-width: 100vw;
  overflow-x: hidden;
}
.btn {
  width: 15vw;
  height: 4vw;
  border-radius: 0.5vw;
  background: rgb(236, 34, 34);
  border-radius: 1vw;
  color: #FFFF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1em;
  margin-top: 3vw;
}
.btn-a {
  padding:1vw 3vw 1vw 3vw;
  border-radius: 0.5vw;
  background: #3ca89f;
  border-radius: 1vw;
  color: #FFFF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1em;
  margin-top: 3vw;
  text-decoration: none;
}
.btn-a:hover{
  background: #8ad1cb;
  color: #000;
  font-weight: bold;
}
.btn:hover{
  background: #3ca89f;
  color: #fff;
  font-weight: bold;
}
ul {
  list-style-type: none;
  display: inline-block;
}
ul li {
  margin-left: 1vw;
}
ul li a {
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1em;
    padding: 1vw;
    color: #000;
}

ul li a:hover {
    background: rgb(236, 106, 106);
    color: #fff;
    border-radius: 1vw;
}

form {
    width: 28vw;
    display: flex;
    flex-wrap: wrap;
    float: left;
    margin-left: 2.5vw;
    background: #fff;
    height: 30vw;
    overflow: hidden;
    border-radius: 1vw;

}
form input {
    width: 20vw;
    height: 3.2vw;
    flex-basis: 80%;
    margin: auto;
    text-indent: 2vw;
}
form p {
    color: #000;
    margin-top: 0vw;
    font-size: 1em;
    margin-left: 4vw;
}
form a {
    text-decoration: none;
    color: rgb(233, 27, 27);
}
</style>
