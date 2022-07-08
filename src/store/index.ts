import { FirebaseGuestRepository } from './../firebase/FirebaseGuestRepository'
import { GetGuestsUseCase } from './../domain/useCases/GetGuestsUseCase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const GUEST_REPOSITORY = new FirebaseGuestRepository()
export default new Vuex.Store({
  state: {
    guests: []
  },
  getters: {
    getGuests: state => state.guests
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
