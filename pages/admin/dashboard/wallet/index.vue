<template>
  <main class="space-y-10">
    <div>
      <h1 class="text-gray-800 font-medium">
        Overview
      </h1>
    </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div v-for="(item, index) in stats" :key="index" class="h-32 rounded-lg bg-black flex items-center justify-between gap-x-3 pl-3 relative">
     <div class="flex items-center gap-x-2">
      <div class="rounded-full h-16 w-16 flex justify-center items-center">
        <img :src="require(`~/assets/img/${item.icon}.png`)" alt="stat icon">
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
      <div class="absolute top-3 right-2 cursor-pointer" @click="openDropdownOptions">
          <img src="@/assets/icons/more.svg" alt="more" />
        </div>
      </div>
    </div>
    <!-- <div class="md:flex w-full gap-x-10 pt-6 space-y-6 lg:space-y-0">
      <div class="h-full rounded-lg py-3 bg-white border space-y-6 w-full">
        <div class="flex justify-between items-center px-6">
          <p class="font-medium">Market Analysis</p>
          <div>
            <select class="border outline-none rounded-md bg-gray-100 text-sm px-3 py-2.5">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <graph-2 />
      </div>
    </div> -->
    <!-- <div>
      <trading-overview />
    </div> -->
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
          name: 'BTC',
          count: '1200',
          icon: 'bit',
          classStyle: 'bg-pink-500'
        },
        {
          name: 'ETH',
          count: '$4655.56',
          icon: 'eth',
          classStyle: 'bg-blue-500'
        },
        {
          name: 'BANK',
          count: '$3520.30',
          icon: 'wallet',
          classStyle: 'bg-green-500'
        }
      ]
    }
  }
}
</script>

<style>

</style>
