<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import {useCalendarStore} from 'stores/calendarStore.js'

const calendarStore = useCalendarStore()
const {dateSelectionnee} = storeToRefs(calendarStore)
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
const random = computed(()=>{
    const randomNumber = Math.floor(Math.random()*10)
    return  randomNumber
} )
</script>

<template>
  <div class="q-gutter-md  row items-start">
        <q-card flat bordered v-for="i in random" :key=i style="width: 250px">
          <q-card-section>
            <div class="text-caption">"{{ lorem }}"</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <q-skeleton animation="wave" />
          </q-card-section>
        </q-card>
  </div>
</template>

