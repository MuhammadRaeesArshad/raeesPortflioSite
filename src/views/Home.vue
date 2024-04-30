<template>
  <div class="flex justify-center items-center">
    <div class="w-full px-5 lg:px-[72px] max-w-[1440px]">
      <!-- Title Screen -->
      <div class="mt-[165px] flex justify-between w-full">
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
        <img class="hidden md:block" src="../assets/TitlePageImage.svg" />
      </div>
      <!-- My Tech Stack -->
      <div class="mt-[370px] text-center">
        <div id="myTechStack" class="font-bold text-[48px] text-[#42446E]">My Tech Stack</div>
        <div class="mt-[49px] text-[32px] font-normal text-[#666666]">
          Technologies I’ve been working with recently
        </div>
        <div class="mt-[146px] flex flex-wrap w-full gap-x-[105px] gap-y-[67px]">
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
      <!-- Projects -->
      <div class="mt-[192px] mb-[225px] text-center w-full">
        <div id="myProjects" class="font-bold text-[48px] text-[#42446E]">Projects</div>
        <div class="mt-[49px] text-[32px] font-normal text-[#666666]">Things I’ve built so far</div>

        <div class="mt-[96px] flex flex-wrap justify-center w-full gap-x-[45px] gap-y-[50px]">
          <div v-for="project in projects" :key="project.title">
            <div class="w-[373px] h-[567px] bg-white drop-shadow-xl rounded-3xl">
              <div class="h-[260px] bg-[#313131] flex items-center justify-center rounded-t-3xl">
                <img src="../assets/ezWifiBlackAndWhiteLogo.svg" />
              </div>
              <div class="text-left mx-[30px] mt-[27px]">
                <p class="font-medium text-[28px] text-black mt-[27px]">{{ project.title }}</p>
                <p class="font-light text-lg text-[#666666] mt-[17px]">
                  {{ project.description }}
                </p>
                <p class="font-light text-sm text-[#42446E] mt-[12px]">
                  <span class="font-normal text-base">Tech stack :</span>{{ project.techStack }}
                </p>
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
          title: 'ezWiFi Mobile App',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: ' HTML , JavaScript, SASS, React',
        },
        {
          title: 'ezWiFi Mobile App2',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: ' HTML , JavaScript, SASS, React',
        },
        {
          title: 'ezWiFi Mobile App3',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: ' HTML , JavaScript, SASS, React',
        },
        {
          title: 'ezWiFi Mobile App4',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: ' HTML , JavaScript, SASS, React',
        },
        {
          title: 'ezWiFi Mobile App5',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: ' HTML , JavaScript, SASS, React',
        },
        {
          title: 'ezWiFi Mobile App6',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: ' HTML , JavaScript, SASS, React',
        },
      ],
    }
  },
  methods: {},
}
</script>
