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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/* Imports */
import { computed } from "vue";

/* Props */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/* Emits */
const emit = defineEmits(["deleteClicked"]);

/* Character length */
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/* Deletion */
const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>
