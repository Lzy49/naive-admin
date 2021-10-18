<template>
  <div>
    <div id="upImg" inline>
      <n-space class="list" inline>
        <div class="item" :style="itemStyle" v-for="(item, index) of fileList">
          <img :src="item" v-if="fileTypeOf(item) === 'image'" />
          <video :src="item" v-if="fileTypeOf(item) === 'video'"></video>
          <div class="bts">
            <n-icon v-if="true" size="22" @click="preview(item)">
              <EyeOutline />
            </n-icon>
            <n-icon size="22" @click="del(index)"> <DeleteOutlined /> </n-icon>
          </div>
        </div>
        <div
          v-if="fileList.length < props.itemCount"
          class="item"
          :style="itemStyle"
        >
          <n-upload
            :action="props.action"
            :file-list-style="{ display: 'none' }"
            :multiple="true"
            :headers="uploadCofing.headers"
            @before-upload="beforeUpload"
            @finish="finish"
            class="up-bt"
          >
            <slot>
              <n-icon size="38" :depth="3"><CloudUpload /></n-icon>
            </slot>
          </n-upload>
        </div>
      </n-space>
    </div>

    <n-modal
      v-model:show="showModal"
      preset="card"
      title="预览"
      id="upImg-preview"
    >
      <video
        class="video"
        v-if="fileTypeOf(previewImageUrl) === 'video'"
        :src="previewImageUrl"
        controls="controls"
      ></video>
      <img
        class="img"
        v-if="fileTypeOf(previewImageUrl) === 'image'"
        :src="previewImageUrl"
      />
    </n-modal>
  </div>
</template>
<script setup>
import { uploadCofing, fileTypeOf } from './config';
import { CloudUpload, EyeOutline } from '@vicons/ionicons5';
import { DeleteOutlined } from '@vicons/antd';
import { ref, computed, toRef } from 'vue';
import { useThemeVars } from 'naive-ui';
import { useStore } from 'vuex';

const props = defineProps({
  itemStyle: Object, // item 样式
  itemCount: {
    // 能传几个文件
    type: [Number, String],
    default: uploadCofing.itemCount
  }, // 最大上传数
  action: {
    // 上传路由
    type: String,
    default: uploadCofing.action
  },
  fileList: {
    // 文件list
    type: Array,
    default: []
  },
  itemMaxSize: {
    // 文件最大值（单位M）
    type: Number,
    default: 10
  },
  itemTypes: {
    // 文件类型限制
    type: Array,
    default: ['jpeg', 'png', 'jpg']
  }
});
const emits = defineEmits('beforeUpload', 'update:fileList');
const fileList = toRef(props, 'fileList');
// 样式
const store = useStore();
const backgroundColor = computed(() => {
  return store.state.system.isDark
    ? 'rgba(255, 255, 255, 0.06)'
    : 'rgb(250, 250, 252)';
});
const themeVars = useThemeVars();
themeVars.value;
// 展示
const showModal = ref(false); // 暂时图片框
const previewImageUrl = ref(''); // 图片路径
function preview(url) {
  previewImageUrl.value = url;
  showModal.value = true;
}
// 删除
function del(index) {
  emits('update:fileList', [
    ...fileList.value.slice(0, index),
    ...fileList.value.slice(index + 1, fileList.value.length - 1)
  ]);
}
// 上传前
const beforeUpload = ({ file }) => {
  const fileInfo = file.file;
  // 限制类型
  if (props.itemTypes.length > 0) {
    const has = props.itemTypes.some((item) => {
      return file.file.type.includes(item);
    });
    if (!has) {
      window.$message.error(`只能上传${props.itemTypes}格式的文件，请重新上传`);
      return false;
    }
  }

  // 设置最大值，则判断
  if (props.itemMaxSize && fileInfo.size / 1024 / 1024 >= props.itemMaxSize) {
    window.$message.error(`上传文件最大值不能超过${props.itemMaxSize}M`);
    return false;
  }
  // 自定义的 beforeUpload
  if (typeof emits('beforeUpload', file) === 'boolean') {
    return emits('beforeUpload', file);
  }
  return true;
};
// 上传后
const finish = ({ event, file }) => {
  const res = JSON.parse(event.target.response);
  if (res.state === 0) {
    emits('update:fileList', [...fileList.value, res.data]);
  } else {
    window.$message.error(res.msg);
  }
};
</script>
<style lang="scss">
#upImg {
  width: 100%;
  .list {
    width: 100%;
    .item {
      position: relative;
      width: 88px;
      height: 88px;
      border: 1px dashed v-bind('themeVars.borderColor');
      background: v-bind('backgroundColor');
      border-radius: v-bind('themeVars.borderRadius');
      overflow: hidden;
      &:hover {
        border-color: v-bind('themeVars.primaryColor');
      }
      // 图片
      .bts {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba($color: #000000, $alpha: 0.5);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        transition: all 0.4s;
        &:hover {
          opacity: 1;
        }
        i {
          color: #fff;
          opacity: 0.5;
          &:hover {
            opacity: 1;
          }
        }
      }
      > img,
      video {
        width: 100%;
        height: 100%;
      }
      // 上传按钮
      .up-bt {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
}
#upImg-preview {
  width: 600px;
  .video,
  .img {
    width: 100%;
  }
}
</style>
