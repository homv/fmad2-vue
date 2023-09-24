<template>
  <div class="container mt-4">
  
    <form @submit.prevent="onSubmit" class="event-form">
      <h2 class="form-title"><i class="bi bi-calendar"></i> Event Details</h2>
      <div class="form-group">
        <label for="date" class="form-label">Date</label>
        <input type="date" id="date" class="form-control" v-model="date" v-on:change="getSlots" required />
      </div>
      <div class="form-group">
        <label for="start_time" class="form-label">Start Time</label>
        <input type="time" id="start_time" class="form-control" v-model="start_time" required />
      </div>
      <div class="form-group">
        <label for="end_time" class="form-label">End Time</label>
        <input type="time" id="end_time" class="form-control" v-model="end_time" required />
      </div>
      <div class="form-group">
        <label for="price" class="form-label">Price</label>
        <input type="number" id="price" class="form-control" v-model="price" required />
      </div>
      <button type="submit" class="btn btn-primary">
        <i class="bi bi-check"></i> Submit
      </button>
      <h3 class="form-subtitle"><i class="bi bi-clock"></i> Slots</h3>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th v-for="col in 5" :key="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(slot, index) in slots" :key="index">
              <td v-for="col in 5" :key="col" :class="'column-' + (col - 1)" >{{ slots[index * 5 + col - 1] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "EventVenDet",
  mounted(){

  }, 
  data() {
    return {
      start_time: "",
      end_time: "",
      date: "",
      price: "",
      event: {},
      venue: {},
      slots: [],
    };
  },
  methods: {
    getSlots() {
      this.$store
        .dispatch("venueManagement/getTodaySlots", {
          date: this.date,
          venue_id: this.$route.query.venueid,
        })
        .then((data) => {
          this.slots = data;
        });
    },
    onSubmit() {
      this.$store
        .dispatch("eventManagement/addEventtoVenue", {
          start_time: this.start_time,
          end_time: this.end_time,
          date: this.date,
          price: this.price,
          event_id: this.$route.query.eventid,
          venue_id: this.$route.query.venueid,
        })
        .then((data) => {
          console.log(data);
          this.$router.push({ name: "VenueDetails/"+this.$route.query.venueid });
        });
    },
  },
};
</script>
<style scoped>
.event-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.form-subtitle {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.column-0 {
  background-color: #f0f0f0;
}

.column-1 {
  background-color: #f9f9f9;
}

.column-2 {
  background-color: #f0f0f0;
}

.column-3 {
  background-color: #f9f9f9;
}

.column-4 {
  background-color: #f0f0f0;
}
</style>
