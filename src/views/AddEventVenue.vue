<template>
  <div class="container mt-4">
    <h1 class="mb-4">Add Event to {{ venue.name }}</h1>

    <!-- Existing Events Section -->
    <section class="existing-events">
      <h3>Existing Events in Database</h3>

      <div v-for="event in events" :key="event.id" class="event-card mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ event.name }}</h3>
            <p class="card-text"><strong>Description:</strong> {{ event.description }}</p>
            <p class="card-text"><strong>Tags:</strong> {{ event.tags.join(", ") }}</p>
            <router-link
              :to="{
                name: 'addtoEvent',
                query: { venueid: venue.id, eventid: event.id },
              }"
              class="btn btn-primary btn-sm"
            >
              <i class="bi bi-plus-circle"></i> Add to {{ venue.name }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Add New Event Button -->
    <div class="mt-4">
      <router-link :to="{ name: 'addEvent' }" class="btn btn-success">
        <i class="bi bi-plus-circle"></i> Add New Event
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEventVenue",
  data() {
    return {
      events: [],
      venue: {},
    };
  },
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
    const events = await this.$store.dispatch("eventManagement/getEvents");
    if (!events) {
      try {
        const data = await this.$store.dispatch("eventManagement/getEvents");
        this.events = data;
      } catch (error) {
        console.log(error);
      }
    } else {
      this.events = events;
    }
  },
};
</script>

<style scoped>
.existing-events {
  margin-top: 2rem;
}

.event-card {
  background-color: #f8f9fa;
  border-radius: 8px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
}

.btn-primary {
  background-color: #007bff;
}

.btn-success {
  background-color: #28a745;
}

/* You can add more styles as needed */
</style>
