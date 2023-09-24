<template>
  <div>
  <h1>My Tickets</h1>
    <div>
      <ul>
        <li v-for="ticket in tickets" :key="ticket.id">
          <p>Ticket ID: {{ ticket.id }}</p>
          <p>Venue: {{ ticket['venue_event']['venue']['name'] }}</p>
          <p>Address: {{ ticket['venue_event']['venue']['street'] }}, {{ ticket['venue_event']['venue']['city'] }}, {{ ticket['venue_event']['venue']['state'] }}, {{ ticket['venue_event']['venue']['pincode'] }}</p>
          <p>Event: {{ ticket['venue_event']['event']['name'] }}</p>
          <p>Date: {{ ticket['venue_event']['date'] }}</p>
          <p>Timing: {{ ticket['venue_event']['start_time'] }} - {{ ticket['venue_event']['end_time'] }} </p>
          </li></ul>
          </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("ticketManagement/getTickets").then((response) => {
      this.tickets = response;
    });
  },
  data() {
    return {
      tickets:[]
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>