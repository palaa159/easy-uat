<template>
  <modal 
    :pivot-y="0.1"
    :adaptive="true" 
    :max-width="400" 
    name="upload-slip" 
    modal 
    classes="modal-fixed" 
    width="95%" 
    height="auto" 
    @before-open="beforeOpen"
    @closed="onClosed"
  >
    <div class="container _pdv-16px">
      <div class="row">
        <div class="col-12 _dp-f _jtfct-fe">
          <fa-icon 
            icon="times" 
            class="_cs-pt"
            @click="$modal.hide('upload-slip')" />
        </div>
        <div class="col-12">
          <h5 class="_tal-ct">อัพโหลดหลักฐานการชำระเงิน</h5>
          <p class="_mgt-16px _tal-ct">
            <span>รายการ #{{ orderId }}</span>
            <br>
            <span>จำนวนเงิน: THB {{ amount | currency }}</span>
          </p>
        </div>
      </div>
      <!--  -->
      <div class="row">
        <div class="col">
          <Uploader 
            :order-id="orderId"
            @url="getUrl"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="bio-message -primary _mgv-16px">
            <h6 class="_lh-125pct">
              {{ $store.state.site.bankTransfer.name }}<br>
              {{ $store.state.site.bankTransfer.accountTitle }}<br>
              {{ $store.state.site.bankTransfer.number }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Uploader from '~/components/forms/Uploader'
export default {
  components: {
    Uploader
  },
  data: () => ({
    orderId: null,
    amount: 0
  }),
  methods: {
    beforeOpen(event) {
      this.orderId = event.params.orderId
      this.amount = event.params.amount
      // console.log(event.params.orderId);
    },
    getUrl(url) {
      // console.log(url)
      this.$emit('success', url)
    },
    onClosed() {
      return window.location.reload()
    }
  }
}
</script>
