<template>
  <div class="_pdv-8px _pdv-12px-md">
    <div class="container">
      <!-- Desktop Menu -->
      <div 
        v-if="items.length" 
        class="row _dp-n _dp-f-md _alit-ct">
        <!-- Left Menu -->
        <div class="col-3">
          <nuxt-link 
            to="/" 
          >
            <div class="logo _h-32px _bgrp-nrp _bgs-ct _bgpst-l"/>
          </nuxt-link>
        </div>
        <!-- Center Menu -->
        <div class="col-7 _dp-f _jtfct-spbtw">
          <div 
            v-for="(x, i) in items" 
            :key="i" 
            @mouseover="x.isSubMenuShowing = true"
            @mouseout="x.isSubMenuShowing = false">
            <nuxt-link 
              :to="x.path"
              exact
              active-class="_fw-600 _opct-100"
              class="_tal-ct menu-link _fw-400 _fs-5 _cl-white"
            >
              {{ x.title }}
            </nuxt-link>
            <!-- MakerStore Dropdowns -->
            <DesktopDropDownMenu 
              v-if="x.subMenu && x.isSubMenuShowing"
              :menus="x.subMenu"
            />
          </div>
        </div>
        <!-- Right Menu -->
        <div class="col-2 _tal-r">
          <nuxt-link 
            to="/contact" 
            active-class="_fw-600 _opct-100"
            class="_tal-ct menu-link _fw-400 _cl-white _fs-5"
            exact>
            ติดต่อเรา
          </nuxt-link>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div class="row _dp-n-md">
        <nuxt-link 
          to="/" 
          class="col">
          <div class="logo _bgrp-nrp _bgs-ct _bgpst-l"/>
        </nuxt-link>
        <!-- Search -->
        <!-- <div class="col">
          <div class="bio-input">
            <input type="text">
          </div>
        </div> -->
        <div class="col _dp-f _jtfct-fe _alit-ct">
          <button
            :class="{'-open' : $store.state.menu.isShowing}"
            class="bio-button _pd-0px _zid-1 _bgcl-tpr _bdcl-tpr hamberger-container _w-32px _h-32px _dp-f _jtfct-fe"
            @click="$store.commit('menu/SET_MOBILE_MENU', !$store.state.menu.isShowing)"
          >
            <div class="hamberger-btn"/>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <scale-transition 
      class="_pst-f _l-0px _t-0px _w-100pct _zid-1" 
      origin="top right">
      <div 
        v-show="$store.state.menu.isShowing" 
        class="mobile-menu _bgcl-black" 
      >
        <div 
          v-if="items.length" 
          class="_h-100pct _pdv-64px _pdh-24px">
          <div 
            v-for="(x, i) in items" 
            :key="i"
            class="menu-item"
          >
            <nuxt-link 
              :to="x.path">
              <h3 class="bio-link -white _pdv-4px">{{ x.title }}</h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </scale-transition>
  </div>
</template>

<script>
import DesktopDropDownMenu from '~/components/extras/DesktopDropdownMenu'
export default {
  components: {
    DesktopDropDownMenu
  },
  props: {
    light: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: []
  }),
  created() {
    this.items = JSON.parse(JSON.stringify(this.$store.state.menu.primaryMenu))
  }
}
</script>


<style lang="scss" scoped>
@import 'assets/styles/variables';

.mobile-menu {
  height: 100vh;
  z-index: 9;
}

.menu-container {
  width: 220px;
}

.menu-item {
  // border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
  transition: 0.15s;
  h3 {
    line-height: 2.5rem;
    // border-bottom: 2.5px solid $purple;
  }
}
.menu-link {
  opacity: 0.5;
  transition: 0.15s;
  font-family: 'Kanit', sans-serif;
  font-size: 1rem;
  // color: #787878;
}
.logo {
  background-image: url('~/assets/images/logo-white.png');
  height: 32px;
  margin: 0 auto;
}
.gradient-text {
  background: linear-gradient($magenta, $purple);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.hamberger-container {
  z-index: 4 !important;
  &.-open {
    .hamberger-btn {
      background: transparent;
      &::before {
        width: 33px;
        top: 0px;
        transform: rotate(-45deg);
        transition: 0.2s;
        background: #fff;
      }

      &::after {
        width: 33px;
        top: 0px;
        transform: rotate(45deg);
        transition: 0.2s;
        background: #fff;
      }
    }
  }
  .hamberger-btn {
    width: 33px;
    height: 2px;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    transition: 0.2s;

    &::before {
      width: 28px;
      position: absolute;
      height: 2px;
      background: #fff;
      border-radius: 8px;
      content: ' ';
      top: -9px;
      right: 0px;
      transition: 0.2s;
    }

    &::after {
      position: absolute;
      width: 28px;
      height: 2px;
      background: #fff;
      border-radius: 8px;
      content: ' ';
      top: 9px;
      right: 0px;
      transition: 0.2s;
    }
  }
}
</style>