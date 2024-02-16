<script>
export default {
  name: 'greeting-words',
  data() {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<template>
  <p>{{ msg }}</p>
</template>

<style scoped>
p {
  color: red;
}
</style>
