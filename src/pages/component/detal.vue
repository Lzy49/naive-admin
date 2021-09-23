<template>
  <Group
    title="详情"
    subtitle="详情副标题详情副标题详情副标题详情副标题详情副标题详情副标题详情副标题详情副标题"
    :loading="loading"
  >
    <Item title="概况">
      <n-grid :cols="5">
        <n-gi>
          <n-statistic label="正片" value="125 集" />
        </n-gi>
        <n-gi>
          <n-statistic label="嘉宾" value="22 位" />
        </n-gi>
        <n-gi>
          <n-statistic label="道歉" value="36 次" />
        </n-gi>
        <n-gi>
          <n-statistic label="话题" value="83 个" />
        </n-gi>
        <n-gi>
          <n-statistic label="参考链接" value="2,346 个" />
        </n-gi>
      </n-grid>
    </Item>
    <Item title="信息">
      <n-descriptions label-placement="left" :column="5">
        <n-descriptions-item>
          <template #label>早餐</template>
          苹果
        </n-descriptions-item>
        <n-descriptions-item label="早午餐">苹果</n-descriptions-item>
        <n-descriptions-item label="午餐">苹果</n-descriptions-item>
        <n-descriptions-item label="晚餐">苹果</n-descriptions-item>
        <n-descriptions-item label="正餐">苹果</n-descriptions-item>
        <n-descriptions-item label="夜宵">苹果</n-descriptions-item>
        <n-descriptions-item label="苹果" :span="5">苹果</n-descriptions-item>
        <n-descriptions-item label="苹果" :span="5">
          <n-space>
            <n-tag> 爱在西元前 </n-tag>
            <n-tag type="success"> 不该 </n-tag>
            <n-tag type="warning"> 超人不会飞 </n-tag>
            <n-tag type="error"> 手写的从前 </n-tag>
            <n-tag type="info"> 哪里都是你 </n-tag>
            <n-tag> 爱在西元前 </n-tag>
            <n-tag type="success"> 不该 </n-tag>
            <n-tag type="warning"> 超人不会飞 </n-tag>
            <n-tag type="error"> 手写的从前 </n-tag>
            <n-tag type="info"> 哪里都是你 </n-tag>
            <n-tag> 爱在西元前 </n-tag>
            <n-tag type="success"> 不该 </n-tag>
            <n-tag type="warning"> 超人不会飞 </n-tag>
            <n-tag type="error"> 手写的从前 </n-tag>
            <n-tag type="info"> 哪里都是你 </n-tag>
          </n-space>
        </n-descriptions-item>
        <n-descriptions-item label="苹果" :span="3">苹果</n-descriptions-item>
      </n-descriptions>
    </Item>
    <Item title="表格">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </Item>
    <Item title="tabs">
      <n-tabs type="line">
        <n-tab-pane name="oasis" tab="Oasis">
          <n-data-table
            :columns="columns"
            :data="data"
            :pagination="pagination"
          />
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="the Beatles">Hey Jude</n-tab-pane>
        <n-tab-pane name="jay chou" tab="周杰伦">七里香</n-tab-pane>
      </n-tabs>
    </Item>
    <Item title="时间轴" :loading="loading3">
      <n-timeline>
        <n-timeline-item content="啊" />
        <n-timeline-item
          type="success"
          title="成功"
          content="哪里成功"
          time="2018-04-03 20:46"
        />
        <n-timeline-item
          type="error"
          content="哪里错误"
          time="2018-04-03 20:46"
        />
        <n-timeline-item
          type="warning"
          title="警告"
          content="哪里警告"
          time="2018-04-03 20:46"
        />
        <n-timeline-item
          type="info"
          title="信息"
          content="是的"
          time="2018-04-03 20:46"
        />
      </n-timeline>
    </Item>
  </Group>
</template>
<script setup>
import { h } from 'vue';
import { NTag, NButton } from 'naive-ui';
import { Item, Group } from '@/components/detail';
import { ref, reactive } from 'vue';
const loading = ref(true);
const loading3 = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1000);
setTimeout(() => {
  loading3.value = false;
}, 4000);

const columns = reactive([
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    render(row) {
      const tags = row.tags.map((tagKey) => {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px'
            },
            type: 'info'
          },
          {
            default: () => tagKey
          }
        );
      });
      return tags;
    }
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(
        NButton,
        {
          size: 'small',
          onClick: () => window.$message.info('send mail to ' + row.name)
        },
        { default: () => 'Send Email' }
      );
    }
  }
]);

const data = reactive([
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]);
const pagination = reactive({
  pageSize: 10
});
</script>
