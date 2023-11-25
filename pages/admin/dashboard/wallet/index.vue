<template>
  <main>
    <main class="space-y-10">
      <div class="flex justify-between items-center">
        <h1 class="text-gray-800 font-medium">
          Overview
        </h1>
        <nuxt-link to="/admin/dashboard/wallet/add-wallet" class="px-3 py-2 rounded-full text-white bg-black" @click="handleClick">
          Update profit
        </nuxt-link>
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
              <p class="text-2xl text-gray-100">
                {{ item.name }}
              </p>
            </div>
          </div>
          <div v-if="item.value !== 'bank'" class="absolute top-3 right-2 cursor-pointer">
            <button class="flex items-center gap-x-3 border-white border px-3 py-2.5 rounded-md" @click="handleWalletModal(item)">
              <span class="text-white">Update</span>
              <img class="cursor-pointer" src="@/assets/icons/more.svg" alt="more">
            </button>
          </div>
        </div>
      </div>
    </main>
    <b-modal id="wallet-update" hide-footer centered hide-header>
      <div class="flex justify-center items-center">
        <h1 class="text-lg font-semibold text-black">
          {{ Object.keys(selectedWallet).length ? `Update ${selectedWallet?.walletName} wallet` : 'Update Wallet' }}
        </h1>
      </div>
      <form class="mt-8 gap-6 w-full space-y-6 px-6 pb-6" @submit.prevent="createWallet">
        <div class="col-span-6 sm:col-span-6">
          <label
            for="walletName"
            class="block text-sm font-medium text-gray-700"
          >
            Wallet Name
          </label>

          <select disabled readonly id="walletName" v-model="selectedWallet.value" class="mt-1 disabled: cursor-not-allowed bg-gray-100 w-full px-3 py-3 border outline-none rounded-md border-gray-200 text-sm text-gray-700 shadow-sm">
            <option value="btc">
              BitCoin
            </option>
            <option value="eth">
              Ethereum
            </option>
            <option value="bank">
              Bank
            </option>
          </select>
        </div>

        <div class="col-span-6 sm:col-span-6">
          <label
            for="walletAddress"
            class="block text-sm font-medium text-gray-700"
          >
            Wallet Address
          </label>

          <input
            id="walletAddress"
            v-model="selectedWallet.address"
            type="text"
            name="walletAddress"
            class="mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          >
        </div>

        <div class="w-full flex justify-between items-center gap-x-6">
          <button class="w-full rounded-md border disabled:cursor-not-allowed disabled:opacity-25 bg-gray-500 px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring " @click="$bvModal.hide('wallet-update')">
            Cancel
          </button>
          <button
            type="submit"
            :disabled="!isFormEmpty || loading"
            class="w-full rounded-md border disabled:cursor-not-allowed disabled:opacity-25 border-black bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent focus:outline-none focus:ring"
          >
            {{ loading ? 'saving...' : 'Update wallet' }}
          </button>
        </div>
      </form>
    </b-modal>
  </main>
</template>

<script>
import WalletModal from '@/components/WalletModal.vue'
// import Graph4 from '@/components/Graph4.vue'
export default {
  components: {
    // Graph4,
    WalletModal
  },
  layout: 'dashboards',
  data () {
    return {
      showModal: false,
      selectedWallet: {},
      stats: [
        {
          name: 'Trading Balance',
          value: 'bank',
          walletName: 'Bank Account',
          count: '$3520.30',
          address: '34567890oiuytrerghjklkrtyui',
          icon: 'wallet',
          classStyle: 'bg-green-500'
        },
        {
          name: 'BTC',
          value: 'btc',
          walletName: 'BitCoin',
          count: '',
          address: '34567890oiuytrerghjklkrtyui',
          icon: 'bit',
          classStyle: 'bg-pink-500'
        },
        {
          name: 'ETH',
          value: 'eth',
          walletName: 'Ethereum',
          count: '',
          address: '34567890oiuytrerghjklkrtyui',
          icon: 'eth',
          classStyle: 'bg-blue-500'
        }
      ],
      loading: false,
      form: {
        name: '',
        address: ''
      }
    }
  },
  computed: {
    isFormEmpty () {
      return !!(this.selectedWallet.name && this.selectedWallet.address)
    }
  },
  methods: {
    handleClick () {
      this.showModal = true
      // this.$bvModal.show('bv-modal-example')
    },
    handleWalletModal (item) {
      this.selectedWallet = item
      this.$bvModal.show('wallet-update')
    },
    createWallet () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$toastr.s(`${this.selectedWallet.walletName} Wallet was updated sucessfully`)
        this.$bvModal.hide('wallet-update')
      }, 3000)
    }
  }
}
</script>

<style>

</style>
