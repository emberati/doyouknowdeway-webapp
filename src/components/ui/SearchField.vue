<script>
export default {
    name: 'search-field',
    data: () => ({
        focused: false,
        searchText: ""
    }),
    methods: {
        onInputFocused() {
            this.focused = !this.focused
        },
        onInput(e) {
            this.searchText = e.target.value
            this.$emit('update:modelValue', this.searchText)
        }
    }
}
</script>

<template>
    <div class="search-field" :class="{'on-focus': focused}">
        <input class="search-input"
            type="search"
            placeholder="Что ищем?..."
            :value="searchText"
            @input="onInput"
            @focus="onInputFocused"
            @blur="onInputFocused"
        >
        <regular-button :style="`submit`">Найти</regular-button>
    </div>

</template>

<style scoped>
    .search-field {
        box-sizing: border-box;
        width: fit-content;
        border: 1px solid var(--color-main-accent);
        border-radius: 20px;
        background-color: var(--color-main-foreground);

        transition: box-shadow .2s ease-in-out;
    }

    .search-field.on-focus {
        box-shadow: 0 0 0 5px var(--color-main-layer);
    }

    .search-input {
        padding: 10px;
        padding-left: 30px;
        padding-right: 30px;

        width: 200px;

        outline: none;
        box-sizing: border-box;
        border: none;
        border-radius: 20px;

        transition: width .3s ease-in-out;
    }

    .search-input:focus {
        width: 300px;
    }

    .search-field>.button {
        border: none;
        border-radius: 30px;
    }
</style>