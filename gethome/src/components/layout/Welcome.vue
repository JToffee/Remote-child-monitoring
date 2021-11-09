<template>
    <div  class="homepage container">
        <h1>Child Monitoring system </h1>
        <h2>" Keep your children close to you"</h2>
        <img src="../../../images/pins.jpg" alt="pins">

    </div>
</template>

<script>
export default {
    name : 'Welcome'
}
</script>
<style scoped>
.homepage {
    display: flex;
    width: 50vw;
    flex-basis: 100%;
    float: left;
    margin-left: 8vw;
    margin-top: 1vw;
    min-height: 50vw;
    flex-wrap: wrap;
    padding: 1vw;
    padding-bottom: 3.8vw;
    background: #eee2e2;
}
h1 {
    font-size: 2.5em;
    color: rgb(0, 0, 0);
}
h2 {
    color: #868383;
   margin-left: 3vw;

}
img {
    width: 40vw;
    height: 40vw;
    margin-left: 0;
    margin: 1.5vw 2vw;
    border-radius: 2vw;
}
</style>

