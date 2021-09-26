<template>
  <n-form
    id="my-search-box"
    :model="props.data"
    :rules="props.rule"
    ref="formRef"
  >
    <n-grid
      :collapsed="gridCollapsed"
      :collapsed-rows="props.rows"
      cols="2 s:3 m:4 l:5 xl:6 2xl:7"
      :x-gap="15"
      responsive="screen"
      ref="wrap"
    >
      <slot></slot>
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
  modelValue: Object,
  rule: Object
});

const $emit = defineEmits(['on-search', 'update:modelValue']);
// 点击确定后验证数据
const formRef = ref(null);
const message = useMessage();
const onSearch = () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      $emit('on-search');
    } else {
      message.error('请按要求填写搜索项');
    }
  });
};
/* 重置数据 */
// 原始数据
const data = copy(props.modelValue);
const onReset = () => {
  // 重置数据
  $emit('update:modelValue', copy(data));
  formRef.value.restoreValidation();
};
/*收缩 搜索项*/
const gridCollapsed = ref(false);
const wrap = ref(null);
const slot = useSlots();
const showHidden = ref(false);
// 通过 slot 统计 子 item 的 span 值 将来与父级对照
const setShowHidden = () => {
  const itemCount =
    slot.default().reduce((count, item) => +count + +item.props.span, 0) + 1;
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
  name: 'Search'
};
</script>
<style lang="scss">
// 搜索模块样式
#my-search-box {
  .bts {
    padding-bottom: 24px;
  }
  .collapsed-bt {
    font-size: 14px;
    margin-top: 4px;
  }
}
</style>
