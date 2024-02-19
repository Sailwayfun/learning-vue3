<template>
  <div>{{ number }}</div>
  <button @click="increment">Increment</button>
  <!-- <button @click="incrementPrimitive">Increment Reactive Primitive</button> -->
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <!-- <p>{{ somePrimitive }}</p> -->
  <label>Reverse String Generator</label>
  <div>
    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from "vue";
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

    // let somePrimitive = reactive(3);

    // function incrementPrimitive() {
    //   somePrimitive++;
    // }

    let phrase = ref("");
    let reversedPhrase = ref("");

    watch(phrase, (newVal, oldVal) => {
      reversedPhrase.value = [...phrase.value].reverse().join("");
    });

    return {
      number,
      increment,
      // incrementPrimitive,
      ...toRefs(user),
      // somePrimitive,
      phrase,
      reversedPhrase,
    };
  },
};
</script>
