<template>
  <div>
    <CToast :message="message" :type="type" @close="handleClose"/>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted} from 'vue';
import CToast from './CToast.vue';

const props = defineProps({
  message: String,
  type: String,
  duration: Number,
  toastId: Number
});

const emit = defineEmits(['close']);

let timer;

const handleClose = () => {
  emit('close');
};

onMounted(() => {
  timer = setTimeout(() => {
    handleClose();
  }, props.duration);
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>