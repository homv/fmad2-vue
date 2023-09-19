<template>
  <div>
  Venues
  </div>
</template>

<script>
export default {
  name: "DisplayVenues",
  mounted() {
    this.$store.dispatch("venueManagement/getVenues").then((data) => {
      console.log(data)
      this.venue_list = data;
    })
  },
  data() {
    return {
      venue_list: [],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>