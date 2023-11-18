<template>
  <main class="space-y-6">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div
        class="h-[300px] rounded-lg bg-gray-50 lg:col-span-2 border hidden md:block border-blue-500"
      >
        <graph-2 />
      </div>
      <div class="rounded-lg bg-blue-50 border">
        <div class="flex justify-between items-center px-3">
          <div class="py-2">
            <h1 class="text-gray-700 text-sm font-bold">
              Total Balance
            </h1>
            <p class="text-gray-400 text-xl">
              $ <span class="text-xl text-gray-900">19,89,111.68</span>
            </p>
          </div>
          <div>
            <nuxt-link to="/dashboard/deposit" class="bg-black text-white rounded-md px-3 py-2.5">
              Deposit Funds
            </nuxt-link>
          </div>
        </div>
        <div class="md:flex items-center gap-x-6 p-3 space-y-6 md:space-y-0">
          <div
            class="h-[300px] md:w-1/2 rounded-lg flex justify-between flex-col bg-[url('~/assets/img/trading-stat.jpg')] bg-cover bg-top bg-no-repeat"
          >
            <div class="p-3">
              <div
                class="rounded-full bg-red-400 p-2 h-10 w-10 flex justify-center items-center"
              >
                <img
                  src="@/assets/img/money-wallet.png"
                  class="h-7 w-7"
                  alt=""
                >
              </div>
            </div>
            <div class="border-t-[0.4px] border-white">
              <div class="px-3 py-2">
                <p class="text-white text-xs">
                  Profits
                </p>
                <p class="text-lg font-semibold text-white">
                  $12,556.00
                </p>
              </div>
            </div>
          </div>
          <div
            class="h-[300px] md:w-1/2 rounded-lg flex justify-between flex-col bg-[url('~/assets/img/recession.jpg')] bg-cover bg-top bg-no-repeat"
          >
            <div class="p-3">
              <div
                class="rounded-full bg-red-400 p-2 h-10 w-10 flex justify-center items-center"
              >
                <img src="@/assets/img/analytics.png" class="h-7 w-7" alt="">
              </div>
            </div>
            <div class="border-t-[0.4px] border-white">
              <div class="px-3 py-2">
                <p class="text-white text-xs">
                  Investment
                </p>
                <p class="text-lg font-semibold text-white">
                  $9,934.68
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div
        class="rounded-lg lg:col-span-2 border border-blue-300 p-3 space-y-6"
      >
        <div class="flex justify-between items-center">
          <div class="md:w-3/12 relative">
            <div class="absolute top-2 left-3">
              <img src="@/assets/img/search.svg" alt="">
            </div>
            <input
              class="border-[0.4px] rounded-full outline-none border-blue-300 pl-8 py-2 text-xs w-full bg-blue-50"
              type="search"
              placeholder="Search"
            >
          </div>
          <div>
            <select
              class="bg-blue-500 text-sm text-white px-3 py-2.5 rounded-full outline-none"
            >
              <option>All Assets</option>
            </select>
          </div>
        </div>
        <user-dashboard-assets-table :assets-list="assetsList" />
      </div>
      <div
        class="rounded-lg bg-white py-10 px-6 space-y-4 border border-gray-600"
      >
        <h1 class="text-gray-600">
          Recent Transactions
        </h1>
        <div class="space-y-6">
          <div
            v-for="(item, index) in transactionsList"
            :key="index"
            class="flex justify-between items-center text-sm"
          >
            <div class="flex items-center gap-x-3">
              <div class="rounded-full border p-2">
                <img
                  :src="require(`@/assets/img/${item.icon}.png`)"
                  class="h-7 w-7"
                  alt=""
                >
              </div>
              <div>
                <p class="font-medium">
                  {{ item.description }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ item.date }}
                </p>
              </div>
            </div>
            <div
              :class="[
                item.type === 'credit' ? 'text-green-500' : 'text-red-500',
              ]"
            >
              <span class="font-medium">
                {{ item.type === "credit" ? "+" : "-" }}</span>
              <span class="font-medium">{{ item.amount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'user-dashboard',
  data () {
    return {
      transactionsList: [
        {
          description: 'Recieved Funds',
          date: 'Sep,6, 2023 13:06',
          type: 'credit',
          amount: '$8000',
          item: 'deposit',
          icon: 'deposit'
        },
        {
          description: 'Withdrawal Funds',
          date: 'Sep,6, 2023 13:06',
          type: 'debit',
          amount: '$8000',
          item: 'deposit',
          icon: 'withdraw'
        },
        {
          description: 'Receieved BitCoin',
          date: 'Sep,6, 2023 13:06',
          type: 'credit',
          amount: '2.1',
          item: 'BTC',
          icon: 'bit'
        },
        {
          description: 'Receieved Ethereum',
          date: 'Sep,6, 2023 13:06',
          type: 'credit',
          amount: '2.1',
          item: 'ETH',
          icon: 'ethereum'
        },
        {
          description: 'Receieved Solona',
          date: 'Sep,6, 2023 13:06',
          type: 'credit',
          amount: '2.1',
          item: 'BTC',
          icon: 'solana'
        }
      ],
      assetsList: [
        {
          name: 'BNB',
          price: '$214.08',
          rate: '+0.23%',
          balance: '122,356',
          proportion: 80,
          icon: 'bit'
        },
        {
          name: 'BTC',
          price: '$214.08',
          rate: '+0.23%',
          balance: '122,356',
          proportion: 75,
          icon: 'binance'
        },
        {
          name: 'USDT',
          price: '$214.08',
          rate: '+0.23%',
          balance: '122,356',
          proportion: 14,
          icon: 'usdt'
        },
        {
          name: 'XRP',
          price: '$214.08',
          rate: '+0.23%',
          balance: '122,356',
          proportion: 14,
          icon: 'xrp'
        }
      ]
    }
  }
}
</script>
