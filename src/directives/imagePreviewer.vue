
<template>
  <div ref="vue-directive-image-previewer"
       class="vue-directive-image-previewer"
       >
      <!--遮罩层-->
    <div class="vue-directive-image-previewer-background" 
    @click="closeD"
    :style="bgStyle"
     >
    </div>
      <!--图片主体-->
    <div class="vue-directive-image-previewer-body" ref="body">
      <img ref="picture" class="vue-directive-image-previewer-img" 
       :src="src[0]"
       @click="closeD"
        />
    </div>
  <div id="asdasd"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, reactive, Ref, ref, VNodeTypes } from "vue"
const isShow = ref(true)
const src = inject<Ref<any[]>>('src',ref(['http:blank']))
const closeE = inject<() => void>('closeE')
const closeD = ()=>{
    isShow.value = false
    closeE?closeE():''
}
const bgStyle = computed(()=>{
     return {opacity: isShow ? '1' : '0'}
})

</script>

<style lang="less">
  .vue-directive-image-previewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &[disabled] {
      pointer-events: none;
    }
    &-background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
    }
    &-body {
      width: 100%;
      height: 100%;
      z-index: 3;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        position: absolute;
        z-index: 3;
      }
    }
  }
</style>