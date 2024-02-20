<template>
  <div>{{ number }}</div>
  <div>Double</div>
  <p>{{ double }}</p>
  <button @click="increment">Increment</button>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <!-- <p>{{ somePrimitive }}</p> -->
  <label>Reverse String Generator</label>
  <div>
    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  watch,
  watchEffect,
  computed,
  onBeforeMount,
  onMounted,
} from "vue";
export default {
  name: "App",
  setup() {
    onBeforeMount(() => {
      console.log(Date.now(), "onBeforeMount()");
    });

    onMounted(() => {
      console.log(Date.now(), "onMounted()");
    });

    let number = ref(0);

    function increment() {
      number.value++;
    }

    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    // let somePrimitive = reactive(3);

    // function incrementPrimitive() {
    //   somePrimitive++;
    // }

    let phrase = ref("");
    let reversedPhrase = ref("");

    const double = computed(() => {
      return number.value * 2;
    });

    // watch(phrase, (newVal, oldVal) => {
    //   reversedPhrase.value = [...phrase.value].reverse().join("");
    // });

    watchEffect(() => {
      reversedPhrase.value = [...phrase.value].reverse().join("");
    });

    return {
      number,
      increment,
      // incrementPrimitive,
      ...toRefs(user),
      // somePrimitive,
      phrase,
      reversedPhrase,
      double,
    };
  },
};
</script>
