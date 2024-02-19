<template>
  <div>{{ number }}</div>
  <button @click="increment">Increment</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let number = ref(0);
    function increment() {
      number.value++;
    }
    return {
      number,
      increment,
    };
  },
};
</script>
