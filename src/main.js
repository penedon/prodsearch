import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { FontAwesomeIcon } from '@/plugins/fontAwesome'

const app = createApp(App)

app.use(store)
   .use(router)
   .use(i18n)
   .use(FlagIcon)
   .component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
