<template>
  <header class="_zid-1">
    <!-- Bread, User, Cart -->
    <!-- <UserNav /> -->
    <!-- Sticky -->
    <div 
      :class="{'sticky-nav': $store.state.menu.isUserSticky}" 
      class="_w-100pct">
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
    UserNav
  },
  props: {
    isSticky: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    menuItems: [],
    prevY: 0,
    isNavSticky: false
  }),
  created() {
    if (process.browser) {
      if (this.isSticky) {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      // console.log(window.scrollY)
      if (this.$store.state.menu.isUserMenuShowing && window.scrollY > 200) {
        this.$store.commit('menu/SET_USER_STICKY', true)
      } else {
        this.$store.commit('menu/SET_USER_STICKY', false)
      }
      this.prevY = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky-nav {
  position: fixed;
  z-index: 1;
  transition: 0.5s;
  box-shadow: 0px 1px 20px 10px rgba(0, 0, 0, 0.1);
  // border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  top: -200px;
  animation: menu-slide-down 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes menu-slide-down {
  from {
    top: -200px;
  }
  to {
    top: 0px;
  }
}
</style>
