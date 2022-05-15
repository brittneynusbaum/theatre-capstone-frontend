<script>
import axios from "axios";

export default {
  data: function () {
    return {
      auditionSongs: [],
      notes: []
    };
  },
  created: function () {
    this.auditionSongsIndex()
  },
  mounted: function () {
    // this.notesIndex()
  },
  methods: {
    auditionSongsIndex: function () {
      console.log('all saved songs')
      axios.get(`/saved_songs.json`).then(response => {
        console.log(response.data);
        this.auditionSongs = response.data
      })
    },
    // notesIndex: function () {
    //   console.log('index notes')
    //   axios.get(`/notes.json`).then(response => {
    //     console.log(response.data);
    //     this.notes = response.data
    //   })
    // }
  },
};
</script>

<template>
  <div class="home">
    <h1>Saved songs page!</h1>
    <!-- {{ auditionSongs }} -->
    <div v-for="auditionSong in auditionSongs" v-bind:key="auditionSong.id">
      <p>{{ auditionSong.title }}</p>
      <p>{{ auditionSong.notes[0].description }}</p>
      <!-- <p>{{ auditionSong.notes[1].description }}</p> -->

      <hr />
    </div>
  </div>
</template>

<style>
</style>