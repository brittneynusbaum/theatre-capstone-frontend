<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Seach here",
      songs: [],
      songwriters: [],
      searchSongwriterParams: [],
      searchShowParams: [],
      shows: []
    };
  },
  created: function () {
    this.songwriterIndex(),
      this.showIndex()
  },
  methods: {
    songsIndex: function () {
      console.log('all songs')
      console.log(this.searchSongwriterParams)
      axios.get(`/songs`).then(response => {
        console.log(response.data)
        this.songs = response.data
      })
    },
    songwriterIndex: function () {
      console.log('all songwriter options')
      axios.get('/songwriters').then(response => {
        console.log(response.data)
        this.songwriters = response.data
      })
    },
    showIndex: function () {
      console.log('all show options')
      axios.get('/shows').then(response => {
        console.log(response.data)
        this.shows = response.data
      })
    },
    filterSongs: function () {
      return this.songs.filter(song => {
        return song.title.includes(this.searchSongwriterParams.id, this.searchShowParams.id);
      })
    }

  },
};
</script>

<template>
  <div class="home">
    <h1>{{ }}</h1>
    <div v-for="song in filterSongs()" v-bind:key="song.id">
      <p>{{ song.title }}</p>
    </div>
    <h3>Search by Songwriter:</h3>
    <div v-for="songwriter in songwriters" v-bind:key="songwriter.id">
      <!-- <p>Composer: {{ songwriter.composer }}</p>
      <p>Lyrics: {{ songwriter.lyrics }}</p> -->
      <p>{{ songwriter.composer }}<input type="checkbox" id="songwriter.id" v-bind:value="songwriter.composer"
          v-model="searchSongwriterParams">
      </p>
    </div>
    <h3>Search by Show:</h3>
    <div v-for="show in shows" v-bind:key="show.id">
      <p>{{ show.title }}<input type="checkbox" id="show.id" v-bind:value="show.title" v-model="searchShowParams">
      </p>
    </div>
    {{ searchSongwriterParams }} {{ searchShowParams }}
    <button v-on:click="songsIndex()">Search songs</button>
  </div>
</template>

<style>
</style>

<!-- ?composer=${this.searchSongwriterParams}&title=${this.searchShowParams} -->
  <!-- <h3>Songwriter: <input type= v-model="searchSongwriterParams"></h3>
    <h3>Show: <input v-model="searchSongwriterParams"></h3>
    <h3>Genre: <input v-model="searchSongwriterParams"></h3>
    <h3>Style: <input v-model="searchSongwriterParams"></h3>
    <button v-on:click="songsIndex()">Search songs</button> -->