<script>
export default {
  name: 'form-input',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    placeholder: {
      type: undefined,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: undefined,
      required: true
    }
  },
  methods: {
    onUpdate(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<template>
  <label :for="id">{{label}}</label>
  <flat-input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :modelValue="modelValue"
    @update:modelValue="onUpdate"
    />
</template>

<style scoped>
  label {
    display: block;
    font-weight: 700;
  }
  input {
    font-weight: 400;
  }
</style>