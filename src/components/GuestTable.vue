<template>
  <v-data-table
    :headers="headers"
    :items="guestList"
    item-key="createdTimestamp"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        label="Búsqueda"
        class="mx-4"
      ></v-text-field>
    </template>
    <template v-slot:[`body.append`]>
      <tr>
        <td>
          <v-text-field
            v-model="name"
            label="Busqueda Nombre"
          ></v-text-field>
        </td>
        <td>
          <v-text-field
            v-model="surname1"
            label="Busqueda Apellido 1"
          ></v-text-field>
        </td>
        <td>
          <v-text-field
            v-model="surname2"
            label="Busqueda Apellido 2"
          ></v-text-field>
        </td>
        <td></td>
        <td></td>
        <td>
          <v-text-field
            v-model="age"
            label="Busqueda Edad"
          ></v-text-field>
        </td>
        <td>
          <v-text-field
            v-model="menu"
            label="Busqueda menú"
          ></v-text-field>
        </td>
        <td></td>
        <td>
          <v-text-field
            v-model="bus"
            label="Busqueda Bus"
          ></v-text-field>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import { mapGetters } from 'vuex'
import Utils from '../mixins/utils'
export default Vue.extend({
  vuetify: new Vuetify(),
  name: 'guest-table',
  mixins: [Utils],
  data: () => ({
    search: '',
    name: '',
    surname1: '',
    surname2: '',
    menu: '',
    age: '',
    bus: ''
  }),
  mounted () {
    this.$store.dispatch('fetchGuests')
  },
  computed: {
    ...mapGetters({
      guestList: 'getGuests'
    }),
    headers () {
      return [
        {
          text: 'Nombre',
          align: 'start',
          value: 'name',
          filter: value => {
            if (!this.name) return true
            return this.searchNameFormatted(value).includes(this.searchNameFormatted(this.name))
          }
        },
        {
          text: 'Primer Apellido',
          value: 'surname1',
          filter: value => {
            if (!this.surname1) return true
            return this.searchNameFormatted(value).includes(this.searchNameFormatted(this.surname1))
          }
        },
        {
          text: 'Segundo Apellido',
          value: 'surname2',
          filter: value => {
            if (!this.surname2) return true
            return this.searchNameFormatted(value).includes(this.searchNameFormatted(this.surname2))
          }
        },
        { text: 'Añadido', value: 'created' },
        { text: 'Añadido timestamp', value: 'createdTimestamp' },
        {
          text: 'Edad',
          value: 'age',
          filter: value => {
            if (!this.age) return true
            return this.searchNameFormatted(value).includes(this.searchNameFormatted(this.age))
          }
        },
        {
          text: 'Menú',
          value: 'menu',
          filter: value => {
            if (!this.menu) return true
            return this.searchNameFormatted(value).includes(this.searchNameFormatted(this.menu))
          }
        },
        { text: 'Alergias', value: 'allergies' },
        {
          text: 'Bus',
          value: 'bus',
          filter: value => {
            if (!this.bus) return true
            return this.searchNameFormatted(value).includes(this.searchNameFormatted(this.bus))
          }
        }
      ]
    }
  }
})
</script>

<style>

</style>
