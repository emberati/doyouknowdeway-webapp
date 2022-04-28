<script>
export default {
    name: 'header-nav',
    data: () => ({
        searchText: ''
    }),
    methods: {
        search(data) {
            this.$emit('update:modelValue', data)
        }
    }
}
</script>

<template>
    <div class="header-nav">
        <div class="header-nav-outer container">
            <div class="header-nav-inner content">
                <nav></nav>
                <div class="search-wrapper"><search-field v-model="searchText" @update:modelValue="search"/></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header-nav {
        height: 60px;
        box-sizing: border-box;
        background-color: var(--color-main-foreground);
        border-bottom: 1px solid var(--color-main-accent);
        box-shadow: 0 0 0 5px var(--color-main-layer);
    }

    .header-nav-outer {
        height: 100%;
        display: flex;
    }

    .header-nav-inner {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .search-wrapper {
        margin-top: auto;
        margin-bottom: auto;
    }
</style>

