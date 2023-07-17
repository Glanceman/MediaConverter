<template>
  <div
    data-tauri-drag-region
    class="framebar h-fit flex justify-center self-stretch items-center opacity-70 bg-slate-900 backdrop-blur-sm;"
  >
    <div data-tauri-drag-region class="flex px-5 flex-row content-center grow">
      <div class="justify-center text-white font-bold text-sm">
        {{ name }}
      </div>
    </div>
    <div class="operator flex flex-row-reverse items-center text-white">
      <button
        v-show="closeWindow"
        class="px-1 text-lg hover:bg-red-500"
        @click="closeWindow"
      >
        <i class="bi bi-x-lg"></i>
      </button>
      <div v-show="bReizeWindow">
        <button
          v-if="fullScreen"
          class="px-1 text-lg hover:bg-slate-500 text-white"
          alt="fullscreen"
          @click="unMaxWindow"
        >
          <i class="bi bi-fullscreen-exit"></i>
        </button>
        <button
          v-else
          class="px-1 text-lg hover:bg-slate-500 text-white"
          alt="fullscreen"
          @click="maxWindow"
        >
          <i class="bi bi-fullscreen"></i>
        </button>
      </div>
      <button
        v-show="bMinWindow"
        class="px-1 text-lg hover:bg-slate-500 text-white"
        alt="minimize"
        @click="minWindow"
      >
        <i class="bi bi-dash-lg"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { appWindow } from "@tauri-apps/api/window";
import { app } from "@tauri-apps/api";
export default defineComponent({
  props: {
    name: {
      type: String,
      default: " ",
      require: true,
    },
    bReizeWindow: {
      type: Boolean,
      default: true,
    },
    bMinWindow: {
      type: Boolean,
      default: true,
    },
    bCloseWindow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    let fullScreen: Ref<boolean> = ref(false);
    function closeWindow() {
      appWindow.close();
    }
    function maxWindow() {
      fullScreen.value = true;
      appWindow.toggleMaximize();
    }
    function unMaxWindow() {
      fullScreen.value = false;
      appWindow.toggleMaximize();
    }
    function minWindow() {
      appWindow.minimize();
    }

    return {
      fullScreen,
      closeWindow,
      maxWindow,
      unMaxWindow,
      minWindow,
    };
  },
});
</script>
<style scoped>
.framebar {
  -webkit-user-select: none;
  user-select: none;
  -webkit-app-region: drag;
}
.framebar .operator {
  -webkit-app-region: no-drag;
}
</style>
