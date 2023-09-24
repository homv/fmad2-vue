<template>
  <div class="book-ticket">
    <h1 class="page-title">Book Ticket</h1>
    <div class="ticket-info">
      <h2>Number of Tickets Booked Previously: {{ numTickets }}</h2>
      <form @submit.prevent="onSubmit" class="ticket-form">
        <div class="form-group">
          <label for="number">Number of Tickets:</label>
          <input
            type="number"
            min="1"
            :max="max_val"
            id="number"
            v-model="num"
            name="number"
            class="form-control"
            :class="{ 'is-invalid': num <= 0 || num>max_val }"
          >
          <div class="invalid-feedback">
            Please enter a valid number of tickets - between 1 and ({{ max_val }}).
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <h2>Total Price: {{ num * $route.params.price }}</h2>
    </div>
  </div>
</template>


<script>
export default {
  name: "BookTicket",
  mounted() {
    this.$store.dispatch("ticketManagement/getTickCount", this.$route.query.envId).then((data) => {
      this.max_val = data.capacity;
      this.numTickets = data.ticket_user_count;
    });
    if (!this.$route.params.price) {
      this.$router.push({ name: "user" });
    }
  },
  data() {
    return {
      num: 1,
      numTickets: 0,
      total_price: 0,
      max_val:0,
    };
  },
  props: {},
  methods: {
    onSubmit() {
      this.$store
        .dispatch("ticketManagement/bookTicket", {
          number_of_tickets: this.num,
          venue_event_id: this.$route.query.envId,
        })
        this.$router.push({ name: "myTickets" });
    },
  },
};
</script>

<style scoped>
.book-ticket {
  text-align: center;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.ticket-info {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

.ticket-info h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.ticket-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
