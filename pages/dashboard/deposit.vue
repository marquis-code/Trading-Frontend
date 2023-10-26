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
            <input ref="myinput" readonly :value="code" class="py-2 border rounded-md w-full outline-none pl-6 text-sm font-light" @focus="$event.target.select()">
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
      <div class="p-6 space-y-6">
        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Amount</label>
          <input placeholder="Enter amount in USD" type="number" class="py-2 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
        </div>
        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Upload Image</label>
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css">

          <div class="max-w-2xl mx-auto">
            <div class="flex items-center justify-center w-full">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden">
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      wallet: [
        {
          name: 'Bitcoin',
          code: 'bc1q2frjcspcjt2mancf2d9ta3emgj6aw07fkf286v'
        },
        {
          name: 'Ethereum erc-20',
          code: 'bc1q2frjcspcjt2mancf2d9ta3emgj6aw07fkf286v'
        },
        {
          name: 'Litecoin',
          code: 'bc1q2frjcspcjt2mancf2d9ta3emgj6aw07fkf286v'
        },
        {
          name: 'Dogecoin',
          code: 'bc1q2frjcspcjt2mancf2d9ta3emgj6aw07fkf286v'
        }
      ]
    }
  },
  methods: {
    copy (val) {
      const cb = window.navigator.clipboard
      cb.writeText(val).then(() => this.$toastr.s('Copied to clipboard'))
    }
  }
}
</script>

<style>

</style>
