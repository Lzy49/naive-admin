<template>
  <n-page-header
    style="margin-bottom: var(--appPadding)"
    subtitle="详情副标题详情副标题详情副标题详情副标题详情副标题详情副标题详情副标题详情副标题"
    title="详情"
  >
  </n-page-header>
  <n-grid x-gap="12" :cols="8">
    <n-gi :span="7">
      <div class="light-green" id="box1">
        <div class="warp">
          <n-card id="survey" size="small" title="概况" :bordered="false">
            <n-skeleton text v-if="loading" :repeat="6" animated />
            <n-grid :cols="5" v-else>
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
          </n-card>
          <n-card title="信息" id="box2">
            <n-skeleton text v-if="loading" :repeat="6" />
            <n-descriptions v-else label-placement="left" :column="5">
              <n-descriptions-item>
                <template #label>早餐</template>
                苹果
              </n-descriptions-item>
              <n-descriptions-item label="早午餐">苹果</n-descriptions-item>
              <n-descriptions-item label="午餐">苹果</n-descriptions-item>
              <n-descriptions-item label="晚餐">苹果</n-descriptions-item>
              <n-descriptions-item label="正餐">苹果</n-descriptions-item>
              <n-descriptions-item label="夜宵">苹果</n-descriptions-item>
              <n-descriptions-item label="苹果" :span="5"
                >苹果</n-descriptions-item
              >
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
              <n-descriptions-item label="苹果" :span="3"
                >苹果</n-descriptions-item
              >
            </n-descriptions>
          </n-card>
          <n-card title="表格" id="box3" size="small" :bordered="false">
            <n-skeleton text v-if="loading" :repeat="6" />
            <n-data-table
              v-else
              :columns="columns"
              :data="data"
              :pagination="pagination"
            />
          </n-card>
          <n-card title="tabs" id="box4" size="small" :bordered="false">
            <n-skeleton text v-if="loading" :repeat="6" />
            <n-tabs type="line" v-else>
              <n-tab-pane name="oasis" tab="Oasis">
                <n-data-table
                  :columns="columns"
                  :data="data"
                  :pagination="pagination"
                />
              </n-tab-pane>
              <n-tab-pane name="the beatles" tab="the Beatles"
                >Hey Jude</n-tab-pane
              >
              <n-tab-pane name="jay chou" tab="周杰伦">七里香</n-tab-pane>
            </n-tabs>
          </n-card>
          <n-card title="时间轴" id="box5" size="small" :bordered="false">
            <n-skeleton text v-if="loading" :repeat="6" />
            <n-timeline v-else>
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
          </n-card>
        </div>
      </div>
    </n-gi>
    <n-gi :span="1" class="anchor-nav">
      <n-anchor position="absolute" :trigger-top="50" :top="88">
        <n-anchor-link @click="to(1)" title="概况" />
        <n-anchor-link @click="to(2)" title="信息" />
        <n-anchor-link @click="to(3)" title="表格" />
        <n-anchor-link @click="to(4)" title="tabs" />
        <n-anchor-link @click="to(5)" title="时间轴" />
      </n-anchor>
    </n-gi>
  </n-grid>
</template>
<script setup>
import { ref, reactive } from 'vue';
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1000);

import { h, defineComponent } from 'vue';
import { NTag, NButton, useMessage } from 'naive-ui';
const to = (num) => {
  console.log(num)
  document.getElementById('box' + num).scrollIntoView({
    behavior:'smooth'
  });
};
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
<style>
.warp {
  display: grid;
  gap: 16px;
  grid-template-columns: 100%;
}
.anchor-nav{
  width: 10%;
  position: fixed;
  top: 140px;
  right: 0;
}
</style>
