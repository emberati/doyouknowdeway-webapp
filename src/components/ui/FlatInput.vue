<script>
export default {
  name: 'flat-input',
  props: {
    modelValue: undefined
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value)
    }
  }
}
</script>

<template>
  <input
    class="flat-input"
    :value="modelValue"
    @input="onInput">
</template>

<style scoped>
.flat-input {
  width: 100%;

  padding: 10px;
  padding-left: 0;
  padding-right: 0;
  box-sizing: border-box;

  font-weight: 500;

  border: none;
  border-bottom: 1px solid var(--color-main-accent);
  box-shadow: 0 0 0 0 var(--color-main-layer);
  outline: none;
  background-color: var(--color-main-foreground);

  transition: .3s ease;
}

.flat-input:focus {
  box-shadow: 0 5px 0 0 var(--color-main-layer);
}
</style>