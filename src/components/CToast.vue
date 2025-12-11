<template>
  <div
      :class="[
      'flex items-start gap-3 p-4 rounded-lg border shadow-lg transition-all duration-300',
      toastClasses[type].bg,
      toastClasses[type].border
    ]"
      style="min-width: 320px; max-width: 420px;"
  >
    <!-- Icon -->
    <div class="flex-shrink-0">
      <component :is="iconComponent" :class="toastClasses[type].icon" class="w-5 h-5"/>
    </div>

    <!-- Message -->
    <div :class="['flex-1 text-sm font-medium', toastClasses[type].text]">
      {{ message }}
    </div>

    <!-- Close Button -->
    <button
        @click="$emit('close')"
        :class="['flex-shrink-0 hover:opacity-70 transition-opacity', toastClasses[type].icon]"
    >
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import {computed, defineEmits} from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  }
});

defineEmits(['close']);

const toastClasses = {
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-500',
    text: 'text-green-900'
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'text-red-500',
    text: 'text-red-900'
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: 'text-yellow-500',
    text: 'text-yellow-900'
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-500',
    text: 'text-blue-900'
  }
};

const iconComponent = computed(() => {
  const icons = {
    success: 'IconSuccess',
    error: 'IconError',
    warning: 'IconWarning',
    info: 'IconInfo'
  };
  return icons[props.type];
});
</script>

<!-- Icon Components (inline) -->
<script>
export const IconSuccess = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `
};

export const IconError = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `
};

export const IconWarning = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>
  `
};

export const IconInfo = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `
};
</script>