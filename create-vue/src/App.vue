<script>
import Greeting from './components/Greeting.vue'
import User from './components/User.vue'

export default {
  name: 'App',
  components: { Greeting, User },
  data() {
    return {
      age: 20
    }
  },
  methods: {
    addAgeBy3(num) {
      this.age += num
    }
  }
}
</script>

<template>
  <p>Hey</p>
  <Greeting :age="age" />
  <User :age="age" @increment-age="addAgeBy3" @decrement-age="age--" />
  <!-- <button @click="age++">+</button>
  <button @click="age--">-</button> -->
</template>
