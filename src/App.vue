<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FrameBar from "./components/FrameBar.vue";
</script>

<template>
  <FrameBar name="Media Converter" />
  <div class="flex h-full">
    <div
      class="w-40 h-full bg-slate-200 flex flex-col content-center items-center"
    >
      <router-link
        to="/"
        class="px-5 py-2.5 w-full relative group overflow-hidden font-medium bg-purple-50 text-black inline-block"
      >
        <span
          class="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:w-full"
        ></span>
        <span class="relative group-hover:text-white">
            <i class="bi bi-camera-video-fill"></i>
            Video
        </span>
      </router-link>

      <router-link
        to="/about"
        class="px-5 py-2.5 w-full relative group overflow-hidden font-medium bg-purple-50 text-black inline-block"
      >
        <span
          class="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:w-full"
        ></span>
        <span class="relative group-hover:text-white">
            <i class="bi bi-camera-video-fill"></i>
            Video
        </span>
      </router-link>
    </div>
    <RouterView class="inline-block bg-slate-500" />
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-slate-900 text-white;
}
</style>
