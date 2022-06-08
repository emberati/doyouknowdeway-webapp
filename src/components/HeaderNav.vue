<script>
import NavButton from '@/components/NavButton'
import { useGlobalStore } from '@/store/global'
export default {
    name: 'header-nav',
    components: {
        NavButton
    },
    props: {
        login: String,
        loading: Boolean,
        rentsNotifications: Number
    },
    data: () => ({
        searchText: '',
        hover: false,
        selection: Object,
        hoveredElement: Object,
        authorized: false,
    }),
    methods: {
        search(data) {
            this.$emit('update:modelValue', data)
        },
        resizeSelection() {
            this.selection.style.width = `${this.hoveredElement.offsetWidth}px`
            this.selection.style.left = `${this.hoveredElement.offsetLeft}px`
        },
        onNavButtonHover(e) {
            this.hoveredElement = e
            this.resizeSelection()
        },
        onHeaderResize() {
            console.log('resized')
            this.resizeSelection()
        },
        profileAction() {
            if (this.login) {
                this.$router.push('/profile')
            } else {
                const global = useGlobalStore()
                global.showAuthDialog()
            }
        }
    },
    computed: {
        profileLabel() {
            return this.login || 'Войти'
        },
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.onHeaderResize()
        })
        this.selection = this.$refs.selection
    },
}
</script>

<template>
  <div class="header-nav"
    :class="{'authorized': authorized}"
    @resize="onHeaderResize">
    <div class="header-nav-outer container">
      <div class="header-nav-inner content">
        <nav>
          <nav-button
            :icon="'icon-profile'"
            @hover="onNavButtonHover"
            @click="profileAction"
          >{{profileLabel}}</nav-button>
          <nav-button
            :icon="'icon-rents'"
            :link="'/rents'"
            :notifications="rentsNotifications"
            @hover="onNavButtonHover"
          >Мои аренды</nav-button>
          <nav-button
            :icon="'icon-catalog'"
            :link="'/catalog'"
            @hover="onNavButtonHover"
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
        position: fixed;
        z-index: 5;
        width: 100%;
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
        position: relative;
    }

    .selection {
        content: "";
        position: absolute;
        z-index: 3;
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

