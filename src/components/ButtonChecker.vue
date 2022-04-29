<script>
export default {
    name: 'button-checker',
    // emits: ['checked'],
    props: {
        options: {
            type: Array[String],
            required: true
        },
        // modelValue: {
        //     type: Array[String],
        //     required: true
        // }
    },
    data: () => ({
        selected: [],
    }),
    methods: {
        check(element) {
            let option = element.textContent
            this.selected.push(option)
            element.classList.add('checked')
            console.log('checked', this.selected)
        },
        uncheck(element) {
            let option = element.textContent
            this.selected = this.selected.filter(e => e != option)
            element.classList.remove('checked')
            console.log('checked', this.selected)
        },
        onClick(e) {
            let option = e.target.textContent
            
            if (this.selected.indexOf(option) == -1) {
                this.check(e.target)
            } else {
                this.uncheck(e.target)
            }
            // this.$emit('update:modelValue', this.selected)
        }
    }
}
</script>

<template>
    <div class="button-checker">
        <round-button
            v-for="option in options"
            @click="onClick"
        >{{ option }}</round-button>
    </div>
</template>

<style scoped>
    .button-checker {
        display: flex;
    }

    .round-button {
        margin-right: 20px;
    }

    .round-button.checked {
        color: var(--color-main-foreground)!important;
        background-color: var(--color-main-accent)!important;
    }
</style>