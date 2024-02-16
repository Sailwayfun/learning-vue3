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
  },
  computed: {
    customGreeting() {
      return this.age >= 18 ? 'Hi, do you wanna have a drink?' : 'You are to young to have a drink!'
    }
  }
}
</script>

<template>
  <h3>{{ customGreeting }}</h3>
  <p>{{ msg }}</p>
</template>

<style scoped>
p {
  color: red;
}
</style>
