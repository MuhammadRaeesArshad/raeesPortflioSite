<template>
  <div class="flex justify-center items-center">
    <div class="w-full px-5 lg:px-[72px] max-w-[1440px]">
      <!-- Title Screen -->
      <div class="mt-[80px] lg:mt-[165px] text-center lg:text-left lg:flex justify-between w-full">
        <div class="bg-[666666aa] font-bold text-[#42446E] text-[24px] lg:text-[58px]">
          <p>Hi 👋,</p>
          <p>My name is</p>
          <p
            class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text"
          >
            Muhammad Raees
          </p>
          <p class="">Full Stack Developer</p>
        </div>
        <div class="mt-[40px] lg:mt-[0px] flex w-full lg:w-fit justify-center items-center">
          <img
            class="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
            src="../assets/TitlePageImage.svg"
          />
        </div>
      </div>
      <!-- My Tech Stack -->
      <div class="mt-[110px] lg:mt-[370px] text-center">
        <div id="myTechStack" class="font-bold text-[24px] lg:text-[48px] text-[#42446E]">
          My Tech Stack
        </div>
        <div class="mt-[8px] lg:mt-[49px] text-[14px] lg:text-[32px] font-normal text-[#666666]">
          Technologies I’ve been working with recently
        </div>
        <div
          class="mt-[32px] lg:mt-[146px] flex flex-wrap w-full gap-x-[20px] gap-y-[20px] lg:gap-x-[103px] lg:gap-y-[67px] items-center justify-center"
        >
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/JS.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/html5.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/React.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/CSS.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/tailwind.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/CSS.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/CSS.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/CSS.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/CSS.svg" />
          <img class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px]" src="../assets/CSS.svg" />
        </div>
      </div>
      <!-- Projects -->
      <div class="mt-[100px] lg:mt-[192px] mb-[110px] lg:mb-[225px] text-center w-full">
        <div id="myProjects" class="font-bold text-[24px] lg:text-[48px] text-[#42446E]">
          Projects
        </div>
        <div class="mt-[8px] lg:mt-[49px] text-[14px] lg:text-[32px] font-normal text-[#666666]">
          Things I’ve built so far
        </div>

        <div
          class="mt-[32px] lg:mt-[96px] flex flex-wrap justify-center w-full gap-x-[45px] gap-y-[50px]"
        >
          <div v-for="project in projects" :key="project.title">
            <div
              class="w-[300px] h-[500px] lg:w-[373px] lg:h-[567px] bg-white drop-shadow-xl rounded-3xl"
            >
              <div class="h-[260px] bg-[#313131] flex items-center justify-center rounded-t-3xl">
                <img src="../assets/ezWifiBlackAndWhiteLogo.svg" />
              </div>
              <div class="mx-[24.4px] lg:mx-[30px] text-left mt-[21.6px] lg:mt-[27px]">
                <p class="font-medium text-[18px] lg:text-[28px] text-black">{{ project.title }}</p>
                <p
                  class="font-light text-[14px] lg:text-lg text-[#666666] mt-[13.6px] lg:mt-[17px]"
                >
                  {{ project.description }}
                </p>
                <p class="font-light text-[11px] lg:text-sm text-[#42446E] mt-[9.6px] lg:mt-[12px]">
                  <span class="font-normal text-[12px] lg:text-base">Tech stack :</span
                  >{{ project.techStack }}
                </p>
              </div>
              <div
                v-if="project.previewLink || project.codeLink"
                class="mx-[24.4px] lg:mx-[30px] mt-[18px] lg:mt-[21px] flex"
              >
                <div
                  v-if="project.previewLink"
                  :onclick="
                    () => {
                      openLink(project.previewLink)
                    }
                  "
                  class="flex cursor-pointer"
                >
                  <img
                    class="w-[16.5px] h-[16.5px] lg:w-[20px] lg:h-[20px]"
                    src="../assets/linkChain.svg"
                  />
                  <p class="ml-[10px] text-black font-normal text-[12px] lg:text-base underline">
                    Live Preview
                  </p>
                </div>
                <div
                  v-if="project.codeLink"
                  :onclick="
                    () => {
                      openLink(project.codeLink)
                    }
                  "
                  :class="project.previewLink ? 'ml-[48px]' : ''"
                  class="flex cursor-pointer"
                >
                  <img
                    class="w-[16.5px] h-[16.5px] lg:w-[20px] lg:h-[20px]"
                    src="../assets/viewCodeIcon.svg"
                  />
                  <p class="ml-[10px] text-black font-normal text-[12px] lg:text-base underline">
                    View Code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  setup() {
    return {
      projects: [
        {
          title: 'ezWiFi Landing Page',
          description: 'Crafted a dynamic, fully responsive and user-friendly landing page',
          techStack: ' VueJS, Tailwind',
          previewLink: 'https://ez-initiis-novis.vercel.app/',
        },
        {
          title: 'ezWiFi Mobile App',
          description: `Developed a mobile Dapp using Flutter with features including on-boarding routers, performance dashboard, hotspot map and wallet page`,
          techStack: ' Flutter, NodeJS, NestJS, Solidity',
        },
        {
          title: 'ezWiFi Dashboard',
          description: `Developed a scalable and optimized dashboard  with
features including graphically represented customer data, location and hotspots manager, portal page
manager, account management system and ads manager system`,
          techStack: ' NestJS, VueJS, Stripe, AWS',
        },
        {
          title: 'Brans4Cheap Admin Dashboard',
          description: 'Developed a scalable and optimized dashboard for client for his website',
          techStack: ' NodeJS, ExpressJS, ReactJS',
          previewLink: 'https://brands4cheap.com',
        },
        {
          title: 'Tourism Webapp',
          description: `Crafted a user interactive web app to allow users to view tours and book/manage their tours and accounts`,
          techStack: ' Pug, NodeJS, ExpressJS',
          codeLink: 'https://github.com/MuhammadRaeesArshad/Natours---Tourism-webapp',
        },

        {
          title: 'Tourism Webapp',
          description: `Crafted a user interactive web app to allow users to view tours and book/manage their tours and accounts`,
          techStack: ' Pug, NodeJS, ExpressJS',
          codeLink: 'https://github.com/MuhammadRaeesArshad/Natours---Tourism-webapp',
        },
      ],
    }
  },
  methods: {
    openLink(link) {
      window.open(link)
    },
  },
}
</script>
