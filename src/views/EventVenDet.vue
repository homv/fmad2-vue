<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="start_time">Start Time </label>
        <input type="time" id="start_time" v-model="start_time" />
      </div>
      <div>
        <label for="end_time">End Time</label>
        <input type="time" id="end_time" v-model="end_time" />
      </div>
      <div>
        <label for="date">Date</label>
        <input type="date" id="date" v-model="date" />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="number" id="price" v-model="price" />
        </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EventVenDet",
  created() {},
  data() {
    return {
      start_time: "",
      end_time: "",
      date: "",
      price: "",
      event : {},
      venue : {}
    };
  },
  props: {},
  methods: {
    onSubmit(){
      this.$store.dispatch('eventManagement/addEventtoVenue', {
        start_time: this.start_time,
        end_time: this.end_time,
        date: this.date,
        price: this.price,
        event_id: this.$route.query.eventid,
        venue_id: this.$route.query.venueid
      }).then((data) => {
        console.log(data);
      })
    }
  },
  mounted(){}
};
</script>

<style lang="scss" scoped></style>