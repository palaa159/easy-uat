<template>
  <header>
    <div class="_pdv-8px _bgcl-blue _pst-rlt _zid-1">
      <div class="container">
        <div class="_dp-f _jtfct-fe _alit-ct user-control">
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
    <!-- Menu -->
    <MenuNav />
    <!-- Breadcrumb -->
    <Breadcrumbs />
  </header>
</template>

<script>
  import Cart from '~/components/purchase/Cart'
  import MenuNav from '~/components/navigations/MenuNav'
  import Breadcrumbs from '~/components/navigations/Breadcrumbs'
  export default {
    components: {
      Cart,
      MenuNav,
      Breadcrumbs
    },
    data: () => ({
      menuItems: []
    })
  }
</script>

<style lang="scss" scoped>
  // User Controls
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
