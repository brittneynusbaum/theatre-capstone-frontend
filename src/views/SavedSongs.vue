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
    notesUpdate: function (theId) {
      console.log('edit notes')
      axios.patch(`/notes/${theId}`, this.editNoteParams).then(response => {
        console.log(response.data);
        this.currentNote = {};
      })
    },
    notesCreate: function () {
      console.log('creating note')
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
      <p>{{ auditionSong.notes[0].description }}</p>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit note
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" v-bind:key="auditionSong.notes[0].id">Edit note</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Current note: {{ auditionSong.notes[0].description }}</p>
              <p>Note: <input type="text" v-model="editNoteParams.description"></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" v-on:click="notesUpdate(auditionSong.notes[0].id)">Save
                changes</button>
            </div>
          </div>
        </div>
      </div>
      <p><input type="text" v-model="newNoteParams.description"></p>
      <button v-on:click="notesCreate()">New note</button>
      <hr />
    </div>
  </div>
</template>

<style>
</style>