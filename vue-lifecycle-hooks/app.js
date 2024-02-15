let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    };
  },
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message);
  },
  created() {
    console.log('created() function called!', this.message);
  },
  beforeMount() {
    console.log('beforeMount() function called!', this.$el);
  },
  mounted() {
    console.log('mounted() function called!', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called!');
  },
  updated() {
    console.log('updated() funcction called!');
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!');
  },
  unmounted() {
    console.log('unmounted() function called!');
  }
});

vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)

const vm2 = Vue.createApp({
  data() {
    return {
      message: "Test!"
    };
  },
  render() {
    return Vue.h("h1", this.message)
  }
});

vm2.mount("#app2");