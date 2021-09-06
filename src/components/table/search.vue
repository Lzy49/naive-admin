<template>
  <n-grid
    :cols="5"
    :collapsed="gridCollapsed"
    :collapsed-rows="gridCollapsedRows"
  >
    <slot name="search"></slot>
    <n-gi :suffix="gridCollapsed" class="suffix">
      <n-space align="center">
        <n-Button type="primary">搜索</n-Button>
        <n-Button>重置</n-Button>
        <n-button
          text
          style="font-size: 14px"
          @click="() => (gridCollapsed = !gridCollapsed)"
        >
          <n-icon>
            <ChevronDownSharp v-if="gridCollapsed" />
            <ChevronUpSharp v-else />
          </n-icon>
          {{ gridCollapsed ? '展开' : '收起' }}
        </n-button>
      </n-space>
    </n-gi>
  </n-grid>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronUpSharp, ChevronDownSharp } from '@vicons/ionicons5';
const gridCollapsed = ref(false);
const gridCollapsedRows = ref(1);
const gridItemCount = ref(5);
</script>
<style lang="scss">
.suffix {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 5px 0;
  .n-form-item-feedback-wrapper {
    display: none;
  }
}
</style>
