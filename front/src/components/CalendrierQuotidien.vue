<script setup>
import { ref } from 'vue';
import DateJour from './DateJour.vue';
import { date } from 'quasar'

const dateModel = ref(new Date());
const datePicker = ref(null);
const weekEnd = ref([{
  repeat: {
    weekdays: [7, 1]
  }
}])

const next = ()=>{
  dateModel.value = date.addToDate(dateModel.value, { days: 1})
}

const prev = ()=>{
  dateModel.value = date.addToDate(dateModel.value, { days: -1})
}


</script>


<template>
  <div>
    <div class="container">
      <VDatePicker v-model="dateModel" nav-visibility="click" ref="datePicker" view="weekly"  borderless transparent :disabled-dates="weekEnd">

        <template #footer>
          <div>
            <DateJour :date="dateModel" @next="next" @prev="prev" />
          </div>
        </template>


      </VDatePicker>
    </div>
    <div>
    </div>

  </div>
</template>


<style>
.container {
  width: 60vw;
}
</style>
