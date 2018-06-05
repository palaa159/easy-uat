<template>
  <div class="item-container">
    <!-- Product Detail -->
    <div class="container _pdv-48px -with-triangle">
      <div class="row _jtfct-ct">
        <!-- Image -->
        <div class="col-12 col-md-4">
          <div class="_pst-rlt _dp-f _alit-fe">
            <div 
              v-lazy:background-image="image" 
              class="image _ratio _f-3" 
            />
            <div class="_f-2 _dp-n-md">
              <BuyNow 
                :price="price"
                @clickBuyNow="addToCartAndCheckout()"
              />
            </div>
          </div>
        </div>
        <!-- Detail -->
        <div class="col-12 col-md-6">
          <h2 
            class="_lh-125pct _mgv-24px _fw-500 _fs-4 _fs-3-md" 
            v-html="heading" /> 
          <div 
            :class="{'-collapsed': collapsed}" 
            class="product-description-list"
            v-html="descriptionList"/>
          <div 
            v-if="descriptionList.match(/<li>/gi).length > 3"
            :class="{'-collapsed': collapsed}"
            class="more-info _cs-pt _mgt-2px"
            @click="collapsed = !collapsed">
            <h6>
              <span v-if="collapsed">ข้อมูลเพิ่มเติม</span>
              <span v-else>ปิด</span>
            </h6>
          </div>
          <!-- Short Desc + Buy now -->
          <div 
            v-if="shortDescription" 
            class="_pdv-24px _dp-f _alit-ct">
            <div class="_f-2">
              <h4>สิ่งที่อยู่ในชุด</h4>
              <div 
                class="_fw-300" 
                v-html="shortDescription"/>
                <!-- <div class="_mgt-24px">
                <h4>
                  In Stock: {{ stockQuantity }} {{ unit }}
                </h4>
              </div>
              -->
            </div>
            <!-- Buy Now -->
            <div class="_dp-n _dp-b-md _f-1 _pdh-12px">
              <BuyNow 
                :price="price"
                :is-loading="isBtnLoading"
                @clickBuyNow="addToCartAndCheckout()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Purchase Options -->
    <div class="p-options">
      <div class="container _pdbt-48px _pdt-32px">
        <!--  -->
        <div class="row _jtfct-ct _alit-ct">
          <div class="col-7 col-md-5">
            <PurchaseOptions 
              :quantity="quantity"
              :max-quantity="stockQuantity"
              :unit="unit"
              :price="price"
              @adjust-item="adjustQuantity"
            />
          </div>
          <div class="col-5 col-md-4">
            <div class="link _cs-pt _dp-f _jtfct-fe">
              <div class="_tal-ct">
                <button 
                  :disabled="isBtnLoading"
                  :class="{'-disabled': isBtnLoading}"
                  class="bio-button -transparent" 
                  @click="addToCart">
                  <div class="hexagon _dp-f _jtfct-ct _alit-ct">
                    <span 
                      v-if="isBtnLoading" 
                      class="bio-button -loading _bgcl-tpr _bdw-0px"/>
                    <fa-icon 
                      v-else
                      class="_cl-white"
                      size="lg" 
                      icon="shopping-cart"/>
                  </div>
                </button>
                <h6 class="_ttf-upc">
                  <span>Add to Cart</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyNow from '~/components/products/BuyNow'
import PurchaseOptions from '~/components/products/PurchaseOptions'
export default {
  components: {
    BuyNow,
    PurchaseOptions
  },
  props: {
    productData: {
      type: Object,
      default: () => ({})
    },
    productId: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: 'http://via.placeholder.com/600x450'
    },
    heading: {
      type: String,
      default: 'เฮด'
    },
    descriptionList: {
      type: String,
      default: ''
    },
    shortDescription: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0.0
    },
    url: {
      type: String,
      default: '/'
    },
    stockQuantity: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    quantity: 1,
    isBtnLoading: false,
    collapsed: true
  }),
  methods: {
    adjustQuantity(x) {
      this.quantity = this.quantity + x
    },
    async addToCart() {
      this.isBtnLoading = true
      const added = await this.$store.dispatch('purchase/addToCart', {
        id: this.productId,
        quantity: this.quantity,
        data: this.productData
      })
      this.isBtnLoading = false
      // return alert('Added to cart')
    },
    async addToCartAndCheckout() {
      // console.log(this.productId)
      this.isBtnLoading = true
      const added = await this.$store.dispatch('purchase/addToCart', {
        id: this.productId,
        quantity: 1,
        data: this.productData
      })
      this.isBtnLoading = false
      this.$router.push('/store/checkout')
    }
  }
}
</script>

<style lang="scss" scoped>
$aqua: #b4fff0;
.item-container {
  border-bottom: 7px solid #001dff;
}
.p-options {
  background-color: $aqua;
}
.image {
  width: 100%;
  // height: 350px;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  &[lazy='loaded'] {
    filter: drop-shadow(0mm 5mm 4mm rgba(0, 0, 0, 0.25));
  }
}
.-with-triangle {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 30px);
    bottom: 0px;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-bottom: 30px solid $aqua;
    border-right: 30px solid transparent;
  }
}
.hexagon {
  background-image: url(~/assets/images/icons/hexagon.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100px;
  height: 100px;
}
.link div {
  transition: 0.15s;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
}
.-transparent {
  background: transparent;
  border: 0px;
  padding: 0px;
}
.more-info {
  position: relative;
  padding-left: 32px;
  transition: 0.2;
  &.-collapsed {
    &::after {
      border-bottom: 0px solid #9914ff;
      border-top: 10px solid #9914ff;
    }
  }
  &::after {
    transition: 0.2;
    content: '';
    position: absolute;
    left: 2px;
    bottom: 8px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #9914ff;
    border-right: 10px solid transparent;
    border-radius: 4px;
  }
}
</style>
