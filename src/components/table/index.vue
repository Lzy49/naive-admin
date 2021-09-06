<template>
  <div id="c-table" ref="box">
    <div class="search-box" ref="searchBox">
      <cSearch>
        <template #search>
          <slot name="search"></slot>
        </template>
      </cSearch>
      <slot name="btns"></slot>
      <div class="order">
        <slot name="order"></slot>
      </div>
    </div>
    <div class="table-box">
      <n-data-table
        ref="table"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :scroll-x="1800"
        :style="{ height: `${height}px` }"
        flex-height
      />
    </div>
  </div>
</template>
<script setup>
import cSearch from './search.vue';
import { onresize } from '@/plugins/use/system.js';
import { reactive, ref, h, onMounted, nextTick } from 'vue';
const props = defineProps({
  columns: Array,
  data: Array
});
const a = ref();
const box = ref(null);
const columns = [
  {
    type: 'selection',
    fixed: 'left'
  },
  {
    title: 'Name',
    key: 'name',
    width: 200,
    fixed: 'left'
  },
  {
    title: 'Age',
    key: 'age',
    width: 100,
    fixed: 'left'
  },
  {
    title: 'Row',
    key: 'row',
    render(row, index) {
      return h('span', ['row ', index]);
    }
  },
  {
    title: 'Row1',
    key: 'row1',
    render(row, index) {
      return h('span', ['row ', index]);
    }
  },
  {
    title: 'Row2',
    key: 'row2',
    render(row, index) {
      return h('span', ['row ', index]);
    },
    width: 100,
    fixed: 'right'
  },
  {
    title: 'Address',
    key: 'address',
    width: 200,
    fixed: 'right'
  }
];
const data = [];
const height = ref(0);
const searchBox = ref(null);
const pagination = reactive({ pageSize: 10 });
onMounted(async () => {
  await nextTick();
  onresize(() => {
    computeHeight();
  });
});
const computeHeight = () => {
  height.value = box.value.offsetHeight - searchBox.value.offsetHeight;
};
</script>
<style lang="scss">
#c-table {
  height: 100%;
  .search-box {
    padding-bottom: var(--appPadding);
    .n-descriptions-table-content {
      line-height: 34px;
    }
  }
  .table-box {
    padding-bottom: var(--appPadding);
  }
}
</style>
