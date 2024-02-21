<script setup>
import { onMounted, ref } from "vue";

let input = ref(null);
onMounted(() => {
  input.value.addEventListener("focus", changeBorderColor);
});

function changeBorderColor() {
  input.value.style.border = "10px solid purple";
}
</script>

<template>
  <input ref="input" />
</template>

<style scoped></style>
