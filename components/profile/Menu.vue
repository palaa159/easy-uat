<template>
  <div class="_mgt-16px">
    <!-- Items -->
    <slide-y-down-transition group>
      <div 
        v-for="(x, i) in items"
        :key="i"
      >
        <nuxt-link 
          :to="x.path"
          class="bio-link" 
          active-class="-active"
        >
          <div class="_dp-f _alit-ct _jtfct-spbtw _pdv-4px _mgv-8px">
            <span>
              {{ x.title }}
            </span>
            <font-awesome-icon :icon="x.icon"/>
          </div>
        </nuxt-link>
      </div>
    </slide-y-down-transition>
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
  }
}
</script>
