<script>
export default {
  data: function () {
    return {
      isLoggedIn: false
    }
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar navbar-light" style="background-color: #B0C4CF;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Songify</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li v-if="isLoggedIn">
            <a class="nav-link" href="/songs">Search</a>
          </li>
          <li v-if="isLoggedIn">
            <a class="nav-link" href="/saved">Saved</a>
          </li>
          <li v-if="!isLoggedIn">
            <a class="nav-link" href="/signup">Signup</a>
          </li>
          <li v-if="!isLoggedIn">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li v-if="isLoggedIn">
            <a class="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
  <!-- <img
    src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yNzktbXludC0xMS1rems1NTBhYS5qcGc.jpg"
    class="bg" alt="..."> -->
</template>

<style>
#app {
  font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
  /* The image used */
  background-image: url("https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yNzktbXludC0xMS1rems1NTBhYS5qcGc.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* .bg {
  height: 100%;
  background-position: center;
  background-size: contain, cover;
} */

body,
html {
  height: 100%;
}

.bg {
  /* The image used */
  background-image: url("https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yNzktbXludC0xMS1rems1NTBhYS5qcGc.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
