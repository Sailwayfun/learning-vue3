<template>
  <button @click="incrementCountBy10">+</button>
</template>

<script setup>
const emit = defineEmits(["increment"]);

function incrementCountBy10() {
  emit("increment", 10);
}
</script>

<style scoped></style>
