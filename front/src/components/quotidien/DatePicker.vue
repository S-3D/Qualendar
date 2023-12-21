<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import {useCalendarStore} from 'stores/calendarStore.js'


const store = useCalendarStore()
const {dateSelectionnee, demain } = storeToRefs(store)
const disabledDates = ref([{ start: demain, end: null }])

</script>

<template>
  <VDatePicker
    v-model="dateSelectionnee"
    color="blue"
    nav-visibility="click"
    ref="datePicker"
    view="weekly"
    borderless
    expanded
    transparent
    :disabled-dates="disabledDates"
  >
    <template #header-prev-button	>
    </template>
    <template #nav-prev-button	>
    </template>
    <template #header-next-button	>
    </template>
    <template #nav-next-button	>
    </template>
  </VDatePicker>
</template>

<style>
.vc-blue {
  --vc-accent-300: #3B4252;
  --vc-accent-400: #3B4252;
  --vc-accent-500: #3B4252;
  --vc-accent-600: #3B4252;
  --vc-accent-700: #3B4252;
  --vc-accent-800: #3B4252;
  --vc-accent-900: #3B4252;
}


</style>
