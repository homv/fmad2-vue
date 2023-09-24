<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h1 class="text-center"><i class="bi bi-door-open"></i> Login</h1>
          </div>
          <div class="card-body">
            <form @submit.prevent="onSubmit">
              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" v-model="email" name="email" id="email" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" v-model="password" name="password" id="password" class="form-control" />
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary"><i class="bi bi-box-arrow-in-right"></i> Login</button>
              </div>
            </form>
          </div>
          <div class="card-footer text-center">
            <router-link to="/register">Don't have an account? Register here.</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginRegister",
  created() {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  props: {},
  methods: {
    onSubmit() {
      this.$store
        .dispatch("loginRegister/login", {
          email: this.email,
          password: this.password,
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
          if (data.role === "admin") {
            this.$router.push("/admin");
          } else {
            this.$router.push("/user");
          }
        });
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
