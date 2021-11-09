<template>
    <div>
        <div style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between">
            <div style="color: #000">
                <h1 >Your coordinates:</h1>
                <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
            </div>
            <div style="color: #000">
                <h1>Map coordinates:</h1>
                <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
            </div>
             <GmapAutocomplete
        @place_changed='setPlace'
      />
       <button
        @click='addMarker'
      >
        Add
      </button>
        </div>
        <GmapMap
            :center="center"
            :zoom="zoom"
            style="width:50vw; height:50vw; margin: 32px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        > 
            <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m"
            @click="center=m"
            ></GmapMarker></GmapMap>
    </div>
</template>
<script>
    //const home = { lat:-1.3332152763336733 ,lng:  36.829082706126535  }
    //const work = { lat:-1.3156 ,lng:  36.8297 }
    export default {
        data() {
            return {
                map: null,
                center: {lat:-1.3332152763336733 ,lng:  36.829082706126535},
                myCoordinates: {
                    lat: 0,
                    lng: 0
                },
                zoom: 7,

                markers: [],
                currentPlace: null
            }
        },
        created() {
            // does the user have a saved center? use it instead of the default
            if(localStorage.center) {
                this.myCoordinates = JSON.parse(localStorage.center);
            } else {
                // get user's coordinates from browser request
                this.$getLocation({})
                    .then(coordinates => {
                        this.myCoordinates = coordinates;
                        this.myCoordinates= this.currentPlace;
                    })
                    .catch(error => alert(error));
            }
            // does the user have a saved zoom? use it instead of the default
            if(localStorage.zoom) {
                this.zoom = parseInt(localStorage.zoom);
            }
        },
        mounted() {
            // add the map to a data object
            this.$refs.mapRef.$mapPromise.then(map => this.map = map);
           
          //  this.setMarker (this.currentPlace, "A")
        },
        methods: {
          
         /*   setMarker(Points, Label){
                const markers = new google.maps.Marker ({
                    position: Points,
                    map: this.myCoordinates,
                    label: {
                        text: Label,
                        color: "#fff"
                    }
                    
                })
            },*/

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
            handleDrag() {
                // get center and zoom level, store in localstorage
                let center = {
                    lat: this.map.getCenter().lat(),
                    lng: this.map.getCenter().lng()
                };
                let zoom = this.map.getZoom();
                localStorage.center = JSON.stringify(center);
                localStorage.zoom = zoom;
            }
        },
        computed: {
            mapCoordinates() {
                if(!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    };
                }
                return {
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4)
                }
            }
        }
    }
</script>