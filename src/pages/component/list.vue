<template>
  <cList
    v-model:search-data="search.data"
    @on-search="getData"
    :search-rules="search.rules"
    :table-data="data"
    :table-columns="columns"
    :table-pages="{}"
    :table-options="{
      'scroll-x': 3000
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
  </cList>
</template>
<script setup>
import TableImage from '@/components/image.jsx';
import { TableEllipsis } from '@/components/list/Table/items.js';
import { ArrowForwardCircle, CloudDownload } from '@vicons/ionicons5';
import { reactive, h } from 'vue';
import { cList, cSearchItem } from '@/components/list/base.js';
import { useRouter } from 'vue-router';
import { NEllipsis } from 'naive-ui';
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
const data = [
  {
    key: 10,
    pic: 'https://himg.bdimg.com/sys/portraitn/item/public.1.d6a9bc67.ndcCG_2rCjUUVVToEqBRCA',
    name: '张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞张飞',
    url: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B9%F8%B0%FC%C8%E2&fr=ala&ala=1&alatpl=normal&pos=0',
    state: 0,
    tag: [
      '标签1',
      '标签2',
      '标签3',
      '标签1',
      '标签2',
      '标签3',
      '标签1',
      '标签2',
      '标签3',
      '标签1',
      '标签2',
      '标签3',
      '标签1',
      '标签2',
      '标签3',
      '标签1',
      '标签2',
      '标签3'
    ],
    other: '其他信息',
    address: '中国 上海 人民广场',
    sex: '男'
  }
];
const columns = [
  {
    type: 'selection',
    width: 10,
    fixed: 'left'
  },
  {
    title: '微信头像',
    type: 'img',
    align: 'center',
    width: 100,
    key: 'pic',
    fixed: 'left'
  },
  {
    title: '姓名',
    key: 'name',
    type: 'ellipsis',
    align: 'center',
    width: 100
  },
  {
    title: '个人网站',
    align: 'center',
    key: 'url',
    type: 'link',
    width: 100
  },
  {
    title: '在职状态',
    key: 'state',
    align: 'center',
    type: 'state',
    width: 100,
    options: [
      {
        text: '未知',
        color: 'gray'
      },
      {
        text: '在职',
        color: 'green'
      },
      {
        text: '离职',
        color: 'red'
      }
    ]
  },
  {
    title: '标签',
    key: 'tag',
    align: 'center',
    type: 'tag'
  },
  {
    title: '其他',
    key: 'other',
    align: 'center',
    type: 'description',
    options: [
      {
        title: '地址',
        key: 'address'
      },
      {
        title: '性别',
        key: 'sex'
      }
    ]
  },
  {
    title: '操作',
    type: 'bts',
    align: 'center',
    fixed: 'right',
    width: 150,
    options: [
      {
        title: '删除',
        type: 'error',
        hander(raw) {
          window.$message.info(`删除${raw.name}成功`);
        }
      },
      {
        title: '编辑',
        type: 'primary',
        hander(raw) {
          router.push('configPage');
        }
      }
    ]
  }
];
function getData() {
  fetch('/api/getUsers')
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
</script>
