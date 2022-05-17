<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      user: {}
    };
  },
  created: function () {
    this.userShow()
  },
  methods: {

    userShow: function () {
      axios.get(`/users`).then(response => {
        console.log(response.data)
        this.user = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <div class="position-absolute top-50 start-50 translate-middle-x">
      <!-- <div v-for="user in users" v-bind:key="user.id">{{ user.name }}</div> -->
      <h1>Welcome, {{ user.name }}, to Audition Songify</h1>
      <p>Save time by searching for audition songs in one place!</p>
      <div class="d-grid gap-2 col-6 mx-auto">
        <a href="/songs" class="btn btn-dark btn-lg">Search</a>
        <a href="/saved" class="btn btn-dark btn-lg">Saved</a>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  color: black;
  text-align: center;
}
</style>