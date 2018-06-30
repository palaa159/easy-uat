<template>
  <header :class="{'is-sticky': $store.state.menu.isMenuSticky}">
    <!-- Member -->
    <div class="member">
      <div  
        class="user-bar _pst-rlt _dp-f _alit-ct">
        <div class="container">
          <div 
            class="_dp-f _alit-ct user-control _jtfct-fe" 
          >
            <div 
              v-if="$store.state.menu.isUserMenuShowing" 
              class="_dp-f _alit-ct">
              <!-- User Control -->
              <nuxt-link 
                v-if="$store.state.auth.user === null"
                :to="`/login?redirect=${$route.path}`"
              >
                <span class="_fs-8">เข้าสู่ระบบ</span>
              </nuxt-link>
              <nuxt-link 
                v-if="$store.state.auth.user === null"
                to="/register" 
              >
                <span class="_fs-8">ลงทะเบียน</span>
              </nuxt-link>
              <nuxt-link 
                v-if="$store.state.auth.user"
                to="/profile/orders" 
              >
                <span class="_fs-8">แจ้งการชำระเงิน</span>
              </nuxt-link>
              <nuxt-link 
                v-if="$store.state.auth.user"
                to="/profile"
              >
                <img 
                  :src="$store.state.auth.user.avatar_urls && $store.state.auth.user.avatar_urls['24']" 
                  class="_bdrd-50pct _mgr-8px-md"
                  style="vertical-align: middle; height: 20px;"
                  alt="avatar">
                <span class="_dp-n _dp-ilb-md _fs-8">{{ $store.state.auth.user.email }}</span>
              </nuxt-link>
              <!-- Shopping cart with badge -->
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero -->
    <div 
      :style="`background-image: url(${heroImage})`" 
      :class="{'_h-at _bgcl-black': !heroImage, 'hero-image': heroImage}" 
      class="_bgs-cv _bgrp-nrp _bgpst-ct _dp-f _fdrt-cl">
      <div
        class="container">
        <div class="row _pdv-12px _alit-ct">
          <div class="col-12 _dp-f _jtfct-spbtw _alit-ct">
            <!-- Logo -->
            <div class="_w-256px">
              <nuxt-link to="/">
                <div 
                  v-lazy:background="require(`~/assets/images/logo-full-white.svg`)" 
                  class="_h-32px _h-48px-md _bgs-ct _bgrp-nrp"/>
              </nuxt-link>
            </div>
            <!-- Desktop Menu -->
            <div class="_dp-n _dp-f-md">
              <nuxt-link 
                v-scroll-reveal="{delay: 100 * i, origin: 'right'}" 
                v-for="(x, i) in menuItems" 
                :key="i" 
                :to="x.path"
                class="bio-link _mgl-48px _cl-white">
                <h6>{{ x.title }}</h6>
              </nuxt-link>
            </div>
            <!-- Mobile Menu -->
            <div class="_dp-f _dp-n-md _jtfct-fe">
              <button
                :class="{'-open' : isMenuOpen}"
                class="bio-button _pd-0px _bdcl-tpr _bgcl-tpr hamberger-container _w-32px _h-32px _dp-f _jtfct-fe"
                @click="isMenuOpen = !isMenuOpen"
              >
                <div class="hamberger-btn "/>
              </button>
              <!-- Menu drawer -->
              <div 
                v-if="isMenuOpen" 
                class="_r-0px _t-0px _w-100pct _h-100vh _pst-f _zid-1 curtain">
                <slide-x-right-transition>
                  <div
                    class="_w-100pct _pst-asl _h-100vh _r-0px _bgcl-black _pdt-128px">
                    <div class="container-fluid _pst-rlt">
                      <div class="row">
                        <nuxt-link 
                          v-scroll-reveal="{delay: 100 * i}"
                          v-for="(x, i) in menuItems" 
                          :key="i" 
                          :to="x.path" 
                          class="col-12 bio-link -white _mgv-4px">
                          <h3 class="_pdh-12px">{{ x.title }}</h3>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </slide-x-right-transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container _f-1 _dp-f _alit-ct _jtfct-ct">
        <div class="row">
          <div class="col-12">
            <h2 
              class="_tal-ct _cl-white _lh-125pct" 
              v-html="header"/>
            <p 
              class="_tal-ct _cl-white _mgt-0px _fs-4" 
              v-html="description"/>
          </div>
        </div>
      </div>
      <!-- Content -->
      <slot/>
    </div>
  </header>
</template>

<script>
import MenuNav from '~/components/navigations/MenuNav'
import UserNav from '~/components/navigations/UserNav'
import Cart from '~/components/purchase/Cart'
export default {
  components: {
    Cart,
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
    },
    header: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    hasSearch: {
      type: Boolean,
      default: false
    },
    heroImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1513350375601-5040cae53a97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5efadc872234c9b2f1d74bce061c42ad&auto=format&fit=crop&w=1650&q=80'
    }
  },
  data: () => ({
    menuItems: [],
    searchKeyword: '',
    isMenuOpen: false,
  }),
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
    this.menuItems = JSON.parse(JSON.stringify(this.$store.state.menu.primaryMenu))
  },
  methods: {
    handleScroll() {
      // console.log(window.scrollY)
      if (window.scrollY > 200) {
        this.$store.commit('menu/SET_USER_STICKY', true)
      } else {
        this.$store.commit('menu/SET_USER_STICKY', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.is-sticky {
  .member {
    position: fixed;
    width: 100%;
    z-index: 1;
  }
}
// User Controls
.user-bar {
  // background-image: linear-gradient(140deg, #4BBFEC 0%, #81A5FF 100%);
  background-color: rgba(0, 0, 0, 1);
  height: 32px;
}
.user-control {
  div,
  a {
    padding: 0px 0.5rem;
    font-size: 0.9rem;
    &:not(.cart) {
      color: #fff;
    }
    &:last-child {
      padding-right: 0px;
    }
  }
}
.menu-wrapper {
  background-color: rgba(0, 0, 0, 1);
}
.hero-image {
  @include breakpoint(mobile) {
    height: 300px;
  }
  height: 400px;
  position: relative;
  z-index: 1;
  &::before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
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

.hamberger-container {
  z-index: 2;
  &.-open {
    .hamberger-btn {
      background: transparent;
      &::before {
        width: 28px;
        top: 0px;
        transform: rotate(45deg);
        transition: 0.2s;
        // background: black;
      }

      &::after {
        width: 28px;
        top: 0px;
        transform: rotate(-45deg);
        transition: 0.2s;
        // background: black;
      }
    }
  }
  .hamberger-btn {
    width: 33px;
    height: 3px;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    transition: 0.2s;
    &::before {
      width: 24px;
      position: absolute;
      height: 3px;
      background: #fff;
      border-radius: 8px;
      content: '';
      top: -8px;
      right: 0px;
      transition: 0.2s;
    }

    &::after {
      position: absolute;
      width: 28px;
      height: 3px;
      background: #fff;
      border-radius: 8px;
      content: '';
      top: 8px;
      right: 0px;
      transition: 0.2s;
    }
  }
}

.curtain {
  background: rgba(0, 0, 0, 0.7);
}

</style>
