<template>
  <div id="my-form-warp">
    <n-page-header
      style="margin-bottom: var(--appPadding)"
      :subtitle="subtitle"
      :title="title"
    >
    </n-page-header>
    <n-form
      :model="model"
      :rules="rules"
      ref="formRef"
      :label-width="140"
      class="form"
      v-bind="$attrs"
    >
      <div>
        <slot v-if="!props.isComplex"></slot>
        <n-grid v-else cols="1 600:2 900:3 1200:4" x-gap="24">
          <slot></slot>
        </n-grid>
      </div>
    </n-form>
    <n-space class="button-box" justify="end">
      <n-button type="primary" @click="submit"> 提交 </n-button>
      <n-button @click="reset"> 重置 </n-button>
    </n-space>
  </div>
</template>
<script>
export default {
  inheritAttrs: false
};
</script>
<script setup>
import { copy } from '@/utils/deep.js';
import { ref, toRefs, reactive, provide } from 'vue';
const props = defineProps({
  modelValue: Object,
  rules: Object,
  title: String,
  subtitle: String,
  isComplex: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(['update:modelValue', 'on-submit', 'reset']);
// 对组件的一些初始化配置
provide('isComplex', props.isComplex);
// 组件初始化 -- 原始数据
const { modelValue: model, rules } = toRefs(props);
const formRef = ref();
const restDate = copy(model.value);
// 重置
const reset = () => {
  formRef.value.restoreValidation();
  emit(
    'update:modelValue',
    reactive({
      ...copy(restDate)
    })
  );
  emit('reset');
};
// 验证数据并提交
const submit = () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      emit('on-submit');
    } else {
      window.$message.error('请完整填写表单');
    }
  });
};

defineExpose({
  reset
});
</script>
<style lang="scss">
#my-form-warp {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: start;
  box-sizing: border-box;
  > .form {
    flex: 1;
    display: block;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 16px;
  }
  .button-box {
    padding: 20px 0;
  }
}
</style>
