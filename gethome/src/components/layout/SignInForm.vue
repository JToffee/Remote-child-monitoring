<template>
  <div class="signinform container">
    <h4>Let's get started</h4>
    <form>
      <input placeholder="email or telephone" class="firstFormInput">
      <input placeholder="password" type="password">
      <button type="submit" class="btn">Sign in</button><br><br>
      <p>Don't have an account ? <router-link to="/signup">Create one</router-link></p>
    </form> 
  </div>
</template>

<script>
export default {
    name: 'SignInForm'
   /* data() {
        return {
        username: "",
        password: ""
        };
  },*/
    
}
</script>
<style scoped>
.signinform{
    width: 33vw;
    display: flex;
    flex-wrap: wrap;
    float: left;
    margin-top: 1vw;
    background: #0C6B77;
    height: 60vw;
    margin-bottom: 3vw;
    overflow: hidden;
}
h4 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight:500;
    font-size: 1.5em;
    padding: 0;
    margin-top: 15vw;
    margin-bottom: 0vw;
    margin: auto;
    display: flex;
    color: #f1ebeb;
}
button {
    display: flex;
    flex-basis: 60%;
    margin: auto;
    justify-content: center;
    padding: 1vw 2vw;
    margin-top: 1vw;
}
</style>