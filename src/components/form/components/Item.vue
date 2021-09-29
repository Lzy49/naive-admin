<template>
  <component
    class="my-form-itme"
    :label="label"
    :path="path"
    v-bind="$attrs"
    :is="isComplex ? NFormItemGi : NFormItem"
  >
    <template #label>
      <slot name="label" v-if="tip">
        <!-- 默认 label  start-->
        {{ label }}
        <n-tooltip trigger="hover" v-if="tip">
          <template #trigger>
            <n-icon class="icon"><QuestionCircleOutlined /></n-icon>
          </template>
          <span v-if="typeof tip === 'string'">{{ tip }}</span>
          <component :is="tip()" v-else></component>
        </n-tooltip>
        <!-- end -->
      </slot>
    </template>
    <slot></slot>
  </component>
</template>
<script setup>
import { NFormItem, NFormItemGi } from 'naive-ui';
import { QuestionCircleOutlined } from '@vicons/antd';
import { toRefs, inject, ref } from 'vue';
const props = defineProps({
  label: {
    type: String
  },
  path: {
    type: String
  },
  tip: {
    type: [String, Function],
    default: ''
  }
});
const isComplex = inject('isComplex');
const { span, label, path, tip } = toRefs(props);
</script>
<script>
export default {
  inheritAttrs: false,
  __GRID_ITEM__: true,
  name: 'GridItem',
  props: ['span']
};
</script>
<style lang="scss">
.my-form-itme {
  .icon {
    margin: 0 0 0 4px;
    vertical-align: baseline;
  }
}
</style>
