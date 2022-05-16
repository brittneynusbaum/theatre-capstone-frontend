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
    <h1>{{ message }}</h1>
    <a href="/signup" class="btn btn-primary btn-sm">Signup</a>
    <!-- <a href="/signup" class="btn btn-primary btn-sm">Login</button> -->

  </div>
</template>

<style>
</style>