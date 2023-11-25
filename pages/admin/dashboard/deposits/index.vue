<template>
  <main>
    <Transition name="fade">
      <!-- <b-container> -->
      <section class="text-white">
        <div class="flex items-center justify-between my-3">
          <button
            class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm"
            @click="goBack()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#747070"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            >
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          </button>
        </div>

        <div class="sm:flex-1 pb-0 mt-3">
          <label for="search" class="sr-only">Search</label>

          <input
            v-model="search"
            type="text"
            placeholder="Search.."
            class="w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
          >
        </div>
        <b-card class="mt-3">
          <b-table
            striped
            show-empty
            responsive
            :items="withdrawals"
            :fields="fields"
            :busy="loading"
            :current-page="currentPage"
            :per-page="perPage"
          >
            <template #table-busy>
              <div class="text-center my-2 cursor-pointer">
                <b-spinner class="align-middle" />
                <small>Loading...</small>
              </div>
            </template>

            <template #empty>
              <p
                class="text-center text-sm text-secondary py-2 cursor-pointer"
              >
                {{
                  search
                    ? `No deposits found for search value: "${search}"`
                    : "No deposits available"
                }}
              </p>
            </template>

            <template #cell(sn)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{ data.index + 1 }}</span>
            </template>

            <template #cell(amount)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{
                  data?.item?.amount
                }}
              </span>
            </template>

            <template #cell(withdrawalType)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{ data?.item?.withdrawalType }}</span>
            </template>

            <template #cell(user)="data">
              <span class="font-medium py-2 text-sm">
                {{ data?.item?.user?.firstName }}</span>
            </template>

            <template #cell(timeAdded)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{
                  data?.item?.timeAdded
                }}</span>
            </template>
          </b-table>

          <div class="flex justify-end items-end">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              size="md"
              class="my-3"
            />
          </div>
        </b-card>
      </section>
      <!-- </b-container> -->
    </Transition>
  </main>
</template>

<script>
export default {
  name: 'deposits',
  layout: 'dashboards',
  scrollToTop: true,
  data () {
    return {
      fields: [
        {
          key: 'sn',
          label: 'S/N',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'Amount',
          label: 'Amount',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'DepositType',
          label: 'Deposit Type',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'depositStatus',
          label: 'Deposit Status',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'user',
          label: 'User',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'proof',
          label: 'Proof',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'timeAdded',
          label: 'Time Added',
          class: 'font-medium text-gray-400 text-sm'
        }
      ],
      deposits: [],
      currentPage: 1,
      perPage: 7,
      search: '',
      totalRows: 1,
      loading: true
    }
  },
  created () {
    this.fetchAdminDeposits()
  },
  mounted () {
    this.fetchAdminDeposits()
    // Set the initial number of items
    this.totalRows = this.deposits.length
  },
  methods: {
    async fetchAdminDeposits () {
      const accessToken = 'YOUR_ACCESS_TOKEN'
      this.loading = true
      const query = `
        query {
          getTransactions {
            id
            amount
            wallet
            transactionType
            transactionStatus
            user
            proof
            timeAdded
          }
        }
      `

      try {
        const response = await this.$axios.post('https://fidelityvalues.onrender.com/graphql/', { query }, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
          }
        })

        const adminTransactions = response.data.data.getTransactions
        console.log('Admin Statistics:', adminTransactions)
      } catch (error) {
        console.error('Error querying GraphQL API:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-leave-to {
  transform: scale(0.8);
}
</style>
