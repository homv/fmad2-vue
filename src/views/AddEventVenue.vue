<template>
  <div>
    <h1>Add Event to {{ venue.name }}</h1>
    <div>
      <h3>Existing Events in Database</h3>
      <div v-for="event in events" :key="event.id" class="event-item">
        <h3>{{ event.name }}</h3>
        <p><strong>Description:</strong> {{ event.description }}</p>
        <p><strong>Tags:</strong> {{ event.tags.join(", ") }}</p>
        <router-link
          :to="{
            name: 'addtoEvent',
            query: { venueid: venue.id, eventid: event.id },
          }"
          >Add to {{ venue.name }}</router-link
        >
      </div>
    </div>
    <router-link :to="{ name: 'addEvent'}">Add New Event</router-link>
  </div>
</template>

<script>

export default {
  name: "AddEventVenue",
  created() {},
  data() {
    return {
      events: [],
      venue: [],
    };
  },
  props: {},
  methods: {},
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

<style lang="scss" scoped></style>
