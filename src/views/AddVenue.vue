<template>
  <div class="container">
    <h1 class="my-4">Add Venue</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="venueName" class="form-label">Venue Name:</label>
        <input type="text" class="form-control" id="venueName" v-model="venueName" />
      </div>
      <div class="mb-3">
        <label for="venueCapacity" class="form-label">Venue Capacity:</label>
        <input type="number" class="form-control" id="venueCapacity" v-model="venueCapacity" />
      </div>
      <div class="mb-3">
        <h3>Venue Address:</h3>
        <div class="mb-3">
          <label for="venueStreet" class="form-label">Street:</label>
          <input type="text" class="form-control" id="venueStreet" v-model="venueStreet" />
        </div>
        <div class="mb-3">
          <label for="venueLandmark" class="form-label">Landmark:</label>
          <input type="text" class="form-control" id="venueLandmark" v-model="venueLandmark" />
        </div>
        <div class="mb-3">
          <label for="venuePincode" class="form-label">Pincode:</label>
          <input type="number" class="form-control" id="venuePincode" v-model="venuePincode" />
        </div>
        <div class="mb-3">
          <label for="venueCity" class="form-label">City:</label>
          <input type="text" class="form-control" id="venueCity" v-model="venueCity" />
        </div>
        <div class="mb-3">
          <label for="venueState" class="form-label">State:</label>
          <input type="text" class="form-control" id="venueState" v-model="venueState" />
        </div>
      </div>
      <div class="mb-3">
        <label for="venuePurpose" class="form-label">Purpose:</label>
        <input type="text" class="form-control" id="venuePurpose" v-model="venuePurpose" />
      </div>
      <button type="submit" class="btn btn-primary">Add Venue</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "AddVenue",
  created() {},
  data() {
    return {
      venueName: "",
      venueCapacity: "",
      venueStreet: "",
      venueLandmark: "",
      venuePincode: "",
      venueCity: "",
      venuePurpose: "",
      venueState: "",
    };
  },
  props: {},
  methods: {
    onSubmit() {
      this.$store.dispatch(
        "venueManagement/addVenue",
        {
          name: this.venueName,
          capacity: this.venueCapacity,
          street: this.venueStreet,
          landmark: this.venueLandmark,
          pincode: this.venuePincode,
          city: this.venueCity,
          purpose: this.venuePurpose,
          state: this.venueState,
        }
      ).then((data) => {
        console.log(data);
        this.$router.push("/admin");
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>