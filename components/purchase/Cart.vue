<template>
  <div class="cart">
    <!-- Cart Slide-in -->
    <slide-x-right-transition>
      <div 
        v-show="$store.state.purchase.isCartShowing"
        class="cart-panel-container _ovfy-hd _pst-f _r-0px _w-100pct _w-40pct-md _bgcl-white"> 
        <div 
          class="cart-panel _dp-f _fdrt-cl">
          <!-- Header -->
          <div class="_f-1 _dp-f _jtfct-spbtw container _alit-ct">
            <div class="_cl-dark">
              <h4>ตะกร้าสินค้า</h4>
            </div>
            <div 
              class="_cl-dark _cs-pt" 
              @click="$store.commit('purchase/SET_CART_SHOW', false)">
              <span class="_fs-2 _lh-100pct">✕</span>
            </div>
          </div>
          <!-- Bottom -->
          <div class="_f-1 summary _dp-f _alit-ct _jtfct-ct _bgcl-white">
            <div class="container">
              <!-- If no item -->
              <button
                v-if="!Object.keys($store.state.purchase.cart.cart_contents).length" 
                class="bio-button -dark -outline _mgh-at"
                @click="$store.commit('purchase/SET_CART_SHOW', !$store.state.purchase.isCartShowing)" 
              >
                เลือกซื้อของต่อ <fa-icon icon="long-arrow-alt-right"/>
              </button>
              <!-- If has item -->
              <div 
                v-else
                class="_dp-f _jtfct-spbtw _alit-ct" 
              >
                <!-- Total -->
                <div>
                  <!-- <p class="_lh-100pct _cl-dark">
                    สินค้า {{ totalQuantity }} ชิ้น รวมเป็นเงิน
                  </p> -->
                  <h4 class="_cl-dark _lh-100pct">
                    THB {{ totalCartPrice | currency }}
                  </h4>
                  <small class="_cl-accent">(ยังไม่รวมค่าขนส่ง)</small>
                </div>
                <!-- Pay -->
                <div>
                  <button 
                    class="bio-button -accent" 
                    @click="proceed()">
                    <h6>
                      ดำเนินการชำระเงิน
                      <fa-icon icon="long-arrow-alt-right"/>
                    </h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Main -->
          <div 
            :class="{'_alit-ct': !Object.keys($store.state.purchase.cart.cart_contents).length}"
            class="_f-9 _dp-f _jtfct-ct _ovfy-at" 
          >
            <div 
              v-if="!Object.keys($store.state.purchase.cart.cart_contents).length"
              class="_tal-ct _cl-dark" 
            >
              <fa-icon 
                :icon="['far', 'frown']"
                size="6x"
              />
              <p class="_tal-ct _mgt-12px _cl-dark">
                ยังไม่มีสินค้าในตะกร้า
              </p>
            </div>
            <!-- If have item -->
            <div 
              v-else
              class="container _w-100pct _cl-dark" 
            >
              <!-- Purchase Item -->
              <!-- <div v-for="(key, value, i) in $store.state.purchase.cart.cart_contents">
                {{ key }} {{ value }} {{ }}
              </div> -->
              <PurchaseItem 
                v-for="(value, key, i) in $store.state.purchase.cart.cart_contents"
                :index="i"
                :key="key"
                :p-data="value"
              />
              <div class="_mgv-48px _tal-ct">
                <div 
                  class="bio-link _bdtw-0px _bdrw-0px _bdlw-0px _cs-pt" 
                  @click="$store.dispatch('purchase/clearCart')">Clear cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide-x-right-transition>
    <!-- Cart Button -->
    <div
      ref="cartBtn"
      class="_dp-f _alit-ct _cs-pt _cl-white" 
      @click="$store.commit('purchase/SET_CART_SHOW', !$store.state.purchase.isCartShowing)">
      <fa-icon 
        class="_mgr-8px"
        icon="shopping-cart" 
      />
      <!-- Badge -->
      <div 
        v-if="isCartLoading" 
        class="bio-button _pdl-8px -loading _bgcl-tpr _bdw-0px"/>
      <Badge
        v-else 
        :number="totalQuantity"
      />
    </div>
    <!-- Added to Cart Message -->
    <slide-y-up-transition>
      <div 
        v-if="$store.state.purchase.isCartBubbleShowing" 
        class="wrapper _w-100pct _pst-asl _zid-1 _t-48px _l-0px _ptev-n"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 _tal-r">
              <div
                ref="message"
                class="box _bgcl-white _pdh-16px _pdv-12px _tal-l _bdrd-4px _dp-ilb _ptev-at"
              >
                <div class="_cl-neutral-800 _mgbt-4px">
                  <strong>Product Added!</strong>
                </div>
                <nuxt-link 
                  to="/checkout" 
                  class="bio-link">
                  Go to Checkout
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide-y-up-transition>
    <!-- Curtain -->
    <fade-transition>
      <div 
        v-if="$store.state.purchase.isCartShowing"
        class="curtain _pst-f _t-0px _l-0px _w-100pct _h-100pct _zid-1"
        @click="$store.commit('purchase/SET_CART_SHOW', false)"
      />
    </fade-transition>
  </div>
</template>

<script>
import Badge from '~/components/extras/Badge'
import PurchaseItem from '~/components/purchase/PurchaseItem'
export default {
  components: {
    Badge,
    PurchaseItem
  },
  data: () => ({
    isCartLoading: false,
    isMessageShowing: false
  }),
  computed: {
    totalCartPrice() {
      if (this.$store.state.purchase.cart['\u0000*\u0000totals']) {
        return parseFloat(
          this.$store.state.purchase.cart['\u0000*\u0000totals']
            .cart_contents_total
        ).toFixed(2)
      }
      return 0
    },
    totalQuantity() {
      const reducer = (a, c) => a + c
      if (!Object.keys(this.$store.state.purchase.cart.cart_contents).length)
        return 0
      return Object.values(this.$store.state.purchase.cart.cart_contents)
        .map((x) => (x = x.quantity))
        .reduce(reducer)
    }
  },
  watch: {
    '$store.state.purchase.cart.cart_contents'() {
      // If checkout/payment without cart item
      if (
        this.$route.path.indexOf('/checkout') > -1 &&
        !(this.$route.path.indexOf('/checkout/payment/') > -1) &&
        !Object.keys(this.$store.state.purchase.cart.cart_contents).length
      ) {
        return this.$router.replace('/')
      }
    }
  },
  async created() {
    // Get Cart Content
    this.isCartLoading = true
    // const cart = await this.$store.dispatch('purchase/getCartContent')
    this.isCartLoading = false
    // return this.$store.commit('purchase/SET_CART_CONTENT', cart)
  },
  methods: {
    proceed() {
      this.$store.commit('purchase/SET_CART_SHOW', false)
      this.$router.replace({ path: '/checkout' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.curtain {
  @include breakpoint(mobile) {
    background: #fff;
  }
  background: rgba(0, 0, 0, 0.75);
}
.box {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -12px;
    right: 20px;
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
}
.cart-panel-container {
  top: 0px;
  z-index: 2;
  box-shadow: -1px 0px 40px -10px rgba(0, 0, 0, 0.1);
}
.cart-panel {
  height: calc(100vh);
  &.is-processing {
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      display: inline-block;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left-color: #7983ff;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: donut-spin 0.6s linear infinite;
      z-index: 2;
    }
  }
}
.summary {
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
  min-height: 84px;
}
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
