<template>
  <section class="h-screen bg-white">
    <div class="flex justify-center items-center flex-col gap-y-6 h-screen">
      <img src="@/assets/img/airplane.png" class="h-20 w-20" alt="email sent icon">
      <p class="text-center">
        A link has been sent to your email. Click on it to verify your account
      </p>
      <button class="px-6 py-2.5 text-xs text-white bg-green-500 rounded-full border" @click="redirectToLogin">
        Proceed to login
      </button>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'authLayout',
  methods: {
    redirectToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
