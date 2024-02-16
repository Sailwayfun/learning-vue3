<template>
  <p>The User is {{ age }} years old</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
export default {
  name: 'user-user',
  props: ['age'],
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
