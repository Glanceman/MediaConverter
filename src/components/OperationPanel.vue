<template>
    <div class="w-full min-h-40 flex flex-col gap-1 p-1">
      <div class="w-full flex gap-1">
        <Button_2 @click="ChooseFiles">
          <i class="bi bi-file-plus-fill"></i>
          Add
        </Button_2>
        <Button_2 @click="() => Click()">
          <i class="bi bi-file-minus-fill"></i>
          Clear All
        </Button_2>
      </div>
      <div class="w-full flex my-2 gap-1">
        <div class="flex flex-col gap-1 w-[50%] justify-evenly">
          <select class="bg-black text-white">
            <option value="1">asdasd</option>
          </select>
          <div class=" flex content-center gap-1">
            <input v-model="outputPath" class="bg-black text-white grow" />
            <Button_2 @click="() => Click()" class="h-fit"> Browse </Button_2>
          </div>
        </div>
        <div class="w-[50%] flex flex-row justify-center">
          <Button_2 @click="() => Click()" class="h-fit">
            <i class="bi bi-arrow-right-square-fill"></i>
            Convert All
          </Button_2>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Ref, ref } from 'vue';
import Button_2 from './Shared/Buttons/Button_2.vue';
import { open } from '@tauri-apps/api/dialog';
export default{
    props:{
        fileTypes:{
            type:Array,
            default:[],
        }
    },
    components:{
        Button_2,
    },

    setup(props, ctx) {
        let outputPath : Ref<string> =  ref("");


        function Click(){
            console.log(props.fileTypes);
        }

        async function ChooseFiles(){
            const files = await open(
                {
                    multiple:true,
                    filters:[{
                        name:"Video",
                        extensions:[...props.fileTypes as string[]],
                    }],
                    defaultPath:"../"
                }
            ) as string[];
        }

        return{
            outputPath,
            Click,
            ChooseFiles,
        }
    },
}

</script>