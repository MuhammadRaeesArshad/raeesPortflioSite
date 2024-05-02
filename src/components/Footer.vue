<template lang="">
  <!-- NavBar -->
  <div class="mx-[22px] lg:mx-[72px] flex justify-center items-center">
    <div id="contact" class="max-w-[1296px] w-full">
      <div class="flex justify-between items-center">
        <p
          :onclick="() => navigateTo('app')"
          class="cursor-pointer bg-[666666aa] font-bold text-[#42446E] text-[24px] lg:text-[32px]"
        >
          MRA
        </p>
        <div class="md:flex">
          <p class="hidden lg:block mr-[33px] text-[#42446E] text-lg font-normal">+923315989606</p>
          <p
            :onclick="mailTo"
            class="cursor-pointer hidden lg:block mr-[48px] text-[#42446E] text-lg font-normal"
          >
            mrasoftdev@gmail.com
          </p>
          <div class="flex justify-start items-center">
            <img :onclick="toGithub" class="cursor-pointer" src="../assets/Github.svg" />
            <img
              :onclick="toLinkedIn"
              class="cursor-pointer ml-[22px]"
              src="../assets/LinkedIn.svg"
            />
          </div>
        </div>
      </div>
      <p class="lg:hidden mt-4 text-[#42446E] text-[14px] font-normal">+923315989606</p>
      <p class="lg:hidden mt-4 text-[#42446E] text-[14px] font-normal">mrasoftdev@gmail.com</p>

      <div class="mt-[14px] lg:mt-[43px] border-t-2 border-[#666666]/[0.3] w-full"></div>
      <div class="mt-[21px] lg:mt-[43px] mb-[20px] lg:mb-[60px] flex justify-between">
        <div
          class="hidden xl:flex flex space-x-[59px] items-center font-normal text-lg text-[#666666]"
        >
          <p class="cursor-pointer" :onclick="() => navigateTo('app')">Home</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('about')">About</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myTechStack')">Tech Stack</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myProjects')">Projects</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('contact')">Contact</p>
        </div>
        <p class="text-[14px] text-center xl:text-left lg:text-lg font-normal text-[#666666]">
          Designed and built by
          <span
            class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text"
            >Muhammad Raees</span
          >
          with
          <span
            class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text"
            >Love</span
          >
          &
          <span
            class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text"
            >Coffee</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  methods: {
    mailTo() {
      window.open('mailto: mrasoftdev@gmail.com')
    },
    toGithub() {
      window.open('https://github.com/MuhammadRaeesArshad')
    },
    toLinkedIn() {
      window.open('https://www.linkedin.com/in/muhammad-raees-arshad-961871202/')
    },
    async navigateTo(id) {
      if (id === 'about') {
        if (!window.location.href.includes('about')) {
          window.scrollTo(0, 0)
          this.$router.push('/about')
        }
      } else {
        if (window.location.href.includes('about')) {
          await this.$router.push('/')
        }
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>
<style lang=""></style>
