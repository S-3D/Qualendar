<script setup>
import { api } from 'src/boot/axios';
import { ref, watch} from 'vue';
import { storeToRefs } from 'pinia';
import {useCalendarStore} from 'stores/calendarStore.js'
import {useListeActivitesStore} from 'stores/listeActivitesStore.js'
import AddActivityBtn from './AddActivityBtn.vue';
import LeftPanel from './Panel/LeftPanel.vue'
import RightPanel from './Panel/RightPanel.vue'

const listeActivitesStore = useListeActivitesStore()
const { dateFormattee  } = storeToRefs( useCalendarStore())
const {listeActivitesDuJour,listHasChanged } = storeToRefs(listeActivitesStore)
const {updateListe} = listeActivitesStore



watch([dateFormattee, listHasChanged ], ()=>updateListe(),
{ immediate: true }

 )


</script>

<template>
  <q-card flat class="flex row">
    <LeftPanel />
    <RightPanel :listeActivitesDuJour="listeActivitesDuJour"  />
    <AddActivityBtn />
  </q-card>
</template>
