<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Proprietà</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Numero di note salvate</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Totale lettere (da tutte le note)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
/* Imports */
import { useStoreNotes } from "@/stores/storeNotes";

/* Store */
const storeNotes = useStoreNotes();
</script>
