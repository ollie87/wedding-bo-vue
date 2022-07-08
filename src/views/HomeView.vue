<template>
  <guest-table />
</template>

<script lang="ts">
import Vue from 'vue'
import GuestTable from '../components/GuestTable.vue'

export default Vue.extend({
  name: 'Home-view',

  components: {
    GuestTable
  }
})
</script>
