<template>
  <div class="container mt-5">
    <h1 class="mb-4">My Tickets</h1>
    <div>
    <h3 class="form-subtitle"><i class="bi bi-ticket"></i> Completed Events</h3>
      <ul class="ticket-list">
        <li v-for="ticket in tickets" :key="ticket.id" class="ticket-item">
          <div class="ticket-header">
            <h2 class="ticket-id">Ticket ID: {{ ticket.id }}</h2>
            <p class="venue-info">
              <i class="bi bi-geo-alt"></i>
              <span class="venue-name">{{ ticket['venue_event']['venue']['name'] }}</span>
              <span class="venue-address">
                {{ ticket['venue_event']['venue']['street'] }}, {{ ticket['venue_event']['venue']['city'] }}, {{ ticket['venue_event']['venue']['state'] }}, {{ ticket['venue_event']['venue']['pincode'] }}
              </span>
            </p>
          </div>
          <div class="event-info">
            <p class="event-name"><i class="bi bi-calendar"></i> Event: {{ ticket['venue_event']['event']['name'] }}</p>
            <p class="event-date-time">
              <i class="bi bi-clock"></i>
              Date: {{ ticket['venue_event']['date'] }} | Timing: {{ ticket['venue_event']['start_time'] }} - {{ ticket['venue_event']['end_time'] }}
            </p>
          </div>
        </li>
      </ul>
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
      tickets: [],
    };
  },
};
</script>

<style scoped>
.ticket-list {
  list-style-type: none;
  padding: 0;
}

.ticket-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

.ticket-item:hover {
  background-color: #e6e6e6;
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ticket-id {
  font-size: 1.5rem;
  margin: 0;
}

.venue-info {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.venue-name {
  font-weight: bold;
  margin-right: 10px;
}

.venue-address {
  font-size: 0.9rem;
  color: #555;
}

.event-name {
  font-weight: bold;
  margin: 0;
}

.event-date-time {
  margin: 0;
  color: #555;
  font-size: 0.9rem;
}
</style>
