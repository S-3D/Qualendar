<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios';
import { storeToRefs } from 'pinia';
import { useCalendarStore } from 'stores/calendarStore.js'

const { dateSelectionnee, dateFormattee, jourSemaine, jourDuMois } = storeToRefs(useCalendarStore())
const payload = ref({
    quotidien: {
        date: dateFormattee.value,
        User: {
            id: 1
        },
    },
    Activite: {
        id: 0,
        nomActivite : "Ajout"
    },
    duree: "01.30",
})
const optionsActivite = ref([])
const toggleDialog = ref(false)
const illustration = "https://images.unsplash.com/photo-1588680152893-a4b533646c6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxibGFrYyUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHx8MA%3D%3D"

const handleSubmit = () => {
    payload.value.duree = parseFloat(payload.value.duree)
    console.log(payload.value)
    api.post('/detail_quotidiens', payload.value)
    toggleDialog.value = false
}

const fetchListeActivites = () => {
    api.get('/activites.json')
        .then(res => optionsActivite.value = res.data)
}
fetchListeActivites()
</script>


<template>
    <q-dialog>
        <q-card class="customCard  shadow-10 q-pa-sm flex column justify-between">

            <q-card-section>
                <img :src=illustration width="100%"  height="100px"  >
        
            </q-card-section>

            <q-card-section class="q-gutter-y-md">
                <q-select dense standout="bg-accent" v-model="payload.Activite" :options="optionsActivite"
                    option-label="nomActivite" :option-value="id"  />
                <q-input dense  standout="bg-accent" v-model="payload.duree" type="time"
                   />
            </q-card-section>

            <div>
                <q-separator inset color="grey" />
                <q-card-section class="flex justify-between">
                    <q-btn unelevated label="Annuler" v-close-popup />
                    <q-btn unelevated label="Ajouter" color="primary" @click="handleSubmit" />
                </q-card-section>

            </div>


        </q-card>
    </q-dialog>
</template>

<style scoped>
.customCard {
    width: 20vw;
    min-width: 250px;
    min-height: 45vh;
    border-radius: 15px;
}
</style>