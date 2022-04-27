<script>
export default {
    name: 'button-switcher',
    props: {
        options: Array[String]
    },
    data: () => ({
        currentElement: null,
        lastElement: null,
        option: ''
    }),
    methods: {
        select(element) {
            this.lastElement = this.currentElement
            this.currentElement = element
            this.option = element.textContent
            this.currentElement.classList.add('selected')
            if (this.lastElement != this.currentElement) {
                this.lastElement?.classList.remove('selected')
            }
            this.$emit('update:modelValue', this.option)
        },
        onClick(e) {
            this.select(e.target)
        }
    },
    computed: {
        lintStyle() {
            if (this.currentElement) {
                let el = this.currentElement
                return {
                    'width': `${el.offsetWidth}px`,
                    'height': `${el.offsetHeight}px`,
                    'left': `${el.offsetLeft}px`,
                }
            } else return ''
            
        }
    },
    mounted() {
        window.addEventListener('load', () => {
            this.select(this.$refs.btn[0])
        })
    }
}
</script>

<template>
    <div class="button-switcher">
        <div class="switcher-outer">
            <button ref="btn"
                class="button switcher-inner"
                v-for="option in options"
                :disabled="false"
                @click="onClick"
            >{{ option }}</button>
            <div class="lint" :style="lintStyle"></div>
        </div>
    </div>
    
</template>

<style scoped>
    .button-switcher {
        box-sizing: border-box;
        overflow: hidden;
        width: fit-content;
        padding: 5px;
        border: 1px solid var(--color-grim-gray);
        border-radius: 30px;
    }

    .switcher-outer {
        position: relative;
        border-radius: 30px;
        background-color: var(--color-main-background);
    }

    .button.switcher-inner {
        position: relative;
        z-index: 2;
        color: var(--color-steel-gray);
        border-radius: 30px;
        transition: .4s ease-in-out;
    }

    .button.switcher-inner:hover {
        color: var(--color-main-accent);
        background-color: var(--color-main-layer);
    }

    .button.switcher-inner:focus {
        color: var(--color-main-accent);
        border-color: var(--color-main-accent);
        /* box-shadow: 0 0 0 5px var(--color-main-layer); */
    }

    .button.switcher-inner.selected {
        color: var(--color-main-foreground);
        background-color: transparent;
    }

    .lint {
        position: absolute;
        top: 0;
        border-radius: 30px;
        background-color: var(--color-main-accent);
        transition-property: width, left;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
    }
</style>