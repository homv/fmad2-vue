<template>
  <div>
    <h1>Add Venue</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="venueName">Venue Name:</label>
        <input type="text" name="venueName" id="venueName" v-model="venueName"/>
      </div>
      <div>
        <label for="venueCapacity">Venue Capacity:</label>
        <input type="number" name="venueCapacity" id="venueCapacity" v-model="venueCapacity">
      </div>
      <div>
        <h3>Venue Address:</h3>
        <div>
          <label for="venueStreet">Street:</label>
          <input type="text" name="venueStreet" id="venueStreet" v-model="venueStreet">
        </div>
        <div>
          <label for="venueLandmark">Landmark:</label>
          <input type="text" name="venueLandmark" id="venueLandmark" v-model="venueLandmark">
        </div>
        <div>
          <label for="venuePincode">Pincode:</label>
          <input type="number" name="venuePincode" id="venuePincode" v-model="venuePincode">
        </div>
        <div>
          <label for="venueCity">City:</label>
          <input type="text" name="venueCity" id="venueCity" v-model="venueCity">
        </div>
        <div>
        <label for="venueState">State:</label>
        <input type="text" name="venueState" id="venueState" v-model="venueState">
        </div>
        </div>
        <div>
          <label for="venuePurpose">Purpose:</label>
          <input type="text" name="venuePurpose" id="venuePurpose" v-model="venuePurpose">
        </div>
        <button type="submit">Add Venue</button>
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