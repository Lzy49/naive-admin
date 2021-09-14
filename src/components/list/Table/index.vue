<template>
  <div class="table-box">
    <n-data-table
      size="small"
      :columns="columns"
      :data="props.data"
      style="height: 100%"
      flex-height
      :pagination="{
        ...defaultPagination,
        ...props.page
      }"
      v-bind="props.tableOptions"
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
  pages: Object
});
const pagination = reactive({ pageSize: 10 });
const columns = handleColumns(props.columns);
</script>
<script>
export default {
  name:'Table'
}
</script>