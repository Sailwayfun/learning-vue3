<template>
  <form>
    <div>
      <slot name="help">No help text</slot>
    </div>
    <div>
      <slot name="fields">No input fields</slot>
    </div>
    <div>
      <slot name="buttons">No buttons</slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "app-form",
};
</script>
