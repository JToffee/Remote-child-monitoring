<template>
    <div>
        <h1>Stacy's Location</h1>
    <!--Display Map -->

        <GmapMap
        :center='center'
        :zoom='12'
        style='width:100%;  height: 400px;'
        >
        <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
        />
        </GmapMap>
    </div>
</template>
<script>
import "../firebase";
import { getDatabase, ref, onValue} from "firebase/database";
import { database } from '../firebase';
const db = getDatabase();
//import {getDocs,collection,addDoc,doc,setDoc,deleteDoc,onSnapshot} from "firebase/firestore"
export default {
    name : "LearnMaps",
    data() {
    return {
      center: { lat: 36.7659, lng: 1.3923 },
      currentPlace: { lat: 36.7659, lng: 1.3923  },
      markers: [],
      places: []
    }
    },
    mounted() {
    // geolocation 
    //this.geolocate();
    //this.readLocation();
    //this.setPlace ();  
    this.getFirebasertd("coordinates");
    console.log(this.currentPlace);
    this.addMarker ();
    
  },
  created (){
    this.getFirebasertd("coordinates");
    this.addMarker ();
  },
  methods: {
    //readLocation: function(){
      //db.collection('Locations') 
      //.get()
      //.then(snapshot=> {
        //snapshot.foreach( doc => {
        //console.log(doc.data());
      //})
      //});
      
    //},
    //  snapshot.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      //});
    //set new location
    getFirebasertd: function(item){
    // const db = getDatabase()
    const getChildData = ref(database,item)
      onValue(getChildData,(snapshot)=>{
          const data = snapshot.val();
          this.currentPlace= {lat: data.lat,lng: data.lng};
          this.center= {lat: data.lat,lng: data.lng};
          console.log(data);
        return data;
    })},
    
    //Add markers to the map
    addMarker: function() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.lat,
          lng: this.currentPlace.lng
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    //Geolocation to browser location
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
}
</script>
<style scoped>
h1{
    color: #000000;
}
</style>
