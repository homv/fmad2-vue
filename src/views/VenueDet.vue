<template>
  <div class="container mt-4">
    <h1 class="venue-name">{{ venue.name }}</h1>
    <p class="lead">Capacity: {{ venue.capacity }}</p>
    <address>
      <p>
        <strong>Address:</strong> {{ venue.street }}, {{ venue.landmark }},
        {{ venue.pincode }}, {{ venue.city }}, {{ venue.state }}
      </p>
    </address>
    <p class="mb-4">Purpose: {{ venue.purpose }}</p>
    <h2 class="events-heading">Events</h2>
    <h3 v-if="events.length === 0" class="no-events-message mt-4">No Events Added</h3>
    <ul class="list-group mt-3">
      <li v-for="(event, index) in events" :key="index" class="list-group-item event-item">
        <h3 class="event-title">{{ event.event.name }}</h3>
        <p class="event-description">Description: {{ event.event.description }}</p>
        <p class="event-date">Date: {{ event.date }}</p>
        <p class="event-time">Start Time: {{ event.start_time }}</p>
        <p class="event-time">End Time: {{ event.end_time }}</p>
        <p class="event-price">Price: {{ event.price }}</p>
        <p class="event-tags">Tags: {{ event.event.tags.join(', ') }}</p>
      </li>
    </ul>
    <div class="mt-4">
      <router-link :to="{ name: 'addtoVenue' }" class="btn btn-primary">
        <i class="bi bi-plus-circle"></i> Add Event to {{ venue.name }}
      </router-link>
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
      venue: {},
      events: [],
    };
  },
};
</script>

<style scoped>
/* Custom styles for Venue Details */
.venue-name {
  font-size: 2rem;
  margin-bottom: 10px;
}

.events-heading {
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
}

.no-events-message {
  font-size: 1.2rem;
  color: #777;
}

.event-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

.event-item:hover {
  background-color: #e6e6e6;
}

.event-title {
  font-size: 1.5rem;
  margin: 0;
}

.event-description,
.event-date,
.event-time,
.event-price,
.event-tags {
  margin: 0;
  font-size: 1rem;
  color: #555;
}
</style>
