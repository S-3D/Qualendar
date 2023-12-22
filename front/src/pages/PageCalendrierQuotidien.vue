<script setup>
import DatePicker from 'components/quotidien/DatePicker.vue'
import DateJour from 'src/components/quotidien/DateJour.vue';
</script>

<template>
  <q-page class="flex column flex-center">
    <div class="container flex column  shadow-2">
      <DatePicker class="col-3" />
      <q-separator inset />
      <DateJour class="col-8" />
    </div>

  </q-page>
</template>


<style scoped>
.container{
  width: 60vw;
  min-width: 300px;
  height: 70vh;
  border-radius: 10px;
}
</style>
