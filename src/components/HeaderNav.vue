<script>
import NavButton from '@/components/NavButton'
export default {
    name: 'header-nav',
    components: {
        NavButton
    },
    props: {
        loading: Boolean
    },
    data: () => ({
        searchText: '',
        hover: false,
        selection: Object,
        authorized: false,
    }),
    methods: {
        search(data) {
            this.$emit('update:modelValue', data)
        },
        onHover(e) {
            this.selection.style.width = `${e.offsetWidth}px`
            this.selection.style.left = `${e.offsetLeft}px`
        },
    },
    computed: {
        profileLabel() {
            const label = {
                false: 'Войти',
                true: 'Профиль'
            }
            return label[this.authorized]
        },
    },
    mounted() {
        this.selection = this.$refs.selection
    }
}
</script>

<template>
  <div class="header-nav" :class="{'authorized': authorized}" >
    <div class="header-nav-outer container">
      <div class="header-nav-inner content">
        <nav>
          <nav-button
            :icon="'icon-profile'"
            :link="'/profile'"
            @hover="onHover"
          >{{profileLabel}}</nav-button>
          <nav-button
            :icon="'icon-rents'"
            :link="'/rents'"
            @hover="onHover"
          >Мои аренды</nav-button>
          <nav-button
            :icon="'icon-catalog'"
            :link="'/catalog'"
            @hover="onHover"
          >Каталог</nav-button>
          <div class="selection" ref="selection"></div>
        </nav>
        <div class="search-wrapper">
            <search-field v-model="searchText" @update:modelValue="search"/>
        </div>
      </div>
    </div>
    <linear-loader v-show="loading" :variant="'flat'"/>
  </div>
</template>

<style scoped>
    nav {
        display: flex;
    }

    .header-nav {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        position: relative;
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

    .selection {
        content: "";
        position: absolute;
        bottom: -6px;
        height: 6px;
        width: 50px;
        background-color: transparent;
        
        transition-property: width, left, background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
    }

    nav:hover .selection {
        background-color: var(--color-main-accent);
    }
</style>

<style>
    .header-nav.authorized i.icon-profile {
        background-color: var(--color-main-layer);
        border-radius: 20px;
        box-shadow: 0 0 0 3px var(--color-main-layer);
    }
</style>

