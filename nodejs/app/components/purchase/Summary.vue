<template>
  <div class="_pdv-16px _pdh-16px _bgcl-white">
    <h5>สรุปข้อมูลคำสั่งซื้อ</h5>
    <!-- <hr> -->
    <!-- ยอดรวม -->
    <div class="_dp-f _jtfct-spbtw _mgv-24px">
      <div class="_fs-6">ยอดรวม ({{ items.length }} ชิ้น)</div>
      <div class="_fs-5">THB {{ totalPrice }}</div>
    </div>
    <!-- ค่าจัดส่ง -->
    <div class="_dp-f _jtfct-spbtw _mgv-24px">
      <div class="_fs-6">ค่าจัดส่ง</div>
      <div class="_fs-5">THB ฟรี</div>
    </div>
    <!-- คูปอง -->
    <div v-if="editable">
      <div class="bio-field _dp-f">
        <div class="bio-input _f-7 _mgr-8px">
          <input 
            type="text"
            class="_h-48px" 
            placeholder="ใส่ส่วนลด ถ้ามี"
          >
        </div>
        <button class="bio-button _f-2">ยืนยีน</button>
        <!-- <small>Great!, awesome name!</small> -->
      </div>  
    </div>
    <!-- ยอดรวมทั้งสิ้น -->
    <div class="_dp-f _jtfct-spbtw _mgt-24px">
      <div class="_fs-6">ยอดรวมทั้งสิ้น</div>
      <div class="_fs-5 _fw-700 _cl-accent">THB {{ totalPrice }}</div>
    </div>
    <div class="_tal-r">
      <small>รวมภาษีมูลค่าเพิ่ม (ถ้ามี)
      </small>
    </div>
    <!-- ชำระเงิน -->
    <nuxt-link 
      v-if="editable" 
      to="/checkout/payment">
      <button class="bio-button _h-48px _mgt-24px _w-100pct">ดำเนินการชำระเงิน</button>
    </nuxt-link>
    <!-- เข้าสู่ระบบ -->
    <nuxt-link 
      v-if="editable" 
      to="/login?redirect=checkout">
      <button class="bio-button _h-48px _mgt-12px -outline -info _w-100pct">เข้าสู่ระบบ</button>
    </nuxt-link> 
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    editable: true
  }),
  computed: {
    totalPrice () {
      const reducer = (a, c) => a + c
      if (!this.items.length) return 0
      return this.items
        .map(x => x = x.price * x.amount)
        .reduce(reducer)
        .toLocaleString()
    }
  },
  created () {
    this.editable = this.$route.path.indexOf('payment') === -1
  },
}
</script>
