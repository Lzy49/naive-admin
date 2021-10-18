<template>
  <div class="wrap">
    <n-card title="只传1张">
      <Upfile
        :multiple="false"
        v-model:fileList="head_img"
        item-count="1"
      ></Upfile>
    </n-card>
    <n-card title="传多个，各种类型文件">
      <Upfile
        :multiple="false"
        v-model:fileList="head_img2"
        item-count="10"
        :item-types="['mp4', 'ogg', 'jpg', 'jpeg', 'png']"
      ></Upfile>
      <n-alert title="tips" type="info">
        目前只支持视频，图片的预览和展示。其他类型需要自行扩展
      </n-alert>
    </n-card>
  </div>
</template>
<script setup>
import { Upfile } from '@/components/Upload';
import { ref } from 'vue';
const head_img = ref([]);
const head_img2 = ref([
  'https://s.anw.red/fav/1623979004.jpg',
  'https://www.w3school.com.cn/i/movie.ogg'
]);
</script>
<style>
.wrap {
  display: grid;
  gap: 10px;
}
</style>
