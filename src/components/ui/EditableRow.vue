<script>
export default {
  name: 'editable-row',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: true
    },
    variant: {
      type: String,
      required: false,
    }
  },
  data: () => ({
    focused: false
  })
}
</script>

<template>
  <div class="info-row"
    :class="
      focused? 'focus' : '',
      variant? variant : 'regular',
      disabled? 'disabled': ''
    ">
    <label :for="id" class="row-title">
      <slot></slot>
    </label>
    <input
      :id="id"
      class="invisible-input"
      :class="variant"
      :type="type"
      :value="value"
      :disabled="disabled"
      @focus="focused = true"
      @blur="focused = false">
  </div>
</template>

<style scoped>
  .info-row {
      /* padding-top: 5px;
      padding-bottom: 5px; */
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0;
      height: 30px;
      margin-bottom: 5px;
      padding-bottom: 5px;
  }

  

  .row-title {
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 700;
  }

  .invisible-input {
    /* min-width: 300px; */
    outline: none;
    border: none;
    height: 100%;
    width: auto;
    text-align: right;
    background-color: transparent;
  }

  /* VARIANT REGULAR */
.info-row.regular {
  border-bottom: 2px solid var(--color-main-accent);
  transition: box-shadow .2s ease;
}

.info-row.regular.focus {
  box-shadow: 0 5px 0 0 var(--color-main-layer);
}

  /* VARIANT LATENT */
  .info-row.latent {
    border-bottom: 2px solid var(--color-main-accent);
    transition: box-shadow .2s ease;
  }

  .info-row.latent.focus {
    box-shadow: 0 5px 0 0 var(--color-main-layer);
  }
  .info-row.latent.disabled {
    border-bottom: 2px solid transparent;
    transition: box-shadow .2s ease;
    box-shadow: 0 5px 0 0 transparent;
  }

  .latent input,
  .latent label {
    color: var(--color-main-foreground)!important;
  }
</style>