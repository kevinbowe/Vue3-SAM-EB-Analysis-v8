<script setup lang="ts">
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
import { RouterLink, RouterView } from 'vue-router';
import { inject } from "vue"
import '@mdi/font/css/materialdesignicons.css'
import con from './components/MyUtil';
import { fail } from './components/MyConsoleUtil'
/* ----------------------------------------------------------------------------- */
const log:any = inject('log')
const bar:any = inject('bar')
const whitebar:any = inject('whitebar')
const redbar:any = inject('redbar')
const bluebar:any = inject('bluebar')
/* ----------------------------------------------------------------------------- */
const localMsg = "my local message"
const myObj = {"ONE": "one", "TWO": "two", "THREE": "THREE-Text"}

/* %%%%%%  On Page Load %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
bluebar(`(inject(bluebar)) > App.vue Executing`)
log(`( inject(log)) > App.vue Executing -- ${localMsg} -- Value: `, myObj.THREE)
con.pass(`((import con) con.pass) > App.vue Executing -- ${localMsg} -- Value: `, myObj.ONE)
fail(`(import {fail}) > App.vue Executing -- ${localMsg} -- Value: `, myObj.TWO)

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
</script>

<template>
	<header>
		<h1 style="text-align: center;">Vue3-SAM-EB-Analysis-v8</h1>
		<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
		<!-- <div class="wrapper">
			<HelloWorld msg="You did it!" />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div> -->
	</header>

	<RouterView />

	<nav>
		<RouterLink  to="/" > Home </RouterLink>
		<RouterLink  to="/dev" > Dev </RouterLink>
	</nav>

</template>

<style scoped>
/* header { line-height: 1.5; max-height: 100vh; } */
/* .logo { display: block; margin: 0 auto 2rem; } */

nav { width: 100%; font-size: 1rem; text-align: center; margin-top: 2rem; }
nav a:hover {background-color: lightcyan}
nav a.router-link-exact-active { color: var(--color-text); }
nav a.router-link-exact-active:hover { background-color: whitesmoke; }
nav a { display: inline-block; padding: 0 1rem; border-left: 1px solid var(--color-border); text-decoration: none; }

/* nav a:first-of-type { border: 0; } */
/* @media (min-width: 1024px) {
  header { display: flex; place-items: center; padding-right: calc(var(--section-gap) / 2); }
  .logo { margin: 0 2rem 0 0; }
  header .wrapper { display: flex; place-items: flex-start; flex-wrap: wrap; }
  nav { text-align: left; margin-left: -1rem; font-size: 1rem; padding: 1rem 0; margin-top: 1rem; }
} */
</style>
