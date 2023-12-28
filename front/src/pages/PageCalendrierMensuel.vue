<script setup>
import CalendrierMensuel from 'src/components/mensuel/CalendrierMensuel.vue';
import InterfaceMensuel from 'src/components/mensuel/InterfaceMensuel.vue'


</script>

<template>
  <q-page class="flex flex-center">

    <div class="container">
      <CalendrierMensuel />
      <InterfaceMensuel />
    </div>
  </q-page>
</template>


<style scoped>
.container{
  width: 60vw;
  min-width: 300px;
  height: 70vh;
  /* border: 1px solid grey;
  border-radius: 10px; */
}


</style>

