<script setup lang="ts">
import { ref, inject, getCurrentInstance } from "vue"
import { useUserPiniaStore } from "../stores/users"
import '@mdi/font/css/materialdesignicons.css'
import con from "../components/MyUtil"
import { fail } from "../components/MyConsoleUtil"
/* -------------------------------------------------------------------------- */
const piniaStore = useUserPiniaStore()
const cb = ref()
const cbLbl = ref("Unchecked")
const btnTxt = ref("Hello-Start")
/* -------------------------------------------------------------------------- */
const log:any = inject('log')
const bar:any = inject('bar')
const whitebar:any = inject('whitebar')
const redbar:any = inject('redbar')
const bluebar:any = inject('bluebar')
const getNames:any = inject('getNames')
/* -------------------------------------------------------------------------- */
const SelCb = () => {
			bar()
			log(`Enter myCheckbox ${cbLbl.value}`)

	cbLbl.value = cb.value ? "Unchecked" : "Checked"
	cb.value = !cb.value

			log(`Exit myCheckbox ${cbLbl.value}`)
}
/* -------------------------------------------------------------------------- */
const SelBtn = () => {
			bar()
			log(`Enter myBtn ${btnTxt.value}`)

	btnTxt.value = btnTxt.value === "Hello" ? "Goodbye" : "Hello"

			log(`Exit myBtn ${btnTxt.value}`)
}
/* ----------------------------------------------------------------------------- */
const localMsg = "my local message"	
const myObj = {"ONE": "one", "TWO": "two", "THREE": "THREE-Text"}

/* %%%%%%  On Page Load %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */


bluebar(`(inject(bluebar)) > HomeView.vue Executing`)
log(`(inject(log)) > HomeView.vue Executing -- ${localMsg} -- Value: `, myObj.THREE)
con.pass(`((import con) con.pass) > HomeView.vue Executing -- ${localMsg} -- Value: `, myObj.ONE)
fail(`(import {fail}) > HomeView.vue Executing -- ${localMsg} -- Value: `, myObj.TWO)
const gProps = getCurrentInstance()?.appContext.config.globalProperties

//			Reference the global message
log(`(gProps?.gMsg) > ${gProps?.gMsg}`)
//			Execute global function with static scring
gProps?.gFunc("(gProps?.gFunc(~)) String message")
//			Execute global function which displays global message reference
gProps?.gFunc(`(gProps?.gFunc( \${gProps?.gMsg} )) > ${gProps?.gMsg}`)


/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
</script>

<template>
		<div>
			<h5 class="d-flex justify-center" >( HomeView )</h5>
			<v-checkbox class="d-flex justify-center" :label="cbLbl" @click="SelCb" />
		
			<div class="d-flex justify-center">
				<v-btn :text="btnTxt" @click="SelBtn" />
			</div>

		</div>
</template>