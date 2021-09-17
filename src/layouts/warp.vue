<template>
  <slot></slot>
</template>
<script setup>
import { useMessage } from 'naive-ui';
window.$message = useMessage();
</script>
