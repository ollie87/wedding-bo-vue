<template>
  <div>
    <guest-table />
    <bus-pie-chart />
    <menu-pie-chart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GuestTable from '../components/GuestTable.vue'
import BusPieChart from '@/components/BusPieChart.vue'
import MenuPieChart from '@/components/MenuPieChart.vue'

export default Vue.extend({
  name: 'Home-view',

  components: {
    GuestTable,
    BusPieChart,
    MenuPieChart
  },
  mounted () {
    this.$store.dispatch('fetchGuests')
  }
})
</script>
