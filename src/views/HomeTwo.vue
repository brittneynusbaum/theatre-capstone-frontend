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