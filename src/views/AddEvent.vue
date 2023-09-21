<template>
  <div>
  <h1>Add Event</h1>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="name">Name </label>
      <input type="text" id="name" name="name" v-model="name" placeholder="Event Name">
    </div>
    <div>
      <label for="description">Description </label>
      <input type="text" id="description" name="description" v-model="description" placeholder="Event Description">
    </div>
    <div>
      <label for="tags">Tags </label>
      <input type="text" id="tags" name="tags" v-model="tags" placeholder="Event Tags">
    </div>
    <div><button type="submit">Add Event</button></div>
  </form>
  </div>
</template>

<script>
export default {
  name: "AddEvent",
  created() {},
  data() {
    return {
      name:"",
      description:"",
      tags:"",
  }},
  props: {},
  methods: {
    onSubmit(){
      const tags = this.tags.split(",")
      this.$store.dispatch("eventManagement/addEvent", {name:this.name, description:this.description, tags:tags}).then(() => {
        this.$router.go(-1);
      })
    }
  },
};
</script>

<style lang="scss" scoped></style>