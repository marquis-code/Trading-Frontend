<template>
  <section class="bg-white lg:w-6/12 rounded-md border h-[500px]">
    <p class="border-b text-sm font-semibold py-4 pl-6">
      To buy a plan, select PLAN of your choice.
    </p>
    <form @submit.prevent="buyPlan" class="p-6 space-y-6 z-10">
      <div class="space-y-1">
        <label class="text-xs text-gray-700 font-medium">Choose Plan:*</label>
        <select v-model="form.plan"
          class="block px-2 text-sm outline-none py-2.5 rounded-md border w-full border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
        >
          <option
            v-for="(item, index) in [
              {
                name: 'Platinum Plan (29%) Monthly',
                value: 'platinum',
              },
              {
                name: 'Diamond Plan (35%) Monthly',
                value: 'diamond',
              },
            ]"
            :key="index"
            :value="item.value"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="space-y-1">
        <label class="text-xs text-gray-700 font-medium">Enter Amount:*</label>
        <input v-model="form.amount" class="py-2 border rounded-md w-full outline-none pl-6">
        <span class="text-xs text-red-500">Note that plan amount must be available in your account balance of
          $100.</span>
      </div>
      <button class="w-full text-white text-xs rounded-lg bg-black py-3">
        Proceed
      </button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'user-dashboard',
  data () {
    return {
      form: {
        plan: '',
        amount: ''
      }
    }
  },
  methods: {
    async buyPlan () {
      try {
        const accessToken = 'YOUR_ACCESS_TOKEN'
        const buyPlanMutation = `
        mutation {
          buyPlan(amount: ${this.form.amount}, planType: "${this.form.planType}") {
            success
          }
        }
      `
        const response = await this.$axios.post(
          'https://fidelityvalues.onrender.com/graphql/',
          { query: buyPlanMutation },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        const buyPlanResponse = response.data.data.buyPlan
        console.log(buyPlanResponse, 'response here')
      } catch (error) {
        console.error('Error buying cryptocurrency plan:', error)
      }
    }
  }
}
</script>

<style></style>
