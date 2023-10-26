<template>
  <main class="h-screen">

        <!-- <section class="py-6 dark:text-gray-50 pt-20">
          <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6">
              <h1 class="text-4xl font-bold">Get in touch</h1>
              <p class="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div class="space-y-4">
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
              </div>
            </div>
            <form novalidate="" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label class="block space-y-3">
                <span class="mb-1">Full name</span>
                <input type="text" placeholder="Leroy Jenkins" class="block w-full py-2.5 pl-3 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800">
              </label>
              <label class="block space-y-3">
                <span class="mb-1">Email address</span>
                <input type="email" placeholder="leroy@jenkins.com" class="block w-full py-2.5 pl-3 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800">
              </label>
              <label class="block space-y-3">
                <span class="mb-1">Message</span>
                <textarea rows="3" class="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
              </label>
              <button type="button" class="self-center w-full px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
            </form>
          </div>
        </section> -->
        <div class="absolute inset-0 bg-gray-300">
          <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-11/12 mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Get in touch</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Fill in the form to start a conversation</p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            <!-- <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> -->
          </div>
        </div>
  </main>
</template>
