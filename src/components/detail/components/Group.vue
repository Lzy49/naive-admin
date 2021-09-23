<template>
  <n-page-header
    style="margin-bottom: var(--appPadding)"
    :subtitle="props.subtitle"
    :title="props.title"
  >
  </n-page-header>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="30"
      :width="240"
      show-trigger="arrow-circle"
      content-style="padding: 24px;"
      bordered
    >
      <p>海淀桥 海淀桥 海淀桥 海淀桥 海淀桥</p>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
  </n-layout>

  <n-grid x-gap="12" :cols="8">
    <n-gi :span="7">
      <div class="light-green" id="box1">
        <div id="detail-wrap">
          <slot></slot>
        </div>
      </div>
    </n-gi>
    <n-gi :span="1" id="detail-anchor-nav">
      <n-anchor>
        <n-anchor-link
          v-for="item of nav"
          :key="item.id"
          @click="to(item.id)"
          :title="item.title"
        />
      </n-anchor>
    </n-gi>
  </n-grid>
</template>
<script setup>
import { ref, provide, toRef } from 'vue';
const nav = ref([]);
provide('nav', nav);
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: true
  }
});
const loading = toRef(props, 'loading');
provide('loading', loading);
const to = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
};
</script>

<style>
#detail-wrap {
  display: grid;
  gap: 16px;
  grid-template-columns: 100%;
}
#detail-anchor-nav {
  width: 10%;
  position: fixed;
  top: 140px;
  right: 0;
}
</style>
