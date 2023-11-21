<template>
  <main class="lg:flex justify-start items-start gap-x-10 space-y-10 lg:space-y-0">
    <section class="bg-white lg:w-7/12 rounded-md border">
      <div class="border-b pl-6 py-4 text-sm font-semibold">
        <h1 class="text-lg text-gray-600">
          Fund Your Account
        </h1>
        <p class="text-gray-500 text-sm font-light">
          copy wallet address of your intended payment method
        </p>
      </div>
      <div class="p-10 space-y-6">
        <div v-for="{name, code} in wallet" :key="name" class="flex items-center justify-between w-full gap-x-6">
          <div class="space-y-1 w-full">
            <label class="text-xs text-gray-700 font-medium">{{ name }}</label>
            <input ref="myinput" readonly :value="code" class="py-3 border rounded-md w-full outline-none pl-6 text-sm font-light" @focus="$event.target.select()">
          </div>
          <div class="flex justify-center items-center pt-7">
            <img src="@/assets/img/copy.png" class="h-4 w-4 py cursor-pointer" alt="" @click="copy(code)">
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white lg:w-5/12 rounded-md border">
      <p class="border-b text-sm font-semibold py-4 pl-6">
        Enter amount and upload proof of payment
      </p>
      <form class="p-6 space-y-6" @submit.prevent="handleWithdrawal">
        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Deposit Amount</label>
          <input v-model="form.amount" placeholder="Enter amount in USD" type="number" class="py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
        </div>
        <div class="space-y-4">
          <label class="text-xs text-gray-700 font-medium">Withdrawal Type</label>
          <select v-model="form.withdrawalType" class="py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
            <option value="" disabled>
              ---- Select deposit type -----
            </option>
            <option value="bitcoin">
              Bitcoin
            </option>
            <option value="ethereum">
              Etheruem
            </option>
            <option value="bank">
              Bank Account
            </option>
          </select>
          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Wallet address</label>
            <input readonly :value="computedWalletAddress" class="py-2.5 bg-gray-100 cursor-not-allowed border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
          </div>
          <div class="w-full pt-6">
            <button :disabled="!isFormEnabled || processing" class="w-full text-white disabled:cursor-not-allowed disabled:opacity-25  bg-black py-3 px-3 rounded-md">
              {{ processing ? 'processing..' : 'Submit' }}
            </button>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'user-dashboard',
  data () {
    return {
      depositType: 'bank',
      imagePreview: null,
      processing: false,
      loading: false,
      form: {
        amount: '',
        withdrawalType: ''
      },
      wallet: [
        {
          name: 'Bitcoin',
          code: 'bc1q2frjcspcjt2mancf2d9ta3emgj6aw07fkf286v'
        },
        {
          name: 'Ethereum erc-20',
          code: 'bc1q2frjcspcjt2mancf2d9ta3emgj6aw07fkf286v'
        },
        // {
        //   name: 'Litecoin',
        //   code: 'bc1q2frjcspcjt2mancf2d9ta3emgj6aw07fkf286v'
        // },
        {
          name: 'Bank Account',
          code: '00907654378889'
        }
      ]
    }
  },
  computed: {
    computedWalletAddress () {
      return this.depositType === 'bitcoin' ? this.wallet[0].code : this.depositType === 'ethereum' ? this.wallet[1].code : this.depositType === 'bank' ? this.wallet[2].code : ''
    },
    isFormEnabled () {
      return !!(this.form.amount && this.form.withdrawalType)
    }
  },
  methods: {
    copy (val) {
      const cb = window.navigator.clipboard
      cb.writeText(val).then(() => this.$toastr.s('Copied to clipboard'))
    },
    async handleWithdrawal () {
      this.processing = true
      try {
        const response = await this.$axios.post('https://fidelityvalues.onrender.com/graphql/', {
          query: `
              mutation MakeWithdrawal($amount: Float!, $withdrawalType: String!) {
                newWithdrawal(input: { amount: $amount, withdrawalType: $depositType })
              }
            `,
          variables: { amount: this.form.amount, withdrawalType: this.form.withdrawalType }
        })
        const result = response.data.data.newWithdrawal
        console.log(result)
      } catch (error) {
        console.error('GraphQL query failed:', error)
      } finally {
        this.processing = false
      }
    }
  }
}
</script>

<style>

</style>
