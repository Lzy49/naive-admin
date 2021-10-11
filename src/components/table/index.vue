<template>
  <div id="my-table-box">
    <n-data-table
      style="height: 100%"
      flex-height
      :columns="columns"
      :data="props.data"
      :loading="!props.data"
      :remote="true"
      :pagination="{
        ...defaultPagination,
        ...props.pagination,
        ...pageInfo,
      }"
      v-model:page="page"
      v-model:page-size="pageSize"
      @update:page="onPage"
      @update:page-size="onPageSize"
      v-bind="$attrs"
    >
    </n-data-table>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { defaultPagination } from './default.js';
import handleColumns from './handleColumns.js';
const props = defineProps({
  data: Array,
  columns: Array,
  pagination: Object
});
const emits = defineEmits(['update']);
const columns = handleColumns(props.columns);
const pageInfo = reactive({
  page: 1,
  pageSize: 1
});
const onPage = (page) => {
  pageInfo.page = Number(page);
  emits('update', pageInfo);
};
const onPageSize = (size) => {
  pageInfo.page = 1;
  pageInfo.pageSize = size;
  emits('update', pageInfo);
};
const init = () => {
  pageInfo.page = props.pagination.page || 1;
  pageInfo.pageSize =
    props.pagination.pageSize || defaultPagination.pageSizes[0];
  emits('update', pageInfo);
};
init();
defineExpose({
  init
});
</script>
<script>
export default {
  name: 'Table'
};
</script>
<style lang="scss">
#my-table-box {
  flex: 1;
  display: block;
  .table-ellipsis {
    width: 100%;
  }
  .table-link {
    width: 100%;
    background: #fff;
    vertical-align: middle;
    color: var(--arrow-color);
  }

  .table-tags {
    color: var(--th-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .item {
      display: inline-block;
      margin: 0 3px;
      border: 1px solid var(--th-text-color);
      padding: 0 4px;
      border-radius: 2px;
      font-size: var(--font-size);
      color: var(--th-text-color);
    }
  }

  .table-state {
    i {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: gray;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>
