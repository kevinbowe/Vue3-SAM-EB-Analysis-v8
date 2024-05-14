import { ref } from 'vue'

// ////	This works
const count = ref(0)
const	increment = () => {  count.value++ ; console.log(count.value) }
const decrement = () => { count.value-- ; console.log(count.value) }

export { count, increment, decrement }

