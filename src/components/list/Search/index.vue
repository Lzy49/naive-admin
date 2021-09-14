<template>
  <n-form
    class="search-box"
    :model="props.searchData"
    :rules="props.searchRules"
    ref="formRef"
  >
    <n-grid
      :collapsed="gridCollapsed"
      :collapsed-rows="props.rows"
      cols="2 s:3 m:4 l:5 xl:6 2xl:7"
      responsive="screen"
      ref="wrap"
    >
      <slot name="search"></slot>
      <n-gi :suffix="gridCollapsed" class="bts">
        <n-space align="center">
          <n-Button @click="onSearch" type="primary">搜索</n-Button>
          <n-Button @click="onReset">重置</n-Button>
          <n-button
            text
            class="collapsed-bt"
            @click="() => (gridCollapsed = !gridCollapsed)"
            v-if="showHidden"
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
  </n-form>
</template>
<script setup>
import { copy } from '@/utils/deep.js';
import { onMounted, ref, useSlots, watchEffect } from 'vue';
import { ChevronUpSharp, ChevronDownSharp } from '@vicons/ionicons5';
import { useMessage } from 'naive-ui';
const props = defineProps({
  rows: {
    type: Number,
    default: 1
  },
  searchData: Object,
  searchRules: Object
});
// 点击确定后验证数据
const formRef = ref(null);
const message = useMessage();
const onSearch = () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      message.success('验证成功');
    } else {
      message.error('验证失败');
    }
  });
};
/* 重置数据 */
// 原始数据
const $emit = defineEmits(['reset']);
const data = copy(props.searchData);
const onReset = () => {
  // 重置数据
  $emit('reset', copy(data));
};
/*收缩 搜索项*/
const gridCollapsed = ref(false);
const wrap = ref(null);
const slot = useSlots();
const showHidden = ref(false);
// 通过 slot 统计 子 item 的 span 值 将来与父级对照
const setShowHidden = () => {
  const itemCount =
    slot
      .search()[0]
      .children.reduce((count, item) => +count + +item.props.span, 0) + 1;
  watchEffect(() => {
    // 监听 n-grid  的  responsiveCols 值（会根据窗口大小变化）更改 showHidden
    showHidden.value = wrap.value.responsiveCols * props.rows < itemCount;
  });
};
onMounted(() => {
  setShowHidden();
});
</script>
<script>
export default {
  name:'Search'
}
</script>