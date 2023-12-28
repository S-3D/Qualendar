<script setup>
import { ref, computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useListeActivitesStore } from 'src/stores/listeActivitesStore';
import TimeKnob from './TimeKnob.vue';

const props = defineProps({
  activite: Object,
  dense: Boolean
})
const { nomActivite, description, typeActivite } = props.activite.detailQuotidien[0].Activite
const itemHasChanged = ref(false)
const isMouseOver = ref(false)

const dense = computed(() =>
  props.totalItems > 3 ?
    true :
    false
)


</script>

<template>
  <q-card flat class=" full-width flex" @mouseleave="isMouseOver = false" @mouseover="isMouseOver = true" >

    <q-card-section horizontal>
      <q-item :dense=props.dense>
        <q-item-section avatar>
          <TimeKnob v-model=props.activite.detailQuotidien[0].duree @update:model-value="() => itemHasChanged = true" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-overline">
            {{ nomActivite }}
          </q-item-label>
          <q-item-label class="text-overline">
            <q-chip square dense size="sm">
              {{ typeActivite }}
            </q-chip>
          </q-item-label>

          <q-item-label caption lines="2">
            {{ description }}
          </q-item-label>
        </q-item-section>

      </q-item>
    </q-card-section>

    <q-space />

    <q-separator vertical inset spaced="1px" size="1.3px"  color="grey-6" style="border-radius: 5px; cursor: move;"  />
    <q-separator vertical inset spaced="1px"  size="1.5px" color="grey-6" style="border-radius: 5px;cursor: move;" />
    <q-separator vertical inset spaced="1px" size="1.5px"  color="grey-6" style="border-radius: 5px;cursor: move;" />











    <q-card-actions>
      <Transition>
        <div class="q-gutter-x-sm"  v-if="itemHasChanged">

          <q-btn icon="check" color="accent" size="sm">
          </q-btn>

          <q-btn icon="cancel" color="negative" size="sm">
          </q-btn>
          <q-tooltip :delay="1500" :model-value="true"> Confirm ?</q-tooltip>


        </div>
      </Transition>
    </q-card-actions>




  </q-card>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
