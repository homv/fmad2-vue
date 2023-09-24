<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h1 class="display-4">Welcome to the Admin Panel</h1>
        <p class="lead">Manage your venues here.</p>
        <button class="btn btn-danger btn-lg btn-block" @click="logout">
        <i class="bi bi-box-arrow-right"></i> Logout
      </button>
      </div>
    </div>
    <div class="row">
      <DisplayVenues></DisplayVenues>
      <router-link to="/addVenue" class="btn btn-primary btn-lg btn-block">
        <i class="bi bi-plus-circle"></i> Add Venue
      </router-link>
      <!-- Logout button -->
      
    </div>
  </div>
</template>

<script>
import DisplayVenues from '../components/DisplayVenues.vue'

export default {
  name: "AdminHome",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    logout(){
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  components: {
    DisplayVenues
  }
};
</script>

<style lang="scss" scoped></style>
