<template>
  <footer class="_bgcl-neutral-100 _pst-rlt _zid--1">
    <div class="container">
      <div 
        v-if="items.length" 
        class="row _dp-b _dp-f-md _alit-ct _pdv-24px-md menu-footer ">
        <nuxt-link 
          v-for="(x, i) in items" 
          :key="i"
          :to="x.path"
          class="col _tal-ct" 
        >
          <h6 class="fs-1 fs-4-md">{{ x.title }}</h6>
        </nuxt-link>
      </div>
      <div class="row _pdv-16px _dp-f _jtfct-spbtw">
        <div class="col-12 col-md-6 _tal-ct _tal-l-md _pdv-16px _pdv-24px-md"><img src="~/assets/images/other/DBD-Registered.png"/></div>
        <div class="col-12 col-md-6 copyright _tal-ct _tal-r-md _pdv-8px _pdv-24px-md"><span>Copyright &copy;2018 Maplelife co., Ltd | ข้อกำหนดและเงื่อนไข</span></div>
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
  .menu-footer{
    border-top: 1px solid #E0E1E1;
    border-bottom: 1px solid #E0E1E1;
    a{
       transition: 0.15s;
      h6{
        color: #4A4A4A;
      }
      &:first-child{
        padding-left: 0; 
      }
    }
  }
  .logo {
    background-image: url('~/assets/images/logo.png');
    height: 48px;
    margin: 0 auto;
  }
  .copyright{
    span{
      font-family: 'Kanit', sans-serif;
      font-size: 0.8rem;
      font-weight: 300;
      color: #7A7A7A;
      letter-spacing: 0.03rem;
    }
  }
</style>
