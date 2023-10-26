<template>
  <main class="relative">
    <header class="px-4 py-2 bg-[#003b6d] sticky top-0 z-50">
      <div class="container flex justify-between h-14 mx-auto">
        <nuxt-link rel="noopener noreferrer" to="/" aria-label="Back to homepage" class="flex items-center p-2">
          <img src="@/assets/img/fidelityvalues.png" class="h-10 w-10" alt="" />
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-8 h-8 dark:text-violet-400">
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z" />
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z" />
          </svg> -->
        </nuxt-link>
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex items-center gap-x-3">
            <nuxt-link v-for="{title, url} in navigationItems" :key="title" :to="url" rel="noopener noreferrer" class="flex text-white text-sm items-center px-4 -mb-1">
              {{ title }}
            </nuxt-link>
          </li>
        </ul>
        <div class="items-center gap-x-6 flex-shrink-0 hidden lg:flex">
          <button class="self-center px-8 py-2 font-medium rounded-full text-white border border-white" @click="$router.push('/login')">
            Login
          </button>
          <button class="self-center px-8 py-2 font-medium rounded-full dark:bg-violet-400 dark:text-gray-900" @click="$router.push('/signup')">
            Get Started
          </button>
        </div>
        <button class="p-4 lg:hidden" @click="toggleMobileNavbar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-gray-100">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
    <div v-if="showMobileNav" class="z-50 absolute top-0 w-full bg-black">
      <div class="flex flex-col h-screen p-6 w-full dark:bg-gray-[#003b6d] dark:text-gray-100">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <img src="@/assets/img/fidelityvalues.png" class="h-10 w-10" alt="" />
            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-8 h-8 dark:text-violet-400">
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z" />
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z" />
            </svg> -->
            <button class="p-2" @click="toggleMobileNavbar">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-100">
                <rect width="352" height="32" x="80" y="96"></rect>
                <rect width="352" height="32" x="80" y="240"></rect>
                <rect width="352" height="32" x="80" y="384"></rect>
              </svg> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center py-4">
              <button type="submit" class="p-2 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" class="w-5 h-5 dark:text-gray-400">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                </svg>
              </button>
            </span>
            <input type="search" name="Search" placeholder="Search..." class="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900">
          </div>
          <div class="flex-1 space-y-6">
            <ul class="pt-2 pb-4 space-y-1 text-sm">
              <li v-for="{title, url} in navigationItems" :key="title" class="rounded-sm">
                <NuxtLink rel="noopener noreferrer" :to="url" class="flex items-center p-2 space-x-3 rounded-md cursor-pointer" @click="toggleMobileNavbar">
                  <span>{{ title }}</span>
                </NuxtLink>
              </li>
            <div class="w-1/2 pt-6">
              <button class="self-center px-8 py-2 font-medium bg-green-500 rounded-md w-full text-white border border-white" @click="$router.push('/login')">
                Login
              </button>
            </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      showMobileNav: false,
      navigationItems: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'About',
          url: '/about'
        },
        {
          title: 'Investmant plans',
          url: '/plans'
        },
        {
          title: 'Contact',
          url: '/contact'
        }
      ]
    }
  },
  watch: {
    '$route' () {
      this.showMobileNav = false
    }
  },
  methods: {
    toggleMobileNavbar () {
      this.showMobileNav = !this.showMobileNav
      this.$emit('toggleNav', this.showMobileNavbar)
    }
  }
}
</script>

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold !important;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e !important;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}
</style>
