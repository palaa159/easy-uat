<template>
  <form @submit.stop.prevent="submit">
    <p 
      class="_mgt-16px" 
      v-html="$store.state.purchase.gateways.find(g => g.id ==='bacs').description"/>
    <div class="_dp-f">
      <div 
        v-lazy:background-image="require(`~/assets/images/banks/${b.bankCode}.jpg`)" 
        v-for="(b, i) in $store.state.purchase.bankTransferAccounts" 
        :key="i"
        class="_h-48px _w-48px _mgt-12px _mgr-12px _bgs-ct _bgrp-nrp _bgpst-ct"/>
    </div>
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
