<template>
  <section class="bg-[#003b6d]">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Trusted by eCommerce Businesses
        </h2>
      </div>

      <div class="mt-8 sm:mt-12">
        <dl class="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div v-for="{name, value} in stats" :key="name" class="flex flex-col rounded-lg bg-black px-4 py-8 text-center border border-white">
            <dt class="order-last text-lg font-medium text-white">
              {{ name }}
            </dt>

            <dd class="text-4xl font-extrabold text-white md:text-5xl">
              {{ value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stats',
  data () {
    return {
      stats: [
        {
          name: 'Active Expert Traders',
          value: '700'
        },
        {
          name: 'Expert Financial Consultants',
          value: '556'
        },
        {
          name: 'Satisfied Clients',
          value: '11,912'
        }
        // {
        //   name: 'Reviews',
        //   value: '1000+'
        // }
      ]
    }
  }
}
</script>
