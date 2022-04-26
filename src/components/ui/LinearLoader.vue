<script>
export default {
    name: 'linear-loader',
}
</script>

<template>
    <div class="loader">
        <div class="loader-bold"></div>
        <div class="loader-light"></div>
    </div>
</template>

<style scoped>
    .loader {
        margin-top: 20px;
        max-width: 300px;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;

        height: 7px;
        border-radius: 5px;
        border: 1px solid var(--color-platinum-gray);
    }

    .loader>* {
        border-radius: 5px;
    }

    .loader-bold {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
        z-index: 2;
        top: 0;
        left: 100%;
        width: 100%;

        background-color: var(--color-main-accent-transparent);

        animation: loader-bold 2s ease-in-out infinite;
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

    .loader-light {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
        z-index: 1;
        top: 0;
        left: 100%;
        width: 100%;

        background-color: var(--color-main-layer);
        animation: loader-light 2s ease-in-out infinite;
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