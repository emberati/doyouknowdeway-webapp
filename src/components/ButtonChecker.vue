<script>
export default {
    name: 'button-checker',
    emits: ['checked'],
    props: {
        options: {
            type: Array[String],
            required: true
        },
    },
    data: () => ({
        checked: [],
    }),
    methods: {
        check(element) {
            let option = element.textContent
            this.checked.push(option)
            element.classList.add('checked')
            // console.log('checked', this.checked)
        },
        uncheck(element) {
            let option = element.textContent
            this.checked = this.checked.filter(e => e != option)
            element.classList.remove('checked')
            // console.log('checked', this.checked)
        },
        onClick(e) {
            let option = e.target.textContent
            
            if (this.checked.indexOf(option) == -1) {
                this.check(e.target)

            } else {
                this.uncheck(e.target)
            }
            this.$emit('checked', this.checked)
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