<template>
  <div class="_pdv-16px _pdh-16px _bgcl-white">
    <h5>สรุปข้อมูลคำสั่งซื้อ</h5>
    <!-- <hr> -->
    <!-- ยอดรวม -->
    <Accordion v-if="items.length">
      <div slot="title">
        <div 
          v-if="!summaryTotal" 
          class="_dp-f _jtfct-spbtw _mgv-24px">
          <div class="_fs-6">ยอดรวม ({{ totalQuantity }} ชิ้น)</div>
          <div class="_fs-5">THB {{ total.contents | currency }}</div>
        </div>
      </div>
      <div slot="content">
        <div class="_pdbt-16px _bdbtw-1px _bdcl-neutral-300">
          <div 
            v-for="(item, i) in items" 
            :key="i"
            class="_dp-f _pdv-4px">
            <div class="_f-4 _fs-7 _pdl-24px">
              {{ item.name }}
            </div>
            <div class="_f-1 _fs-7 _tal-r">
              x {{ item.quantity }}
            </div>
          </div>
        </div>
      </div>
    </Accordion>
    <div v-else>
      <div 
        v-if="!summaryTotal" 
        class="_dp-f _jtfct-spbtw _mgv-24px">
        <div class="_fs-6">ยอดรวม ({{ totalQuantity }} ชิ้น)</div>
        <div class="_fs-5">THB {{ total.contents | currency }}</div>
      </div>
    </div>
    <!-- ค่าจัดส่ง -->
    <div 
      v-if="!summaryTotal" 
      class="_dp-f _jtfct-spbtw _mgv-24px">
      <div class="_fs-6">ค่าจัดส่ง</div>
      <div class="_fs-5">THB 
        <span v-if="parseInt(total.shipping) !== 0">{{ total.shipping | currency }}</span>
        <span 
          v-else 
          class="_cl-accent">ฟรี</span>
      </div>
    </div>
    <!-- คูปอง -->
    <!-- <div v-if="editable">
      <div class="bio-field _dp-f">
        <div class="bio-input _f-7 _mgr-8px">
          <input 
            type="text"
            class="_h-48px" 
            placeholder="ใส่ส่วนลด ถ้ามี"
          >
        </div>
        <button class="bio-button _f-2">ยืนยัน</button>
      </div>  
    </div> -->
    <!-- ยอดรวมทั้งสิ้น -->
    <div class="_dp-f _jtfct-spbtw _mgt-24px">
      <div class="_fs-6 _fw-700">ยอดรวมทั้งสิ้น</div>
      <div class="_fs-5 _fw-700 _cl-accent">THB {{ summaryTotal || total.all | currency }}</div>
    </div>
    <div class="_tal-r">
      <small>รวมภาษีมูลค่าเพิ่ม (ถ้ามี)
      </small>
    </div>
    <!-- เข้าสู่ระบบ -->
    <nuxt-link 
      v-if="!$store.state.auth.user" 
      to="/login?redirect=/store/checkout">
      <button class="bio-button _h-48px _mgt-12px -info _w-100pct">เข้าสู่ระบบ</button>
    </nuxt-link> 
  </div>
</template>

<script>
import Accordion from '~/components/extras/Accordion'
export default {
  components: {
    Accordion
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    summaryTotal: {
      type: Number,
      default: 0
    },
    proceedBtnTitle: {
      type: String,
      default: ''
    },
    cart: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    editable: true
  }),
  computed: {
    total() {
      const cart = this.cart['\u0000*\u0000totals']
      if (cart) {
        return {
          contents: parseFloat(cart.cart_contents_total).toFixed(2),
          shipping: parseFloat(cart.shipping_total).toFixed(2),
          all: parseFloat(cart.total).toFixed(2)
        }
      }
      // this.$router.replace('/')
      return false
    },
    totalQuantity() {
      const reducer = (a, c) => a + c
      if (!Object.keys(this.cart.cart_contents).length) return 0
      return Object.values(this.cart.cart_contents)
        .map((x) => (x = x.quantity))
        .reduce(reducer)
    }
  },
  created() {
    this.editable = this.$route.path.indexOf('payment') === -1
  }
}
</script>
