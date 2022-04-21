<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Song index page",
      songs: []
    };
  },
  created: function () {
    this.songsIndex()
  },
  methods: {
    songsIndex: function () {
      console.log('all songs')
      axios.get(`/songs`).then(response => {
        console.log(response.data)
        this.songs = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="song in songs" v-bind:key="song.id">
      <p>{{ song.title }}</p>
    </div>

  </div>
</template>

<style>
</style>