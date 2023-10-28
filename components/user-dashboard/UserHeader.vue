<template>
  <main
    class="flex justify-between items-center px-6 md:flex-col md:justify-end md:items-end bg-blue-50"
  >
    <div class="md:hidden flex justify-start items-start z-50">
      <button v-b-toggle.sidebar-1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <b-sidebar id="sidebar-1" title="Sidebar" no-header shadow backdrop>
        <template #default="{ hide }">
          <div class="p-3 z-50">
            <div class="flex justify-between items-center">
              <h4 id="sidebar-no-header-title">
                <img
                  src="@/assets/img/fidelityvalues.png"
                  alt="logo"
                  class="h-10 w-10"
                >
              </h4>
              <button @click="hide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav class="mb-3">
              <ul class="mt-6 space-y-1">
                <li class="space-y-6">
                  <nuxt-link
                    v-for="{ name, url, icon } in sidebarItems"
                    :key="name"
                    :to="url"
                    class="rounded-md space-y-2 pl-3 py-2.5 text-sm font-light text-gray-700 flex items-center space-x-3"
                  >
                    <div class="bg-white shadow-sm h-8 w-8 p-2 rounded-full">
                      <img
                        :src="require(`~/assets/img/${icon}.png`)"
                        alt="icons"
                        class=""
                      >
                    </div>
                    <p class="text-gray-600 pb-2">
                      {{ name }}
                    </p>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </template>
      </b-sidebar>
    </div>
    <div class="flex justify-end items-end gap-x-2.5 py-3">
      <div class="bg-white rounded-full border p-2.5">
        <img src="@/assets/img/user.svg" alt="userIcon">
      </div>
      <div class="bg-white rounded-full border p-2.5">
        <img src="@/assets/img/notification.svg" alt="notificationIcon">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      sidebarItems: [
        {
          name: 'Dashboard',
          icon: 'analytics',
          url: '/dashboard'
        },
        {
          name: 'Profile',
          icon: 'profile',
          url: '/dashboard/profile'
        },
        {
          name: 'Deposit',
          icon: 'deposit',
          url: '/dashboard/deposit'
        },
        {
          name: 'Buy plans',
          icon: 'investment',
          url: '/dashboard/purchase-plans'
        },
        {
          name: 'Transaction history',
          icon: 'history',
          url: '/dashboard/transaction-history'
        }
      ]
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
.nuxt-link-exact-active {
  background-color: black;
  color: white;
}
</style>
