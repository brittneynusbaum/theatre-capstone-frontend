<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Song index page",
      songs: [],
      searchSongsParams: {}
    };
  },
  created: function () {
    // this.songsIndex()
  },
  methods: {
    songsIndex: function () {
      console.log('all songs')
      console.log(this.songwriter_id)
      axios.get(`/songs?composer=${this.searchSongsParams}`).then(response => {
        console.log(response.data)
        this.songs = response.data
      })
    },
    // searchSongs: function () {
    //   console.log('searching songs')
    //   return this.songs.filter(song => {
    //     var lowerTitle = song.title.toLowerCase();
    //     var lowerParams = this.searchSongsParams.toLowerCase();
    //     return lowerTitle.includes(this.searchSongsParams);
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
      <p>{{ song.songwriter_id }}</p>
    </div>
    <p>Songwriter: <input v-model="searchSongsParams"></p>
    <button v-on:click="songsIndex()">Search songs</button>

  </div>
</template>

<style>
</style>