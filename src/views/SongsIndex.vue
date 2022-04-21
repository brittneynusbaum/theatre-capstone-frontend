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
      axios.get(`/songs`, this.searchSongsParams).then(response => {
        console.log(response.data)
        this.searchSongsParams = response.data
        return this.songs.includes(this.searchSongsParams)
      })
    },
    // searchSongs: function () {
    //   console.log('searching songs')
    //   this.searchSongsParams = 
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
    <p>Songwriter: <input v-model="searchSongsParams.songwriter_id"></p>
    <button v-on:click="songsIndex()">Search songs</button>
    <!-- <P>{{ songs }}</P> -->

  </div>
</template>

<style>
</style>