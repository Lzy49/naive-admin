<template>
  <n-layout id="login">
    <n-layout-content>
      <n-layout id="login">
        <n-layout-header class="heander">
          <transition name="fade">
            <n-form
              v-if="formShow"
              ref="formRef"
              :rules="rules"
              :model="form"
              inline
            >
              <n-form-item path="username">
                <n-input
                  class="input"
                  v-model:value="form.username"
                  placeholder="用户名 (admin)"
                ></n-input>
              </n-form-item>
              <n-form-item path="password">
                <n-input
                  class="input"
                  placeholder="密码 (123456)"
                  type="password"
                  show-password-toggle
                  v-model:value="form.password"
                  :maxlength="8"
                ></n-input>
              </n-form-item>
              <n-button class="up-button" @click="update">登录</n-button>
              <n-button class="up-button" @click="formShow = false">
                取消
              </n-button>
            </n-form>
          </transition>
          <n-button v-if="!formShow" class="up-button" @click="formShow = true">
            登录
          </n-button>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;"> </n-layout-content>
      </n-layout>
    </n-layout-content>
  </n-layout>
</template>
<script setup>
import { login } from '@api/login';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import storage from '@/utils/storage.js';
const router = useRouter();
const formShow = ref(false);
const formRef = ref(null);
const form = reactive({
  username: '',
  password: ''
});
const rules = {
  username: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }
};
const update = () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      login(form)
        .then((res) => {
          storage.local.set('token', res.token);
          router.replace('/admin');
        })
        .catch(({ message }) => {
          console.log(message);
        });
    }
  });
};
</script>

<style lang="scss">
#login {
  height: 100vh;
  .heander {
    height: 84px;
    display: inline-flex;
    justify-content: flex-end;
    .n-form {
      width: auto;
    }
    .input {
      float: right;
      width: 200px;
      margin-right: 10px;
    }
    .up-button {
      align-self: center;
      margin-right: 10px;
    }
  }

  .fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
