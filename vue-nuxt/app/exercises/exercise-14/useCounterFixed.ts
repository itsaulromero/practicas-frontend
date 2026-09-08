import { ref } from 'vue'

export function useCounterFixed() {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return {
    count,
    increment,
  }
}