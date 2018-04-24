<template>
  <footer class="_bgcl-neutral-100 _pdv-48px _pst-rlt _zid--1">
    <div class="container">
      <div class="row">
        <div class="col">
          Footer
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    items: []
  }),
  created () {
    this.items = [
      {
        title: 'หน้าแรก',
        path: '/'
      },
      {
        title: 'สั่งซื้อ',
        path: '/'
      },
      {
        title: 'สินค้า',
        path: '/products'
      },
      {
        title: 'แพ็ครายเดือน',
        path: '/'
      },
      {
        title: 'แจ้งชำระเงิน',
        path: '/profile/orders'
      },
      {
        title: 'ติดต่อเจ้าหน้าที่',
        path: '/'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
  
</style>
