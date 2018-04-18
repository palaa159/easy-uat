<template>
  <div  
    class="user-bar _bgcl-blue _pst-rlt _dp-f _alit-ct">
    <div class="container">
      <div 
        class="_dp-f _alit-ct user-control _jtfct-fe _jtfct-spbtw-md" 
      >
        <!-- Breadcrumb -->
        <Breadcrumbs 
          :crumbs="crumbs"
          class="_dp-n _dp-b-md"
        />
        <div 
          v-if="$store.state.menu.isUserMenuShowing" 
          class="_dp-f _alit-ct">
          <!-- User Control -->
          <nuxt-link 
            v-if="$store.state.auth.user === null"
            to="/login" 
          >
            <span>เข้าสู่ระบบ</span>
          </nuxt-link>
          <nuxt-link 
            v-if="$store.state.auth.user === null"
            to="/register" 
          >
            <span>ลงทะเบียน</span>
          </nuxt-link>
          <nuxt-link 
            v-if="$store.state.auth.user"
            to="/profile" 
          >
            <fa-icon icon="user-circle" />
            <span>{{ $store.state.auth.user.email }}</span>
          </nuxt-link>
          <!-- Shopping cart with badge -->
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cart from '~/components/purchase/Cart'
import Breadcrumbs from '~/components/navigations/Breadcrumbs'
export default {
  components: {
    Cart,
    Breadcrumbs
  },
  computed: {
    crumbs () {
      const c = this.$route.path && this.$route.path.split('/')
      // console.log(c)
      let crumbs = []
      if (c && c.length) {
        for (let i = 1; i < c.length; i++) {
          crumbs.push({ 
            path: `${c[i-2]?c[i-2]: ''}${c[i-2]? '/': ''}${c[i-1]}${c[i-1]? '/': ''}${c[i]}`,
            title: c[i]
          })
        }
      }
      return crumbs
    }
  }
}
</script>


<style lang="scss" scoped>
  // User Controls
  .user-bar {
    height: 42px;
  }
  .user-control {
    div, a {
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
</style>
