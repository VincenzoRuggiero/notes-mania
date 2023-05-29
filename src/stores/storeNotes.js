import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
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
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime();
      let id = currentDate.toString();
      let note = { id: id, content: newNoteContent };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
  },
});
