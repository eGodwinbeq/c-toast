<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-50 flex flex-col items-end space-y-3">
      <TransitionGroup name="c-toast">
        <CToastItem
            v-for="toast in toasts"
            :key="toast.id"
            :message="toast.message"
            :type="toast.type"
            :duration="toast.duration"
            :toast-id="toast.id"
            @close="removeToast(toast.id)"
        />
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import {useCToast} from '../composables/useCToast';
import CToastItem from './CToastItem.vue';

const {toasts, removeToast} = useCToast();
</script>

<style scoped>
.c-toast-enter-active {
  transition: all 0.3s ease-out;
}

.c-toast-leave-active {
  transition: all 0.3s ease-in;
}

.c-toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.c-toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.c-toast-move {
  transition: transform 0.3s ease;
}
</style>