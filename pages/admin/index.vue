<template>
  <div class="bg-black h-screen">
    <section class="bg-black flex justify-center items-center pt-20">
      <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:text-gray-100">
        <h1 class="text-2xl font-bold text-center">
         Admin Login
        </h1>
        <form class="space-y-6" @submit.prevent="login">
          <div class="space-y-1 text-sm w-full">
            <label for="email" class="block dark:text-gray-400">Email</label>
            <input id="email" type="email" name="email" placeholder="email" class="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
          </div>
          <div class="space-y-1 text-sm w-full">
            <label for="password" class="block dark:text-gray-400">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" class="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
            <div class="flex justify-end text-xs dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">Forgot Password?</a>
            </div>
          </div>
          <button class="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
        </form>
        <p class="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <nuxt-link to="/signup" rel="noopener noreferrer" href="#" class="underline dark:text-gray-100">
            Sign up
          </nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'authLayout',
  methods: {
    login () {
      this.$toastr.s('Logged in successfully')
      this.$router.push('/admin/dashboard/')
    }
  }
}
</script>
