<template>
  <div>
    <router-link :to="{name: 'myTickets' }">My Tickets</router-link>
    <h1>Events</h1>
    <div v-for="venue in venues" :key="venue.id">
      <h2>{{ venue.name }}</h2>
      <p><strong>Street:</strong> {{ venue.street }}</p>
      <p><strong>City:</strong> {{ venue.city }}</p>
      <p><strong>State:</strong> {{ venue.state }}</p>
      <p><strong>Pincode:</strong> {{ venue.pincode }}</p>
      <p><strong>Landmark:</strong> {{ venue.landmark }}</p>
      <p><strong>Purpose:</strong> {{ venue.purpose }}</p>
      <h3>Events:</h3>
      <ul>
        <li v-for="event in venue.venue_events" :key="event.event_id">
          <p><strong>Name:</strong> {{ event.event.name }}</p>
          <p><strong>Date:</strong> {{ event.date }}</p>
          <p><strong>Start Time:</strong> {{ event.start_time }}</p>
          <p><strong>End Time:</strong> {{ event.end_time }}</p>
          <p><strong>Price:</strong> {{ event.price }}</p>
          <router-link :to="{ name: 'book', query: { envId: event.id }, params:{price: event.price} }">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
    name: "UserHome",
    created() { },
    mounted() {
        this.$store.dispatch("eventManagement/getVenueEvents").then((response) => {
            this.venues = response;
        });
    },
    data() {
        return {
            venues: [],
        };
    },
    props: {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
