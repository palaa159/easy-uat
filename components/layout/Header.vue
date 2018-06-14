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
    <div 
      v-lazy:background-image="`https://cms.makerstation.in.th/wp-content/uploads/2018/06/store-1.jpeg`"
      v-if="hero" 
      class="hero-image _w-100pct _bgrp-nrp _bgpst-ct">
      <div class="_pst-rlt _zid-1 _dp-f _fdrt-cl _h-100pct">
        <MenuNav 
          :light="light"
          class="_f-1"
        />
        <!-- Search -->
        <div class="_f-5 _dp-f _alit-ct">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="_tal-ct _cl-white _lh-100pct">สินค้าดี มีประโยชน์</h2>
              </div>
            </div>
            <div class="row _jtfct-ct">
              <div class="col-12 col-md-10 _mgt-24px _mgbt-32px">
                <form 
                  class="_dp-f _w-100pct _alit-ct" 
                  @submit.stop.prevent="submit">
                  <!-- <h5 class="_f-1">ค้นหา: </h5> -->
                  <div class="bio-input _f-4 _f-6-md">
                    <input 
                      v-model="searchKeyword"
                      class="_fs-4 _h-48px _bdrd-0px" 
                      type="text" 
                      placeholder="ไซโคลน, เลื่อย, ปากกา">
                  </div>
                  <button 
                    type="submit" 
                    class="_f-1 _h-48px bio-button -dark">ค้นหา</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="_f-1"/>
      </div>

    </div>
    <div 
      v-else 
      class="menu-wrapper">
      <MenuNav 
        :light="light"
        class="_f-1"
      />
    </div>
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
    },
    light: {
      type: Boolean,
      default: false
    },
    hero: {
      type: Boolean,
      default: false
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
.menu-wrapper {
  background-color: rgba(40, 40, 40, 1);
}
.hero-image {
  height: 400px;
  position: relative;
  z-index: 0;
  &::after {
    background: linear-gradient(
      to bottom,
      rgba(40, 40, 40, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
}
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
