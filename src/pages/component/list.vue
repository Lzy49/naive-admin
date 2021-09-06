<template>
  <cTable>
    <template #search>
      <n-gi v-for="i in 10" :key="i" class="suffix">
        <n-form-item
          show-feedback="false"
          label="这是个"
          label-placement="left"
          style="width: 96%"
        >
          <n-input />
        </n-form-item>
      </n-gi>
    </template>

    <template #buttons> 123 </template>
    <template #order>
      <!-- <n-Button>去其他页面</n-Button> -->
    </template>
  </cTable>
</template>
<script setup>
import { ref } from 'vue';
import cTable from '@/components/table/index.vue';
const gridItemCount = ref(10);
</script>
