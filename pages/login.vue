<template>
  <div class="bg-[#003b6d] h-screen">
    <section class="bg-[#003b6d] flex justify-center items-center pt-20">
      <div
        class="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:text-gray-100"
      >
        <h1 class="text-2xl font-bold text-center">
          Login
        </h1>
        <form class="space-y-10" @submit.prevent="login">
          <div class="space-y-1 text-sm w-full">
            <label for="email" class="block dark:text-gray-400">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="email"
              class="border w-full outline-none px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            >
          </div>
          <div class="space-y-1 text-sm w-full">
            <label
              for="password"
              class="block dark:text-gray-400"
            >Password</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              name="password"
              placeholder="Password"
              class="border w-full outline-none px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            >
          </div>
          <div class="w-full">
            <button
              :disabled="!isFormEmpty"
              :class="[
                !isFormEmpty || processing ? 'opacity-25 cursor-not-allowed' : '',
              ]"
              class="w-full shrink-0 text-xs disabled:cursor-not-allowed disabled:opacity-25 rounded-md border border-green-500 bg-green-600 px-12 py-3 font-medium text-white transition"
            >
              {{ processing ? "processing..." : "Sign In" }}
            </button>
          </div>
        </form>
        <p class="text-sm text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <nuxt-link
            to="/signup"
            rel="noopener noreferrer"
            href="#"
            class="underline dark:text-gray-100"
          >
            Sign up
          </nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      processing: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isFormEmpty () {
      return !!(this.form.email && this.form.password)
    }
  },
  mounted () {
    if (window.process) {
      const user = window.localStorage.getItem('user')
      const parsedUser = JSON.parse(user)
      if (Object.keys(parsedUser)?.length) {
        this.$router.push('/dashboard')
      }
    }
  },
  methods: {
    async login () {
      this.processing = true
      const loginMutation = `
          mutation {
            userLogin(email: "${this.form.email}", password: "${this.form.password}") {
                  jwt
                  user {
                    id
                    firstName
                    lastName
                    email
                    Status
                    PlanType
                    accountBalance
                    tradingBalance
                    profit
                    eth
                    btc
                    timeAdded
                  }
             }
        }
        `
      try {
        const response = await fetch(
          'https://fidelityvalues.onrender.com/graphql/query', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              query: loginMutation,
              variables: {
                email: this.form.email,
                password: this.form.password
              }
            })
          }
        )
        const data = await response.json()
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message)
        } else {
          localStorage.setItem('auth', JSON.stringify(data?.data?.userLogin?.jwt))
          localStorage.setItem('user', JSON.stringify(data?.data?.userLogin?.user))
          this.$toastr.s('Login was successful')
          this.$router.push('/admin/dashboard')
        }
      } finally {
        this.processing = false
      }
    }
  }

}
</script>
