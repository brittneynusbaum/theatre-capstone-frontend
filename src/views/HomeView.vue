<script>
export default {
  data: function () {
    return {
      message: "Welcome to Audition Songify",
    };
  },
  created: function () { },
  methods: {},
};
</script>

<template>
  <div class="home">
    <div class="position-absolute top-50 start-50 translate-middle-x">
      <h1>{{ message }}</h1>
      <p>Save time by searching for audition songs in one place!</p>
      <a href="/signup" class="btn btn-dark btn-lg">Signup</a>
      <a href="/login" class="btn btn-dark btn-lg">Login</a>
    </div>
  </div>
</template>

<style>
.home {
  color: black;
  text-align: center;
}
</style>