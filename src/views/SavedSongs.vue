<script>
import axios from "axios";

export default {
  data: function () {
    return {
      auditionSongs: [],
      // notes: [],
      currentNote: {},
      editNoteParams: {},
      newNoteParams: {}
    };
  },
  created: function () {
    this.auditionSongsIndex()
    // this.notesUpdate()
    // this.notesShow()
  },
  mounted: function () {
  },
  methods: {
    auditionSongsIndex: function () {
      console.log('all saved songs')
      axios.get(`/saved_songs.json`).then(response => {
        console.log(response.data);
        this.auditionSongs = response.data
      })
    },
    notesUpdate: function (theNote) {
      console.log('edit notes')
      axios.patch(`/notes/${theNote.id}`, theNote).then(response => {
        console.log(response.data);
        // theNote = response.data
        // this.currentNote = {};
      })
    },
    notesCreate: function (auditionSong) {
      console.log(auditionSong)
      this.newNoteParams.song_id = auditionSong.song_id
      axios.post(`/notes`, this.newNoteParams).then(response => {
        console.log(response.data);
        this.newNoteParams = response.data
        // this.notes.push(this.newNoteParams)
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
      <div v-for="note in auditionSong.notes" v-bind:key="note.id">
        <p>Note: <input type="text" v-model="note.description"></p>
        <button type="button" class="btn btn-primary" v-on:click="notesUpdate(note)">Save changes</button>
      </div>
      <p><input type="text" v-model="newNoteParams.description"></p>
      <button type="button" class="btn btn-primary" v-on:click="notesCreate(auditionSong)">New note</button>
      <hr />
    </div>
  </div>
</template>

<style>
</style>