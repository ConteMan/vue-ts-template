import { createApp } from 'vue'

import '@unocss/reset/tailwind.css'
import './style.css'
import 'uno.css'

import type { Router } from 'vue-router'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router as Router)
  .mount('#app')
