<script>
export default {
    name: 'search-field',
    data: () => ({
        focused: false,
        searchText: "",
        inputElement: null
    }),
    methods: {
        onInputFocused() {
            this.focused = !this.focused
        },
        onInput(e) {
            this.searchText = e.target.value
            this.$emit('update:modelValue', this.searchText)
        },
        expandSearch() {
            let input = this.inputElement
            if (!this.focused) {
                input.focus()
            }
        }
    },
    mounted() {
        this.inputElement = this.$refs.inputElement
    }
}
</script>

<template>
    <div ref="wrapperElement" class="search-field" :class="{'on-focus': focused}">
        <input
            ref="inputElement"
            class="search-input"
            type="search"
            placeholder="Что ищем?..."
            :value="searchText"
            @input="onInput"
            @focus="onInputFocused"
            @blur="onInputFocused"
        >
        <round-button :variant="`submit`" @click="expandSearch">Найти</round-button>
    </div>

</template>

<style scoped>
    .search-field {
        box-sizing: border-box;

        position: absolute;
        right: 0;
        display: flex;
        transform: translateY(-50%);
        
        width: fit-content;
        border: 1px solid var(--color-main-accent);
        border-radius: 20px;
        background-color: var(--color-main-accent);

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
        background-color: var(--color-main-foreground);
        /* transition-property: min-height, width, margin, background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out; */
    }

    .search-input:focus {
        width: 300px;
    }

    .search-field>.button {
        border: none;
        border-radius: 30px;
    }

    @media screen and (max-width: 860px) {
      .search-field .search-input {
        /* display: none; */
        padding-left: 0px;
        padding-right: 0px;
        width: 0px;
      }

      .search-field.on-focus .search-input {
        /* display: block; */
        width: 300px;
        padding: 10px!important;
        padding-left: 30px!important;
        padding-right: 30px!important;
      }
    }
</style>