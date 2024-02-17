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
    <template #help>
      <p>This is some help text.</p>
    </template>
    <template #fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template #buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
  <AppForm>
    <template #help>
      <p>Contact help text.</p>
    </template>
    <template #fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="phone" />
    </template>
    <template #buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
</template>
