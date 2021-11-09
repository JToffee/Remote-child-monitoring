<template>
    <div class="container">
    <img src="../../../images/fatherChild.png" alt="">
    <nav>
        <ul>
            <li class="firstListItem">  <router-link to="/about">About</router-link> </li>
            <li><router-link to="/">Ask us</router-link></li>
        </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>
img {
    width: 4vw;
    height: 4vw;
    float: left;
    margin-left: 15vw;
    margin-top: 2vw;

}
nav {
    width: 30vw;
    height: 8vw;
    display: flex;
    margin-left: 60vw;
    margin-top: 3vw;
    overflow: hidden;
}
li {
    display: inline-block;
    color: #fff;
    padding: 0.5vw;
    margin: 0;
    color: #fff;
    font-weight: 1px;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3em;
}
.firstListItem {
    border-right: solid 1px rgb(218, 32, 32) ;
    padding-right: 1.5vw;
}

</style>

