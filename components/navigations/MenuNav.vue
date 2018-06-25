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
        <div class="col _dp-f _jtfct-fe _alit-ct">
          <div 
            class="_dp-ilb hbg-container _pdv-8px _pdh-24px _cs-pt" 
            @click="$store.commit('menu/SET_MOBILE_MENU', !$store.state.menu.isShowing)">
            <div>
              <div 
                class="menu icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <scale-transition 
      class="_pst-asl _l-0px _t-0px _w-100pct _zid-1" 
      origin="top right">
      <div 
        v-show="$store.state.menu.isShowing" 
        class="mobile-menu _bgcl-white" 
      >
        <div class="_dp-f _jtfct-fe _pdv-8px _pdh-16px">
          <div 
            class="_dp-ilb hbg-container _pdv-16px _pdh-24px _cs-pt" 
            @click="$store.commit('menu/SET_MOBILE_MENU', !$store.state.menu.isShowing)">
            <div 
              :class="{menu: !$store.state.menu.isShowing, close: $store.state.menu.isShowing}"
              class="icon" />
          </div>
        </div>
        <div 
          v-if="items.length" 
          class="_h-100pct _dp-f _jtfct-spbtw _fdrt-cl _pdt-16px _pdbt-128px">
          <div 
            v-for="(x, i) in items" 
            :key="i"
            class="menu-item"
          >
            <nuxt-link 
              :to="x.path"
              class="_cs-pt col _dp-f _jtfct-ct _alit-ct">
              <h3 class="_tal-ct bio-link -fancy">{{ x.title }}</h3>
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
  top: 32px;
  height: calc(100vh - 32px);
  z-index: 9;
}

.menu-container {
  width: 220px;
}

.icon,
.icon:before,
.icon:after,
.icon i,
.icon i:before,
.icon i:after {
  transition: all 0.1s ease;
}
.menu.icon {
  color: #fff;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: currentColor;
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 24px;
    height: 3px;
    background-color: currentColor;
  }
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 24px;
    height: 3px;
    background-color: currentColor;
  }
}
.close.icon {
  color: $blue;
  position: absolute;
  margin-top: 0;
  margin-left: 0;
  width: 21px;
  height: 21px;
}
.close.icon:before {
  content: '';
  position: absolute;
  top: 0px;
  width: 26px;
  height: 3px;
  background-color: currentColor;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.close.icon:after {
  content: '';
  position: absolute;
  top: 0px;
  width: 26px;
  height: 3px;
  background-color: currentColor;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
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
</style>