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
      auditionSongs: [],
      isLoggedIn: false,
      getUserId: 0
    };
  },
  created: function () {
    this.showIndex(),
      this.songwriterIndex(),
      this.songsIndex(),
      this.genresIndex(),
      this.temposIndex()
  },
  watch: {
    $route: function () {
      console.log('in route')
      this.isLoggedIn = !!localStorage.jwt;
      this.getUserId = localStorage.user_id;
    }
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
    saving: function (theSong) {
      console.log(theSong.id)
      console.log('saving audition song')
      axios.post(`/saved_songs?song_id=${theSong.id}`).then(response => {
        console.log(response.data);
      })
    }
  },
};
</script>

<template>
  <div class="index">
    <div class="position-absolute top-50 start-50 translate-middle">
      <div class="bg-light p-2 text-dark bg-opacity-50">
        <h4>Results:</h4>

        <div v-for="song in songs" v-bind:key="song.id">
          <p>{{ song.title }}</p>
          <p><button class="btn btn-dark btn-sm" v-on:click="saving(song)">Save song</button></p>
        </div>
        <hr />
        <h6>Select from the search options below:</h6>

        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <h5>Show:</h5>
              <div v-for="show in shows" v-bind:key="show.id">
                <p>{{ show.title }}<input class="form-check-input" type="checkbox" id="show.id"
                    v-bind:value="show.title" v-model="searchShowParams">
                </p>
              </div>
            </div>
            <div class="col">
              <h5>Songwriter:</h5>
              <div v-for="songwriter in songwriters" v-bind:key="songwriter.id">
                <p>{{ songwriter.composer }}<input class="form-check-input" type="checkbox" id="songwriter.id"
                    v-bind:value="songwriter.composer" v-model="searchSongwriterParams">
                </p>
              </div>
            </div>
            <div class="col">
              <h5>Genre:</h5>
              <div v-for="genre in genres" v-bind:key="genre.id">
                <p>{{ genre.name }}<input class="form-check-input" type="checkbox" id="genre.id"
                    v-bind:value="genre.name" v-model="searchGenreParams">
                </p>
              </div>
            </div>
            <div class="col">
              <h5>Tempo:</h5>
              <div v-for="tempo in tempos" v-bind:key="tempo.id">
                <p>{{ tempo.name }}<input class="form-check-input" type="checkbox" id="tempo.id"
                    v-bind:value="tempo.name" v-model="searchTempoParams">
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-dark btn-sm" v-on:click="songsIndex()">Search songs</button>
      </div>
    </div>
  </div>
</template>

<style>
.index {
  text-align: center;
  /* width: 1000px; */
}

.form-check-input {
  margin-left: 15px;
}

.container {
  text-align: left;
}

.row {
  width: 1000px;
}
</style>