<template>
  <section class="bg-white lg:w-6/12 rounded-md border h-[500px]">
    <p class="border-b text-sm font-semibold py-4 pl-6">
      To buy a plan, select PLAN of your choice.
    </p>
    <div class="p-6 space-y-6">
      <div class="space-y-1">
        <label class="text-xs text-gray-700 font-medium">Choose Plan:*</label>
        <div class="relative">
          <div class="h-10 bg-white flex border border-gray-200 rounded items-center">
            <input id="select" value="Crypyocurrency trading" name="select" class="px-4 text-sm appearance-none outline-none text-gray-800 w-full" checked>

            <button class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
              <svg
                class="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <label for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
              <svg
                class="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </label>
          </div>

          <input id="show_more" type="checkbox" name="show_more" class="hidden peer" checked>
          <div class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
            <div class="cursor-pointer group">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Crypyocurrency trading</a>
            </div>
            <div class="cursor-pointer group border-t">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Forex Fund</a>
            </div>
            <div class="cursor-pointer group border-t">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Cryptocurrency mining</a>
            </div>
            <div class="cursor-pointer group border-t">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">CBD</a>
            </div>
            <div class="cursor-pointer group border-t">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Real estate program</a>
            </div>
            <div class="cursor-pointer group border-t">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Oil & gas partnership</a>
            </div>
            <div class="cursor-pointer group border-t">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Cradle Incorporation</a>
            </div>
            <div class="cursor-pointer group border-t">
              <a class="block p-2 text-sm border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Exclusive partnership</a>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-1">
        <label class="text-xs text-gray-700 font-medium">Enter Amount:*</label>
        <input class="py-2 border rounded-md w-full outline-none pl-6">
        <span class="text-xs text-red-500">Note that plan amount must be available in your account balance of $100.</span>
      </div>
      <button class="w-full text-white text-xs rounded-lg bg-black py-3">Proceed</button>
    </div>
  </section>
</template>

<script>
export default {
 layout: 'dashboard'
}
</script>

<style>

</style>
