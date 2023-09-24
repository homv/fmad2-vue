<template>
  <div>
    <h1>{{ venue.name }}</h1>
    <p>Capacity: {{ venue.capacity }}</p>
    <p>
      Address: {{ venue.street }}, {{ venue.landmark }}, {{ venue.pincode }},
      {{ venue.city }}, {{ venue.state }}
    </p>
    <p>Purpose: {{ venue.purpose }}</p>
    <h2>Events</h2>
    <h3 v-if="events.length == 0">No Events Added</h3>
    <ul>
      <li v-for="(event, index) in events" :key="index">
        <h2>{{ event.event.name }}</h2>
        <p>Description: {{ event.event.description }}</p>
        <p>Date: {{ event.date }}</p>
        <p>Start Time: {{ event.start_time }}</p>
        <p>End Time: {{ event.end_time }}</p>
        <p>Price: {{ event.price }}</p>
        <p>Tags: {{ event.event.tags.join(', ') }}</p>
      </li>
    </ul>
    <div>
      <router-link :to="{name:'addtoVenue'}">Add Event to {{venue.name}}</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "VenueDet",
  async mounted() {
    const venue =
      this.$store.getters["venueManagement/getVenue"][this.$route.params.id];
    if (!venue) {
      try {
        const data = await this.$store.dispatch(
          "venueManagement/getSpecVenue",
          this.$route.params.id
        );
        this.venue = data;
      } catch (error) {
        console.log(error);
      }
    } else {
      this.venue = venue;
    }
    try {
      const data = await this.$store.dispatch(
        "eventManagement/getEventsonVenue",
        this.$route.params.id
      );
      this.events = data;
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      venue: [],
      events:[]
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
