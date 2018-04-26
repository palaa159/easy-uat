<template>
  <div class="item-container">
    <!-- Product Detail -->
    <div class="container _pdv-48px -with-triangle">
      <div class="row _jtfct-ct">
        <!-- Image -->
        <div class="col-12 col-sm-4">
          <div class="_pst-rlt _dp-f _alit-fe">
            <div 
              v-lazy:background-image="image" 
              class="image _ratio _f-3" 
            />
            <div class="_f-2 _dp-n-sm">
              <BuyNow 
                :price="price"
              />
            </div>
          </div>
        </div>
        <!-- Detail -->
        <div class="col-12 col-sm-6">
          <h2 
            class="_lh-125pct _mgv-24px _fw-500 _fs-4 _fs-3-sm" 
            v-html="heading" /> 
          <div 
            class="product-description-list" 
            v-html="descriptionList"/>
          <nuxt-link 
            :to="url" 
            class="link"
            v-on:click=" collapsed = !collapsed">
            <span>ข้อมูลเพิ่มเติม</span>
          </nuxt-link>
          <!-- Short Desc + Buy now -->
          <div 
            v-if="shortDescription" 
            class="_pdv-24px _dp-f _alit-ct">
            <div class="_f-2">
              <h4>สิ่งที่อยู่ในชุด</h4>
              <div 
                class="_fw-300" 
                v-html="shortDescription"/>
              <div class="_mgt-24px">
                <h4>
                  In Stock: {{ stockQuantity }} {{ unit }}
                </h4>
              </div>
            </div>
            <!-- Buy Now -->
            <div class="_dp-n _dp-b-md _f-1 _pdh-12px">
              <BuyNow 
                :price="price"
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
              :amount="amount"
              :max-amount="stockQuantity"
              :unit="unit"
              :price="price"
              @adjust-item="adjustAmount"
            />
          </div>
          <div class="col-5 col-md-4">
            <div class="link _cs-pt _dp-f _jtfct-fe">
              <div class="_tal-ct">
                <div class="hexagon _dp-f _jtfct-ct _alit-ct">
                  <fa-icon 
                    class="_cl-white"
                    size="lg" 
                    icon="shopping-cart"/>
                </div>
                <h6 class="_ttf-upc">Add to Cart</h6>
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
        default: 0.00
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
      amount: 1
    }),
    methods: {
      adjustAmount (x) {
        this.amount = this.amount + x
      }
      
    },
  }
</script>

<style lang="scss" scoped>
  $aqua: #B4FFF0;
  .item-container {
    border-bottom: 7px solid #001DFF;
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
    &[lazy=loaded] {
      filter: drop-shadow(0mm 5mm 4mm rgba(0, 0, 0, .25));
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
</style>
