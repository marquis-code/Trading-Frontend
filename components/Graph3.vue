<template>
  <div class="w-full">
    <!-- <Box title="Graph"> -->
      <BarChart :height="200" :options="options" :chartdata="chartdata" />
    <!-- </Box> -->
  </div>
</template>

<script>
// import Box from '~/components/containers/Box.vue';
import BarChart from '~/components/charts/BarChart.vue'

export default {
  components: {
    // Box,
    BarChart
  },
  data () {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      chartdata: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May'
        ],
        datasets: [
          {
            label: 'Website Visitors',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)'
            ],
            borderWidth: 1
          },
          {
            label: 'Mobile Visitors',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)'
            ],
            borderWidth: 1
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
