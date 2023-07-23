<template>
  <div class="flex flex-col content-center items-center">
    <router-link
      to="/"
      class="px-5 py-2.5 w-full relative group overflow-hidden font-mediu text-white bg-black inline-block text-center"
    >
      <span
        class="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:w-full"
      ></span>
      <span class="relative group-hover:text-black">
        <i class="bi bi-camera-video-fill"></i>
        Video
      </span>
    </router-link>

    <router-link
      to="/about"
      class="px-5 py-2.5 w-full relative group overflow-hidden font-mediu text-white bg-black inline-block text-center"
    >
      <span
        class="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:w-full"
      ></span>
      <span class="relative group-hover:text-black">
        <i class="bi bi-file-music-fill"></i>
        Audio
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.router-link-active {
  @apply bg-slate-300 text-black;
}
</style>
