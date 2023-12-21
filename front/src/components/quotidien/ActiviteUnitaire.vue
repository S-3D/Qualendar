<script setup>
const props = defineProps({
  activite : Object
})
</script>

<template>
  <q-card flat>
    <q-card-section horizontal>

    <q-item-section avatar>
      <q-avatar> <q-icon :name="props.activite.icon" size="lg" /> </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-overline">
        {{ props.activite.nom }}
      </q-item-label>
      <q-item-label class="text-overline">
        {{ props.activite.date }}
      </q-item-label>

      <q-item-label caption lines="2">
        {{ props.activite.description }}
      </q-item-label>
    </q-item-section>
  </q-card-section>

  </q-card>
</template>
