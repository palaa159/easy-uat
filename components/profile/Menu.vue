<template>
  <div class="_mgt-16px">
    <!-- Items -->
    <slide-y-down-transition 
      class="_dp-n _dp-b-md" 
      group>
      <div 
        v-for="(x, i) in items"
        :key="i"
      >
        <nuxt-link 
          :to="x.path"
          class="bio-link" 
          active-class="active"
          exact
        >
          <div class="_dp-f _alit-ct _jtfct-spbtw _pdv-4px _mgv-8px">
            <span>
              {{ x.title }}
            </span>
            <fa-icon :icon="x.icon"/>
          </div>
        </nuxt-link>
      </div>
      <!-- Mobile Dropdown -->
    </slide-y-down-transition>
    <div class="_dp-b _dp-n-md bio-select">
      <select @change="navigate">
        <option 
          v-for="(x, i) in items"
          :value="x.path" 
          :key="i"
          :checked="$route.path === x.path"
        >{{ x.title }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: []
  }),
  mounted () {
    this.items = [{
      path: '/profile',
      title: 'ข้อมูลบัญชี',
      icon: 'user'
    }, {
      path: '/profile/orders',
      title: 'รายการสั่งซื้อของฉัน',
      icon: 'clipboard-list'
    }, {
      path: '/profile/address',
      title: 'ข้อมูลการจัดส่ง',
      icon: 'truck'
    }, {
      path: '/profile/credit-card',
      title: 'บัตรเครดิตของฉัน',
      icon: 'credit-card'
    }, {
      path: '/profile/refund',
      title: 'รายการส่งคืน',
      icon: 'undo-alt'
    }, {
      path: '/profile/logout',
      title: 'ออกจากระบบ',
      icon: 'sign-out-alt'
    }]
  },
  methods: {
    navigate (e) {
      const path = e.target.value
      this.$router.push({ path })
    }
  },
}
</script>

<style lang="scss">
  .active {
    div {
      span {
        font-weight: 800;
        color: darken(#1f9eff, 20%);
      }
    }
  }
</style>
