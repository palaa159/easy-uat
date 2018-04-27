<template>
  <header class="_zid-1">
    <!-- Bread, User, Cart -->
    <UserNav />
    <!-- Sticky -->
    <div 
      :class="{'_t-0px _dp-b': isNavSticky, 'hidden': !isNavSticky}" 
      class="sticky-nav _w-100pct">
      <UserNav />
    </div>
    <!-- Menu -->
    <MenuNav />
  </header>
</template>

<script>
  import MenuNav from '~/components/navigations/MenuNav'
  import UserNav from '~/components/navigations/UserNav'
  import db from 'debounce'
  export default {
    components: {
      MenuNav,
      UserNav,
    },
    data: () => ({
      menuItems: [],
      prevY: 0,
      isNavSticky: false
    }),
    created () {
      if (process.browser) { 
        window.addEventListener('scroll', db(this.handleScroll, 50));
      }
    },
    destroyed () {
      if (process.browser) { 
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
    methods: {
      handleScroll () {
        // console.log(window.scrollY)
        if (window.scrollY > 400) {
          this.isNavSticky = true
        } else {
          this.isNavSticky = false
        }
        this.prevY = window.scrollY
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sticky-nav {
    position: fixed;
    z-index: 1;
    transition: 0.5s;
    box-shadow: 0px -10px 20px 10px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    &.hidden {
      top: -200px;
    }
  }
</style>
