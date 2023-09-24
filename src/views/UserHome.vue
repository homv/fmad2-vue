<template>
  <div class="row">
    <div class="col-2">
      <aside class="sidebar mt-5">
        <h3>Filter Options</h3>
        <div class="form-group">
  <label for="cityFilter">City:</label>
  <input
    type="text"
    id="cityFilter"
    class="form-control"
    v-model="cityFilter"
    @input="filterVenues"
  />
</div>

<div class="form-group">
  <label for="priceFilter">Max Price:</label>
  <input
    type="text"
    id="priceFilter"
    class="form-control"
    v-model="priceFilter"
    @input="filterVenues"
  />
</div>

<div class="form-group">
  <label for="tagsFilter">Tags:</label>
  <select
    id="tagsFilter"
    class="form-control"
    v-model="tagsFilter"
    @change="filterVenues"
  ></select>
</div>

<div class="form-group">
  <label for="purposeFilter">Purpose:</label>
  <input
    type="text"
    id="purposeFilter"
    class="form-control"
    v-model="purposeFilter"
    @input="filterVenues"
  />
</div>

        <button class="btn btn-primary">Reset Filters</button>
      </aside>
    </div>

    <div class="col-9 mt-4">
      <router-link :to="{ name: 'myTickets' }" class="btn btn-primary mb-4">
        <i class="bi bi-ticket"></i> My Tickets
      </router-link>
      <div class="d-flex justify-content-end">
  <button class="btn btn-danger btn-lg justify-content-end" @click="logout">
    <i class="bi bi-box-arrow-right"></i> Logout
  </button>
</div>

      <h1 class="mb-4">Events</h1>
      <div v-for="venue in venues" :key="venue.id" class="card mb-4">
        <div class="card-body">
          <h2 class="card-title">{{ venue.name }}</h2>
          <address class="address mb-3">
            <p>
              <strong>Address:</strong> {{ venue.street }}, {{ venue.city }},
              {{ venue.state }} {{ venue.pincode }}
            </p>
            <p><strong>Landmark:</strong> {{ venue.landmark }}</p>
          </address>
          <p><strong>Purpose:</strong> {{ venue.purpose }}</p>
          <h3 class="mt-3">Events:</h3>
          <ul class="list-group">
            <li
              v-for="event in venue.venue_events"
              :key="event.event_id"
              class="list-group-item event-item"
            >
              <h4 class="event-name">{{ event.event.name }}</h4>
              <div class="event-details">
                <div>
                  <p><strong>Date:</strong> {{ event.date }}</p>
                  <p>
                    <strong>Time:</strong> {{ event.start_time }} -
                    {{ event.end_time }}
                  </p>
                </div>
                <div class="event-actions">
                  <p><strong>Price:</strong> {{ event.price }}</p>
                  <router-link
                    :to="{
                      name: 'book',
                      query: { envId: event.id },
                      params: { price: event.price },
                    }"
                    class="btn btn-success btn-sm"
                  >
                    <i class="bi bi-pencil-square"></i> Register
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHome",
  created() {},
  mounted() {
    this.$store.dispatch("eventManagement/getVenueEvents").then((response) => {
      this.venues = response;
    });
  },
  data() {
    return {
      venues: [],
      cityFilter: "",
      priceFilter: 0,
      tagsFilter: "",
      purposeFilter: "",
      filteredVenues: [],
    };
  },
  methods: {
  filterVenues() {
    this.filteredVenues = this.venues.filter((venue) => {
      const cityMatch = this.cityFilter == "" || venue.city.toLowerCase().includes(this.cityFilter.toLowerCase());
      const purposeMatch = this.purposeFilter == '' || venue.purpose.toLowerCase().includes(this.purposeFilter.toLowerCase());
      return cityMatch && purposeMatch;
    });
  },
  logout(){
    localStorage.removeItem('token')
    this.$router.push('/login')
  }
},

  props: {},
};
</script>

<style scoped>
.event-item {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  transition: background-color 0.3s;
}

.event-item:hover {
  background-color: #ebebeb;
}

.event-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.event-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.address p {
  margin: 5px 0;
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

.event-actions .btn {
  margin-top: 5px;
}

.sidebar {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

/* Add more custom styles as needed */
</style>
