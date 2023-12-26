<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCalendarStore} from 'stores/calendarStore.js'

const { dateSelectionnee,  today } = storeToRefs(useCalendarStore())

const disabledDates = ref([
  {
    repeat: {
      weekdays: [7, 1],
    },
  },
  ])

</script>

<template>
<VDatePicker
  v-model="dateSelectionnee"
  mode="date"
  borderless
  expanded
  transparent
  :max-date="today"
  is-required
  :disabled-dates="disabledDates"
>

<template #header-title="{title}"	>
  <p class="text-h4 my-font text-primary"> {{ title }} </p>
</template>

</VDatePicker>

</template>


<style>
.vc-blue {
  --vc-accent-600: #4C566A;
}
</style>
