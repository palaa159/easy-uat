<template>
  <div class="user-bar _bgcl-blue _pst-rlt _dp-f _alit-ct">
    <div class="container">
      <div 
        :class="{'_jtfct-fe': crumbs.length === 1, '_jtfct-spbtw-md': crumbs.length > 1}"
        class="_dp-f _alit-ct user-control" 
      >
        <!-- Breadcrumb -->
        <Breadcrumbs 
          :crumbs="crumbs"
          class="_dp-n _dp-b-md"
        />
        <div class="_dp-f _alit-ct">
          <!-- User Control -->
          <nuxt-link to="/login">
            <span>เข้าสู่ระบบ</span>
          </nuxt-link>
          <nuxt-link to="/register">
            <span>ลงทะเบียน</span>
          </nuxt-link>
          <nuxt-link to="/profile">
            <font-awesome-icon icon="user-circle" />
            <span>Nithi</span>
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
      return this.$route.matched[0].path.split('/')
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
