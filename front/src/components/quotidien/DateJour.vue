<script setup>
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'
import ActiviteUnitaire from './ActiviteUnitaire.vue';
import { computed, ref, watch, watchEffect} from 'vue';
import AjouterActivite from './AjouterActivite.vue';

const store = useCalendarStore()
const {dateSelectionnee , dateFormattee, jourSemaine, jourDuMois  } = storeToRefs(store)
const userId = 1
const emit = defineEmits(['next', 'prev'])
const listeActivitesDuJour = ref([])


const fetchActivites = ()=>{
  api.get(`/quotidiens?date=${dateFormattee.value}&User.id=${userId}`)
  .then( res => listeActivitesDuJour.value = res.data['hydra:member'])
}
fetchActivites()


watch(dateFormattee, ()=>fetchActivites(),
 )

</script>

<template>
  <q-card flat class="flex row " >

    <q-card-section class="col-4 gt-xs  flex flex-center column">
        <p class="text-body2 text-italic"> {{ jourSemaine }} </p>
        <p class="text-h1" > {{ jourDuMois }} </p>
    </q-card-section>

    <q-card-section class="col-8" >
      <q-scroll-area  
        style="height: 100%; width: auto"  
        :bar-style="{ background: 'transparent',  }"
        :thumb-style="{ width: '3px' }"
>
            <q-list separator>
              <q-item v-for="activite in listeActivitesDuJour" :key="activite.date">
                <ActiviteUnitaire :activite=activite />
              </q-item>

              <q-item class="q-ma-lg flex column" >
                <AjouterActivite />

              </q-item>

              
            </q-list>
          </q-scroll-area>

    </q-card-section>

  </q-card>
</template>
