<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <div class="position-absolute top-50 start-50 translate-middle">

      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Email: </label>
          <input type="email" v-model="newSessionParams.email" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" v-model="newSessionParams.password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
  <div class="frodo-login">
    <div class="bg-light p-2 text-dark bg-opacity-75">
      <p>Frodo has an audition in the Shire, so he's already created an
        account! He's happy to share his log in information with you if you'd like to test the app.</p>
      <p>email: frodo@email.com</p>
      <p>password: password</p>
    </div>
  </div>
</template>

<style>
.login {
  text-align: right;
}

.frodo-login {
  text-align: center;
}
</style>