<script setup>
import { date } from 'quasar'


const props = defineProps({
  activite : Object
})

const {nomActivite,description,typeActivite } = props.activite.detailQuotidien[0].Activite

</script>

<template>
  <q-card flat>

    <q-card-section horizontal>

    <q-item-section avatar>
      <!-- <q-avatar> <q-icon :name="props.activite.icon" size="lg" /> </q-avatar> -->
       <q-circular-progress
        :value=" props.activite.detailQuotidien[0].duree"
        size="50px"
        color="primary"
        center-color="grey-1"

        show-value
        max = 480
         />


    </q-item-section>

    <q-item-section>
      <q-item-label class="text-overline">
        {{ nomActivite }}
      </q-item-label>
      <q-item-label class="text-overline">
        {{ typeActivite }}
      </q-item-label>

      <q-item-label caption lines="2">
        {{ description }}
      </q-item-label>
    </q-item-section>


  </q-card-section>

  </q-card>
</template>
