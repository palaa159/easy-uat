<template>
  <div class="cart">
    <!-- Cart Slide-in -->
    <slide-x-right-transition>
      <div 
        v-show="$store.state.purchase.isCartShowing"
        class="cart-panel-container _ovfy-hd _pst-f _r-0px _w-100pct _w-40pct-sm _bgcl-white _zid-1"> 
        <div class="cart-panel _dp-f _fdrt-cl">
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
                เลือกซื้อของต่อ
              </button>
              <!-- If has item -->
              <div 
                v-else
                class="_dp-f _jtfct-spbtw _alit-ct" 
              >
                <!-- Total -->
                <div>
                  <p class="_lh-100pct _cl-dark">
                    สินค้า {{ Object.keys($store.state.purchase.cart.cart_contents).length }} รายการ รวมเป็นเงิน
                  </p>
                  <h4 class="_cl-dark _lh-100pct">
                    THB {{ totalCartPrice }}
                  </h4>
                </div>
                <!-- Pay -->
                <div>
                  <button 
                    class="bio-button -info" 
                    @click="proceed()">
                    <h6>ดำเนินการชำระเงิน</h6>
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
            </div>
          </div>
        </div>
      </div>
    </slide-x-right-transition>
    <!-- Cart Button -->
    <div
      class="_dp-f _alit-ct _cs-pt _cl-white" 
      @click="$store.commit('purchase/SET_CART_SHOW', !$store.state.purchase.isCartShowing)">
      <fa-icon 
        class="_mgr-8px"
        icon="shopping-cart" 
      />
      <!-- Badge -->
      <Badge 
        :number="totalQuantity"
      />
    </div>
    <!-- Added to Cart Message -->
    <fade-transition>
      <div 
        v-if="addedToCart"
        class="_pst-asl _zid-1 _r-32px _t-48px _bgcl-white _pdh-16px _pdv-12px _tal-ct _bdrd-4px">
        <div class="_cl-neutral-800 _mgbt-4px">
          <strong>Product Added!</strong>
        </div>
        <nuxt-link 
          to="/checkout" 
          class="bio-link">
          Proceed to Checkout
        </nuxt-link>
      </div>
    </fade-transition>
  </div>
</template>

<script>
  import Badge from '~/components/extras/Badge'
  import PurchaseItem from '~/components/purchase/PurchaseItem'
  export default {
    components: {
      Badge,
      PurchaseItem,
    },
    data: () => ({
      isCartLoading: false
    }),
    computed: {
      totalCartPrice () {
        if (this.$store.state.purchase.cart['\u0000*\u0000totals']) {
          return parseFloat(this.$store.state.purchase.cart['\u0000*\u0000totals'].cart_contents_total).toFixed(2)
        }
        return 0
      },
      totalQuantity () {
       const reducer = (a, c) => a + c
        if (!Object.keys(this.$store.state.purchase.cart.cart_contents).length) return 0
        return Object.values(this.$store.state.purchase.cart.cart_contents)
          .map(x => x = x.quantity)
          .reduce(reducer)
      }
    },
    async created () {
      // Get Cart Content
      this.isCartLoading = true
      const cart = await this.$store.dispatch('purchase/getCartContent')
      this.isCartLoading = false
      return this.$store.commit('purchase/SET_CART_CONTENT', cart)
    },
    methods: {
      proceed () {
        this.$store.commit('purchase/SET_CART_SHOW', false)
        this.$router.replace({ path: '/checkout' })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .cart-panel-container {
    top: 0px;
    box-shadow: -1px 0px 40px -10px rgba(0, 0, 0, 0.1);
  }
  .cart-panel {
    height: calc(100vh);
  }
  .summary {
    border-top: 1px dashed rgba(0, 0, 0, 0.1);
    min-height: 84px;
  }
</style>
