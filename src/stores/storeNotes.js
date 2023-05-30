import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Ciao curiosone/a! 😜 Questo è un semplice sito responsive scritto in Vue e Pinia 🍍, usando Bulma CSS per la parte grafica!",
        },
        {
          id: "id2",
          content:
            "Qui potrai aggiungerne di nuove, modificarle e cancellarle quando non servono più",
        },
        {
          id: "id3",
          content:
            "Se sei amante dei numeri puoi vedere di quante lettere è composta ciascuna nota oppure puoi andare nella pagina delle statistiche e vedere il totale fra note e lettere presenti",
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
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => (count += note.content.length));
      return count;
    },
  },
});
