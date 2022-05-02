<script>
export default {
    name: 'button-checker',
    emits: ['checked'],
    props: {
        options: {
            type: Array[Object],
            required: true
        },
    },
    data: () => ({
        checked: [],
    }),
    methods: {
        check(element, option) {
            this.checked.push(option)
            element.classList.add('checked')
            // console.log('checked', this.checked)
        },
        uncheck(element, option) {
            this.checked = this.checked.filter(e => e != option)
            element.classList.remove('checked')
            // console.log('checked', this.checked)
        },
        onClick(e) {
            let option = this.options.find(opt => parseInt(e.target.value) === opt.id)
            if (this.checked.indexOf(option) == -1) {
                this.check(e.target, option)
            } else {
                this.uncheck(e.target, option)
            }
            this.$emit('checked', this.checked)
        }
    }
}
</script>

<template>
    <div class="button-checker">
        <round-button
            :value="option.id"
            :key="option.id"
            v-for="option in options"
            @click="onClick"
        >{{ option.name }}</round-button>
    </div>
</template>

<style scoped>
    .button-checker {
        display: flex;
        flex-wrap: wrap;
    }

    .round-button {
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .round-button.checked {
        color: var(--color-main-foreground)!important;
        background-color: var(--color-main-accent)!important;
    }
</style>