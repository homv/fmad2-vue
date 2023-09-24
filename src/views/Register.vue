<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h1 class="text-center"><i class="bi bi-person-plus"></i> Register</h1>
            </div>
            <div class="card-body">
              <form @submit.prevent="onSubmit">
                <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input type="email" v-model="email" name="email" id="email" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label">Username:</label>
                  <input type="text" v-model="name" name="name" id="name" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password:</label>
                  <input type="password" v-model="password" name="password" id="password" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="pincode" class="form-label">Pincode:</label>
                  <input type="text" v-model="pincode" name="pincode" id="pincode" class="form-control" />
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary"><i class="bi bi-person-plus"></i> Register</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <router-link to="/login">Already have an account? Login here.</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Mad2AppRegister',
    data() {
      return {
        email: '',
        name: '',
        password: '',
        pincode: ''
      };
    },
    methods: {
      onSubmit() {
        this.$store
          .dispatch('loginRegister/register', {
            email: this.email,
            username: this.name,
            password: this.password,
            pincode: this.pincode
          })
          .then((data) => {
            console.log(data);
            this.$router.push('/login');
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  