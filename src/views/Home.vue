<template>
  <div class="w-full px-5 lg:px-[72px]">
    <!-- Title Screen -->
    <div class="mt-[165px] flex justify-between w-full">
      <div class="bg-[666666aa] font-bold text-[#42446E] text-[58px] w-fit">
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
      <div class="mt-[146px] grid grid-rows-2 grid-flow-col">
        <img src="../assets/JS.svg" />
        <img src="../assets/html5.svg" />
        <img src="../assets/React.svg" />
        <img src="../assets/CSS.svg" />
        <img src="../assets/tailwind.svg" />
        <img src="../assets/CSS.svg" />
        <img src="../assets/CSS.svg" />
        <img src="../assets/CSS.svg" />
        <img src="../assets/CSS.svg" />
        <img src="../assets/CSS.svg" />
        <img src="../assets/CSS.svg" />
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
