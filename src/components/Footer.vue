<template lang="">
  <!-- Simplified Footer with Faster Animations -->
  <div class="relative overflow-hidden">
    <!-- Simplified Background -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Simple Gradient Overlay -->
      <div 
        v-motion="'footerBg'"
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 0.03, transition: { duration: 1000 } }"
        class="absolute inset-0 bg-gradient-to-tr from-[#13B0F5]/10 via-transparent to-[#E70FAA]/10"
      ></div>
      
      <!-- Reduced Floating Particles -->
      <div 
        v-for="i in 3" 
        :key="i"
        class="absolute text-[#42446E] text-lg opacity-10"
        :style="{ 
          top: Math.random() * 80 + '%', 
          left: Math.random() * 90 + '%' 
        }"
      >
        {{ ['</>','{}','[]'][Math.floor(Math.random() * 3)] }}
      </div>
    </div>

    <div class="mx-[22px] lg:mx-[72px] flex justify-center items-center relative z-10">
      <div id="contact" class="max-w-[1296px] w-full">
        <!-- Header Section -->
        <div 
          v-motion="'footerHeader'"
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="flex justify-between items-center"
        >
          <!-- Logo with Simplified Animation -->
          <p
            v-motion="'footerLogo'"
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200 } }"
            :onclick="() => navigateTo('app')"
            class="cursor-pointer font-bold text-[24px] lg:text-[32px] bg-gradient-to-r from-[#42446E] via-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent hover:scale-110 transition-all duration-300 relative group"
          >
            MRA
            <!-- Simplified glow effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"></div>
          </p>
          
          <!-- Contact & Social Section -->
          <div class="md:flex">
            <!-- Phone Number -->
            <div 
              v-motion="'phoneNumber'"
              :initial="{ opacity: 0, x: 20 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 400, delay: 300 } }"
              class="hidden lg:block mr-[33px] group"
            >
              <p class="text-[#42446E] text-lg font-normal hover:text-[#13B0F5] transition-all duration-300 cursor-pointer relative">
                📞 +923315989606
                <!-- Simplified hover underline -->
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>
            
            <!-- Email -->
            <div
              v-motion="'email'"
              :initial="{ opacity: 0, x: 20 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 400, delay: 400 } }"
              :onclick="mailTo"
              class="cursor-pointer hidden lg:block mr-[48px] group"
            >
              <p class="text-[#42446E] text-lg font-normal hover:text-[#E70FAA] transition-all duration-300 relative">
                ✉️ mrasoftdev@gmail.com
                <!-- Simplified hover underline -->
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>
            
            <!-- Social Icons -->
            <div 
              v-motion="'socialIcons'"
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 500 } }"
              class="flex justify-start items-center"
            >
              <!-- GitHub -->
              <div class="group relative">
                <img 
                  :onclick="toGithub" 
                  class="cursor-pointer transition-all duration-300 hover:scale-110" 
                  src="../assets/Github.svg" 
                />
                <!-- Tooltip -->
                <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#42446E] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  GitHub
                </div>
              </div>
              
              <!-- LinkedIn -->
              <div class="group relative ml-[22px]">
                <img
                  :onclick="toLinkedIn"
                  class="cursor-pointer transition-all duration-300 hover:scale-110"
                  src="../assets/LinkedIn.svg"
                />
                <!-- Tooltip -->
                <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#42446E] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  LinkedIn
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile Contact Info -->
        <div class="lg:hidden">
          <p 
            v-motion="'mobilePhone'"
            :initial="{ opacity: 0, x: -10 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 300, delay: 600 } }"
            class="mt-4 text-[#42446E] text-[14px] font-normal hover:text-[#13B0F5] transition-colors duration-300"
          >
            📞 +923315989606
          </p>
          <p 
            v-motion="'mobileEmail'"
            :initial="{ opacity: 0, x: -10 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 300, delay: 700 } }"
            :onclick="mailTo"
            class="cursor-pointer mt-4 text-[#42446E] text-[14px] font-normal hover:text-[#E70FAA] transition-colors duration-300"
          >
            ✉️ mrasoftdev@gmail.com
          </p>
        </div>

        <!-- Simplified Divider -->
        <div 
          v-motion="'divider'"
          :initial="{ width: '0%', opacity: 0 }"
          :visible="{ width: '100%', opacity: 1, transition: { duration: 800, delay: 800 } }"
          class="mt-[14px] lg:mt-[43px] h-0.5 bg-gradient-to-r from-transparent via-[#666666]/30 to-transparent"
        ></div>
        
        <!-- Footer Bottom Section -->
        <div 
          v-motion="'footerBottom'"
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 900 } }"
          class="mt-[21px] lg:mt-[43px] mb-[20px] lg:mb-[60px] flex justify-between"
        >
          <!-- Desktop Navigation -->
          <div class="hidden xl:flex flex space-x-[59px] items-center font-normal text-lg text-[#666666]">
            <div 
              v-for="(item, index) in navigationItems" 
              :key="item.label"
              class="group relative"
            >
              <p 
                class="cursor-pointer transition-all duration-300 hover:text-[#13B0F5] hover:scale-105"
                :onclick="() => navigateTo(item.action)"
              >
                {{ item.label }}
                <!-- Simplified hover underline -->
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>
          </div>
          
          <!-- Made with Love Section -->
          <div 
            v-motion="'madeWithLove'"
            :initial="{ opacity: 0, y: 10 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 1000 } }"
            class="text-[14px] text-center xl:text-left lg:text-lg font-normal text-[#666666] relative"
          >
            <p class="leading-relaxed">
              Designed and built by
              <span
                class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
                :onclick="() => navigateTo('app')"
              >
                Muhammad Raees
              </span>
              with
              <span class="text-red-500 font-bold mx-1">Love</span>
              <span class="inline-block mx-1">❤️</span>
              &
              <span class="text-amber-600 font-bold mx-1">Coffee</span>
              <span class="inline-block mx-1">☕</span>
            </p>
          </div>
        </div>

        <!-- Copyright Section -->
        <div 
          v-motion="'copyright'"
          :initial="{ opacity: 0, y: 10 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: 1100 } }"
          class="text-center text-sm text-[#666666]/70 pb-4"
        >
          <p>© 2024 Muhammad Raees. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      navigationItems: [
        { label: 'Home', action: 'app' },
        { label: 'About', action: 'about' },
        { label: 'Tech Stack', action: 'myTechStack' },
        { label: 'Projects', action: 'myProjects' },
        { label: 'Contact', action: 'contact' },
      ]
    }
  },
  methods: {
    mailTo() {
      window.open('mailto:mrasoftdev@gmail.com', '_blank')
    },
    toGithub() {
      window.open('https://github.com/MuhammadRaeesArshad', '_blank', 'noopener,noreferrer')
    },
    toLinkedIn() {
      window.open('https://www.linkedin.com/in/muhammad-raees-arshad-961871202/', '_blank', 'noopener,noreferrer')
    },
    async navigateTo(id) {
      // If we're on the about page, go to home first
      if (window.location.href.includes('about')) {
        await this.$router.push('/')
      }
      
      // Wait a bit for route change, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }, 100)
    },
  },
}
</script>
<style lang=""></style>
