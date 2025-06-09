<template>
  <div class="flex justify-center items-center relative overflow-hidden">
    <!-- Simplified Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Reduced Floating Circles -->
      <div
        v-motion="'floatingCircle1'"
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 0.06, transition: { duration: 2000 } }"
        class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full blur-xl"
      ></div>
      <div
        v-motion="'floatingCircle2'"
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 0.04, transition: { duration: 2000 } }"
        class="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] rounded-full blur-2xl"
      ></div>

      <!-- Removed excessive floating particles - keeping only a few -->
      <div
        v-for="i in 5"
        :key="i"
        class="absolute w-1 h-1 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full opacity-20"
        :style="{
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
        }"
      ></div>
    </div>

    <div class="w-full px-5 lg:px-[72px] max-w-[1440px] relative z-10">
      <!-- Title Screen with Enhanced Animation -->
      <div
        v-motion="'heroSection'"
        :initial="{ opacity: 0, y: 100, scale: 0.8 }"
        :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1500,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          },
        }"
        class="mt-[80px] lg:mt-[165px] text-center lg:text-left lg:flex justify-between w-full"
      >
        <div class="font-bold text-[#42446E] text-[24px] lg:text-[58px] relative">
          <!-- Simplified Typing Animation Effect -->
          <div
            v-motion="'greeting'"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
            class="flex items-center"
          >
            <p class="mr-2">Hi</p>
            <span class="inline-block">👋</span>
            <span>,</span>
          </div>
          <p
            v-motion="'myName'"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
          >
            My name is
          </p>
          <p
            v-motion="'nameHighlight'"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 900 } }"
            class="bg-gradient-to-r from-[#13B0F5] via-[#8A2BE2] to-[#E70FAA] inline-block text-transparent bg-clip-text relative"
          >
            Muhammad Raees
            <!-- Simplified Sparkle Effect -->
            <span class="absolute -top-2 -right-2 text-2xl opacity-70">✨</span>
          </p>
          <p
            v-motion="'title'"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1200 } }"
            class="relative"
          >
            <span class="relative">
              Web & App Developer
              <!-- Simplified Underline Animation -->
              <span
                v-motion="'underline'"
                :initial="{ width: '0%' }"
                :enter="{ width: '100%', transition: { duration: 1000, delay: 1800 } }"
                class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full"
              ></span>
            </span>
          </p>
        </div>
        <div
          class="mt-[40px] lg:mt-[0px] flex w-full lg:w-fit justify-center items-center relative"
        >
          <!-- Simplified Profile Image -->
          <div
            v-motion="'profileContainer'"
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 1000 } }"
            class="relative"
          >
            <img
              class="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative z-10 rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              :src="ProfileImage"
            />
          </div>
        </div>
      </div>

      <!-- About Me Section with Simplified Animations -->
      <div id="about" class="mt-[110px] lg:mt-[370px] relative">
        <!-- Simplified Background Elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            v-motion="'aboutBg1'"
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 0.05, transition: { duration: 2000 } }"
            class="absolute top-10 left-0 w-64 h-64 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full blur-3xl"
          ></div>
        </div>

        <div class="relative z-10">
          <!-- About Me Title -->
          <div
            v-motion="'aboutTitle'"
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="text-center lg:text-left"
          >
            <h2 class="text-[#42446E] text-[24px] lg:text-[48px] font-bold relative inline-block">
              About Me
              <!-- Simplified Decorative Elements -->
              <span class="absolute -left-12 top-0 text-3xl opacity-60">👨‍💻</span>
              <span class="absolute -right-12 top-0 text-3xl opacity-60">💡</span>

              <!-- Animated underline -->
              <span
                v-motion="'aboutUnderline'"
                :initial="{ width: '0%' }"
                :visible="{ width: '100%', transition: { duration: 1000, delay: 500 } }"
                class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full"
              ></span>
            </h2>
          </div>

          <!-- About Me Content -->
          <div
            v-motion="'aboutContent'"
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
            class="mt-[16px] lg:mt-[38px] max-w-4xl"
          >
            <div class="relative group">
              <!-- Content background with hover effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#13B0F5]/5 to-[#E70FAA]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <p
                class="text-[#666666] text-[14px] lg:text-lg font-normal leading-relaxed relative z-10 p-6 rounded-2xl backdrop-blur-sm"
              >
                As a passionate and hardworking
                <span class="text-[#13B0F5] font-semibold">Full Stack Developer</span>, I specialize
                in creating high-quality web and mobile applications. With my expertise in numerous
                <span class="text-[#E70FAA] font-semibold">JavaScript/TypeScript frameworks</span>,
                I thrive on tackling new and challenging problems while delivering exceptional
                results. My flexible and
                <span class="text-[#42446E] font-semibold">learning-oriented mindset</span>
                allows me to adapt quickly and embrace cutting-edge technologies. I am dedicated to
                continuous growth, always striving to expand my skill set and push the boundaries of
                what's possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Work Experience Section -->
      <div class="mt-[60px] lg:mt-[80px]">
        <div
          v-motion="'workExpTitle'"
          :initial="{ opacity: 0, y: 50, rotateX: 45 }"
          :visible="{
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 1000,
              delay: 200,
              type: 'spring',
              stiffness: 100,
            },
          }"
          class="text-center lg:text-left"
        >
          <h2 class="text-[#42446E] font-bold text-[24px] lg:text-[48px] relative inline-block">
            Work Experience
            <!-- Decorative work icons -->
            <span
              v-motion="'workDecor1'"
              :initial="{ opacity: 0, scale: 0 }"
              :visible="{
                opacity: 0.8,
                scale: [0, 1.2, 1],
                transition: { duration: 1000, delay: 800 },
              }"
              class="absolute -left-12 -top-2 text-3xl"
              >💼</span
            >
            <span
              v-motion="'workDecor2'"
              :initial="{ opacity: 0, scale: 0 }"
              :visible="{
                opacity: 0.8,
                scale: [0, 1.2, 1],
                transition: { duration: 1000, delay: 1000 },
              }"
              class="absolute -right-12 -top-2 text-3xl"
              >🏢</span
            >

            <!-- Animated underline -->
            <span
              v-motion="'workUnderline'"
              :initial="{ width: '0%' }"
              :visible="{ width: '100%', transition: { duration: 1000, delay: 1200 } }"
              class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] rounded-full"
            ></span>
          </h2>
        </div>

        <!-- Experience Cards -->
        <div class="mt-[32px] lg:mt-[48px]">
          <div
            v-for="(experience, index) in experiences"
            :key="experience.title"
            v-motion="`experience${index}`"
            :initial="{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              scale: 0.8,
            }"
            :visible="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 800,
                delay: 400 + index * 200,
                type: 'spring',
                stiffness: 100,
              },
            }"
            class="group mb-8"
          >
            <div class="relative max-w-5xl">
              <!-- Card Background with Hover Effects -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg group-hover:shadow-xl"
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#13B0F5]/5 to-[#E70FAA]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <!-- Experience Content -->
              <div
                class="relative z-10 p-6 rounded-2xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
              >
                <!-- Title and Status -->
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <h3
                    class="text-[#666666] text-lg lg:text-xl font-semibold group-hover:text-[#13B0F5] transition-colors duration-300"
                  >
                    {{ experience.title }}
                  </h3>
                  <div class="mt-2 lg:mt-0">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                      :class="{
                        'bg-green-100 text-green-800': experience.status === 'Remote',
                        'bg-blue-100 text-blue-800': experience.status === 'Hybrid',
                        'bg-purple-100 text-purple-800': experience.status === 'On-site',
                      }"
                    >
                      {{ experience.status }}
                    </span>
                  </div>
                </div>

                <!-- Company and Location -->
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
                  <div class="flex items-center mb-2 lg:mb-0">
                    <div
                      class="w-3 h-3 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full mr-3"
                    ></div>
                    <span class="text-[#A7A7A7] text-sm font-medium">{{ experience.company }}</span>
                    <span class="hidden lg:inline-block mx-3 text-[#A7A7A7]">•</span>
                    <span class="hidden lg:inline-block text-[#A7A7A7] text-sm">{{
                      experience.location
                    }}</span>
                  </div>

                  <div class="flex items-center">
                    <span class="text-2xl mr-2">📅</span>
                    <span class="text-[#A7A7A7] text-sm">
                      {{ experience.startDate }} - {{ experience.endDate }}
                    </span>
                  </div>
                </div>

                <!-- Mobile Location -->
                <div class="lg:hidden flex items-center mb-4">
                  <span class="text-xl mr-2">📍</span>
                  <span class="text-[#A7A7A7] text-sm">{{ experience.location }}</span>
                </div>

                <!-- Animated Divider -->
                <div
                  v-motion="`expDivider${index}`"
                  :initial="{ width: '0%' }"
                  :visible="{
                    width: '100%',
                    transition: { duration: 800, delay: 600 + index * 200 },
                  }"
                  class="h-0.5 bg-gradient-to-r from-transparent via-[#666666]/20 to-transparent group-hover:via-[#13B0F5]/40 transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- My Tech Stack with Simplified Animations -->
      <div id="myTechStack" class="mt-[110px] lg:mt-[370px]"></div>
      <div
        v-motion="'techStackSection'"
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1, transition: { duration: 800 } }"
        class="text-center relative"
      >
        <div class="relative z-10">
          <div
            v-motion="'techStackTitle'"
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="font-bold text-[24px] lg:text-[48px] text-[#42446E] relative"
          >
            My Tech Stack
            <!-- Simplified Decorative Elements -->
            <span class="absolute -left-12 top-0 text-3xl opacity-60">⚡</span>
            <span class="absolute -right-12 top-0 text-3xl opacity-60">🚀</span>
          </div>
          <div
            v-motion="'techStackSubtitle'"
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
            class="mt-[8px] lg:mt-[49px] text-[14px] lg:text-[32px] font-normal text-[#666666]"
          >
            Technologies I've been working with recently
          </div>

          <div
            class="mt-[32px] lg:mt-[146px] flex flex-wrap w-full gap-x-[20px] gap-y-[20px] lg:gap-x-[103px] lg:gap-y-[67px] items-center justify-center pb-5"
          >
            <div
              v-for="(tech, index) in techIcons"
              :key="tech.name"
              v-motion="`tech${index}`"
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 50 } }"
              class="group relative"
            >
              <!-- Tech Icon -->
              <img
                class="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] relative z-10 transition-all duration-300 group-hover:scale-110 cursor-pointer"
                :src="tech.src"
                :alt="tech.name"
              />

              <!-- Tech Name Tooltip -->
              <div
                class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#42446E] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                {{ tech.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Section with Simplified Animations -->
      <div id="myProjects" class="mt-[100px] lg:mt-[192px] mb-[110px] lg:mb-[225px]">
        <div
          v-motion="'projectsSection'"
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 800 } }"
          class="text-center w-full relative"
        >
          <div class="relative z-10">
            <div
              v-motion="'projectsTitle'"
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
              class="font-bold text-[24px] lg:text-[48px] text-[#42446E] relative"
            >
              Projects
              <!-- Simplified Decorative Code Icons -->
              <span class="absolute -left-16 -top-2 text-4xl opacity-60">💻</span>
              <span class="absolute -right-16 -top-2 text-4xl opacity-60">🎨</span>
            </div>
            <div
              v-motion="'projectsSubtitle'"
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
              class="mt-[8px] lg:mt-[49px] text-[14px] lg:text-[32px] font-normal text-[#666666]"
            >
              Things I've built so far
            </div>

            <div
              class="mt-[32px] lg:mt-[96px] flex flex-wrap justify-center w-full gap-x-[45px] gap-y-[50px]"
            >
              <div
                v-for="(project, index) in projects"
                :key="project.title"
                v-motion="`project${index}`"
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
                class="group"
              >
                <div
                  class="w-[300px] h-[500px] lg:w-[373px] lg:h-[567px] bg-white drop-shadow-xl rounded-3xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden"
                >
                  <!-- Simplified Hover Effect -->
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"
                  ></div>

                  <div
                    class="h-[260px] bg-gradient-to-br from-[#313131] via-[#42446E] to-[#313131] flex items-center justify-center rounded-t-3xl relative overflow-hidden"
                  >
                    <img
                      :src="ProjectLogo"
                      class="relative z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div
                    class="mx-[24.4px] lg:mx-[30px] text-left mt-[21.6px] lg:mt-[27px] relative z-10"
                  >
                    <p
                      class="font-medium text-[18px] lg:text-[28px] text-black transition-colors duration-300 group-hover:text-[#13B0F5]"
                    >
                      {{ project.title }}
                    </p>
                    <p
                      class="font-light text-[14px] lg:text-lg text-[#666666] mt-[13.6px] lg:mt-[17px] group-hover:text-[#555] transition-colors duration-300"
                    >
                      {{ project.description }}
                    </p>
                    <p
                      class="font-light text-[11px] lg:text-sm text-[#42446E] mt-[9.6px] lg:mt-[12px]"
                    >
                      <span class="font-normal text-[12px] lg:text-base">Tech stack :</span
                      >{{ project.techStack }}
                    </p>
                  </div>
                  <div
                    v-if="project.previewLink || project.codeLink"
                    class="mx-[24.4px] lg:mx-[30px] mt-[18px] lg:mt-[21px] flex relative z-10"
                  >
                    <div
                      v-if="project.previewLink"
                      :onclick="() => openLink(project.previewLink)"
                      class="flex cursor-pointer group/link transition-all duration-300 hover:scale-105"
                    >
                      <img
                        class="w-[16.5px] h-[16.5px] lg:w-[20px] lg:h-[20px] transition-transform duration-300"
                        src="../assets/linkChain.svg"
                      />
                      <p
                        class="ml-[10px] text-black font-normal text-[12px] lg:text-base underline group-hover/link:text-[#13B0F5] transition-colors duration-300"
                      >
                        Live Preview
                      </p>
                    </div>
                    <div
                      v-if="project.codeLink"
                      :onclick="() => openLink(project.codeLink)"
                      :class="project.previewLink ? 'ml-[48px]' : ''"
                      class="flex cursor-pointer group/link transition-all duration-300 hover:scale-105"
                    >
                      <img
                        class="w-[16.5px] h-[16.5px] lg:w-[20px] lg:h-[20px] transition-transform duration-300"
                        src="../assets/viewCodeIcon.svg"
                      />
                      <p
                        class="ml-[10px] text-black font-normal text-[12px] lg:text-base underline group-hover/link:text-[#E70FAA] transition-colors duration-300"
                      >
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
    </div>
  </div>
