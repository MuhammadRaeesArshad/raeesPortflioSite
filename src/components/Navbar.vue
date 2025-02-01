<template>
  <div class="sticky top-0 h-[100px] lg:h-full z-50 bg-white flex justify-center items-center">
    <div
      id="sidebar"
      ref="sidebar"
      class="lg:hidden flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-[253px] shrink-0 bg-white transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >
      <!-- Close button -->

      <button
        ref="trigger"
        class="lg:hidden text-slate-500 hover:text-slate-400 mt-[59px] fixed top-0 right-[23px]"
        @click.stop="
          () => {
            sidebarOpen = false
          }
        "
        aria-controls="sidebar"
        :aria-expanded="sidebarOpen"
      >
        <img src="../assets/cross.svg" />
      </button>
      <div class="mt-3">
        <div class="mt-[88px] mx-[22px] space-y-5 font-medium text-[14px] text-[#666666]">
          <p class="cursor-pointer" :onclick="() => navigateTo('app')">Home</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('about')">About Me</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myTechStack')">Tech Stack</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myProjects')">Projects</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('contact')">Contact</p>
          <div
            :onclick="downloadResume"
            class="w-fit flex items-center cursor-pointer py-[6px] px-3 bg-[#42446E] text-[#FFFFFF] font-medium text-[14px] rounded-lg"
          >
            My Resume
          </div>
        </div>
      </div>
    </div>

    <div
      :onclick="
        () => {
          sidebarOpen = false
        }
      "
      class="fixed lg:hidden inset-0 bg-slate-900 bg-opacity-30 z-10 lg:hidden lg:z-auto transition-opacity duration-200"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
    ></div>
    <div
      class="mx-5 lg:mx-[72px] mt-[30px] flex justify-between items-center my-[35px] max-w-[1296px] w-full"
    >
      <h1
        :onclick="() => navigateTo('app')"
        class="cursor-pointer font-bold text-[32px] text-[#42446E]"
      >
        MRA
      </h1>
      <div
        :onclick="
          () => {
            sidebarOpen = true
          }
        "
        class="lg:hidden"
      >
        <img src="../assets/hamburger.svg" />
      </div>
      <div class="hidden lg:flex flex">
        <div
          class="hidden lg:flex flex space-x-[59px] items-center font-medium text-lg text-[#666666]"
        >
          <p class="cursor-pointer" :onclick="() => navigateTo('app')">Home</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('about')">About Me</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myTechStack')">Tech Stack</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('myProjects')">Projects</p>
          <p class="cursor-pointer" :onclick="() => navigateTo('contact')">Contact</p>
        </div>
        <div
          :onclick="downloadResume"
          class="flex items-center cursor-pointer ml-[0px] lg:ml-[62px] py-[6px] px-3 lg:py-2 lg:px-4 bg-[#42446E] text-[#FFFFFF] font-medium text-[14px] lg:text-lg rounded-lg"
        >
          My Resume
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      sidebarOpen: false,
    }
  },
  methods: {
    async downloadResume() {
      const link = document.createElement('a')
      const response = await fetch(
        `https://drive.google.com/file/d/1Aii957NTwlPIyu8QTShO7TgqTTx-6KgT/view?usp=sharing`,
      )

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      link.href = url
      link.download = 'raeesResume'
      link.click()
    },
    async navigateTo(id) {
      this.sidebarOpen = false
      if (id === 'about') {
        if (!window.location.href.includes('about')) {
          window.scrollTo(0, 0)
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
