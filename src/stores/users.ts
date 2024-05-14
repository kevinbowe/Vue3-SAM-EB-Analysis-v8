// src/stores/user.ts
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
import { log, log1, log2 , log3, log4, log5, log6, log7 } from "../components/MyConsoleUtil"
import { enter, enter0, enter1, enter2, enter3, enter4, enter5, enter6, enter7 } from "../components/MyConsoleUtil"
import { bar, whitebar, greybar, redbar, greenbar, orangebar } from "../components/MyConsoleUtil"
/* ----------------------------------------------------------------------------- */
// import { ref } from 'vue'
import { defineStore as definePiniaStore} from 'pinia'

//					Create the userStoreInit object
//					This sets all of the initial properties to the default values
const userStoreInit = {
// let userStoreInit = {
// 	'Active_Theme': 'light_custom',
// 	'Inactive_Theme': 'dark_custom',
// 
// 	'A_Theme':  'light_custom',
// 	'A_ThemeText': 'light_custom',
// 	'A_ThemeIcon': 'mdi-toggle-switch',
// 	'A_ThemeColor':'green',
// 
// 	'B_Theme': 'dark_custom',
// 	'B_ThemeText': 'dark_custom',
// 	'B_ThemeIcon': 'mdi-toggle-switch-off',
// 	'B_ThemeColor': 'red',

	'connected': false,
	'username':'blank',
	'preferred_username': 'blank',
	'email':'blank',
	'phone_number':'blank',
	'nickname':'blank',
	'sub':'blank'
} 

//				Fetch the current userStore in localStorage
const localStorage_userStore_KEY = localStorage.getItem("userStore_KEY")
if(localStorage_userStore_KEY !== null ) {
	const userStoreObj = JSON.parse(localStorage_userStore_KEY)

	// userStoreInit.Active_Theme =  userStoreObj.Active_Theme
	// userStoreInit.Inactive_Theme =  userStoreObj.Inactive_Theme

	// userStoreInit.A_Theme = userStoreObj.A_Theme
	// userStoreInit.A_ThemeText = userStoreObj.A_ThemeText
	// userStoreInit.A_ThemeIcon = userStoreObj.A_ThemeIcon
	// userStoreInit.A_ThemeColor = userStoreObj.A_ThemeColor

	// userStoreInit.B_Theme = userStoreObj.B_Theme
	// userStoreInit.B_ThemeText = userStoreObj.B_ThemeText
	// userStoreInit.B_ThemeIcon = userStoreObj.B_ThemeIcon
	// userStoreInit.B_ThemeColor = userStoreObj.B_ThemeColor

	userStoreInit.connected = userStoreObj.connected

	userStoreInit.username = userStoreObj.username
	userStoreInit.preferred_username = userStoreObj.preferred_username
	userStoreInit.email = userStoreObj.email
	userStoreInit.phone_number = userStoreObj.phone_number
	userStoreInit.nickname = userStoreObj.nickname
	userStoreInit.sub = userStoreObj.sub
} 

export const useUserPiniaStore = definePiniaStore("userPiniaStore", {
	state: () => {
		//			INITIALIZE the state: propertied based on the userStoreInit Object properties.
		return {
			// Active_Theme: userStoreInit.Active_Theme,
			// Inactive_Theme: userStoreInit.Inactive_Theme,

			// A_Theme: userStoreInit.A_Theme,
			// A_ThemeText: userStoreInit.A_ThemeText,
			// A_ThemeIcon: userStoreInit.A_ThemeIcon,
			// A_ThemeColor: userStoreInit.A_ThemeColor,

			// B_Theme: userStoreInit.B_Theme,
			// B_ThemeText: userStoreInit.B_ThemeText,
			// B_ThemeIcon: userStoreInit.B_ThemeIcon,
			// B_ThemeColor: userStoreInit.B_ThemeColor,

			connected: userStoreInit.connected,
			username: userStoreInit.username as string|undefined,
			preferred_username: userStoreInit.preferred_username as string|undefined,
			email: userStoreInit.email as string|undefined,
			phone_number: userStoreInit.phone_number as string|undefined,
			nickname: userStoreInit.nickname as string|undefined,
			sub: userStoreInit.sub as string|undefined,
		}
	},
	actions: {
		// Deletes all developer generated stores in 'userStore_KEY'
		deleteAllDevStores() { localStorage.removeItem('userStore_KEY') },

		// Deletes the ENTIRE storage object for that domain.
		clearAllStores() { localStorage.clear()}
	},
	getters: { 
	}
 });

