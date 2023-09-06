<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="email">Email </label>
                <input type="email" v-model="email" name="email" id="email" />
            </div>
            <div>
                <label for="name">Username </label>
                <input type="text" v-model="name" name="name" id="name" />
                </div>
            <div>
                <label for="password">Password </label>
                <input type="password" v-model="password" name="password" id="password" />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
        <router-link to="/login">Login</router-link>
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
        };
    },
    mounted() {
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('register', {
                email: this.email,
                username: this.name,
                password: this.password,
            }).then((data) => {
                console.log(data);
                this.$router.push('/login');
            });
        }
    },

};
</script>

<style scoped>

</style>