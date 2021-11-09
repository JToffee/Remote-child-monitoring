<template>
    <div class="device">
        <GoogleMap/>
        <div class="info">
        <h1>Stacy</h1>
        <figure class="location">
            <img src="../../../images/pins.jpg" alt="Map with pin">
            <figcaption>Sea shore</figcaption>
        </figure>
     
        </div>
           
        <div class="options"> 
            <ul class="tilesWrap">
                <li>
                    <h2>1</h2>
                    <h3>Create new zone</h3>
                    <p>Allows restriction of the device within a set radius. You can add new zones.</p>
                    <button>Add</button>
                </li>
                <li>
                    <h2>2</h2>
                    <h3>Frequently at? </h3>
                    <p>Find out the most visited locations</p>
                    <button>View</button>
                </li>
                <li>
                    <h2>3</h2>
                    <h3>History</h3>
                    <p>Want to know places Stacy visited today?and when she left the zone? </p>
                    <button>View</button>
                </li>
                <li>
                    <h2>4</h2>
                    <h3>Details</h3>
                    <p>View device information and zones set</p>
                    <button>Read more</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import GoogleMap from  '../GoogleMap.vue'
export default {
    name: 'Device',
    components: GoogleMap
}
</script>

<style scoped>
    .device {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        margin-left: 5vw;
        margin-top: 2vw;
    }
    .info {
        background: rgb(158, 215, 233);
        flex-basis: 100%;
        display: flex;
    }
    h1{
        flex-basis: 50%;
        text-align: left;
        margin-left: 5vw;
        color: #fff;
        font-size: 4em;
        
    }
    .location {
        flex-basis: 40%;
        height: 20vw;
        overflow: hidden;
    }
    img {
        width: inherit;
        height: inherit;
    }
    .location figcaption {
        color: #000;  
    }
        .tilesWrap {
        padding: 0;
        margin: 50px auto;
        list-style: none;
        text-align: center;
    }
    .tilesWrap li {
        display: inline-block;
        width: 20%;
        min-width: 200px;
        max-width: 230px;
        padding: 80px 20px 40px;
        position: relative;
        vertical-align: top;
        margin: 10px;
        font-family: 'helvetica', san-serif;
        min-height: 25vh;
        background: #262a2b;
        border: 1px solid #252727;
        text-align: left;
    }
    .tilesWrap li h2 {
        font-size: 114px;
        margin: 0;
        position: absolute;
        opacity: 0.2;
        top: 50px;
        right: 10px;
        transition: all 0.3s ease-in-out;
    }
    .tilesWrap li h3 {
        font-size: 20px;
        color: #b7b7b7;
        margin-bottom: 5px;
    }
    .tilesWrap li p {
        font-size: 16px;
        line-height: 18px;
        color: #b7b7b7;
        margin-top: 5px;
    }
    .tilesWrap li button {
        background: transparent;
        border: 1px solid #b7b7b7;
        padding: 10px 20px;
        color: #b7b7b7;
        border-radius: 3px;
        position: relative;
        transition: all 0.3s ease-in-out;
        transform: translateY(-40px);
        opacity: 0;
        cursor: pointer;
        overflow: hidden;
    }
    .tilesWrap li button:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 120%;
        background: #b7b7b7;
        top: 0;
        opacity: 0;
        left: -140px;
        border-radius: 0 20px 20px 0;
        z-index: -1;
        transition: all 0.3s ease-in-out;
        
    }
    .tilesWrap li:hover button {
        transform: translateY(5px);
        opacity: 1;
    }
    .tilesWrap li button:hover {
        color: #262a2b;
    }
    .tilesWrap li button:hover:before {
        left: 0;
        opacity: 1;
    }
    .tilesWrap li:hover h2 {
        top: 0px;
        opacity: 0.6;
    }
    .options {
        display: flex;
       

    }
    .tilesWrap li:before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        z-index: -1;
        background: #fff;
        transform: skew(2deg, 2deg);
    }
    .tilesWrap li:after {
        content: '';
        position: absolute;
        width: 40%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(255, 255, 255, 0.02);
    }
    .tilesWrap li:nth-child(1):before {
        background: #C9FFBF;
        background: -webkit-linear-gradient(to right, #FFAFBD, #C9FFBF);
        background: linear-gradient(to right, #FFAFBD, #C9FFBF);
    }
    .tilesWrap li:nth-child(2):before {
        background: #f2709c;
        background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
        background: linear-gradient(to right, #ff9472, #f2709c);
    }
    .tilesWrap li:nth-child(3):before {
        background: #c21500;
        background: -webkit-linear-gradient(to right, #ffc500, #c21500);
        background: linear-gradient(to right, #ffc500, #c21500);
    }
    .tilesWrap li:nth-child(4):before {
        background: #FC354C;
        background: -webkit-linear-gradient(to right, #0ABFBC, #FC354C);
        background: linear-gradient(to right, #0ABFBC, #FC354C);
    }
</style>