</template>

<script>
import { useMotions } from '@vueuse/motion'

// Import tech stack images
import JSIcon from '../assets/JS.svg'
import HTML5Icon from '../assets/html5.svg'
import CSSIcon from '../assets/CSS.svg'
import NodeJSIcon from '../assets/nodejs.svg'
import NestJSIcon from '../assets/nestjs.svg'
import ReactIcon from '../assets/React.svg'
import VueIcon from '../assets/vue.svg'
import TailwindIcon from '../assets/tailwind.svg'
import StripeIcon from '../assets/stripe.svg'
import MongoDBIcon from '../assets/mongodb.svg'
import ExpressIcon from '../assets/express.svg'
import AzureIcon from '../assets/azure.svg'
import AWSIcon from '../assets/aws.svg'
import FlutterIcon from '../assets/flutter.svg'
import TypeScriptIcon from '../assets/ts.svg'
import MySQLIcon from '../assets/mysql.svg'
import PostgreSQLIcon from '../assets/psql.svg'

// Import other images
import ProfileImage from '../assets/TitlePageImage.svg'
import ProjectLogo from '../assets/ezWifiBlackAndWhiteLogo.svg'

export default {
  name: 'Home',
  setup() {
    return {
      ProfileImage,
      ProjectLogo,
      techIcons: [
        { name: 'JavaScript', src: JSIcon },
        { name: 'HTML5', src: HTML5Icon },
        { name: 'CSS3', src: CSSIcon },
        { name: 'Node.js', src: NodeJSIcon },
        { name: 'NestJS', src: NestJSIcon },
        { name: 'React', src: ReactIcon },
        { name: 'Vue.js', src: VueIcon },
        { name: 'Tailwind', src: TailwindIcon },
        { name: 'Stripe', src: StripeIcon },
        { name: 'MongoDB', src: MongoDBIcon },
        { name: 'Express', src: ExpressIcon },
        { name: 'Azure', src: AzureIcon },
        { name: 'AWS', src: AWSIcon },
        { name: 'Flutter', src: FlutterIcon },
        { name: 'TypeScript', src: TypeScriptIcon },
        { name: 'MySQL', src: MySQLIcon },
        { name: 'PostgreSQL', src: PostgreSQLIcon },
      ],
      experiences: [
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
      projects: [
        {
          title: 'AI Quanty',
          description:
            "Developed an app which lets you manage your company's documents and lets your team chat with them",
          techStack: ' NestJS, NextJS, Tailwind',
          previewLink: 'https://ai-quanty.com/',
        },
        {
          title: 'ezWiFi Landing Page',
          description: 'Crafted a dynamic, fully responsive and user-friendly landing page',
          techStack: ' VueJS, Tailwind',
          previewLink: 'https://ez-initiis-novis.vercel.app/',
        },
        {
          title: 'Edtech LMS',
          description:
            'Developed LMS for 300+ schools and 5000+ students, ensuring seamless user experiences across web and offline platforms',
          techStack: ' NestJS, VueJS, Tailwind',
        },
        {
          title: 'ezWiFi Mobile App',
          description: `Developed a mobile Dapp using Flutter with features including on-boarding routers, performance dashboard, hotspot map and wallet page`,
          techStack: ' Flutter, NodeJS, NestJS, Solidity',
        },
        {
          title: 'ezWiFi Dashboard',
          description: `Developed a scalable and optimized dashboard with features including graphically represented customer data, location and hotspots manager, portal page manager, account management system and ads manager system`,
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
          title: 'Forkify',
          description: `Crafted a user interactive web app to allow users to manage food recipes`,
          techStack: ' Pug, NodeJS, ExpressJS',
          previewLink: 'https://forkify-mra.netlify.app/',
          codeLink: 'https://github.com/MuhammadRaeesArshad/Forkify',
        },
      ],
    }
  },

  methods: {
    openLink(link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    },
  },
}
</script>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #13b0f5, #e70faa);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #e70faa, #13b0f5);
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Loading animation for images */
img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

img:hover {
  transform: translateY(-2px);
}
</style>
