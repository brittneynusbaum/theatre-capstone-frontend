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
    this.auditionSongsIndex(),
      this.notesIndex()
  },
  methods: {
    auditionSongsIndex: function () {
      console.log('all saved songs')
      axios.get(`/saved_songs`).then(response => {
        console.log(response.data);
        this.auditionSongs = response.data
      })
    },
    notesIndex: function () {
      console.log('index notes')
      axios.get(`/notes`).then(response => {
        console.log(response.data);
        this.notes = response.data
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
      <!-- <p>{{ notes }}</p> -->
      <!-- <p>{{ notes[1][0].description }}</p> -->
      <p>{{ auditionSong.title }}</p>
      <!-- <p>{{ auditionSong.id }}</p>
      <p>{{ notes }}</p> -->
      <!-- <div v-for="note in notes" v-bind:key="note.id">
        <p v-if="auditionSong.id == note[0].saved_song_id">Notes: {{ note[0].description }}</p>
        <p>Add note:<input type="text"></p>
      </div> -->
    </div>
  </div>
</template>

<style>
</style>