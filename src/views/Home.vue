<template>
  <div class="flex justify-center items-center relative overflow-hidden bg-white min-h-screen">
    <!-- Enhanced Background Elements for Home Section -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Enhanced Floating Circles with Animation -->
      <div
        v-motion="'floatingCircle1'"
        :initial="{ opacity: 0, x: -50, rotate: 0 }"
        :enter="{
          opacity: 0.1,
          x: 0,
          rotate: 360,
          transition: { duration: 8000, repeat: Infinity, repeatType: 'reverse' },
        }"
        class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full blur-xl"
      ></div>
      <div
        v-motion="'floatingCircle2'"
        :initial="{ opacity: 0, x: 50, rotate: 0 }"
        :enter="{
          opacity: 0.08,
          x: 0,
          rotate: -360,
          transition: { duration: 10000, repeat: Infinity, repeatType: 'reverse' },
        }"
        class="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] rounded-full blur-2xl"
      ></div>

      <!-- Additional Background Circles for More Depth -->
      <div
        v-motion="'floatingCircle3'"
        :initial="{ opacity: 0, scale: 0.5, rotate: 0 }"
        :enter="{
          opacity: 0.06,
          scale: 1,
          rotate: 180,
          transition: { duration: 15000, repeat: Infinity, repeatType: 'reverse' },
        }"
        class="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#13B0F5]/30 to-[#E70FAA]/30 rounded-full blur-3xl"
      ></div>
      <div
        v-motion="'floatingCircle4'"
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{
          opacity: 0.04,
          scale: 1.2,
          transition: { duration: 12000, repeat: Infinity, repeatType: 'reverse' },
        }"
        class="absolute top-10 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-400 to-[#13B0F5] rounded-full blur-2xl"
      ></div>

      <!-- Enhanced Floating Geometric Shapes -->
      <div
        v-motion="'floatingTriangle'"
        :initial="{ opacity: 0, rotate: 0, y: 20 }"
        :enter="{
          opacity: 0.05,
          rotate: 180,
          y: -10,
          transition: { duration: 12000, repeat: Infinity, repeatType: 'reverse' },
        }"
        class="absolute top-1/3 right-1/4 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-[#E70FAA]/20"
      ></div>

      <!-- Floating Rectangles for More Dynamic Background -->
      <div
        v-motion="'floatingRect1'"
        :initial="{ opacity: 0, rotate: 0 }"
        :enter="{
          opacity: 0.03,
          rotate: 45,
          transition: { duration: 20000, repeat: Infinity, repeatType: 'reverse' },
        }"
        class="absolute bottom-1/3 left-1/3 w-16 h-24 bg-gradient-to-br from-[#13B0F5] to-transparent rounded-lg"
      ></div>
      <div
        v-motion="'floatingRect2'"
        :initial="{ opacity: 0, rotate: 45 }"
        :enter="{
          opacity: 0.04,
          rotate: -45,
          transition: { duration: 18000, repeat: Infinity, repeatType: 'reverse' },
        }"
        class="absolute top-2/3 right-1/2 w-20 h-12 bg-gradient-to-br from-[#E70FAA] to-transparent rounded-lg"
      ></div>

      <!-- Enhanced Floating Particles -->
      <div
        v-for="i in 12"
        :key="i"
        v-motion="`particle${i}`"
        :initial="{ opacity: 0, y: Math.random() * 50, x: Math.random() * 50 }"
        :enter="{
          opacity: Math.random() * 0.15 + 0.05,
          y: Math.random() * -30,
          x: Math.random() * 30,
          transition: {
            duration: Math.random() * 6000 + 4000,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 2000,
          },
        }"
        class="absolute w-1 h-1 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full"
        :style="{
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
        }"
      ></div>

      <!-- Animated Grid Pattern -->
      <div
        v-motion="'gridPattern'"
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 0.02,
          transition: { duration: 3000 },
        }"
        class="absolute inset-0 bg-gradient-to-br from-transparent via-[#13B0F5]/5 to-transparent"
        style="
          background-image: radial-gradient(
            circle at 20px 20px,
            rgba(19, 176, 245, 0.1) 1px,
            transparent 1px
          );
          background-size: 40px 40px;
        "
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
          <!-- Simplified Profile Image with Sparkles -->
          <div
            v-motion="'profileContainer'"
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 1000 } }"
            class="relative flex justify-center items-center"
          >
            <!-- Simple Rotating Border -->
            <div
              v-motion="'profileBorder'"
              :initial="{ opacity: 0, rotate: 0 }"
              :enter="{
                opacity: 0.8,
                rotate: 360,
                transition: { duration: 20000, repeat: Infinity, ease: 'linear' },
              }"
              class="absolute w-[270px] h-[270px] lg:w-[420px] lg:h-[420px] rounded-full"
              style="
                background: conic-gradient(from 0deg, #13b0f5, #e70faa, #8a2be2, #13b0f5);
                padding: 3px;
              "
            >
              <div class="w-full h-full bg-white rounded-full"></div>
            </div>

            <!-- Floating Sparkles around Profile -->
            <div
              v-for="i in 6"
              :key="`sparkle${i}`"
              v-motion="`profileSparkle${i}`"
              :initial="{ opacity: 0, scale: 0 }"
              :enter="{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                transition: {
                  duration: 2000,
                  repeat: Infinity,
                  delay: i * 300,
                  ease: 'easeInOut',
                },
              }"
              class="absolute w-2 h-2 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full"
              :style="{
                top: 50 + 40 * Math.cos((i * 60 * Math.PI) / 180) + '%',
                left: 50 + 40 * Math.sin((i * 60 * Math.PI) / 180) + '%',
                transform: 'translate(-50%, -50%)',
              }"
            ></div>

            <img
              class="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative z-10 rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-all duration-500"
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

      <!-- My Tech Stack with Enhanced Background -->
      <div id="myTechStack" class="mt-[110px] lg:mt-[370px]"></div>
      <div
        v-motion="'techStackSection'"
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1, transition: { duration: 800 } }"
        class="text-center relative"
      >
        <!-- Enhanced Animated Background for Tech Stack -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <!-- Large Background Circles -->
          <div
            v-motion="'techBgCircle1'"
            :initial="{ opacity: 0, scale: 0.5, rotate: 0 }"
            :visible="{
              opacity: 0.08,
              scale: 1,
              rotate: 360,
              transition: { duration: 25000, repeat: Infinity, ease: 'linear' },
            }"
            class="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full blur-3xl"
          ></div>
          <div
            v-motion="'techBgCircle2'"
            :initial="{ opacity: 0, scale: 0.8, rotate: 0 }"
            :visible="{
              opacity: 0.06,
              scale: 1.2,
              rotate: -360,
              transition: { duration: 30000, repeat: Infinity, ease: 'linear' },
            }"
            class="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-[#E70FAA] to-purple-500 rounded-full blur-3xl"
          ></div>

          <!-- Medium Background Elements -->
          <div
            v-motion="'techBgCircle3'"
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 0.05,
              y: -20,
              transition: { duration: 15000, repeat: Infinity, repeatType: 'reverse' },
            }"
            class="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-[#13B0F5] rounded-full blur-2xl"
          ></div>
          <div
            v-motion="'techBgCircle4'"
            :initial="{ opacity: 0, x: -50 }"
            :visible="{
              opacity: 0.04,
              x: 20,
              transition: { duration: 12000, repeat: Infinity, repeatType: 'reverse' },
            }"
            class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-[#E70FAA] to-pink-400 rounded-full blur-2xl"
          ></div>

          <!-- Animated Geometric Shapes for Tech Section -->
          <div
            v-motion="'techTriangle1'"
            :initial="{ opacity: 0, rotate: 0 }"
            :visible="{
              opacity: 0.03,
              rotate: 120,
              transition: { duration: 20000, repeat: Infinity, ease: 'linear' },
            }"
            class="absolute top-20 right-20 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-[#13B0F5]/20"
          ></div>
          <div
            v-motion="'techTriangle2'"
            :initial="{ opacity: 0, rotate: 60 }"
            :visible="{
              opacity: 0.04,
              rotate: -60,
              transition: { duration: 16000, repeat: Infinity, ease: 'linear' },
            }"
            class="absolute bottom-32 left-16 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-[#E70FAA]/25"
          ></div>

          <!-- Floating Rectangles for Tech Section -->
          <div
            v-motion="'techRect1'"
            :initial="{ opacity: 0, rotate: 0 }"
            :visible="{
              opacity: 0.04,
              rotate: 45,
              transition: { duration: 18000, repeat: Infinity, repeatType: 'reverse' },
            }"
            class="absolute top-1/3 left-1/5 w-24 h-32 bg-gradient-to-br from-[#13B0F5]/30 to-transparent rounded-xl"
          ></div>
          <div
            v-motion="'techRect2'"
            :initial="{ opacity: 0, rotate: -30 }"
            :visible="{
              opacity: 0.03,
              rotate: 30,
              transition: { duration: 22000, repeat: Infinity, repeatType: 'reverse' },
            }"
            class="absolute bottom-1/4 right-1/5 w-20 h-28 bg-gradient-to-br from-[#E70FAA]/30 to-transparent rounded-xl"
          ></div>

          <!-- Tech Stack Specific Particles -->
          <div
            v-for="i in 15"
            :key="`techParticle${i}`"
            v-motion="`techParticle${i}`"
            :initial="{ opacity: 0, scale: 0 }"
            :visible="{
              opacity: Math.random() * 0.1 + 0.05,
              scale: Math.random() * 0.8 + 0.5,
              transition: {
                duration: Math.random() * 8000 + 6000,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 3000,
              },
            }"
            class="absolute w-2 h-2 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-full"
            :style="{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }"
          ></div>

          <!-- Animated Background Pattern -->
          <div
            v-motion="'techGridPattern'"
            :initial="{ opacity: 0 }"
            :visible="{
              opacity: 0.03,
              transition: { duration: 2000 },
            }"
            class="absolute inset-0 bg-gradient-to-br from-transparent via-[#E70FAA]/5 to-transparent"
            style="
              background-image: radial-gradient(
                circle at 30px 30px,
                rgba(231, 15, 170, 0.1) 1px,
                transparent 1px
              );
              background-size: 60px 60px;
            "
          ></div>
        </div>

        <div class="relative z-10">
          <div
            v-motion="'techStackTitle'"
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="font-bold text-[24px] lg:text-[48px] text-[#42446E] relative"
          >
            My Tech Stack
            <!-- Enhanced Decorative Elements -->
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

              <!-- Simple Tech Name Tooltip -->
              <div
                class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#42446E] text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20"
              >
                {{ tech.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Section with Enhanced Animations -->
      <div id="myProjects" class="mt-[100px] lg:mt-[192px] mb-[110px] lg:mb-[225px]">
        <div
          v-motion="'projectsSection'"
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 800 } }"
          class="text-center w-full relative"
        >
          <!-- Animated Background Pattern -->
          <div
            v-motion="'projectsBg'"
            :initial="{ opacity: 0, rotate: 0 }"
            :visible="{
              opacity: 0.02,
              rotate: 5,
              transition: { duration: 3000 },
            }"
            class="absolute inset-0 bg-gradient-to-br from-[#13B0F5] via-transparent to-[#E70FAA] rounded-3xl"
          ></div>

          <div class="relative z-10">
            <div
              v-motion="'projectsTitle'"
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
              class="font-bold text-[24px] lg:text-[48px] text-[#42446E] relative"
            >
              Projects
              <!-- Enhanced Decorative Code Icons -->
              <span
                v-motion="'codeIcon1'"
                :initial="{ opacity: 0, scale: 0 }"
                :visible="{
                  opacity: 0.7,
                  scale: [0, 1.1, 1],
                  transition: { duration: 1000, delay: 600 },
                }"
                class="absolute -left-16 -top-2 text-4xl"
                >💻</span
              >
              <span
                v-motion="'codeIcon2'"
                :initial="{ opacity: 0, scale: 0 }"
                :visible="{
                  opacity: 0.7,
                  scale: [0, 1.1, 1],
                  transition: { duration: 1000, delay: 800 },
                }"
                class="absolute -right-16 -top-2 text-4xl"
                >🎨</span
              >
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
                :initial="{ opacity: 0, y: 50, rotateY: index % 2 === 0 ? -20 : 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  transition: { duration: 800, delay: index * 100 },
                }"
                class="group perspective-1000"
              >
                <div
                  class="w-[300px] h-[500px] lg:w-[373px] lg:h-[567px] bg-white drop-shadow-xl rounded-3xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden transform-style-preserve-3d"
                >
                  <!-- Enhanced Hover Effect -->
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-3xl"
                  ></div>

                  <!-- Shimmer Effect -->
                  <div
                    v-motion="`shimmer${index}`"
                    :initial="{ x: '-100%' }"
                    :visible="{
                      x: '100%',
                      transition: {
                        duration: 2000,
                        delay: index * 200 + 1000,
                        ease: 'easeInOut',
                      },
                    }"
                    class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>

                  <div
                    class="h-[260px] bg-gradient-to-br from-[#313131] via-[#42446E] to-[#313131] flex items-center justify-center rounded-t-3xl relative overflow-hidden"
                  >
                    <!-- Rotating Background Pattern -->
                    <div
                      v-motion="`projectBg${index}`"
                      :initial="{ rotate: 0, scale: 1 }"
                      :visible="{
                        rotate: 360,
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 15000,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                      }"
                      class="absolute inset-0 opacity-10"
                    >
                      <div
                        class="w-full h-full bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-t-3xl"
                      ></div>
                    </div>

                    <img
                      :src="ProjectLogo"
                      class="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
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
                        class="w-[16.5px] h-[16.5px] lg:w-[20px] lg:h-[20px] transition-transform duration-300 group-hover/link:rotate-12"
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
                        class="w-[16.5px] h-[16.5px] lg:w-[20px] lg:h-[20px] transition-transform duration-300 group-hover/link:rotate-12"
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
/* Enhanced animations for better visual appeal */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
}

