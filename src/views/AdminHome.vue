<template>
  <div>
    <DisplayVenues></DisplayVenues>
    <router-link to="/addVenue">Add Venue</router-link>
  </div>
</template>

<script>

import DisplayVenues from '../components/DisplayVenues.vue'

export default {
    name: "AdminHome",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: {
      DisplayVenues
    }

};
</script>

<style lang="scss" scoped></style>