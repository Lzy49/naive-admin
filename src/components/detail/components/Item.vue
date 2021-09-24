<template>
  <n-card :id="id" size="small" :title="props.title">
    <n-skeleton text v-if="loading || props.loading" :repeat="6" animated />
    <slot v-else></slot>
  </n-card>
</template>
<script setup>
import { createHash } from '@/utils/hash.js';
import { inject } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  loading: { type: [Boolean] }
});
const nav = inject('nav');
const loading = inject('loading');
const id = createHash(10) + nav.value.length;
nav.value.push({
  id,
  title: props.title
});
</script>
