<template>
  <div>
  Venues
  <div v-for="venue in venue_list" :key="venue.id">
    <div @click="storedet(venue)" style="cursor:pointer">
      <h3>{{venue.name}}</h3>
      <p>Capacity: {{venue.capacity}}</p>
      <p>Address: {{venue.street}}, {{venue.landmark}}, {{venue.pincode}}, {{venue.city}}, {{venue.state}}</p>
      <p>Purpose: {{venue.purpose}}</p>
    </div>
    <p><button id="venue-delete" @click="delVenue(venue)">Delete</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayVenues",
  mounted() {
    this.$store.dispatch("venueManagement/getVenues").then((data) => {
      console.log(data)
      this.venue_list = data;
    })
  },
  data() {
    return {
      venue_list: [],
    };
  },
  props: {},
  methods: {
    storedet(venue){
      this.$store.commit("venueManagement/setVenue", venue);
      this.$router.push("/VenueDetails/"+venue.id);
    },
    delVenue(venue){
      this.$store.dispatch("venueManagement/deleteVenue", venue.id).then(() => {
        this.venue_list = this.venue_list.filter((v) => v.id !== venue.id);
      })
    }
  },
};
</script>

<style lang="scss" scoped></style>