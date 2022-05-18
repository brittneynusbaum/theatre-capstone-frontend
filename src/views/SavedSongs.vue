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
    auditionSongDelete: function (theSong) {
      console.log('delete song')
      axios.delete(`/saved_songs/${theSong.id}`, theSong).then(response => {
        console.log(response.data);
      })
    },
    notesUpdate: function (theNote) {
      console.log('edit notes')
      axios.patch(`/notes/${theNote.id}`, theNote).then(response => {
        console.log(response.data);
        this.$router.push("/saved");
      })
    },
    notesCreate: function (auditionSong) {
      console.log(auditionSong)
      this.newNoteParams.song_id = auditionSong.song_id
      axios.post(`/notes`, this.newNoteParams).then(response => {
        console.log(response.data);
        this.newNoteParams = response.data
      })
    },
    notesDelete: function (theNote) {
      console.log('delete note')
      axios.delete(`/notes/${theNote.id}`, theNote).then(response => {
        console.log(response.data);
      })
    }
  },
};
</script>

<template>
  <div class="saved">
    <div class="position-absolute top-50 start-50 translate-middle">

      <div v-for="auditionSong in auditionSongs" v-bind:key="auditionSong.id">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <h6>{{ auditionSong.title }}</h6>
            </div>
            <div class="col">
              <button type="button" class="btn btn-dark btn-sm" v-on:click="auditionSongDelete(auditionSong)">Remove
                Song</button>
            </div>
            <div class="col">
              <a class="btn btn-dark btn-sm" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
                aria-expanded="false" aria-controls="multiCollapseExample1">View/Edit Notes</a>
            </div>
            <div class="col">
              <button class="btn btn-dark btn-sm" type="button" data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Add
                New Note</button>
            </div>
          </div>
        </div>

        <p>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                <div v-for="note in auditionSong.notes" v-bind:key="note.id">
                  <p> <input class="input-note" type="text" v-model="note.description"></p>
                  <button type="button" class="btn btn-dark btn-sm" v-on:click="notesUpdate(note)">Save changes</button>
                  <button type="button" class="btn btn-dark btn-sm" v-on:click="notesDelete(note)">Delete note</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body">
                <p>Note: <input class="new-note" type="text" v-model="newNoteParams.description"></p>
                <button type="button" class="btn btn-dark btn-sm" v-on:click="notesCreate(auditionSong)">New
                  note</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.saved {
  text-align: center;
}

.input-note {
  margin-top: 15px;
  width: 400px;
  height: 40px;
}

.btn {
  margin-left: 5px;
}

.new-note {
  width: 400px;
}
</style>