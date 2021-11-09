<template>
<div>
    <div id="landingpage">
        <h1>My Devices</h1>
        <span>
            <a class="btn-a" href="">Stacy</a>
        <a class="btn-a" href="">Add new device</a>
        </span>
        
    </div>
    <div class="register">
        <form>
        <h1>Register a new device</h1>
        <input placeholder="serial number" class="firstFormInput">
        <input type="text" placeholder="Child's name">
        <button type="submit" class="btn">Submit</button><br><br>
        </form>   
    </div> 
</div>
    
</template>
<script>
export default {
    name: 'LandingPage'
}
</script>
<style scoped>
    #landingpage {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        margin-top: 5vw;
        width: 90vw;
        min-height: 30vw;
        margin-left: 4vw;
        background: linear-gradient(-70deg, #8ad1cb 30%, rgba(0,0,0,0) 30%), url('../../../images/pins.jpg');
        background-size:cover; 
    }
    h1{
         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: left; 
        flex-basis: 60%;
        height: 4vw;
        margin-top: 3vw;
        margin-left: 5vw;
        color: #000;
        margin-bottom: 1vw;
    }
    #landingpage h1{
        float: none;
        color: rgb(223, 43, 43);
        font-size: 3em;
       
    }
    #landingpage span {
        flex-basis: 60%;
        margin-top: 0;
        float: left;
        display: flex;
        align-content: space-around;
    }
    .btn-a{
        flex-basis: 30%;
        height: 4vw;
        background: linear-gradient(90deg,rgb(75, 78, 78) ,#65a096 ,#56a396 , #0c0c0c);
        font-size: 1.5em;
        margin-left: 3vw;
        float: left;
        border-radius: 0;
    }
   .btn-a:hover{
       background: rgb(75, 78, 78);
       color: rgb(87, 175, 190);
   }
    
    .register {
        border: solid 1px red;
        display: flex;
        width: 60vw;
        min-height: 30vw;
        margin-left: 15vw;
        margin-top: 2vw;
        padding: 2vw;
        border-radius: 1vw;
        margin-bottom: 0;
    }
    form {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        width: inherit;
        margin-left: 2.5vw;
        background: #fff;
        height: inherit;
        overflow: hidden;
}
    input {
        float: left;
        flex-basis: 60%;
        background: rgb(230, 224, 224);
        margin: 2vw;
        height: 3.5vw;
    }
    button{
       flex-basis: 60%;
       padding: 0;
       height: 4vw;
       margin-top: 1vw;
       margin-left: 2vw;
   }
</style>                   