<script setup>
import { ref } from 'vue';
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import { useCalendarStore } from 'stores/calendarStore.js'
import { date } from 'quasar'
const { dateSelectionnee, today, annee } = storeToRefs(useCalendarStore())

const disabledDates = ref([
  {
    repeat: {
      weekdays: [7, 1],
    },
  },
])
const attributes = ref([])

async function getJoursFeries() {
  const data = await fetch(`https://calendrier.api.gouv.fr/jours-feries/metropole/${annee.value}.json`)
  const response = await data.json()
  const jourFeries = Object.keys(response)
  jourFeries.forEach(jour => disabledDates.value.push(jour))
}
async function getQuotidien() {
  const data = api.get('/quotidiens.json')
  const response = await data
  response.data.forEach(value => {
    attributes.value.push({
      dates: value.date,
      popover: {
        label: value.detailQuotidien[0].Activite.nomActivite
      },
      highlight: {
        color: 'teal',
        fillMode: 'outline',
      }


    })
  })





}

getJoursFeries()
getQuotidien()

</script>

<template>
  <VDatePicker v-model="dateSelectionnee" mode="date" borderless expanded transparent :max-date="today" is-required
    :disabled-dates="disabledDates" :attributes='attributes'>

    <template #header-title="{ title }">
      <p class="text-h4 my-font text-primary"> {{ title }} </p>
    </template>

  </VDatePicker>
</template>


<style>
.vc-blue {
  --vc-accent-600: #4C566A;
}
</style>
