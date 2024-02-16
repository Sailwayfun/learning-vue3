<script>
export default {
  name: 'greeting-words',
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  props: {
    age: {
      type: Number,
      validator(value) {
        return value > 0
      }
    }
  }
}
</script>

<template>
  <h3 v-if="age < 18">You are too young to have a drink!</h3>
  <h3 v-else>Hi, do you wanna have a drink?</h3>
  <p>{{ msg }}</p>
</template>

<style scoped>
p {
  color: red;
}
</style>
