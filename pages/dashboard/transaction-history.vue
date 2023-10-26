<template>
  <section>
    <div class="container p-2 mx-auto sm:p-4 border border-gray-100 bg-white rounded-md space-y-4">
      <div class="space-y-1 pl-3">
        <h2 class="text font-semibold leading-loosed">
          Transaction History
        </h2>
        <p class="text-gray-600 text-xs">
          More than 400+ Digital assets
        </p>
      </div>
      <div class="overflow-x-auto h-[410px]">
        <table class="min-w-full text-xs">
          <colgroup>
            <col>
            <col>
            <col>
            <col>
            <col>
            <col class="w-24">
          </colgroup>
          <thead class="bg-white border-b sticky top-0">
            <tr class="text-left">
              <th v-for="(item, index) in tableHeaders" :key="index" class="p-3">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="({invoice, client, issued, issuedDay, due, dueDay, amount, status}, index) in tableData" :key="index" class="border-b border-opacity-20 border-gray-700 bg-white">
              <td class="px-3 py-4">
                <p>{{ invoice }}</p>
              </td>
              <td class="px-3 py-4">
                <p>{{ client }}</p>
              </td>
              <td class="px-3 py-4">
                <p>{{ issued }}</p>
                <p class="dark:text-gray-400">
                  {{ issuedDay }}
                </p>
              </td>
              <td class="px-3 py-4">
                <p>{{ due }}</p>
                <p class="dark:text-gray-400">
                  {{ dueDay }}
                </p>
              </td>
              <td class="px-3 py-4">
                <p>{{ amount }}</p>
              </td>
              <td class="p-3 py-4 text-right">
                <span class="px-3 py-2 font-medium text-xs rounded-md text-white" :class="[status == 'pending' ? 'bg-yellow-500' : 'bg-green-500']">
                  <span>{{ status }}</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      tableData: [{
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      },
      {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      },
      {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      }],
      tableHeaders: ['invoice', 'client', 'issued', 'due', 'amount', 'status']
    }
  }
}
</script>

<style>

</style>
