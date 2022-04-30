<script>
export default {
    name: 'round-button',
    props: {
        variant: String
    }
}
</script>

<template>
    <button class="round-button button" 
        type="button"
        :class="variant ? variant : `regular`"
    >
        <slot>Click Me</slot>
    </button>
</template>

<style scoped>
    .button {
        border-radius: 20px;
    }

    .button:hover {
        transition: .3s ease-in-out;
    }

    /* BUTTON WHITE STYLE */

    .button.white {
        color: var(--color-main-foreground);
        border: 1px solid var(--color-platinum-gray);
    }

    .button.white:hover {
        background-color: var(--color-main-foreground);
        color: var(--color-main-accent);
        border: 1px solid white;
    }

    .button.white:focus {
        box-shadow: 0 0 0 5px var(--color-main-layer);
    }

    .button.white:active {
        color: var(--color-main-foreground);
        background-color: transparent;
    }

    /* BUTTON REGULAR STYLE */

    .button.regular {
        color: var(--color-main-accent);
        border: 1px solid var(--color-main-accent);
    }

    .button.regular:hover {
        background-color: var(--color-main-layer);
    }

    .button.regular:focus {
        box-shadow: 0 0 0 5px var(--color-main-layer);
    }

    .button.regular:active {
        color: var(--color-main-foreground);
        background-color: var(--color-main-accent);
    }

    /* BUTTON SUBMIT STYLE */

    .button.submit {
        color: var(--color-main-foreground);
        background-color: var(--color-main-accent);
        border: 1px solid var(--color-main-accent);
    }

    .button.submit:hover {
        /* color: var(--color-main-accent);
        background-color: var(--color-main-foreground); */
    }

    .button.submit:focus {
        box-shadow: 0 0 0 5px var(--color-main-layer);
    }

    .button.submit:active {
        color: var(--color-main-accent);
        background-color: var(--color-main-foreground);
    }

    /* BUTTON DANGER STYLE */

    .button.danger {
        color: var(--color-main-danger);
        border: 1px solid var(--color-main-danger);
    }

    .button.danger:hover {
        color: var(--color-main-foreground);
        background-color: var(--color-main-danger);
    }

    .button.danger:focus {
        box-shadow: 0 0 0 5px var(--color-main-danger-transparent);
    }

    .button.danger:active {
        color: var(--color-main-danger);
        background-color: transparent;
    }
</style>