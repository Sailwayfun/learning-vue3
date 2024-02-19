<template>
  <div>{{ number }}</div>
  <button @click="increment">Increment</button>
  <button @click="incrementPrimitive">Increment Reactive Primitive</button>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <p>{{ somePrimitive }}</p>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let number = ref(0);

    function increment() {
      number.value++;
    }

    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    let somePrimitive = reactive(3);

    function incrementPrimitive() {
      somePrimitive++;
    }

    return {
      number,
      increment,
      incrementPrimitive,
      ...toRefs(user),
      somePrimitive,
    };
  },
};
</script>
