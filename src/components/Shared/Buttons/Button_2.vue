<template>
  <a
    class="relative px-2 py-1 overflow-hidden font-medium text-gray-200 bg-black shadow-inner group"
    @click="() => $emit('click')"
  >
    <span
      class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-500 group-hover:w-full ease"
    ></span>
    <span
      class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-500 group-hover:w-full ease"
    ></span>
    <span
      class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-500 group-hover:h-full ease"
    ></span>
    <span
      class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-500 group-hover:h-full ease"
    ></span>
    <span
      class="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"
    ></span>
    <span
      class="relative transition-colors duration-300 delay-200 group-hover:text-black ease"
      >
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts">
export default {
  emits: ["click"],

  //class="relative px-2 py-1 overflow-hidden font-medium text-gray-600 bg-gray-100 shadow-inner group"
};
</script>
