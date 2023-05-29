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

    <div class="card mb-4" v-for="note in notes" key="note.id">
      <div class="card-content">
        <div class="content">{{ note.content }}</div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { ref } from "vue";

/* Notes */
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "sed est error fugit possimus etsed est error fugit possimus etsed est error fugit possimus et",
  },
  {
    id: "id2",
    content:
      "Ipsum molestiae possimus saepe laboriosam quis. Ex labore eaque dolor sequi laboriosam ab aut distinctio ea. Laborum ut ut nihil rerum.",
  },
  {
    id: "id3",
    content:
      "Voluptatem qui dolorem nam ut culpa ea ipsum ipsa nobis quisquam enim ut. In ducimus eveniet accusantium. Ex nulla sunt voluptas. Mollitia dolor minus perferendis rerum illo autem libero recusandae laborum aspernatur modi. Voluptatem impedit sint quo. Alias mollitia et id ea et ea doloribus molestiae ut ducimus voluptas velit eos inventore. Aliquid reiciendis omnis rerum nam suscipit expedita aliquam illo. Possimus odio reprehenderit itaque corrupti molestias ut non a consequatur excepturi perspiciatis.",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime();
  let id = currentDate.toString();
  let note = { id: id, content: newNote.value };

  notes.value.unshift(note);

  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
