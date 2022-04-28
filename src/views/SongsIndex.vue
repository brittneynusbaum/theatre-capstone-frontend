<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Song index page",
      songs: [],
      searchSongwriterParams: {},
      searchShowParams: {}
    };
  },
  created: function () {
    // this.songsIndex()
  },
  methods: {
    songwriterSongsIndex: function () {
      console.log('all songs')
      console.log(this.songwriter_id)
      axios.get(`/songs?composer=${this.searchSongwriterParams}&title=${this.searchShowParams}`).then(response => {
        console.log(response.data)
        this.songs = response.data
      })
    },
    showSongsIndex: function () {
      console.log('all songs based on show')
    }
    // searchSongs: function () {
    //   console.log('searching songs')
    //   return this.songs.filter(song => {
    //     var lowerTitle = song.title.toLowerCase();
    //     var lowerParams = this.searchSongwriterParams.toLowerCase();
    //     return lowerTitle.includes(this.searchSongwriterParams);
    //   })
    // }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="song in songs" v-bind:key="song.id">
      <p>{{ song.title }}</p>
    </div>
    <p>Songwriter: <input v-model="searchSongwriterParams"></p>
    <p>Show: <input v-model="searchShowParams"></p>
    <button v-on:click="songwriterSongsIndex()">Search songs</button>

  </div>
</template>

<style>
</style>