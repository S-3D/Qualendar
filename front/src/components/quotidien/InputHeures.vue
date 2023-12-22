<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia';
import { useActiviteStore} from 'stores/activiteStore.js'

const {activite} = storeToRefs(useActiviteStore())

</script>

<template>
    <q-input
      dense
      standout="bg-accent"
      v-model="activite.duree"
      mask="0#:#0"
      >


      <template v-slot:append>
        <q-icon name="add" size="xs" style="cursor: pointer" />
        <q-icon name="remove" size="xs"  style="cursor: pointer" />
     </template>

      <template v-slot:prepend>
        <q-icon name="sym_o_pace" />
     </template>
    </q-input>
</template>
