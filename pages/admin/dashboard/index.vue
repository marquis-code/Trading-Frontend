<template>
  <main class="space-y-10">
    <div>
      <h1 class="text-gray-800 font-medium">
        Statistics
      </h1>
    </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      <div v-for="(item, index) in stats" :key="index" class="h-32 rounded-lg bg-black flex items-center gap-x-3 pl-6">
        <div :class="item.classStyle" class="rounded-full h-10 w-10 flex justify-center items-center">
          <img :src="require(`~/assets/icons/${item.icon}.svg`)" alt="stat icon">
        </div>
        <div>
          <h1 class="text-xl font-medium text-white">
            {{ item.count }}
          </h1>
          <p class="text-xs text-gray-100">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="md:flex w-full gap-x-10 pt-6 space-y-6 lg:space-y-0">
      <div class="h-full rounded-lg md:w-6/12 py-3 bg-gray-200 border space-y-6">
        <div class="flex justify-between items-center px-6">
          <p class="font-medium">Active Visitors</p>
          <div>
            <select class="border outline-none rounded-md bg-gray-100 text-sm px-3 py-2.5">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
          <graph-3 />
      </div>
      <div class="h-full rounded-lg md:w-6/12 py-3 bg-gray-200 border space-y-6">
        <div class="flex justify-between items-center px-6">
          <p class="font-medium">Wallet Usage</p>
          <div>
            <select class="border outline-none rounded-md bg-gray-100 text-sm px-3 py-2.5">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
          <graph-4 />
      </div>
    </div>
    <!-- <graph-4 /> -->
  </main>
</template>

<script>
import Graph4 from '@/components/Graph4.vue'
export default {
  components: {
    Graph4
  },
  layout: 'dashboards',
  data () {
    return {
      stats: [
        {
          name: 'Total Funds',
          count: '1200',
          icon: 'funds',
          classStyle: 'bg-pink-500'
        },
        {
          name: 'Total Customers',
          count: '550',
          icon: 'customers',
          classStyle: 'bg-blue-500'
        },
        {
          name: 'Users',
          count: '120',
          icon: 'users',
          classStyle: 'bg-green-500'
        },
        {
          name: 'Accounts',
          count: '40',
          icon: 'users',
          classStyle: 'bg-yellow-500'
        }
      ]
    }
  }
}
</script>

<style>

</style>
