import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.component('AutoComplete', AutoComplete)
.mount('#app')
