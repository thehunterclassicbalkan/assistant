import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { persistencePlugin } from './persistencePlugin'

import App from './App.vue'
import { piniaPersist } from './piniaPersist'
import router from './router'

// const pinia = createPinia()
// pinia.use(persistencePlugin)

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)

app.mount('#app')
