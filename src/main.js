import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import BaseDropDown from "@/components/UI/BaseDropDown.vue";
import { inject } from '@vercel/analytics';

inject();

const app = createApp(App);
app.component('base-drop-down', BaseDropDown)

app.mount('#app');
