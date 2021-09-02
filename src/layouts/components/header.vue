<template>
  <n-layout-header class="app-header" bordered>
    <div class="nav">
      <!-- start -->
      <!-- 搜索 -->
      <n-icon size="20" v-if="!searchShow" @click="handerSearch">
        <Search />
      </n-icon>
      <n-auto-complete
        v-if="searchShow"
        style="width: 140px"
        :options="options"
        v-model:value="searchValue"
        @select="searchSelect"
        @blur="searchShow = false"
        #="{ handleInput, handleBlur, handleFocus, value }"
      >
        <n-input
          type="input"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :value="value"
          placeholder="搜索"
          ref="inputInstRef"
        />
      </n-auto-complete>
      <!-- 色彩模式 -->
      <n-icon size="20" @click="() => setTheme(!theme)">
        <Sunny v-if="theme" />
        <Moon v-if="!theme" />
      </n-icon>
      <!-- 未读消息 -->
      <n-icon size="20"><ClipboardOutline /></n-icon>
      <!-- 头像以及用户菜单 -->
      <n-dropdown
        size="small"
        trigger="hover"
        placement="bottom-end"
        :options="userOptions"
        :show-arrow="true"
        @select="$router.push"
      >
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
      <!-- end -->
    </div>
  </n-layout-header>
</template>
<script setup>
import { searchNode } from '@/router/export.js';
import { Search, Moon, Sunny, ClipboardOutline } from '@vicons/ionicons5';
import { inject, ref, computed, nextTick } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const theme = inject('theme');
const setTheme = inject('setTheme');
// 搜索框相关
const inputInstRef = ref(null);
const searchShow = ref(false);
const searchValue = ref('');
const options = computed(() =>
  searchNode.filter((item) => item.label.search(searchValue.value) > -1)
);
const searchSelect = (path) => {
  router.push(path);
  searchValue.value = '';
};
const handerSearch = async () => {
  searchShow.value = 1;
  await nextTick();
  inputInstRef.value.focus();
};
// 用户相关
const userOptions = [
  {
    label: '用户中心',
    key: '/admin/user'
  }
];
</script>

<style lang="scss">
.app-header {
  height: 64px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  .n-switch.n-switch--active .n-switch__rail {
    background: #000;
  }
  .nav {
    display: flex;
    align-items: center;
    > * {
      margin: 0 5px;
    }
  }
}
</style>
