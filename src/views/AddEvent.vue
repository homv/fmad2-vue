<template>
  <div class="container mt-4">
    <h1 class="mb-4">Add Event</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" name="name" v-model="name" class="form-control" placeholder="Event Name">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" id="description" name="description" v-model="description" class="form-control" placeholder="Event Description">
      </div>
      <div class="mb-3">
        <label for="tags" class="form-label">Tags</label>
        <input type="text" id="tags" name="tags" v-model="tags" class="form-control" placeholder="Event Tags">
      </div>
      <div>
        <button type="submit" class="btn btn-primary">
          <i class="bi bi-plus-circle"></i> Add Event
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddEvent",
  created() {},
  data() {
    return {
      name: "",
      description: "",
      tags: "",
    };
  },
  props: {},
  methods: {
    onSubmit() {
      const tags = this.tags.split(",");
      this.$store
        .dispatch("eventManagement/addEvent", {
          name: this.name,
          description: this.description,
          tags: tags,
        })
        .then(() => {
          this.$router.go(-1);
        });
    },
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
