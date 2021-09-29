<template>
  <div>
    <FormWrap
      v-model="model"
      :rules="rules"
      label-placement="left"
      @onSubmit="handleValidateButtonClick"
      :label-width="160"
      title="简单表单"
      subtitle="这是一个简单表单 案例"
      :is-complex="false"
    >
      <FormItem label="Input" path="inputValue">
        <n-input placeholder="Input" v-model:value="model.inputValue" />
      </FormItem>
      <FormItem label="Textarea" path="textareaValue">
        <n-input
          placeholder="Textarea"
          v-model:value="model.textareaValue"
          type="textarea"
          :autosize="{
            minRows: 3,
            maxRows: 5
          }"
        />
      </FormItem>
      <FormItem label="Select" path="selectValue">
        <n-select
          placeholder="Select"
          :options="generalOptions"
          v-model:value="model.selectValue"
        />
      </FormItem>
      <FormItem label="Multiple Select" path="multipleSelectValue">
        <n-select
          placeholder="Select"
          :options="generalOptions"
          v-model:value="model.multipleSelectValue"
          multiple
        />
      </FormItem>
      <FormItem label="Datetime" path="datetimeValue">
        <n-date-picker type="datetime" v-model:value="model.datetimeValue" />
      </FormItem>
      <FormItem label="Switch" path="switchValue">
        <n-switch v-model:value="model.switchValue" />
      </FormItem>
      <FormItem label="Checkbox Group" path="checkboxGroupValue">
        <n-checkbox-group v-model:value="model.checkboxGroupValue">
          <n-space>
            <n-checkbox value="Option 1">Option 1</n-checkbox>
            <n-checkbox value="Option 2">Option 2</n-checkbox>
            <n-checkbox value="Option 3">Option 3</n-checkbox>
          </n-space>
        </n-checkbox-group>
      </FormItem>
      <FormItem label="Radio Group" path="radioGroupValue">
        <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup1">
          <n-space>
            <n-radio value="Radio 1">Radio 1</n-radio>
            <n-radio value="Radio 2">Radio 2</n-radio>
            <n-radio value="Radio 3">Radio 3</n-radio>
          </n-space>
        </n-radio-group>
      </FormItem>
      <FormItem label="Radio Button Group" path="radioGroupValue">
        <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup2">
          <n-radio-button value="Radio 1">Radio 1</n-radio-button>
          <n-radio-button value="Radio 2">Radio 2</n-radio-button>
          <n-radio-button value="Radio 3">Radio 3</n-radio-button>
        </n-radio-group>
      </FormItem>
      <FormItem label="Input Number" path="inputNumberValue">
        <n-input-number v-model:value="model.inputNumberValue" />
      </FormItem>
      <FormItem label="Time Picker" path="timePickerValue">
        <n-time-picker v-model:value="model.timePickerValue" />
      </FormItem>
      <FormItem label="Slider" path="sliderValue">
        <n-slider v-model:value="model.sliderValue" :step="5" />
      </FormItem>
      <FormItem label="Transfer" path="transferValue">
        <n-transfer
          v-model:value="model.transferValue"
          :options="generalOptions"
        />
      </FormItem>
      <FormItem label="Nested Path" :show-feedback="false">
        <n-grid :cols="2" :x-gap="24">
          <FormItem path="nestedValue.path1">
            <n-input
              placeholder="Nested Path 1"
              v-model:value="model.nestedValue.path1"
            />
          </FormItem>
          <FormItem path="nestedValue.path2">
            <n-select
              placeholder="Nested Path 2"
              :options="generalOptions"
              v-model:value="model.nestedValue.path2"
            />
          </FormItem>
        </n-grid>
      </FormItem>
    </FormWrap>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { FormWrap, FormItem } from '@/components/form';
const model = ref({
  inputValue: null,
  textareaValue: null,
  selectValue: null,
  multipleSelectValue: null,
  datetimeValue: null,
  nestedValue: {
    path1: '',
    path2: ''
  },
  switchValue: false,
  checkboxGroupValue: null,
  radioGroupValue: null,
  radioButtonGroupValue: null,
  inputNumberValue: null,
  timePickerValue: null,
  sliderValue: 0,
  transferValue: null
});
const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  (v) => ({
    label: v,
    value: v
  })
);
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
function handleValidateButtonClick(e) {
  e.preventDefault();
  formRef.value.validate((errors) => {
    if (!errors) {
      message.success('验证成功');
    } else {
      console.log(errors);
      message.error('验证失败');
    }
  });
}
</script>
