<template>
    <div>
        <h1>My location</h1>

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
export default {
    name : "LearnMaps",
    data() {
    return {
      center: { lat: 0, lng: 0 },
      currentPlace: null,
      markers: [],
      places: [],
    }
    },
    mounted() {
    // geolocation 
    //this.geolocate();

    this.setPlace ();
    this.addMarker ();
  },
  methods: {
    //set new location
    setPlace: function(){
        this.center = { lat: 60.1282, lng: 18.6435 }
        this.currentPlace = { lat: 60.1282, lng: 18.6435 }
    },
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