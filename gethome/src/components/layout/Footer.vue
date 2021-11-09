<template>
    <footer class="container">  
        
        <p>
        <span>Contacts</span><br><br><br>
        Email : sawesheila21@gmail.com <br><br>Telephone: +254708023074 <br>
         <button class="btn"> Talk to us</button>
         </p>
       
        <span class="socialMediaLinks">
            <a href=""><img src="../../../images/fb.png" alt="fb"></a>
            <a href=""><img src="../../../images/ig.png" alt="ig"></a>
            <a href=""><img src="../../../images/tw.png" alt="twtr"></a>
         </span>
        <span class="copyright">&copy; 2021</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
footer {
    display: flex;
    flex-basis: 100%;
    width: 100vw;
    text-align: right;
    text-align: center;
   /*background: linear-gradient(90deg, #3a3939,#8ad1cb, #000000)*/
    background: rgb(75, 78, 78);
    margin-bottom: -5vw;
    overflow: hidden;
    margin-top: 7vw;
    margin-left: 0;
    padding: 1vw; 
    padding-bottom: 3vw;
}
p {
    margin-left: 20vw;
    text-align: left;
     margin-top: 2vw;
     color: #fff;
}
p span{
    font-size: 2em;

}
button{
    
    margin-top: 2vw;
    background: rgb(184, 182, 165);
    color: #000000;
}
.socialMediaLinks {
    margin-left: 10vw;
    margin-top: 5vw;
}
img {
    width: 2vw;
    height: 2vw;
}
.copyright {
    margin-left: -7vw;
    margin-top: 10vw;
    font-size: 1.1em;
}

a {
    background: none;
    margin-right: 1.3vw;
    
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>