<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model="newNote"
            placeholder="Add a new note"
            ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            @click="addNote"
            :disabled="!newNote">
            Add new note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in storeNotes.notes"
      key="note.id"
      :note="note"
      @deleteClicked="deleteNote" />
  </div>
</template>

<script setup>
/* Imports */
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";

/* Notes */
const newNote = ref("");
const newNoteRef = ref(null);

/* Store */
const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};

/* Delete note */
const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>