.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

/* Radial gradient utility */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Enhanced conic gradient */
.bg-conic-gradient {
  background: conic-gradient(from 0deg, #13b0f5, #e70faa, #8a2be2, #13b0f5);
}

/* Profile image enhancements */
.profile-border {
  background: conic-gradient(from 0deg, #13b0f5, #e70faa, #8a2be2, #13b0f5);
  border-radius: 50%;
  padding: 3px;
}

.profile-border::before {
  content: '';
  position: absolute;
  inset: 3px;
  background: white;
  border-radius: 50%;
  z-index: -1;
}

/* Tech icon hexagon shape */
.hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

/* Enhanced border gradient */
.border-gradient {
  border: 2px solid;
  border-image: conic-gradient(from 0deg, #13b0f5, #e70faa, #13b0f5) 1;
  border-radius: 50%;
}

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

.group:hover .group-hover\:rotate-6 {
  transform: rotate(6deg);
}

.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

/* Loading animation for images */
img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

img:hover {
  transform: translateY(-2px);
}

/* Project card 3D effects */
.group:hover .transform-style-preserve-3d {
  transform: rotateY(5deg) rotateX(2deg);
}

/* Enhanced glow effects */
.glow-blue {
  box-shadow: 0 0 20px rgba(19, 176, 245, 0.3);
}

.glow-pink {
  box-shadow: 0 0 20px rgba(231, 15, 170, 0.3);
}

/* Floating animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Pulse glow */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(19, 176, 245, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(231, 15, 170, 0.5);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>
