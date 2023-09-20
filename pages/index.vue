<template>
  <div id="app">
    <header class="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div class="container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-8 h-8 dark:text-violet-400">
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z" />
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z" />
          </svg>
        </a>
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex">
            <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</a>
          </li>
          <li class="flex">
            <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
          </li>
          <li class="flex">
            <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Invesment Plans</a>
          </li>
          <li class="flex">
            <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</a>
          </li>
        </ul>
        <div class="items-center flex-shrink-0 hidden lg:flex">
          <button class="self-center px-8 py-3 rounded">
            Login
          </button>
          <button class="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Get Started
          </button>
        </div>
        <button class="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-gray-100">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
    <client-only>
      <carousel v-bind="options" class="">
        <slide v-for="(image, index) in images" :key="index" class="relative">
          <div class="md:h-[600px] bg-cover bg-center">
            <img class="w-full object-cover" :src="require(`@/assets/img/${image.url}`)" alt="">
          </div>
          <div class="ltr:sm:text-left rtl:sm:text-right absolute backdrop-brightness-50 w-full h-full inset-0">
            <div
              class="ltr:sm:text-left rtl:sm:text-right space-y-6 flex justify-center items-center flex-col backdrop-brightness-50 w-full h-full inset-0"
            >
              <p class="text-white/90 md:mt-6 md:block text-xs md:text-lg md:leading-relaxed text-center">
                {{ image.descrription }}
              </p>

              <h2 class="text-xl font-bold text-gray-100 sm:text-3xl md:text-5xl text-center">
                {{ image.title }}
              </h2>
              <div class="mt-4 sm:mt-8 w-full gap-x-6 flex justify-center items-center">
                <button
                  class="inline-block text-sm md:text-base rounded-full bg-indigo-600 w-4/12 md:w-1/12 py-2.5 md:py-2.5  font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                >
                  Read More
                </button>
                <button
                  class="inline-block text-sm md:text-base rounded-full bg-indigo-600 w-4/12 md:w-1/12 py-2.5 md:py-2.5  font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
    <section class="dark:bg-gray-800 dark:text-gray-100">
      <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 class="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">
            Aliquip definiebas ad est
          </h2>
          <p class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
            Quando cetero his ne, eum admodum sapientem ut.
          </p>
        </div>
        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 class="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
              Ad vix debet docendi
            </h3>
            <p class="mt-3 text-lg dark:text-gray-400">
              Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.
            </p>
            <div class="mt-12 space-y-12">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium leadi dark:text-gray-50">
                    Per ei quaeque sensibus
                  </h4>
                  <p class="mt-2 dark:text-gray-400">
                    Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium leadi dark:text-gray-50">
                    Cu imperdiet posidonium sed
                  </h4>
                  <p class="mt-2 dark:text-gray-400">
                    Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium leadi dark:text-gray-50">
                    Nulla omittam sadipscing mel ne
                  </h4>
                  <p class="mt-2 dark:text-gray-400">
                    At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" class="mt-10 lg:mt-0">
            <img src="https://source.unsplash.com/random/360x480" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
          </div>
        </div>
        <div>
          <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div class="lg:col-start-2">
              <h3 class="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                Eam nibh gloriatur ex
              </h3>
              <p class="mt-3 text-lg dark:text-gray-400">
                Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.
              </p>
              <div class="mt-12 space-y-12">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi dark:text-gray-50">
                      Cibo augue offendit has ad
                    </h4>
                    <p class="mt-2 dark:text-gray-400">
                      An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi dark:text-gray-50">
                      At eum ferri luptatum lobortis
                    </h4>
                    <p class="mt-2 dark:text-gray-400">
                      Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi dark:text-gray-50">
                      Dicunt verterem evertitur eu sea
                    </h4>
                    <p class="mt-2 dark:text-gray-400">
                      Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img src="https://source.unsplash.com/random/361x481" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div class="container mx-auto space-y-12">
        <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img src="https://source.unsplash.com/640x480/?1" alt="" class="h-80 dark:bg-gray-500 aspect-video">
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span>
            <h3 class="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <p class="my-6 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
            </p>
            <button type="button" class="self-start">
              Action
            </button>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img src="https://source.unsplash.com/640x480/?2" alt="" class="h-80 dark:bg-gray-500 aspect-video">
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span>
            <h3 class="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <p class="my-6 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
            </p>
            <button type="button" class="self-start">
              Action
            </button>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img src="https://source.unsplash.com/640x480/?3" alt="" class="h-80 dark:bg-gray-500 aspect-video">
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span>
            <h3 class="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <p class="my-6 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
            </p>
            <button type="button" class="self-start">
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="stats" class="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div class="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
        <div class="flex flex-col justify-start m-2 lg:m-6">
          <p class="text-4xl font-bold leadi lg:text-6xl">
            50+
          </p>
          <p class="text-sm sm:text-base">
            Clients
          </p>
        </div>
        <div class="flex flex-col justify-start m-2 lg:m-6">
          <p class="text-4xl font-bold leadi lg:text-6xl">
            89K
          </p>
          <p class="text-sm sm:text-base">
            Followers on social media
          </p>
        </div>
        <div class="flex flex-col justify-start m-2 lg:m-6">
          <p class="text-4xl font-bold leadi lg:text-6xl">
            3
          </p>
          <p class="text-sm sm:text-base">
            Published books
          </p>
        </div>
        <div class="flex flex-col justify-start m-2 lg:m-6">
          <p class="text-4xl font-bold leadi lg:text-6xl">
            8
          </p>
          <p class="text-sm sm:text-base">
            TED talks
          </p>
        </div>
        <div class="flex flex-col justify-start m-2 lg:m-6">
          <p class="text-4xl font-bold leadi lg:text-6xl">
            22
          </p>
          <p class="text-sm sm:text-base">
            Years of experience
          </p>
        </div>
        <div class="flex flex-col justify-start m-2 lg:m-6">
          <p class="text-4xl font-bold leadi lg:text-6xl">
            10+
          </p>
          <p class="text-sm sm:text-base">
            Workshops
          </p>
        </div>
      </div>
    </section>
    <section id="testimonials" class="my-8">
      <div class="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 class="text-4xl font-semibold leadi text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div class="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div class="flex flex-col items-center mx-12 lg:mx-0">
          <div class="relative text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
            </svg>
            <p class="px-6 py-1 text-lg italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
            </svg>
          </div>
          <span class="w-12 h-1 my-2 rounded-lg dark:bg-violet-400" />
          <p>Leroy Jenkins</p>
        </div>
        <div class="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
          <div class="relative text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
              <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
              <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
            </svg>
            <p class="px-6 py-1 text-lg italic">
              Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
              <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
              <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
            </svg>
          </div>
          <span class="w-12 h-1 my-2 rounded-lg dark:bg-violet-400" />
          <p>Leroy Jenkins</p>
        </div>
      </div>
    </section>
    <footer id="footer" class="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
      <div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 rounded-full dark:text-gray-900">
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
            </svg>
          </div>
          <ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">Terms of Use</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#">Instagram</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">Facebook</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        loop: true,
        perPage: 1,
        autoplay: true,
        showPagination: false,
        speed: 2000,
        autoplayTimeout: 3000
      },
      images: [
        {
          id: 1,
          url: 'carousel1.jpg',
          title: 'WORK WITH RELIABLE PARTNERS',
          descrription: 'WE HELP YOUR PROJECTS'
        },
        {
          id: 2,
          url: 'carousel4.jpg',
          title: 'STEADY, CONSTANTLY WITH MINIMAL RISK',
          descrription: 'GROW YOUR FUNDS'
        },
        {
          id: 3,
          url: 'carousel3.jpg',
          title: 'WITHOUT NEEDING THE SKILL SET',
          descrription: 'TRADE LIKE A PRO'
        }
      ]
    }
  }
}
</script>
