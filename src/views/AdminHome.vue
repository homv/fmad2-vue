<template>
  <div>
  <router-view></router-view>
    <router-link to="/admin/addVenue">Add Venue</router-link>
  </div>
</template>

<script>


export default {
    name: "AdminHome",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>