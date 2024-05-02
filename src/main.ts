import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './css/style.css'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)

app.mount('#app')
