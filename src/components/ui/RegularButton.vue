<script>
export default {
    name: 'regular-button',
    props: {
        style: String
    }
}
</script>

<template>
    <button class="button" 
        type="button"
        :class="style ? style : `regular`"
    >
        <slot>Click Me</slot>
    </button>
</template>

<style scoped>
    .button {
        padding: 10px;
        padding-left: 30px;
        padding-right: 30px;

        box-sizing: border-box;
        width: min-content;

        cursor: pointer;
        user-select: none;
        outline: none;

        font-family: 'Montserrat';
        text-align: center;
        border: 1px solid transparent;
        background-color: transparent;
        border-radius: 15px;
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
        box-shadow: 0 0 0 5px var(--color-main-layer)!important;
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
        box-shadow: 0 0 0 5px var(--color-main-layer)!important;
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
</style>