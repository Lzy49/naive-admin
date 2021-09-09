<template>
  <cTable
    v-model:search-data="search.data"
    :search-rules="search.rules"
    :table-data="data"
    :table-columns="columns"
    :table-pages="{}"
    :tableOptions="{
      // scrollX: 1800
    }"
  >
    <template #search>
      <cSearchItem span="2" label="日期" path="date">
        <n-date-picker
          style="width: 100%"
          type="datetimerange"
          v-model:value="search.data.date"
        />
      </cSearchItem>
      <cSearchItem span="1" label="姓名" path="name">
        <n-Input v-model:value="search.data.name">12</n-Input>
      </cSearchItem>
      <cSearchItem span="1" label="手机号" path="phone">
        <n-Input v-model:value="search.data.phone">12</n-Input>
      </cSearchItem>
      <cSearchItem span="1" label="年纪" path="age">
        <n-Input v-model:value="search.data.age">12</n-Input>
      </cSearchItem>
    </template>
    <template #other>
      <n-Button round class="bt">
        <n-icon><ArrowForwardCircle /></n-icon>&nbsp; 去其他页面
      </n-Button>
      <n-Button round class="bt">
        <n-icon><CloudDownload /></n-icon>&nbsp; 下载
      </n-Button>
    </template>
  </cTable>
</template>
<script setup>
import { ArrowForwardCircle, CloudDownload } from '@vicons/ionicons5';
import { ref, reactive, h } from 'vue';
import { cTable, cSearchItem } from '@/components/table/base.js';
import { NButton, useMessage } from 'naive-ui';
import { useRouter } from 'vue-router';
import { NAnchor } from 'naive-ui';
const gridItemCount = ref(10);
const router = useRouter();
const search = reactive({
  data: {
    date: null,
    name: '',
    phone: '',
    age: ''
  },
  rules: {
    phone: {
      required: true,
      trigger: ['blur', 'input'],
      message: '必须输入手机号'
    }
  }
});
const message = useMessage();
const data = [
  {
    pic: 'https://himg.bdimg.com/sys/portraitn/item/public.1.d6a9bc67.ndcCG_2rCjUUVVToEqBRCA',
    name: '张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞',
    url: 'https://www.baidu.com',
    state: true,
    tag: ['标签1', '标签2', '标签3'],
    other: '其他信息',
    address: '中国 上海 人民广场',
    sex: '男'
  }
];
const columns = [
  {
    type: 'selection',
    fixed: 'left'
  },
  {
    title: '微信头像',
    type: 'img',
    align:'center',
    key: 'pic'
  },
  {
    title: '姓名',
    key: 'name',
    type: 'ellipsis',
    width: 100
  },
  {
    title: '个人网站',
    key: 'url',
    type: 'link'
  },
  {
    title: '在职状态',
    key: 'state',
    type: 'state'
  },
  {
    title: '标签',
    key: 'tag',
    type: 'tag'
  },
  {
    title: '其他',
    key: 'other',
    type: 'description',
    options: {
      data: [
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '性别',
          key: 'sex'
        }
      ]
    }
  },
  {
    title: '操作',
    type: 'bts',
    options: [
      {
        title: '删除',
        type: 'error',
        hander(raw) {
          message.info(`删除${raw.name}成功`);
        }
      },
      {
        title: '编辑',
        type: 'error',
        hander(raw) {
          router.push('configPage');
        }
      }
    ]
  }
];
</script>
