<template>
  <div id="c-list">
    <cSearch
      :search-data="props.searchData"
      :search-rules="props.searchRules"
      @reset="(props) => $emit('update:searchData', props)"
    >
      <template #search>
        <slot name="search"></slot>
      </template>
    </cSearch>
    <div class="other-box">
      <slot name="other"></slot>
    </div>
    <cTable
      :data="props.tableData"
      :columns="props.tableColumns"
      :pages="props.tablePages"
    >
    </cTable>
  </div>
</template>
<script setup>
import cSearch from './Search/index.vue';
import cTable from './Table/index.vue';
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
</script>
<style lang="scss">
@import './css.scss';
</style>
