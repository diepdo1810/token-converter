import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import BaseDropDown from "@/components/UI/BaseDropDown.vue";


const app = createApp(App);
app.component('base-drop-down', BaseDropDown)

app.mount('#app');
