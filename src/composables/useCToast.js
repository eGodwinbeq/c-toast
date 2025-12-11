// ============================================
// FILE: src/composables/useCToast.js
// ============================================
import { ref } from 'vue';

const toasts = ref([]);
let toastIdCounter = 0;

export function useCToast() {
    const addToast = (message, type = 'info', duration = 3000) => {
        const id = ++toastIdCounter;
        toasts.value.push({ id, message, type, duration });
        return id;
    };

    const removeToast = (id) => {
        const index = toasts.value.findIndex(toast => toast.id === id);
        if (index > -1) {
            toasts.value.splice(index, 1);
        }
    };

    const success = (message, duration = 3000) => {
        return addToast(message, 'success', duration);
    };

    const error = (message, duration = 4000) => {
        return addToast(message, 'error', duration);
    };

    const warning = (message, duration = 3500) => {
        return addToast(message, 'warning', duration);
    };

    const info = (message, duration = 3000) => {
        return addToast(message, 'info', duration);
    };

    const clear = () => {
        toasts.value = [];
    };

    return {
        toasts,
        addToast,
        removeToast,
        success,
        error,
        warning,
        info,
        clear
    };
}
