<template>
  <div class="edit-note">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      bgColor="link"
      placeholder="Modifica il contenuto"
      label="Modifica la nota">
      <template #buttons>
        <button @click="$router.push('/')" class="button is-link is-light mr-2">
          Annulla
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent">
          Salva modifche
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/* Imports */
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import { useStoreNotes } from "@/stores/storeNotes.js";

/* Router */
const route = useRoute();
const router = useRouter();

/* Store */
const storeNotes = useStoreNotes();

/* Note */
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

/* Save method */
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
