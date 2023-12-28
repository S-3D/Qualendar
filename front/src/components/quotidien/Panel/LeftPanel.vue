<script setup>
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'

const { dateFormattee, jourSemaine, jourDuMois, listHasChanged  } = storeToRefs(useCalendarStore())
</script>

<template>
  <q-card-section class="col-4 gt-xs  flex flex-center column text-secondary">
    <p class="text-body2 text-italic my-font" style="font-size: 1.5rem;"> {{ jourSemaine }} </p>
    <p class="my-font " style="font-size: 8rem;"> {{ jourDuMois }} </p>
  </q-card-section>
</template>
