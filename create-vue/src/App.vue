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
  }
}
</script>

<template>
  <p>Hey</p>
  <Greeting :age="age" />
  <User :age="age" />
  <button @click="age++">+</button>
  <button @click="age--">-</button>
</template>
