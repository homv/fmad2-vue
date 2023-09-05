<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
    
      <div>
        <label for="email">Email </label>
        <input type="email" v-model="email" name="email" id="email" />
      </div>
      <div>
        <label for="password">Password </label>
        <input type="password" v-model="password" name="password" id="password" />
      </div>
      <div>
        <button type="submit">Login</button>
        </div>
    </form>
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
    onSubmit(){
      
    }
  },
};
</script>
<style scoped>


</style>