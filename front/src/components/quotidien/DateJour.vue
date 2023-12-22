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
const tableauActivites = [
  {
    nom:'Lorem',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti cum commodi laboriosam aliquam quasi. ',
    icon : 'sym_o_tactic',
    date : '16/12/2023',
    duree : 2
  },
  {
    nom:'Ipsum',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti cum commodi laboriosam aliquam quasi. ',
    icon : 'sym_o_tactic',
    date : '16/12/2023',
    duree : 2
  },
  {
    nom:'Abcd',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti cum commodi laboriosam aliquam quasi. ',
    icon : 'sym_o_groups',
    date : '16/12/2023',
    duree : 2
  },
  {
    nom:'Abcd',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti cum commodi laboriosam aliquam quasi. ',
    icon : 'sym_o_groups',
    date : '16/12/2023',
    duree : 2
  },
  {
    nom:'Abcd',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti cum commodi laboriosam aliquam quasi. ',
    icon : 'sym_o_groups',
    date : '16/12/2023',
    duree : 2
  },
  {
    nom:'Abcd',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti cum commodi laboriosam aliquam quasi. ',
    icon : 'sym_o_groups',
    date : '16/12/2023',
    duree : 2
  }
]

const fetchActivites = ()=>{
  console.log('Fetch Activite')
  api.get(`/quotidiens?date=${dateFormattee.value}&User.id=${userId}`)
  .then( res => listeActivitesDuJour.value = res.data['hydra:member'])
}
fetchActivites()


watch(dateFormattee, ()=>fetchActivites(),
 )

</script>

<template>
  <q-card flat class="flex row" >

    <q-card-section class="col-3 gt-xs  flex flex-center column">
        <p class="text-body2 text-italic"> {{ jourSemaine }} </p>
        <p class="text-h1" > {{ jourDuMois }} </p>
    </q-card-section>

    <q-card-section class="col-9 " style="overflow-x: scroll;">
            <q-list separator>
              <q-item v-for="activite in listeActivitesDuJour" :key="activite.date">
                <ActiviteUnitaire :activite=activite />
              </q-item>

              <q-item class="q-ma-lg" >
                <AjouterActivite />
              </q-item>

            </q-list>
    </q-card-section>

  </q-card>
</template>
