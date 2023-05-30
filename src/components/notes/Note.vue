<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/editNote/${note.id}`"
        class="card-footer-item"
        @click=""
        >Modifica</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="storeNotes.deleteNote(note.id)"
        >Elimina</a
      >
    </footer>
  </div>
</template>

<script setup>
/* Imports */
import { computed } from "vue";
import { useStoreNotes } from "../../stores/storeNotes";

/* Store */
const storeNotes = useStoreNotes();

/* Props */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/* Character length */
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "lettere" : "lettera";
  return `${length} ${description}`;
});
</script>
