<script setup>
import { ref } from "vue";
import Increment from "./components/Increment.vue";
let count = ref(0);
function incrementCountBy10(num) {
  count.value += num;
}
</script>

<template>
  <input type="text" v-model="count" />
  <Increment @increment="incrementCountBy10" />
</template>

<style scoped></style>
