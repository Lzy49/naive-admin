<template>
  <n-page-header
    style="margin-bottom: var(--appPadding)"
    :subtitle="props.subtitle"
    :title="props.title"
  >
  </n-page-header>
  <n-grid x-gap="12" :cols="8">
    <n-gi :span="7">
      <div class="light-green" id="box1">
        <div class="warp">
          <slot></slot>
        </div>
      </div>
    </n-gi>
    <n-gi :span="1" class="anchor-nav">
      <n-anchor position="absolute" :trigger-top="50" :top="88">
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
.warp {
  display: grid;
  gap: 16px;
  grid-template-columns: 100%;
}
.anchor-nav {
  width: 10%;
  position: fixed;
  top: 140px;
  right: 0;
}
</style>
