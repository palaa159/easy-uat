<template>
  <div class="container">
    <!-- Back -->
    <div class="row">
      <div class="col-12 _mgv-16px">
        <nuxt-link 
          to="/profile/orders" 
          class="bio-link -fancy">
          <fa-icon icon="long-arrow-alt-left"/>
          รายการสั่งซื้อทั้งหมด
        </nuxt-link>
      </div>
    </div>
    <!--  -->
    <div class="row _alit-ct">
      <div class="col-8">
        <h4>รหัสออเดอร์ #{{ order.id }}</h4>
      </div>
      <div class="col-4">
        <p class="_ttf-upc _lh-100pct _tal-r _cl-accent">สถานะ: {{ order.status }}</p>
      </div>
    </div>
    <!-- Tracking -->
    <div 
      v-if="order.tracking_items && order.tracking_items.length" 
      class="row">
      <div class="col-12">
        <div class="_mgbt-4px">
          <strong>Shipment Tracking</strong>
        </div>
        <div 
          v-for="(item, i) in order.tracking_items" 
          :key="i">
          <p class="_lh-150pct">Provider: {{ item.tracking_provider }}</p>
          <p class="_lh-150pct">Tracking No.: {{ item.tracking_number }}</p>
          <p class="_lh-150pct">Shipped at: {{ $moment(item.date_shipped * 1000).format('DD/MM/YYYY') }} 
          </p>
        </div>
      </div>
    </div>
    <!-- Action -->
    <div 
      v-if="order.payment_method === 'bacs'" 
      class="row">
      <div class="col-12">
        <div class="_mgv-16px">
          <button 
            class="bio-button _w-100pct"
            @click="$modal.show('upload-slip', { orderId: order.id.toString(), amount: order.total })" 
          >
            <h4>แจ้งชำระเงิน</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- Items -->
        <div>
          <div class="_mgbt-24px">
            <p class="_lh-125pct _cl-neutral">ชำระโดย: {{ order.payment_method === 'bacs'? 'โอนเงินผ่านธนาคาร': order.payment_method }}</p>
          </div>
          <PurchaseItem 
            v-for="(item, i) in order.line_items"
            :index="i"
            :key="i"
            :p-data="item"
            :editable="false"
          />
        </div>
      </div>
    </div>
    <!-- จัดส่ง -->
    <div class="row _mgv-12px">
      <div class="col-12">
        <div class="bio-message -primary">
          <div>
            <fa-icon :icon="['fal', 'truck']"/> ค่าจัดส่ง
          </div>
          THB {{ order.shipping_total | currency }}
        </div>
      </div>
    </div>
    <!-- ยอดรวม -->
    <div class="row _mgv-12px">
      <div class="col-12">
        <h4 class="_cl-accent">
          ยอดรวมทั้งสิ้น THB {{ order.total | currency }}
        </h4>  
      </div>
    </div>
    <!-- Order History -->
    <div 
      v-if="order.notes" 
      class="row _mgv-12px">
      <div class="col-12 _cl-neutral">
        <div class="_bdtw-1px _bdcl-gray _pdv-16px">
          <h5>Order History</h5>
          <ul>
            <li 
              v-for="(item, i) in order.notes"
              :key="i" 
              class="_mgv-12px _dp-f">
              <div class="_f-1">
                {{ item.note_date | moment('DD/MM/YYYY HH:mm:ss') }}
              </div>
              <div class="_f-2">
                <div v-html="item.note_content"/>
            </div></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <UploadSlip 
      @success="successUpload"
    />
  </div>
</template>

<script>
import PurchaseItem from '~/components/purchase/PurchaseItem'
import UploadSlip from '~/components/modals/UploadSlip'
export default {
  components: {
    PurchaseItem,
    UploadSlip
  },
  data: () => ({
    order: {}
  }),
  async mounted() {
    // Fetch order
    const order = await this.$store.dispatch(
      'order/getOrder',
      this.$route.params.id
    )
    // console.log(order)
    this.order = order
  },
  methods: {
    async successUpload(url) {
      // TODO: Update URL to database
      // TODO: Send Email
      // console.log(url) // -> URL of slip
      const order = await this.$store.dispatch('order/uploadSlip', {
        slipURL: url,
        id: this.order.id
      })
      // console.log(order)
    }
  },
  layout: 'profile'
}
</script>
