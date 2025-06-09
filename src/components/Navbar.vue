<template>
  <!-- Glass Morphism Navbar with Enhanced Animations -->
  <div
    class="sticky top-0 h-[100px] lg:h-full z-50 backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-lg flex justify-center items-center transition-all duration-300"
  >
    <!-- Mobile Sidebar with Enhanced Animation -->
    <div
      id="sidebar"
      ref="sidebar"
      v-motion="'sidebar'"
      :initial="{ x: -300, opacity: 0 }"
      :enter="sidebarOpen ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }"
      class="lg:hidden flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-[253px] shrink-0 backdrop-blur-xl bg-white/90 border-r border-white/20 shadow-2xl transition-all duration-500 ease-out"
    >
      <!-- Close button with Animation -->
      <button
        ref="trigger"
        v-motion="'closeButton'"
        :initial="{ rotate: 0, scale: 1 }"
        :enter="{
          rotate: sidebarOpen ? 180 : 0,
          scale: sidebarOpen ? 1.1 : 1,
          transition: { duration: 300 },
        }"
        class="lg:hidden text-slate-500 hover:text-slate-400 mt-[59px] fixed top-0 right-[23px] transition-all duration-300 hover:scale-110 hover:rotate-90"
        @click.stop="closeSidebar"
        aria-controls="sidebar"
        :aria-expanded="sidebarOpen"
      >
        <img src="../assets/cross.svg" class="transition-transform duration-300" />
      </button>

      <div class="mt-3">
        <div class="mt-[88px] mx-[22px] space-y-5 font-medium text-[14px] text-[#666666]">
          <!-- Animated Menu Items -->
          <div
            v-for="(item, index) in menuItems"
            :key="item.label"
            v-motion="`menuItem${index}`"
            :initial="{ opacity: 0, x: -30 }"
            :enter="{
              opacity: sidebarOpen ? 1 : 0,
              x: sidebarOpen ? 0 : -30,
              transition: { duration: 300, delay: index * 100 },
            }"
            class="group"
          >
            <p
              class="cursor-pointer transition-all duration-300 hover:text-[#13B0F5] hover:translate-x-2 hover:font-semibold relative"
              :onclick="() => navigateTo(item.action)"
            >
              {{ item.label }}
              <!-- Hover underline effect -->
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] transition-all duration-300 group-hover:w-full"
              ></span>
            </p>
          </div>

          <!-- Resume Button with Enhanced Animation -->
          <div
            v-motion="'resumeButtonMobile'"
            :initial="{ opacity: 0, y: 20, scale: 0.8 }"
            :enter="{
              opacity: sidebarOpen ? 1 : 0,
              y: sidebarOpen ? 0 : 20,
              scale: sidebarOpen ? 1 : 0.8,
              transition: { duration: 400, delay: 600 },
            }"
            :onclick="downloadResume"
            class="w-fit flex items-center cursor-pointer py-[6px] px-3 bg-gradient-to-r from-[#42446E] to-[#13B0F5] hover:from-[#13B0F5] hover:to-[#E70FAA] text-[#FFFFFF] font-medium text-[14px] rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg transform relative overflow-hidden group"
          >
            <!-- Shimmer effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            ></div>
            <span class="relative z-10">My Resume</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop with Blur -->
    <div
      :onclick="closeSidebar"
      v-motion="'backdrop'"
      :initial="{ opacity: 0 }"
      :enter="{
        opacity: sidebarOpen ? 1 : 0,
        transition: { duration: 300 },
      }"
      class="fixed lg:hidden inset-0 bg-slate-900/30 backdrop-blur-sm z-10 lg:hidden lg:z-auto transition-all duration-300"
      :class="sidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'"
      aria-hidden="true"
    ></div>

    <!-- Main Navbar Content -->
    <div
      v-motion="'navbarContent'"
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
      class="mx-5 lg:mx-[72px] mt-[30px] flex justify-between items-center my-[35px] max-w-[1296px] w-full"
    >
      <!-- Logo with Animation -->
      <h1
        v-motion="'logo'"
        :initial="{ opacity: 0, scale: 0.5, rotate: -180 }"
        :enter="{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            duration: 1000,
            type: 'spring',
            stiffness: 200,
          },
        }"
        :onclick="() => navigateTo('app')"
        class="cursor-pointer font-bold text-[32px] bg-gradient-to-r from-[#42446E] via-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent hover:scale-110 transition-all duration-300 relative group"
      >
        MRA
        <!-- Glowing effect on hover -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
        ></div>
      </h1>

      <!-- Mobile Menu Button -->
      <div
        v-motion="'hamburger'"
        :initial="{ opacity: 0, rotate: 90 }"
        :enter="{ opacity: 1, rotate: 0, transition: { duration: 600, delay: 400 } }"
        :onclick="openSidebar"
        class="lg:hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-90"
      >
        <img src="../assets/hamburger.svg" class="transition-transform duration-300" />
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex flex items-center">
        <!-- Desktop Menu Items -->
        <div
          class="hidden lg:flex flex space-x-[59px] items-center font-medium text-lg text-[#666666]"
        >
          <div
            v-for="(item, index) in menuItems"
            :key="item.label"
            v-motion="`desktopMenuItem${index}`"
            :initial="{ opacity: 0, y: -20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 500, delay: 300 + index * 100 },
            }"
            class="group relative"
          >
            <p
              class="cursor-pointer transition-all duration-300 hover:text-[#13B0F5] hover:scale-105 relative"
              :onclick="() => navigateTo(item.action)"
            >
              {{ item.label }}

              <!-- Animated underline -->
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] transition-all duration-300 group-hover:w-full"
              ></span>

              <!-- Hover glow effect -->
              <span
                class="absolute inset-0 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300 -z-10"
              ></span>
            </p>
          </div>
        </div>

        <!-- Desktop Resume Button -->
        <div
          v-motion="'resumeButtonDesktop'"
          :initial="{ opacity: 0, scale: 0, rotate: 180 }"
          :enter="{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 800,
              delay: 800,
              type: 'spring',
              stiffness: 150,
            },
          }"
          :onclick="downloadResume"
          class="flex items-center cursor-pointer ml-[0px] lg:ml-[62px] py-[6px] px-3 lg:py-2 lg:px-4 bg-gradient-to-r from-[#42446E] to-[#13B0F5] hover:from-[#13B0F5] hover:to-[#E70FAA] text-[#FFFFFF] font-medium text-[14px] lg:text-lg rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-xl transform relative overflow-hidden group"
        >
          <!-- Animated background shine -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          ></div>

          <!-- Button text with animation -->
          <span
            v-motion="'resumeText'"
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 300, delay: 1200 } }"
            class="relative z-10 flex items-center"
          >
            <span class="mr-2">📄</span>
            My Resume
          </span>
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
      menuItems: [
        { label: 'Home', action: 'app' },
        { label: 'About Me', action: 'about' },
        { label: 'Tech Stack', action: 'myTechStack' },
        { label: 'Projects', action: 'myProjects' },
        { label: 'Contact', action: 'contact' },
      ],
    }
  },
  methods: {
    async downloadResume() {
      // Add loading animation here if needed
      try {
        const link = document.createElement('a')
        const response = await fetch(
          `https://drive.google.com/file/d/1EYITyTMnNcV468KqDMeRd9paSr_BJOhy/view?usp=sharing`,
        )

        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        link.href = url
        link.download = 'raeesResume'
        link.click()
      } catch (error) {
        console.error('Error downloading resume:', error)
        // You could show a toast notification here
      }
    },

    async navigateTo(id) {
      this.closeSidebar()

      // If we're on the about page, go to home first
      if (window.location.href.includes('about')) {
        await this.$router.push('/')
      }

      // Wait a bit for route change, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const offset = element.offsetTop - 100
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          })
        }
      }, 100)
    },

    openSidebar() {
      this.sidebarOpen = true
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden'
    },

    closeSidebar() {
      this.sidebarOpen = false
      // Re-enable body scroll
      document.body.style.overflow = 'auto'
    },
  },

  // Clean up on component unmount
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  },
}
</script>

<style scoped>
/* Glass morphism effect */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: transform, opacity, color, background-color, border-color,
    text-decoration-color, fill, stroke, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hide scrollbar for mobile sidebar */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Enhanced hover effects */
.group:hover .group-hover\:w-full {
  width: 100%;
}

/* Improved focus styles for accessibility */
button:focus,
.cursor-pointer:focus {
  outline: 2px solid #13b0f5;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Smooth entrance animations */
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Loading animation for resume download */
.downloading {
  position: relative;
  pointer-events: none;
}

.downloading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid transparent;
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive text sizing */
@media (max-width: 640px) {
  .text-responsive {
    font-size: clamp(0.875rem, 3.5vw, 1.125rem);
  }
}
</style>
