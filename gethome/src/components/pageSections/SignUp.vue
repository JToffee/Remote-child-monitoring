<template>
<div class="signup container">
    <h2>Sign Up and Keep Your Child Home</h2>
    <div>
        <form>
       <!-- <input type="text" v-model="name" placeholder="Full name"> -->
        <input type="email" v-model="email" name="email" placeholder="email address">
      <!--  <input type="number" v-model="phone" placeholder="Phone number">-->
        <input type="password" v-model="password" placeholder="password">
    <!-- <input type="password" v-model="confirm" placeholder="confirm password">-->
        <button type="submit" @click="registerUser" class="btn">Submit</button>
    </form>
    </div>
  
</div>
    
</template>
<script>
import '../../firebase';


//import { getDatabase, ref, set } from "firebase/database";
import  "firebase/auth";
export default {
    name: "SignUp",
    data () {
        return {
           //name : '',
            email :'',
            //phone: '',
            password: '',
            //confirm: ''
        } 
    },
    methods: {
        registerUser() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    userCredential => {
                        const user = userCredential.user;
                        console.log(user.data);
                    },
                    err => {
                        alert(err);
                    }
                )



           //const db = getDatabase();
           //set(ref(db,'users/'),
           //name, email, phone, password
            //const usersRef = ref('users');
            //usersRef.push(
             
            // {
              //      'username': name,
                //    'email': email,
                  //  'phone': phone,
                    //'password': password
                //});
        }

    }
}
</script>
<style scoped>
.signup {
    width: 70vw;
    height: 35vw;
    margin-left: 8vw;
    margin-top: 1vw;
    background: linear-gradient(45deg,#0C6B77 30%, rgba(0, 0, 0, 0.3)  30%), url('../../../images/location.jpg');
    background-size:cover;  
    padding: 2vw;
}
h2 {
    color: #fff;
    text-align: left;
    margin-left: 2vw;
}
form {
    background: none;
    width: 60vw;
    margin-top: 2vw;
}
input {
    float: left;
    flex-basis: 45%;
    background: rgb(230, 224, 224);
  
}
button {
    display: flex;
    flex-basis: 40%;
    margin: auto;
    margin-left: 3vw;
    justify-content: center;
    padding: 1vw 2vw;
    margin-top: 2vw;
}
</style>