<template>
  <footer class="_pst-rlt">
    <div class="container">
      <div class="row _pdv-16px _dp-f _jtfct-spbtw">
        <div class="col-12 col-md-6 _tal-ct _tal-l-md _pdv-16px _pdv-24px-md">
          <!-- <img 
            class="_h-32px" 
            src="~/assets/images/other/dbd.png"> -->
        </div>
        <div class="col-12 col-md-6 copyright _tal-ct _tal-r-md _pdv-8px _pdv-24px-md"><span>Copyright &copy;2018 Makerstation | </span>
          <nuxt-link 
            :to="`/terms-conditions`" 
            class=""
          >
            <span>ข้อกำหนดและเงื่อนไข</span>
          </nuxt-link>
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
  created() {
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
        path: '/contact-us'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: rgba(40, 40, 40, 1);
}
.menu-footer {
  border-top: 1px solid #e0e1e1;
  border-bottom: 1px solid #e0e1e1;
  a {
    transition: 0.15s;
    h6 {
      color: #4a4a4a;
    }
    &:first-child {
      padding-left: 0;
    }
  }
}
.logo {
  background-image: url('~/assets/images/logo.png');
  height: 48px;
  margin: 0 auto;
}
.copyright {
  span {
    font-family: 'Kanit', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    color: #7a7a7a;
    letter-spacing: 0.03rem;
  }
}
</style>
