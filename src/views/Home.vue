<template>
  <div class="w-full mx-5 lg:mx-[72px] flex flex-col items-start lg:items-center">
    <!-- Title Screen -->
    <div class="mt-[165px] w-full h-full flex justify-between">
      <div class="bg-[666666aa] font-bold text-[#42446E] text-[58px]">
        <p>Hi 👋,</p>
        <p>My name is</p>
        <p
          class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text"
        >
          Muhammad Raees
        </p>
        <p class="">I build things for humans</p>
      </div>
      <img class="" src="../assets/TitlePageImage.svg" />
    </div>
    <!-- My Tech Stack -->
    <div class="mt-[370px] text-center">
      <div id="myTechStack" class="font-bold text-[48px] text-[#42446E]">My Tech Stack</div>
      <div class="mt-[49px] text-[32px] font-normal text-[#666666]">
        Technologies I’ve been working with recently
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Home',
  methods: {
    redirectToAppleApp() {
      window.open('https://apps.apple.com/us/app/ezwifi-mobile/id6468649775')
    },
    redirectToPlayStoreApp() {
      window.open('https://play.google.com/store/apps/details?id=fi.ezwi.ezwifi')
    },
    redirectToLinkedin() {
      window.open('https://www.linkedin.com/company/ezwifitech/about/')
    },
  },
}
</script>
