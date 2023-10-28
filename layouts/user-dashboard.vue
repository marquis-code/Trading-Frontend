<template>
  <main class="flex">
    <user-side-bar class="bg-blue-50 sticky top-0 hidden md:block" />
    <div class="border border-red-500 w-full flex-1">
      <div class="sticky top-0 z-50">
        <user-header></user-header>
      </div>
      <div class="p-3 border-[0.4px] shadow-md bg-white rounded-lg m-3 z-0">
        <Nuxt />
      </div>
    </div>
  </main>
</template>

<script>
// import UserHeaderSection from '@/components/user-dashboard/UserHeaderSection.vue'
export default {
  components: {
    // UserHeaderSection
  },
};
</script>
