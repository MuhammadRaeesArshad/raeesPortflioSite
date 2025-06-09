<script setup lang="ts">
import { RouterView } from 'vue-router'

import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <router-view v-slot="{ Component }">
      <Navbar></Navbar>
      <component :is="Component" />
      <Footer></Footer>
    </router-view>
  </div>
</template>
