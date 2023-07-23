<template>
  <div class="w-full h-full bg-gray-950 flex flex-col justify-between">
    <div class="w-full h-[70%] block">
      <div
        class="w-full h-full flex flex-col gap-1 p-1 overflow-scroll overflow-x-hidden no-scrollbar"
      >
        <ItemCard />
      </div>
    </div>
    <div class="bg-gray-900 w-full h-[30%]">
      <OperationPanel :file-types="formatTypes"/>
    </div>
  </div>
</template>

<script lang="ts">
import ItemCard from "../components/ItemCard.vue";
import Button_2 from "../components/Shared/Buttons/Button_2.vue";
import OperationPanel from "../components/OperationPanel.vue";
import { Ref, ref } from "vue";
import {videoFormatArr} from "../constant/constant" 
export default {
  components: {
    ItemCard,
    Button_2,
    OperationPanel,
  },
  setup(props, ctx) {
    let outputPath: Ref<string> = ref(" ");
    const formatTypes = videoFormatArr;
    function Click() {
      console.log("Click");
    }
    return {
      outputPath,
      Click,
      formatTypes,
    };
  },
};
</script>

<style></style>
