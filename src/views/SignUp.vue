<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  created: function () { },
  methods: {
    userCreate: function () {
      axios.post(`/users`, this.newUserParams).then(response => {
        console.log(response.data);
        this.$router.push("/login");
      })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <div class="position-absolute top-50 start-50 translate-middle">

      <form v-on:submit.prevent="userCreate()">
        <h1>Signup</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <p>Name: <input type="text" v-model="newUserParams.name"></p>
        <p>Email: <input type="email" v-model="newUserParams.email"></p>
        <p>Password: <input type="password" v-model="newUserParams.password"></p>
        <p>Password Confirmation: <input type="password" v-model="newUserParams.password_confirmation"></p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<style>
.signup {
  text-align: right;
}
</style>