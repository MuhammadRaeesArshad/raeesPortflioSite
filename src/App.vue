<script setup lang="ts">
import { RouterView } from 'vue-router'


import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <router-view v-slot="{ Component }">
    <Navbar></Navbar>
    <component :is="Component" />
    <Footer></Footer>
  </router-view>
</template>
