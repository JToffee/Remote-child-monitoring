<template>
  <div>
    <div>
        <div class = "circle">
            <h4>location</h4>
        </div>
      <h2 style="color: #000">Search and add a pin</h2>
      <GmapAutocomplete @place_changed='setPlace' style="height: 3vw"/>
       <button @click='addMarker' class = "btn" style="background:#3ca89f; border-radius:0; margin-right: 1vw"> Add Place </button>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    ><GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
      <GmapCircle
        v-for="(pin, index) in markers"
        :key="index"
        :center="pin.position"
        :radius="50"
        :visible="true"
        :options="{fillColor:'red',border: none ,fillOpacity:0.5}"
      ></GmapCircle>
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'AddZone',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
       currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
       setPlace(place) {
      this.currentPlace = place;
    },
       addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    geofence(){
      circ = document.getElementById("cirle");
      circ.style.display = "inline"
    }
  },
};
</script>
<style scoped>
.circle {
    width: 10vw;
    height: 10vw;
    background: rgb(231, 139, 139);
    color: #000;
    border-radius: 5vw;
    position: absolute;
    top: 33vw;
    left: 44vw;
    z-index: 1;
    display: none;
    opacity: 0.6;
}
</style>