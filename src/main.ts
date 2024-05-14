// import './assets/main.css'
// 
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// 
// import App from './App.vue'
// import router from './router'
// 
// const app = createApp(App)
// 
// app.use(createPinia())
// app.use(router)
// 
// app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//	Development utilities
import myUtil from "./components/MyUtil"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
const vuetify = createVuetify({ components, directives })

/* ----------------------------------------------------------------------------- */
const app = createApp(App)

//	Defining global data and functions -- This is discouraged.
app.config.globalProperties.gMsg = 
"This is a Glob Msg"
app.config.globalProperties.gFunc = 
	(msg:string, value:any = "") => { console.log(`%c${msg}`, "color: cyan;", value) },

// Development utility functions - user inject to implement
app.provide('log', myUtil.log)
app.provide('bar', myUtil.bar)
app.provide('whitebar', myUtil.whitebar)
app.provide('redbar', myUtil.redbar)
app.provide('bluebar', myUtil.bluebar)
app.provide('getNames', myUtil.getNames)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
