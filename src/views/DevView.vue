<script setup lang="ts">
import { ref, inject, getCurrentInstance } from "vue"
import { useUserPiniaStore } from "../stores/users"

import '@mdi/font/css/materialdesignicons.css'
/* -------------------------------------------------------------------------- */
const log:any = inject('log')
const bar:any = inject('bar')
const whitebar:any = inject('whitebar')
const redbar:any = inject('redbar')
const bluebar:any = inject('bluebar')
const getNames:any = inject('getNames')
/* -------------------------------------------------------------------------- */
const piniaStore = useUserPiniaStore()

/* -------------------------------------------------------------------------- */
const localMsg = "my local message"
const myObj = {"ONE": "one", "TWO": "two", "THREE": "THREE-Text"}

/* %%%%%%  On Page Load %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
redbar(`inject(redbar) -- Dev Page`)
log(`DevView.vue Executing -- ${localMsg} -- Value: `, myObj.TWO)


const gProps = getCurrentInstance()?.appContext.config.globalProperties

const gMsg = gProps?.gMsg
const gFunc = gProps?.gFunc

log(`(gMsg) > ${gMsg}`)
gFunc(`(gFunc( \${gMsg} )) > ${gMsg}`)

////	THIS WORKS
import   { count, decrement, increment }  from "../composables/MyCompUtil"

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
</script>

<template>
	<div >
		<h5 class="d-flex justify-center" >( DevView )</h5>

		<v-row no-gutters class="mt-5">
			<v-col style="text-align:right;">
				<v-btn @click="increment">Increment</v-btn>
			</v-col>
			<v-col cols="1" class="d-flex justify-center"> {{ count }} </v-col>
			<v-col style="text-align:left;">
				<v-btn @click="decrement">Decrement</v-btn>
			</v-col>
		</v-row>
	</div>
</template>