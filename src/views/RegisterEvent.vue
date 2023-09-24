<template>
  <div>
  <h1>Book Ticket</h1>
  <h2>Number of Tickets Booked Previously: {{numTickets}}</h2>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="number">Number of Tickets: </label>
      <input type="number" id="number" v-model="num" name="number">
    </div>
    <button type="submit">Submit</button>
  </form>
  <h2>Total Price: {{num * $route.params.price}}</h2>
  </div>
</template>

<script>
export default {
  name: "RegisterEvent",
  mounted() {
    this.$store.dispatch("ticketManagement/getTickCount", this.$route.query.envId ).then((data) => {
      this.numTickets = data.ticket_user_count;
    })
  },
  data() {
    return {
      num: 1,
      numTickets: 0,
      total_price: 0,
    };
  },
  props: {},
  methods: {
    onSubmit() {
       this.$store.dispatch("ticketManagement/bookTicket", {number_of_tickets: this.num, venue_event_id: this.$route.query.envId} ).then(() => {
         this.$router.push({name: 'user'})
       })
    },
  },
};
</script>

<style lang="scss" scoped></style>