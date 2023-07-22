<template>
  <div class="w-full h-full bg-gray-950 flex flex-col justify-between">
    <div class="w-full h-[70%] block">
      <div
        class="w-full h-full flex flex-col gap-1 p-1 overflow-scroll overflow-x-hidden no-scrollbar"
      >
        <ItemCard />
      </div>
    </div>
    <div class="bg-gray-900 w-full min-h-40 h-[30%] flex flex-col gap-1 p-1">
      <div class="w-full flex gap-1">
        <Button_2 @click="() => Click()">
          <i class="bi bi-file-plus-fill"></i>
          Add
        </Button_2>
        <Button_2 @click="() => Click()">
          <i class="bi bi-file-minus-fill"></i>
          Clear All
        </Button_2>
      </div>
      <div class="w-full flex my-2">
        <div class="flex flex-col gap-1 w-[50%] justify-evenly">
          <select></select>
          <input v-model="outputPath" />
        </div>
        <div class="w-[50%]">
          <button>hi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ItemCard from "../components/ItemCard.vue";
import Button_2 from "../components/Shared/Buttons/Button_2.vue";
import { Ref, ref } from "vue";
export default {
  components: {
    ItemCard,
    Button_2,
  },
  setup(props, ctx) {
    let outputPath: Ref<string> = ref(" ");
    function Click() {
      console.log("Click");
    }
    return {
      outputPath,
      Click,
    };
  },
};
</script>

<style></style>
