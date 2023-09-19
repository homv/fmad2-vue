<template>
  <div>
  <h1>{{venue.name}}</h1>
  <p>Capacity: {{venue.capacity}}</p>
  <p>Address: {{venue.street}}, {{venue.landmark}}, {{venue.pincode}}, {{venue.city}}, {{venue.state}}</p>
  <p>Purpose: {{venue.purpose}}</p>
  <h2>Events</h2>
  </div>
</template>

<script>
export default {
  name: "VenueDet",
  mounted() {
    const venue = this.$store.getters["venueManagement/getVenue"][this.$route.params.id];
    if (!venue){
      this.$store.dispatch("venueManagement/getSpecVenue", this.$route.params.id).then((data) => {
        this.venue = data;
      })
    }

  },
  data() {
    return {
      venue: this.$store.getters["venueManagement/getVenue"][this.$route.params.id],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>