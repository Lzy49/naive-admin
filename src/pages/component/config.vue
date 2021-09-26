<template>
  <div id="form">
    <n-card>
      <n-form
        :model="model"
        :rules="rules"
        ref="formRef"
        label-placement="top"
      >
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="8" label="Input" path="inputValue">
            <n-input placeholder="Input" v-model:value="model.inputValue" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Textarea" path="textareaValue">
            <n-input
              placeholder="Textarea"
              v-model:value="model.textareaValue"
              type="textarea"
              :autosize="{
                minRows: 3,
                maxRows: 5
              }"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Select" path="selectValue">
            <n-select
              placeholder="Select"
              :options="generalOptions"
              v-model:value="model.selectValue"
            />
          </n-form-item-gi>
          <n-form-item-gi
            :span="8"
            label="Multiple Select"
            path="multipleSelectValue"
          >
            <n-select
              placeholder="Select"
              :options="generalOptions"
              v-model:value="model.multipleSelectValue"
              multiple
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Datetime" path="datetimeValue">
            <n-date-picker
              type="datetime"
              v-model:value="model.datetimeValue"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Switch" path="switchValue">
            <n-switch v-model:value="model.switchValue" />
          </n-form-item-gi>
          <n-form-item-gi
            :span="8"
            label="Checkbox Group"
            path="checkboxGroupValue"
          >
            <n-checkbox-group v-model:value="model.checkboxGroupValue">
              <n-space>
                <n-checkbox value="Option 1">Option 1</n-checkbox>
                <n-checkbox value="Option 2">Option 2</n-checkbox>
                <n-checkbox value="Option 3">Option 3</n-checkbox>
              </n-space>
            </n-checkbox-group>
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Radio Group" path="radioGroupValue">
            <n-radio-group
              v-model:value="model.radioGroupValue"
              name="radiogroup1"
            >
              <n-space>
                <n-radio value="Radio 1">Radio 1</n-radio>
                <n-radio value="Radio 2">Radio 2</n-radio>
                <n-radio value="Radio 3">Radio 3</n-radio>
              </n-space>
            </n-radio-group>
          </n-form-item-gi>
          <n-form-item-gi
            :span="8"
            label="Radio Button Group"
            path="radioGroupValue"
          >
            <n-radio-group
              v-model:value="model.radioGroupValue"
              name="radiogroup2"
            >
              <n-radio-button value="Radio 1">Radio 1</n-radio-button>
              <n-radio-button value="Radio 2">Radio 2</n-radio-button>
              <n-radio-button value="Radio 3">Radio 3</n-radio-button>
            </n-radio-group>
          </n-form-item-gi>
          <n-form-item-gi
            :span="8"
            label="Input Number"
            path="inputNumberValue"
          >
            <n-input-number v-model:value="model.inputNumberValue" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Time Picker" path="timePickerValue">
            <n-time-picker v-model:value="model.timePickerValue" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Slider" path="sliderValue">
            <n-slider v-model:value="model.sliderValue" :step="5" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Transfer" path="transferValue">
            <n-transfer
              style="width: 100%"
              v-model:value="model.transferValue"
              :options="generalOptions"
            />
          </n-form-item-gi>
          <n-form-item-gi
            :span="4"
            label="Nested Path"
            path="nestedValue.path1"
          >
            <n-cascader
              placeholder="Nested Path 1"
              v-model:value="model.nestedValue.path1"
              :options="cascaderOptions"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="4" path="nestedValue.path2">
            <n-select
              placeholder="Nested Path 2"
              :options="generalOptions"
              v-model:value="model.nestedValue.path2"
            />
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </n-card>
    <n-card>
      <n-space justify="end">
        <n-button type="primary"> 提交 </n-button>
        <n-button> 重置 </n-button>
      </n-space>
    </n-card>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const name = ref('');
const current = ref(1);

const model = ref({
  inputValue: null,
  textareaValue: null,
  selectValue: null,
  multipleSelectValue: null,
  datetimeValue: null,
  nestedValue: {
    path1: null,
    path2: null
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
</script>
<style lang="scss">
#form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: start;
  height: 100%;
  box-sizing: border-box;
  > div:first-child {
    flex: 1;
  }
}
</style>
