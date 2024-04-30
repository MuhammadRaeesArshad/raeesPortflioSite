<template>
  <div class="sticky top-0 z-50 bg-white flex justify-center items-center">
    <div class="mx-5 lg:mx-[72px] mt-[30px] flex justify-between my-[35px] max-w-[1296px] w-full">
      <h1 class="font-bold text-[32px] text-[#42446E]">MRA</h1>
      <div class="flex">
        <div
          class="hidden lg:flex flex space-x-[59px] items-center font-medium text-lg text-[#666666]"
        >
          <p class="cursor-pointer" :onclick="() => navigateTo('app')">Home</p>
          <p class="cursor-pointer">About</p>
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
    navigateTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style></style>
