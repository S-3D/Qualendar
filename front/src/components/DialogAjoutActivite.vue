<script setup>
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import { useActiviteStore} from 'stores/activiteStore.js'
import { useCalendarStore} from 'stores/calendarStore.js'
import SelectActivite from 'components/quotidien/SelectActivite.vue'
import InputHeures from "components/quotidien/InputHeures.vue"

const activiteStore = useActiviteStore()
const {activite} = storeToRefs(useActiviteStore())
const {dateFormattee} = storeToRefs(useCalendarStore())
const illustration = "https://images.unsplash.com/photo-1588680152893-a4b533646c6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxibGFrYyUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHx8MA%3D%3D"
const isMouseOver = ref(false)
const mouseOverColor = computed( ()=>
  isMouseOver.value ? 'grey-6' : 'grey-3'
)

const handleSubmit = () => {
  activite.value.quotidien.date = dateFormattee.value
  api.post('/detail_quotidiens', activite.value)
  .then( ()=>activiteStore.$reset() )

}

</script>


<template>
<q-dialog>
        <q-card class="customCard  shadow-10 q-pa-sm flex column justify-between">
          <q-bar class="bg-transparent">
            <q-space />
            <q-btn dense flat round icon="lens" :ripple="false"  size="8.5px" :color="mouseOverColor" @mouseleave="isMouseOver=false"  @mouseover=" isMouseOver=true" v-close-popup />
          </q-bar>

            <q-card-section>
                <q-img :src=illustration width="100%"  height="100px" >
                </q-img>
                <div class="text-h6 text-primary text-center q-py-md">  Nouvelle Activite </div>
            </q-card-section>

            <q-card-section class="q-gutter-y-lg">
              <SelectActivite />
              <InputHeures />
            </q-card-section>

            <div>
                <q-separator inset color="grey" />
                <q-card-section class="flex justify-between">
                    <q-btn unelevated label="Annuler" v-close-popup />
                    <q-btn unelevated label="Ajouter" color="primary" @click="handleSubmit" v-close-popup  />
                </q-card-section>

            </div>


        </q-card>
</q-dialog>
</template>

<style scoped>
.customCard {
    width: 30vw;
    min-width: 250px;
    min-height: 45vh;
    border-radius: 15px;
}
</style>
