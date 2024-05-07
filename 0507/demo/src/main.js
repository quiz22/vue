import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalGomponent  from './components/GlobalGomponent.vue'

createApp(App).component('GlobalGomponent',GlobalGomponent).mount('#app')
