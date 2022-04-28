<script>
export default {
    name: 'linear-loader',
    props: {
        variant: String
    }
}
</script>

<template>
    <div class="linear-loader" :class="variant? variant : ''">
        <div class="loader-bold line"></div>
        <div class="loader-light line"></div>
    </div>
</template>

<style scoped>
    .linear-loader {
        position: relative;
        box-sizing: border-box;
        overflow: hidden;

        height: 7px;
        border-radius: 5px;
        border: 1px solid var(--color-grim-gray);
        height: 5px;
    }

    .linear-loader>* {
        border-radius: 5px;
    }

    .line {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
        
        top: 0;
        left: 100%;
        width: 100%;
    }

    .loader-bold {
        z-index: 2;
        background-color: var(--color-main-accent-transparent);
        animation: loader-bold 1.5s ease-in-out infinite;
    }

    .loader-light {
        z-index: 1;
        background-color: var(--color-main-layer);
        animation: loader-light 1.5s ease-in-out infinite;
    }

    .linear-loader.flat {
        border: none;
        border-radius: 0;
    }

    @keyframes loader-bold {
        0% {
            left: 0%;
            width: 0%;
        }

        50% {
            left: 50%;
            width: 50%;
        }

        100% {
            left: 100%;
            width: 0%;
        }
    }

    @keyframes loader-light {
        0% {
            left: 0%;
            width: 0%;
        }

        50% {
            left: 0%;
            width: 100%;
        }

        100% {
            left: 100%;
            width: 0%;
        }
    }
</style>