<script setup lang="ts">
import FrameBar from "./components/FrameBar.vue";
import MenuBar from "./components/MenuBar.vue";
</script>

<template>
  <FrameBar name="Media Converter" :b-reize-window="false"/>
  <div class="flex h-full">
    <div class=" min-w-[10rem] w-[10rem] h-full bg-slate-200">
     <MenuBar/>
    </div>
    <RouterView class="w-full" />
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-slate-900 text-white;
}
</style>
