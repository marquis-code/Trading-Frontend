<template>
  <div class="w-full px-3">
    <!-- <Box title="Graph"> -->
      <LineChart :height="130" :options="options" :chartdata="chartdata" />
    <!-- </Box> -->
  </div>
</template>

<script>
// import Box from '~/components/containers/Box.vue';
import LineChart from '~/components/charts/LineChart.vue';

export default {
  components: {
    // Box,
    LineChart
  },
  data() {
    return {
      options: {},
      chartdata: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'BTC',
            data: [100, 200, 300, 400, 600, 700, 300, 30, 50, 70, 50, 70],
            fill: true,
            borderColor: 'rgb(255,192,203)',
            lineTension: 0.1
          },
          {
            label: 'ETH',
            data: [400, 600, 700, 300, 100, 200, 300, 50, 70, 50, 10, 59],
            fill: true,
            borderColor: 'rgb(0,0,255)',
            lineTension: 0.1
          },
          {
            label: 'LTC',
            data: [400, 600, 100, 200, 300, 700, 300, 700, 300, 100, 200, 500],
            fill: true,
            // borderColor: 'rgb(173,255,47)',
            lineTension: 0.1
          }
        ]
      }
    }
  }
};
</script>

<style scoped></style>
