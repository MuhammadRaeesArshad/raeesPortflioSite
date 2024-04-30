<template>
  <div class="flex justify-center items-center">
    <div class="w-full px-5 lg:px-[72px] max-w-[1440px]">
      <!-- About me -->
      <div class="text-left mt-[90px]">
        <p class="text-[#42446E] text-[42px] font-bold">About Me</p>
        <div class="mt-[38px] text-[#666666] text-lg font-normal">
          The Generator App is an online tool that helps you to export ready-made templates ready to
          work as your future website. It helps you to combine slides, panels and other components
          and export it as a set of static files: HTML/CSS/JS.
        </div>
      </div>
      <div class="mt-[38px] mb-[192px]">
        <p class="text-[#42446E] font-bold text-[42px]">Work Experience</p>
        <div v-for="expreince in expriences" :key="expreince.title">
          <div class="mt-[33px] max-w-[704px]">
            <div class="flex justify-between">
              <p class="text-[#666666] text-xl font-normal">{{ expreince.title }}</p>
              <div
                class="bg-[#D7FFE0] rounded-[100px] w-[84px] h-[24px] text-[#018C0F] font-semibold text-center text-[10px] items-center flex justify-center"
              >
                Full Time
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <img src="../assets/workExpIconBlocks.svg" />
                <p class="ml-1">{{ expreince.company }}</p>
                <img class="ml-5" src="../assets/Location.svg" />
                <p class="ml-[5.33px]">{{ expreince.location }}</p>
              </div>
              <div class="flex items-center">
                <img src="../assets/calender.svg" />
                <p class="ml-[5.33px]">{{ expreince.startDate }} - {{ expreince.endDate }}</p>
              </div>
            </div>
            <div class="mt-[23px] border-t-2 border-[#666666]/[0.3] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  setup() {
    return {
      expriences: [
        {
          title: 'Junior Web Developer',
          company: 'ezWiFi',
          location: 'Islamabad',
          startDate: 'Mar 2023',
          endDate: 'Apr 2024',
          fullTime: true,
        },
        {
          title: 'Nodejs Developer',
          company: 'Stealth Startup',
          location: 'Islamabad',
          startDate: 'Dec 2021',
          endDate: 'Dec 2022',
          fullTime: true,
        },
      ],
    }
  },
}
</script>
<style></style>
