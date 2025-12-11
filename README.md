# 🍞 C-Toast

A beautiful, customizable toast notification system for Vue 3 with Tailwind CSS.

[![npm version](https://badge.fury.io/js/c-toast.svg)](https://www.npmjs.com/package/c-toast)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 Beautiful design with Tailwind CSS
- ⚡ Auto-close with customizable duration
- 🎭 Multiple types (success, error, warning, info)
- 📱 Fully responsive
- 🪶 Lightweight and performant
- 🔧 Easy to use composable API
- 🌊 Smooth animations
- 🎯 TypeScript support (coming soon)

## 📦 Installation

```bash
npm install c-toast
```

Or with yarn:

```bash
yarn add c-toast
```

Or with pnpm:

```bash
pnpm add c-toast
```

## 🚀 Quick Start

### 1. Import and register the plugin

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import CToast from 'c-toast';
import 'c-toast/style.css';

const app = createApp(App);
app.use(CToast);
app.mount('#app');
```

### 2. Add CToastContainer to your App.vue

```vue
<template>
  <div id="app">
    <CToastContainer />
    <router-view />
  </div>
</template>
```

### 3. Configure Tailwind CSS

Add to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/c-toast/**/*.{vue,js,ts}"
  ],
  // ... rest of config
}
```

## 💡 Usage

### Using the Composable (Recommended)

```vue
<script setup>
import { useCToast } from 'c-toast';

const ctoast = useCToast();

const showSuccess = () => {
  ctoast.success('Operation completed successfully!');
};

const showError = () => {
  ctoast.error('An error occurred!', 5000); // Custom duration
};

const showWarning = () => {
  ctoast.warning('Warning message');
};

const showInfo = () => {
  ctoast.info('Information message');
};

// Custom toast
const showCustom = () => {
  ctoast.addToast('Custom message', 'success', 4000);
};
</script>

<template>
  <button @click="showSuccess">Show Success</button>
  <button @click="showError">Show Error</button>
  <button @click="showWarning">Show Warning</button>
  <button @click="showInfo">Show Info</button>
</template>
```

### Using Global Property

```vue
<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const showToast = () => {
  proxy.$ctoast.success('Hello from C-Toast! 🍞');
};
</script>
```

### Using Inject

```vue
<script setup>
import { inject } from 'vue';

const ctoast = inject('ctoast');

const showToast = () => {
  ctoast.success('Hello from inject! 🍞');
};
</script>
```

### Integration with Inertia.js

Perfect for Laravel + Inertia.js projects:

```vue
<script setup>
import { useCToast } from 'c-toast';
import { useForm } from '@inertiajs/vue3';
import { watch } from 'vue';

const ctoast = useCToast();
const form = useForm({ name: '', email: '' });

watch(() => form.recentlySuccessful, (success) => {
  if (success) {
    ctoast.success('Form submitted successfully!');
  }
});

watch(() => form.hasErrors, (hasErrors) => {
  if (hasErrors) {
    ctoast.error('Please fix the errors in the form');
  }
});
</script>
```

## 📖 API Reference

### useCToast()

Returns an object with the following methods:

| Method | Parameters | Description | Default Duration |
|--------|-----------|-------------|------------------|
| `success(message, duration?)` | `message: string`, `duration?: number` | Show success toast | 3000ms |
| `error(message, duration?)` | `message: string`, `duration?: number` | Show error toast | 4000ms |
| `warning(message, duration?)` | `message: string`, `duration?: number` | Show warning toast | 3500ms |
| `info(message, duration?)` | `message: string`, `duration?: number` | Show info toast | 3000ms |
| `addToast(message, type, duration?)` | `message: string`, `type: string`, `duration?: number` | Show custom toast | 3000ms |
| `removeToast(id)` | `id: number` | Remove specific toast | - |
| `clear()` | - | Clear all toasts | - |

### Toast Types

- `success` - Green themed success message
- `error` - Red themed error message
- `warning` - Yellow themed warning message
- `info` - Blue themed info message

## 🎨 Customization

### Custom Position

Override the default top-right position:

```css
/* In your global CSS */
.c-toast-container {
  /* Bottom right */
  bottom: 1rem;
  top: auto;
  
  /* Top left */
  left: 1rem;
  right: auto;
  
  /* Bottom left */
  bottom: 1rem;
  left: 1rem;
  top: auto;
  right: auto;
}
```

### Custom Styling

You can override toast styles using Tailwind or custom CSS:

```css
/* Make toasts wider */
.c-toast {
  min-width: 400px !important;
}

/* Custom colors */
.c-toast.success {
  @apply bg-emerald-50 border-emerald-300;
}
```

## 🤝 Examples

### Form Validation

```vue
<script setup>
import { useCToast } from 'c-toast';
import { ref } from 'vue';

const ctoast = useCToast();
const email = ref('');

const validateForm = () => {
  if (!email.value) {
    ctoast.error('Email is required');
    return false;
  }
  
  if (!email.value.includes('@')) {
    ctoast.warning('Please enter a valid email');
    return false;
  }
  
  ctoast.success('Form is valid!');
  return true;
};
</script>
```

### API Calls

```vue
<script setup>
import { useCToast } from 'c-toast';

const ctoast = useCToast();

const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    ctoast.success('Data loaded successfully!');
  } catch (error) {
    ctoast.error('Failed to load data');
  }
};
</script>
```

## 📄 License

MIT

## 🐛 Bug Reports

Found a bug? Please report it on [GitHub Issues](https://github.com/yourusername/c-toast/issues).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⭐ Show Your Support

If you like C-Toast, please give it a star on [GitHub](https://github.com/yourusername/c-toast)!

---

Made with ❤️ and 🍞
