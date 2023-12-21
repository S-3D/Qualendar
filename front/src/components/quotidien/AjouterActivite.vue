<script setup>
import {ref} from 'vue'
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'


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

    <q-item-label header class="text-overline">
      Nouvelle activite
    </q-item-label>

  </q-item>

  <q-dialog v-model="toggleDialog" persistent >
      <q-card style="min-width: 350px">
        <q-bar>
          <div>{{ dateFormattee }}</div>
        <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>


        <q-card-section class="q-gutter-y-md">
          <q-select
            standout="bg-accent"
            v-model="payload.Activite"
            :options="optionsActivite"
            option-label="nomActivite"
            :option-value="id"
            label="Activite"
          />
          <q-input
            clearable
            standout="bg-accent"
            v-model="payload.duree"
            type="time"
            :hint=" `duree ${payload.duree}`"
           />
        </q-card-section>

        <q-card-actions align="right" >
          <q-btn flat icon="check" color="accent" @click="handleSubmit"  />
        </q-card-actions>

      </q-card>
  </q-dialog>


</template>
