<template>
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
</template>
<script>
import Cart from '~/components/purchase/Cart'
import urls from '~/services/apiUrl'
export default {
  components: {
    Cart
  }
}
</script>


<style lang="scss" scoped>
// User Controls
.user-bar {
  // background-image: linear-gradient(140deg, #4BBFEC 0%, #81A5FF 100%);
  background-color: rgba(40, 40, 40, 1);
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
</style>
