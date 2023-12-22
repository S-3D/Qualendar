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
  <q-item clickable class="bg-grey-1 fit flex flex-center" @click="toggleDialog = true">
    <q-item-section avatar>
      <q-icon name="sym_o_add_circle" color="grey-8" size="md" />
    </q-item-section>

    <q-item-label header class="text-overline ">
      Nouvelle activite
    </q-item-label>

  </q-item>

  <DialogAjout  v-model="toggleDialog" />


</template>
