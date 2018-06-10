<template>
  <form @submit.stop.prevent="submit">
    <p 
      class="_mgt-16px" 
      v-html="$store.state.purchase.gateways.find(g => g.id ==='bacs').description"/>
    <!-- <div class="_mgt-16px">
      <button
        v-for="(x, i) in banks" 
        :key="i" 
        :class="{'-positive': selectIndex === i, '-gray': selectIndex !== i}"
        class="bio-button -outline _dp-ilb _mgr-8px _mgt-8px _w-30pct"
        type="button"
        @click="selectIndex = i"
      >ธนาคาร{{ x.title }}</button>
    </div> -->
    <button
      :class="{'-loading': isBtnLoading}"
      type="submit" 
      class="bio-button _w-100pct _w-50pct-md -positive _mgt-32px" 
    >
      <h5><fa-icon icon="check" /> สั่งซื้อ</h5>
    </button>
  </form>
</template>

<script>
export default {
  data: () => ({
    banks: [
      {
        title: 'กรุงศรี'
      },
      {
        title: 'กรุงเทพ'
      },
      {
        title: 'กสิกรไทย'
      },
      {
        title: 'กรุงไทย'
      },
      {
        title: 'ไทยพาณิชย์'
      }
    ],
    selectIndex: null,
    isBtnLoading: false
  }),
  methods: {
    async submit() {
      // const x = window.confirm('ยืนยันการชำระเงินด้วยวิธีการโอนเงิน')
      // if (x === true) return await this.confirmPayByTransfer()
      return this.$emit('pay-bank-transfer')
    }
  }
}
</script>
