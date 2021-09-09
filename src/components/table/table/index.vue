<template>
  <div id="c-table">
    <div class="search-box" id="bbb">
      <cSearch
        :search-data="props.searchData"
        :search-rules="props.searchRules"
        @reset="(props) => $emit('update:searchData', props)"
      >
        <template #search>
          <slot name="search"></slot>
        </template>
      </cSearch>
      <div class="other">
        <slot name="other"></slot>
      </div>
    </div>
    <div class="table-box" style="flex: 1">
      <n-data-table
        size="small"
        :columns="columns"
        :data="props.tableData"
        style="height: 100%"
        flex-height
        :pagination="{
          ...defaultPagination,
          ...props.tablePages
        }"
        v-bind="props.tableOptions"
      >
      </n-data-table>
    </div>
  </div>
</template>
<script setup>
import { defaultPagination } from './default.js';
import handleColumns from './handleColumns.js';
import cSearch from '../search/search.vue';
import { reactive, h, computed } from 'vue';
/**
 * @param searchData search 数据 需要 v-model 传递
 * @param searchRules search 验证规则
 * @param tableColumns table 栏目
 * @param tableData table 数据
 * @param pagination table 分页信息
 * @param tableProps 其他 配置
 */
const props = defineProps({
  searchData: Object,
  searchRules: Object,
  tableColumns: Array,
  tableData: Array,
  tablePages: Object,
  tableOptions: {
    type: Object,
    default: {}
  }
});
const pagination = reactive({ pageSize: 10 });
const columns = handleColumns(props.tableColumns);
</script>
<style lang="scss">
#c-table {
  display: flex;
  flex-direction: column;
  height: 100%;
  .table-box {
    flex: 1;
  }
  .other {
    padding-bottom: 23px;
    .bt {
      margin-right: 10px;
    }
  }
}
</style>
