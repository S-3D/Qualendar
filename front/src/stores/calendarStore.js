import { defineStore } from 'pinia';
import { date } from 'quasar'

const formatFrancais =
{
  days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  daysShort: ['Dum', 'Lun', /* and all the rest of days - remember starting with Sunday */],
  months: ['Ianuarie', 'Februarie', /* and all the rest of months */],
  monthsShort: ['Ian', 'Feb', /* and all the rest of months */]
}

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    dateSelectionnee: new Date(),
    today : new Date(),
    hasChanged : false,
  }),
  getters: {
    dateFormattee :  (state) => date.formatDate( state.dateSelectionnee, "YYYY-MM-DD" ),
    demain : (state)=> date.addToDate(state.today, { days: 1 } ),
    jourSemaine : (state) => date.formatDate( state.dateSelectionnee, "dddd", formatFrancais),
    jourDuMois :  (state) => date.formatDate( state.dateSelectionnee, "DD", formatFrancais),
    numeroSemaine : (state) => date.formatDate( state.dateSelectionnee, "ww"),

  },
  actions: {

  },
});
