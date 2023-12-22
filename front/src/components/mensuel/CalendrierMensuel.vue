<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCalendarStore} from 'stores/calendarStore.js'



const { dateSelectionnee,  demain } = storeToRefs(useCalendarStore())

const disabledDates = ref([{ start: demain, end: null }])

</script>



<template>

<VDatePicker 
  v-model="dateSelectionnee" 
  mode="date" 
  borderless
  expanded
  transparent
  :disabled-dates="disabledDates"
>
<template #header-title="{title}"	>
  <p class="text-h4 my-font text-primary"> {{ title }} </p> 
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
