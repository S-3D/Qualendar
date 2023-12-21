<script setup>
import { ref, computed } from 'vue';
import DateJour from './DateJour.vue';
import { date } from 'quasar'

const dateModel = ref(new Date());
const datePicker = ref(null);
const numeroSemaine = computed(() => date.formatDate(dateModel.value, 'ww'))

const weekEnd = ref([{
  repeat: {
    weekdays: [7, 1]
  }
}])

const next = ()=>{
  dateModel.value = date.addToDate(dateModel.value, { days: 1})
  console.log("datePicker", datePicker.value.days)


}
const prev = ()=>{
  dateModel.value = date.addToDate(dateModel.value, { days: -1})
}

const handleClick = (move)=>{
console.log(move)
}

</script>


<template>
  <div>
    <h4>TEST  </h4>
    <div class="container">
      <VDatePicker v-model="dateModel" nav-visibility="click" ref="datePicker" view="weekly"  borderless transparent :disabled-dates="weekEnd">

        <template #nav-prev-button="{move}" >
          <q-btn @click= "(move)=>handleClick(move)"  icon="mail"/>

        </template>


        <template #header-title="{ title }"	>
          Semaine  {{ numeroSemaine }}
        </template>

<!--
        <template #footer>
          <div>
            <DateJour :date="dateModel" @next="next" @prev="prev" />
          </div>
        </template> -->


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
