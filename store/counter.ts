
// import { acceptHMRUpdate } from 'pinia' 
interface CounterState {
  n: number
  myRef: string
}
export const useCounter = defineStore('counter', {
  state: (): CounterState => ({
    n: 5,
    myRef: 'hello'
  }),
  actions: {
    increment() {
      this.n++
    }
  },
  persist: true,
})

