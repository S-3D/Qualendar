import { defineStore } from 'pinia';


export const useActiviteStore = defineStore('activite', {
  state: () => ({
    activite :{
      quotidien: {
        date: '',
        User: {
            id: 1
        },
    },
    Activite: {
        id: 0,
        nomActivite : "Ajout"
    },
    duree: 1.30,
    }

  }),
  getters: {

  },
  actions: {

  },
});
