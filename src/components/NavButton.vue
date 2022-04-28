<script>
export default {
    name: 'nav-button',
    emits: ['hover'],
    props: {
        icon: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    data: () => ({
        button: Object
    }),
    methods: {
        onMouseEnter(e) {
            this.$emit('hover', this.button)
        },
    },
    mounted() {
        window.addEventListener('load', () => {
            this.button = this.$refs.button
        })
    }
}
</script>

<template>
<!-- <div class="nav-button-wrapper"> -->
    <button
      ref="button"
      type="button"
      class="nav-button button"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @click="$router.push(link)"
    >
      <i :class="icon"></i>
      <span>
        <slot>Icon Button</slot>
      </span>
    </button>
    <div class="underline"></div>
<!-- </div> -->
</template>

<style scoped>
    [class^="icon-"] {
        font-size: 20px;
        margin-right: 10px;
    }
    .nav-button {
        padding-left: 5px;
        padding-right: 5px;
        display: flex;
        height: 100%;
        text-align: center;

        transition-duration: .3s;
        transition-timing-function: ease-in-out;
        transition-delay: .3;
    }

    .nav-button:hover {
        background-color: var(--color-main-layer);
    }
    
    .nav-button:hover>* {
        /* color: var(--color-main-foreground); */
    }

    .nav-button>* {
        color: var(--color-main-accent);
        margin-top: auto;
        margin-bottom: auto;
    }
</style>