<template lang="">
  <!-- NavBar -->
  <div class="mx-5 lg:mx-[72px] flex justify-center items-center">
    <div id="contact" class="max-w-[1296px] w-full">
      <div class="md:flex justify-between items-center">
        <p class="bg-[666666aa] font-bold text-[#42446E] text-[32px]">MRA</p>
        <div class="md:flex">
          <p class="text-[#42446E] text-lg font-normal">+923315989606</p>
          <p class="md:ml-[33px] text-[#42446E] text-lg font-normal">mrasoftdev@gmail.com</p>
          <div class="md:ml-[48px] flex justify-start items-center">
            <img src="../assets/Github.svg" />
            <img class="ml-[22px]" src="../assets/LinkedIn.svg" />
          </div>
        </div>
      </div>
      <div class="mt-[43px] border-t-2 border-[#666666]/[0.3] w-full"></div>
      <div class="mt-[43px] mb-[60px] flex justify-between">
        <div
          class="hidden lg:flex flex space-x-[59px] items-center font-normal text-lg text-[#666666]"
        >
          <p class="cursor-pointer" :onclick="() => navigateTo('app')">Home</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('about')">About</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myTechStack')">Tech Stack</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myProjects')">Projects</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('contact')">Contact</p>
        </div>
        <p class="text-lg font-normal text-[#666666]">
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
