<script>
import AppForm from "./components/Appform.vue";

export default {
  name: "App",
  components: {
    AppForm,
  },
};
</script>

<template>
  <AppForm>
    <template v-slot:help>
      <p>This is some help text.</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
  <AppForm>
    <template v-slot:help>
      <p>Contact help text.</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="phone" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
</template>
