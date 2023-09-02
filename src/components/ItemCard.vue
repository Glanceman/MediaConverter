<template>
  <div
    class="w-full min-h-[6rem] h-24 bg-slate-800 p-1 flex gap-1 items-center text-white"
  >
    <img class="h-[80%] aspect-video" />
    <div class="grow flex flex-col">
      <div class="font-bold">{{ title }}</div>
      <div class="flex flex-row gap-2 justify-evenly">
        <div>
          <div>Duartion: {{ duration }} s</div>
          <div>Size: {{ size }} GB</div>
        </div>
        <div>
          <div>Resolution: {{ resolution }} s</div>
          <div>Format: {{ format }}</div>
        </div>
        <div>
          <i class="bi bi-arrow-right"></i>
        </div>
        <div>
          <div>
            Resolution:
            <select class="w-24 text-black">
              <option :value="resolution.value" v-for="resolution in correspondResolution">
                {{ resolution.name }}
              </option>
            </select>
          </div>
          <div>
            Format:
            <select v-model="outputFormat" class="w-24 text-black">
              <option :value="format" v-for="format in videoFormatArr">
                {{ format }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <Button_2> Convert </Button_2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button_2 from "./Shared/Buttons/Button_2.vue";
import { videoFormatArr, videoParamList } from "../constant/constant";
import { Ref, ref, watch } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    duration: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 0,
    },
    resolution: {
      type: Number,
      default: 0,
    },
    format: {
      type: String,
      default: "format",
    },
    path: {
      type: String,
    },
  },
  components: {
    Button_2,
  },
  setup(props, ctx) {
    let outputFormat: Ref<String> = ref("mp4");
    let outputResolution: Ref<String> = ref("");
    let correspondResolution = ref();
    watch(outputFormat, (oldVal, newVal) => {
      correspondResolution.value = videoParamList.find((obj) => {
        return obj.name === newVal;
      })?.children;
    });

    return {
      videoFormatArr,
      videoParamList,
      outputFormat,
      correspondResolution,
    };
  },
};
</script>
