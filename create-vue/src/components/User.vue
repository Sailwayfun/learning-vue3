<template>
  <p>The User is {{ age }} years old</p>
  <button @click="increment">+</button>
  <button @click="addAgeFn(3)">Add age Callback</button>
  <button @click="decrement">-</button>
</template>

<script>
export default {
  name: 'user-user',
  props: {
    age: {
      type: Number,
      validator(value) {
        return value > 0 && value < 130
      }
    },
    addAgeFn: Function
  },
  emits: ['increment-age', 'decrement-age'],
  methods: {
    increment() {
      this.$emit('increment-age', 2)
    },
    decrement() {
      this.$emit('decrement-age')
    }
  }
}
</script>
