<script>
export default {
  name: 'fixed-dialog',
}
</script>

<template>
  <div class="fixed-dialog">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .fixed-dialog {
    z-index: 10;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-color: var(--color-backdrop-shadow);
    backdrop-filter: blur(2px);
  }

  .dialog-content {
    /* min-height: 500px;
    min-width: 300px; */
    margin: auto;
    box-sizing: border-box;

    background-color: var(--color-main-foreground);
    border-radius: 20px;
    border: 1px solid var(--color-main-accent);
    box-shadow: 0 0 0 5px var(--color-main-layer);
  }
</style>