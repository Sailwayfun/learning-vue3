<template>
  <div>{{ number }}</div>
  <div>Double</div>
  <p>{{ double }}</p>
  <button @click="increment">Increment</button>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <!-- <p>{{ somePrimitive }}</p> -->
  <label>Reverse String Generator</label>
  <div>
    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>
  </div>
</template>

<script setup>
import { useNumber } from "./hooks/number";
import { usePhrase } from "./hooks/phrase";
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
onBeforeMount(() => {
  console.log(Date.now(), "onBeforeMount()");
});

onMounted(() => {
  console.log(Date.now(), "onMounted()");
});

const { number, increment, double } = useNumber();
const { phrase, reversedPhrase } = usePhrase();

const user = reactive({
  name: "John",
  age: 20,
});

const { name, age } = toRefs(user);

setTimeout(() => {
  user.name = "Luis";
}, 3000);
</script>
