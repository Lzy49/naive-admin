<template>
  <!-- <div> -->
  <FormWrap
    v-model="model"
    :rules="rules"
    label-placement="top"
    @onSubmit="update"
    title="复杂表单"
    subtitle="这是一个复杂表单 案例"
    button-fixed="true"
  >
    <FormItem span="4" label="我是组件传来的" path="inputValue" :tip="'123'">
      <n-input placeholder="Input" v-model:value="model.inputValue" />
    </FormItem>
    <FormItem
      label-align="left"
      label="我是组件传来"
      path="inputValue"
      :tip="'123'"
    >
      <n-input placeholder="Input" v-model:value="model.inputValue" />
    </FormItem>
    <FormItem
      label="我是组件传"
      label-align="left"
      path="inputValue"
      :tip="'123'"
    >
      <n-input placeholder="Input" v-model:value="model.inputValue" />
    </FormItem>
    <FormGroup span="4" title="组合 1">
      <FormItem span="4" label="我是组件传来的" path="inputValue">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem label="我是组件传来" path="inputValue">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem label="我是组件传" path="inputValue">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem label="我是组件传来的" path="inputValue">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem label="我是组件传来的" path="inputValue">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
    </FormGroup>
    <FormGroup span="4" title="组合 2">
      <FormItem span="4" label="我是组件传来的" path="inputValue">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem
        label="我是组件传来"
        path="inputValue"
        :tip="
          () =>
            h(
              'div',
              {
                style: {
                  color: 'red'
                }
              },
              '你好'
            )
        "
      >
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem label="我是组件传" path="inputValue" :tip="'123'">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>

      <FormItem label="我是组件传来的" path="inputValue" :tip="'123'">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem label="我是组件传来的" path="inputValue" :tip="'123'">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
    </FormGroup>
  </FormWrap>
  <!-- </div> -->
</template>
<script setup>
import { ref, h } from 'vue';
import { FormWrap, FormItem, FormGroup } from '@/components/form';
const model = ref({
  inputValue: null
});
const rules = {
  inputValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 inputValue'
  },
  textareaValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 textareaValue'
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 selectValue'
  },
  multipleSelectValue: {
    type: 'array',
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 multipleSelectValue'
  },
  datetimeValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 datetimeValue'
  },
  nestedValue: {
    path1: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入 nestedValue.path1'
    },
    path2: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请输入 nestedValue.path2'
    }
  },
  checkboxGroupValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请选择 checkboxGroupValue'
  },
  radioGroupValue: {
    required: true,
    trigger: 'change',
    message: '请选择 radioGroupValue'
  },
  radioButtonGroupValue: {
    required: true,
    trigger: 'change',
    message: '请选择 radioButtonGroupValue'
  },
  inputNumberValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 inputNumberValue'
  },
  timePickerValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 timePickerValue'
  },
  sliderValue: {
    validator(rule, value) {
      return value > 50;
    },
    trigger: ['blur', 'change'],
    message: 'sliderValue 需要大于 50'
  },
  transferValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请输入 transferValue'
  }
};
const update = (r) => {
  console.log('提交代码');
};
</script>
