// ============================================
// FILE: src/index.js (Main Entry Point)
// ============================================
import CToastContainer from './components/CToastContainer.vue';
import CToast from './components/CToast.vue';
import CToastItem from './components/CToastItem.vue';
import { useCToast } from './composables/useCToast';

export { CToastContainer, CToast, CToastItem, useCToast };

export default {
    install(app, options = {}) {
        // Register components globally
        app.component('CToastContainer', CToastContainer);
        app.component('CToast', CToast);

        // Provide toast functionality globally
        const ctoast = useCToast();
        app.config.globalProperties.$ctoast = ctoast;
        app.provide('ctoast', ctoast);
    }
};
