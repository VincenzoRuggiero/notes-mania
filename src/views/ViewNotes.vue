<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Scrivi il contenuto">
      <template #buttons>
        <button
          @click.prevent="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success">
          Aggiungi
        </button>
      </template>
    </AddEditNote>
    <Note v-for="note in storeNotes.notes" key="note.id" :note="note" />
  </div>
</template>

<script setup>
/* Imports */
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import AddEditNote from "../components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";

/* Notes */
const newNote = ref("");
const addEditNoteRef = ref(null);

/* Store */
const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};
</script>
