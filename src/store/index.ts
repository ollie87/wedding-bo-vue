import { Guest } from './../domain/entities/Guest.model'
import { FirebaseGuestRepository } from './../firebase/FirebaseGuestRepository'
import { GetGuestsUseCase } from './../domain/useCases/GetGuestsUseCase'
import Vue from 'vue'
import Vuex from 'vuex'
interface ChartData {
  value: number;
  name: string;
  itemStyle: unknown
}
Vue.use(Vuex)
const GUEST_REPOSITORY = new FirebaseGuestRepository()
export default new Vuex.Store({
  state: {
    guests: []
  },
  getters: {
    getGuests: state => state.guests,
    getDataBus: state => {
      return state.guests.reduce((accum: ChartData[], currentValue: Guest) => {
        if (currentValue.bus === 'SI') {
          return accum.map((chartData: ChartData) => ({
            ...chartData,
            value: chartData.name === 'SI' ? chartData.value + 1 : chartData.value
          }))
        } else {
          return accum.map((chartData: ChartData) => ({
            ...chartData,
            value: chartData.name === 'NO' ? chartData.value + 1 : chartData.value
          }))
        }
      }, [
        { value: 0, name: 'SI', itemStyle: { color: '#33F36D' } },
        { value: 0, name: 'NO', itemStyle: { color: '#F33350' } }
      ])
    },
    getDataMenu: state => {
      return state.guests.reduce((accum: ChartData[], currentValue: Guest) => {
        if (currentValue.menu === 'Clásico') {
          return accum.map((chartData: ChartData) => ({
            ...chartData,
            value: chartData.name === 'Clásico' ? chartData.value + 1 : chartData.value
          }))
        } else if (currentValue.menu === 'Bebé (Sin menu)') {
          return accum.map((chartData: ChartData) => ({
            ...chartData,
            value: chartData.name === 'Bebé (Sin menu' ? chartData.value + 1 : chartData.value
          }))
        } else if (currentValue.menu === 'Infantil') {
          return accum.map((chartData: ChartData) => ({
            ...chartData,
            value: chartData.name === 'Infantil' ? chartData.value + 1 : chartData.value
          }))
        } else if (currentValue.menu === 'Vegano') {
          return accum.map((chartData: ChartData) => ({
            ...chartData,
            value: chartData.name === 'Vegano' ? chartData.value + 1 : chartData.value
          }))
        } else {
          return accum.map((chartData: ChartData) => ({
            ...chartData,
            value: chartData.name === 'Vegetariano' ? chartData.value + 1 : chartData.value
          }))
        }
      }, [
        { value: 0, name: 'Clásico', itemStyle: { color: '#339FF3' } },
        { value: 0, name: 'Bebé (Sin menu)', itemStyle: { color: '#D033F3' } },
        { value: 0, name: 'Infantil', itemStyle: { color: '#F39033' } },
        { value: 0, name: 'Vegano', itemStyle: { color: '#33F373' } },
        { value: 0, name: 'Vegetariano', itemStyle: { color: '#D3F333' } }
      ])
    }
  },
  mutations: {
    'SET_GUESTS' (state, guests) {
      state.guests = guests
    }
  },
  actions: {
    async fetchGuests ({ commit }) {
      const guestsUseCase = new GetGuestsUseCase(GUEST_REPOSITORY)
      const guests = await guestsUseCase.execute('')
      commit('SET_GUESTS', guests)
    }
  },
  modules: {
  }
})
