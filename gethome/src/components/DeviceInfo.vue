<template>
    <div>
        <div class="row">
            <h2>Name</h2>
            <p>Stacy</p>
        </div>
        <div class="row">
            <h2>Serial</h2>
            <p>73722211876</p>
        </div>
        <div class="row">
            <h2>Zones</h2>
        <ul>
            <li>NORTHOLT apartment, Ongata Rongai, Kenya</li>
            <li>Quickmart Rongai Main, Ongata Rongai, Kenya</li>
            <li>Beacon Of Hope, Gataka Road, Ongata Rongai, Kenya</li>
            <li>naivas supermarket -rongai, Ongata Rongai, Kenya</li>
        </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "DeviceInfo",
}
</script>
<style scoped>
div {
    color: #000;
    margin-top: 3vw;
}
.row{
    display: flex;
    flex-basis: 100%;
    margin: 1vw 0 0 10vw;
}
h2 {
    margin-left: 5vw;
    margin-right: 5vw;
}
p{
    margin-left: 1vw;
    margin-top: 1vw;
    font-size: 1.5em;
    padding: 1vw;
}
ul {
    margin-left: 0;
    text-align: left;
    padding: 0;
}
li{
    padding: 1vw;
};
</style>