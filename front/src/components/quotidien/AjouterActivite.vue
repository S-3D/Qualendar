<script setup>
import {ref} from 'vue'
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'
import DialogAjout from '../DialogAjoutActivite.vue';

const {dateSelectionnee , dateFormattee, jourSemaine, jourDuMois  } = storeToRefs(useCalendarStore())
const payload = ref({
  quotidien :{
    date : dateFormattee.value,
    User :{
      id:1
    },
  },
  Activite : {
    id :0
  },
 duree : "01.30",
})
const optionsActivite = ref([])
const toggleDialog = ref(false)

const handleSubmit = ()=>{
  payload.value.duree = parseFloat(payload.value.duree)
  console.log(payload.value)
  api.post('/detail_quotidiens', payload.value)
  toggleDialog.value = false
}

const fetchListeActivites = ()=>{
  api.get('/activites.json')
  .then( res =>  optionsActivite.value = res.data  )
}
fetchListeActivites()
</script>

<template>

<q-page-sticky position="bottom-right" :offset="[18, 18]">
  <q-btn fab icon="add" label="Ajouter" color="secondary" @click="toggleDialog=true" />
</q-page-sticky>

<DialogAjout  v-model="toggleDialog" />


</template>
