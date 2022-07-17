<template>
  <v-chart class="chart" :option="option" />
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])
export default Vue.extend({
  name: 'BusPieChart',
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: 'light'
  },
  data: () => ({
    option: {}
  }),
  computed: {
    ...mapGetters({
      busChartData: 'getDataBus'
    })
  },
  watch: {
    busChartData (newData) {
      this.option = {
        title: {
          text: 'Bus',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [
            'SI',
            'NO'
          ]
        },
        series: [
          {
            name: 'BUS',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: newData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
})
</script>
<style scoped>
.chart {
  height: 30vh;
  width: 30vh;
}
</style>
