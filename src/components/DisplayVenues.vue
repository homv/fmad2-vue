<template>
  <div class="container mt-4">
    <h1 class="mb-4">Venues</h1>
    <div v-for="venue in venue_list" :key="venue.id" class="card mb-3">
      <div @click="storedet(venue)" style="cursor:pointer" class="card-body">
        <h3 class="card-title">{{ venue.name }}</h3>
        <p class="card-text">Capacity: {{ venue.capacity }}</p>
        <p class="card-text">
          Address: {{ venue.street }}, {{ venue.landmark }}, {{ venue.pincode }}, {{ venue.city }}, {{ venue.state }}
        </p>
        <p class="card-text">Purpose: {{ venue.purpose }}</p>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-secondary me-3" @click="csvJob(venue)">
          <i class="bi bi-arrow-down"></i> CSV Report
        </button>
        <button class="btn btn-danger" @click="delVenue(venue)">
          <i class="bi bi-trash"></i> Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayVenues",
  mounted() {
    this.$store.dispatch("venueManagement/getVenues").then((data) => {
      console.log(data);
      this.venue_list = data;
    });
  },
  data() {
    return {
      venue_list: [],
    };
  },
  props: {},
  methods: {
    storedet(venue) {
      this.$store.commit("venueManagement/setVenue", venue);
      this.$router.push("/VenueDetails/" + venue.id);
    },
    delVenue(venue) {
      this.$store.dispatch("venueManagement/deleteVenue", venue.id).then(() => {
        this.venue_list = this.venue_list.filter((v) => v.id !== venue.id);
      });
    },
    csvJob(venue) {
      this.$store.dispatch("venueManagement/csvJobs", venue.id).then(() => {
        alert("Task Sheduled, Check Mail For Alerts");
      });
    },
  },
};
</script>

