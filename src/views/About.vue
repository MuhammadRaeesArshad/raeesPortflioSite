<template>
  <div class="flex justify-center items-center">
    <div
      v-motion="'custom'"
      :initial="{ opacity: 0, y: 100 }"
      :variants="{ custom: { scale: 2 } }"
      :visible="{ opacity: 1, y: 0, scale: 1 }"
      :duration="1200"
      class="w-full px-5 lg:px-[72px] max-w-[1440px]"
    >
      <!-- About me -->
      <div class="text-left mt-[60px] lg:mt-[90px]">
        <p class="text-[#42446E] text-[24px] lg:text-[42px] font-bold">About Me</p>
        <div class="mt-[16px] lg:mt-[38px] text-[#666666] text-[14px] lg:text-lg font-normal">
          As a passionate and hardworking Full Stack Developer, I specialize in making high-quality
          web and mobile applications. With my expertise in many JavaScript / Typescript frameworks,
          I like tackling new and difficult challenges and achieving good result. My flexible and
          open to learning mindset allows me to adapt quickly and embrace new technologies. I am
          dedicated to continuous learning, always striving to expand my skill set.
        </div>
      </div>
      <div class="mt-[40px] lg:mt-[38px] mb-[100px] lg:mb-[192px]">
        <p class="text-[#42446E] font-bold text-[24px] lg:text-[42px]">Work Experience</p>
        <div v-for="expreince in expriences" :key="expreince.title">
          <div class="mt-[16px] lg:mt-[33px] max-w-[704px]">
            <div class="flex justify-between">
              <p class="text-[#666666] text-xl font-normal">{{ expreince.title }}</p>
              <div
                class="hidden lg:flex bg-[#D7FFE0] rounded-[100px] w-[84px] h-[24px] text-[#018C0F] font-semibold text-center text-[10px] items-center flex justify-center"
              >
                {{ expreince.status }}
              </div>
            </div>
            <div class="lg:flex justify-between">
              <div class="flex items-center">
                <img src="../assets/workExpIconBlocks.svg" />
                <p class="ml-1 text-[#A7A7A7] text-[12px]">{{ expreince.company }}</p>
                <img class="hidden lg:block ml-5" src="../assets/Location.svg" />
                <p class="hidden lg:block ml-[5.33px] text-[12px] text-[#A7A7A7]">
                  {{ expreince.location }}
                </p>
              </div>
              <div class="flex items-center">
                <img src="../assets/calender.svg" />
                <p class="ml-[5.33px] text-[#A7A7A7] text-[12px]">
                  {{ expreince.startDate }} - {{ expreince.endDate }}
                </p>
              </div>
              <div
                class="mt-[10px] lg:hidden bg-[#D7FFE0] rounded-[100px] w-[84px] h-[24px] text-[#018C0F] font-semibold text-center text-[10px] items-center flex justify-center"
              >
                {{ expreince.status }}
              </div>
            </div>
            <div class="mt-[16px] lg:mt-[23px] border-t-2 border-[#666666]/[0.3] w-full"></div>
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
          title: 'Full Stack Developer',
          company: 'Takmil',
          location: 'Islamabad',
          startDate: 'May 2024',
          endDate: 'Present',
          status: 'Remote',
        },
        {
          title: 'Full Stack Developer',
          company: 'ezWiFi',
          location: 'Islamabad',
          startDate: 'March 2023',
          endDate: 'June 2024',
          status: 'Hybrid',
        },
        {
          title: 'Nodejs Developer',
          company: 'Stealth Startup',
          location: 'Islamabad',
          startDate: 'December 2021',
          endDate: 'December 2022',
          status: 'Remote',
        },
      ],
    }
  },
}
</script>
<style></style>
