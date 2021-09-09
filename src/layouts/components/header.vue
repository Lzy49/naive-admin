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
      <n-icon size="20" @click="() => $store.commit('system/setTheme')">
        <Sunny v-if="$store.state.system.isDark" />
        <Moon v-if="!$store.state.system.isDark" />
      </n-icon>
      <!-- 未读消息 -->
      <n-badge :value="msgCount" align="center">
        <n-icon size="20" :color="$store.state.system.fontColor"
          ><ClipboardOutline
        /></n-icon>
      </n-badge>

      <!-- 头像以及用户菜单 -->
      <n-dropdown
        size="small"
        trigger="hover"
        placement="bottom-end"
        :options="userOptions"
        :show-arrow="true"
        @select="menuhander"
      >
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
      <Test></Test>
      <!-- end -->
    </div>

  </n-layout-header>
</template>
<script setup>
import Test from '@/test.jsx';
import { searchNode } from '@/router/export.js';
import { Search, Moon, Sunny, ClipboardOutline } from '@vicons/ionicons5';
import { ref, computed, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import storage from '@/utils/storage.js';
const router = useRouter();
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
// 消息相关
const msgCount = ref(10);
setTimeout(() => {
  msgCount.value = 0;
}, 1000);
// 用户相关
const userOptions = [
  {
    label: '用户中心',
    key: '/admin/user'
  },
  {
    label: '退出',
    key: 'logout'
  }
];
const menuhander = (key) => {
  if (key === 'logout') {
    storage.local.remove('token');
    router.replace('/login');
  }
};
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
