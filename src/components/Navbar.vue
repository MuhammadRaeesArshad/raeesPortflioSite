<template>
  <!-- Glass Morphism Navbar with Consistent Background -->
  <div
    class="sticky top-0 h-[100px] lg:h-full z-50 bg-white border-b border-gray-200 shadow-lg flex justify-center items-center transition-all duration-300"
  >
    <!-- Mobile Sidebar with Better Styling -->
    <div
      id="sidebar"
      ref="sidebar"
      class="lg:hidden flex flex-col fixed z-40 top-0 h-screen overflow-y-scroll no-scrollbar w-[280px] shrink-0 bg-white border-r border-gray-100 shadow-2xl transition-all duration-500 ease-out"
      :style="{ left: sidebarOpen ? '0px' : '-280px' }"
    >
      <!-- Sidebar Header with Close Button -->
      <div class="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2
            class="text-xl font-bold bg-gradient-to-r from-[#42446E] via-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent"
          >
            Muhammad Raees
          </h2>
          <p class="text-sm text-gray-600 mt-1">Full Stack Developer</p>
        </div>

        <!-- Close button inside header -->
        <button
          @click.stop="closeSidebar"
          class="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 p-2 hover:bg-gray-100 rounded-full"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
          aria-label="Close navigation menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Navigation Menu -->
      <div class="flex-1 px-6 py-6">
        <nav class="space-y-3">
          <!-- Menu Items -->
          <div v-for="(item, index) in menuItems" :key="item.label">
            <button
              @click="navigateTo(item.action)"
              class="w-full text-left px-4 py-3 text-[#42446E] hover:text-[#13B0F5] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-base group relative"
            >
              <span class="flex items-center">
                <span class="mr-3 text-lg">{{ getItemIcon(item.action) }}</span>
                {{ item.label }}
              </span>
              <!-- Hover indicator -->
              <div
                class="absolute left-0 top-0 bottom-0 w-1 bg-[#13B0F5] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              ></div>
            </button>
          </div>
        </nav>

        <!-- Resume Button -->
        <div class="mt-8 pt-6 border-t border-gray-100">
          <button
            @click="downloadResume"
            class="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#42446E] to-[#13B0F5] hover:from-[#13B0F5] hover:to-[#E70FAA] text-white font-medium text-base rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span class="mr-2">📄</span>
            Download Resume
          </button>
        </div>
      </div>
    </div>

    <!-- Backdrop with Better Styling -->
    <div
      @click="closeSidebar"
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 lg:hidden"
      aria-hidden="true"
    ></div>

    <!-- Main Navbar Content -->
    <div
      class="mx-5 lg:mx-[72px] mt-[30px] flex justify-between items-center my-[35px] max-w-[1296px] w-full"
    >
      <!-- Logo with Simplified Animation -->
      <h1
        @click="goHome"
        class="cursor-pointer font-bold text-[32px] bg-gradient-to-r from-[#42446E] via-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent hover:scale-110 transition-all duration-300 relative group"
      >
        MRA
        <!-- Simplified glowing effect on hover -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
        ></div>
      </h1>

      <!-- Mobile Menu Button -->
      <button
        @click="openSidebar"
        class="lg:hidden cursor-pointer transition-all duration-300 hover:scale-110 p-2 relative bg-transparent border-none hover:bg-gray-100 rounded-lg"
        type="button"
        aria-label="Open navigation menu"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex flex items-center">
        <!-- Desktop Menu Items -->
        <div
          class="hidden lg:flex flex space-x-[59px] items-center font-medium text-lg text-[#666666]"
        >
          <div v-for="(item, index) in menuItems" :key="item.label" class="group relative">
            <p
              class="cursor-pointer transition-all duration-300 hover:text-[#13B0F5] hover:scale-105 relative"
              @click="navigateTo(item.action)"
            >
              {{ item.label }}

              <!-- Simplified animated underline -->
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] transition-all duration-300 group-hover:w-full"
              ></span>
            </p>
          </div>
        </div>

        <!-- Desktop Resume Button -->
        <div
          @click="downloadResume"
          class="flex items-center cursor-pointer ml-[0px] lg:ml-[62px] py-[6px] px-3 lg:py-2 lg:px-4 bg-gradient-to-r from-[#42446E] to-[#13B0F5] hover:from-[#13B0F5] hover:to-[#E70FAA] text-white font-medium text-[14px] lg:text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
        >
          <span class="flex items-center">
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
      try {
        window.open(
          'https://drive.google.com/file/d/1EYITyTMnNcV468KqDMeRd9paSr_BJOhy/view?usp=sharing',
          '_blank',
        )
      } catch (error) {
        console.error('Error opening resume:', error)
        // You could show a toast notification here
      }
    },

    async navigateTo(id) {
      this.closeSidebar()

      // Special case for home/app
      if (id === 'app') {
        await this.$router.push('/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      // Special case for contact - scroll to bottom
      if (id === 'contact') {
        await this.$router.push('/')
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
        }, 100)
        return
      }

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

    goHome() {
      this.navigateTo('app')
    },

    getItemIcon(action) {
      const icons = {
        app: '🏠',
        about: '👨‍💻',
        myTechStack: '⚡',
        myProjects: '💼',
        contact: '📞',
      }
      return icons[action] || '📄'
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
