<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Seach here",
      songs: [],
      songwriters: [],
      shows: [],
      genres: [],
      tempos: [],
      searchSongwriterParams: [],
      searchShowParams: [],
      searchGenreParams: [],
      searchTempoParams: [],
      auditionSongs: []
    };
  },
  created: function () {
    this.showIndex(),
      this.songwriterIndex(),
      this.songsIndex(),
      this.genresIndex(),
      this.temposIndex()
  },
  mounted: function () {
  },
  methods: {
    songsIndex: function () {
      console.log('all songs')
      axios.get(`/songs?composer=${this.searchSongwriterParams}&show=${this.searchShowParams}&genre=${this.searchGenreParams}&tempo=${this.searchTempoParams}`).then(response => {
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
    genresIndex: function () {
      console.log('all genre options')
      axios.get('/genres').then(response => {
        console.log(response.data)
        this.genres = response.data
      })
    },
    temposIndex: function () {
      console.log('all tempo options')
      axios.get('/tempos').then(response => {
        console.log(response.data)
        this.tempos = response.data
      })
    },
    saving: function (theId) {
      console.log(theId)
      console.log('saving audition song')
      axios.post(`/saved_songs?song_id=${theId}&user_id=1`).then(response => {
        console.log(response.data);
        // console.log(this.auditionSongs)
        // this.auditionSongs = theId
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>Song Options:</h1>
    <div v-for="song in songs" v-bind:key="song.id">
      <p>{{ song.title }}</p>
      <p><button v-on:click="saving(song.id)">Save song</button></p>
    </div>
    <hr />
    <h3>Search by Songwriter:</h3>
    <div v-for="songwriter in songwriters" v-bind:key="songwriter.id">
      <p>{{ songwriter.composer }}<input type="checkbox" id="songwriter.id" v-bind:value="songwriter.composer"
          v-model="searchSongwriterParams">
      </p>
    </div>
    <h3>Search by Show:</h3>
    <div v-for="show in shows" v-bind:key="show.id">
      <p>{{ show.title }}<input type="checkbox" id="show.id" v-bind:value="show.title" v-model="searchShowParams">
      </p>
    </div>
    <h3>Search by Genre:</h3>
    <div v-for="genre in genres" v-bind:key="genre.id">
      <p>{{ genre.name }}<input type="checkbox" id="genre.id" v-bind:value="genre.name" v-model="searchGenreParams">
      </p>
    </div>
    <h3>Search by Tempo:</h3>
    <div v-for="tempo in tempos" v-bind:key="tempo.id">
      <p>{{ tempo.name }}<input type="checkbox" id="tempo.id" v-bind:value="tempo.name" v-model="searchTempoParams">
      </p>
    </div>
    {{ searchSongwriterParams }} {{ searchShowParams }} {{ searchGenreParams }} {{ searchTempoParams }}
    <button v-on:click="songsIndex()">Search songs</button>
  </div>
</template>

<style>
</style>