<template>
  <div class="sticky top-0 z-50 bg-white flex justify-center items-center">
    <div class="mx-5 lg:mx-[72px] mt-[30px] flex justify-between my-[35px] max-w-[1296px] w-full">
      <h1 class="font-bold text-[32px] text-[#42446E]">MRA</h1>
      <div class="flex">
        <div
          class="hidden lg:flex flex space-x-[59px] items-center font-medium text-lg text-[#666666]"
        >
          <p class="cursor-pointer" :onclick="() => navigateTo('app')">Home</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('about')">About</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myTechStack')">Tech Stack</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myProjects')">Projects</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('contact')">Contact</p>
        </div>
        <div class="ml-[62px] py-2 px-4 bg-[#42446E] text-[#FFFFFF] font-medium text-lg rounded-lg">
          My Resume
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    async navigateTo(id) {
      if (id === 'about') {
        if (!window.location.href.includes('about')) {
          this.$router.push('/about')
        }
      } else {
        if (window.location.href.includes('about')) {
          await this.$router.push('/')
        }
        const element = document.getElementById(id)
        const offset = element.offsetTop - 100
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>
<style></style>
