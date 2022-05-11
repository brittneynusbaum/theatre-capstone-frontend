<script>
import axios from "axios";

export default {
  data: function () {
    return {
      auditionSongs: []
    };
  },
  created: function () {
    this.auditionSongsIndex()
  },
  methods: {
    auditionSongsIndex: function () {
      console.log('all saved songs')
      axios.get(`/saved_songs`).then(response => {
        console.log(response.data)
        this.auditionSongs = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>Saved songs page!</h1>
    <!-- {{ auditionSongs }} -->
    <div v-for="auditionSong in auditionSongs" v-bind:key="auditionSong.id">
      <p>{{ auditionSong.title }}</p>
    </div>
  </div>
</template>

<style>
</style>