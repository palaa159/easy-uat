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
          <!-- Short Desc + Buy now -->
          <div 
            v-if="shortDescription" 
            class="_pdv-24px _dp-f _alit-ct">
            <div class="_f-2">
              <h4>สิ่งที่อยู่ในกล่อง</h4>
              <div 
                class="_fw-300" 
                v-html="shortDescription"/>
            </div>
            <!-- Buy Now -->
            <div class="_f-1 _pdh-12px">
              <BuyNow 
                :price="price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Purchase Options -->
    <div class="container-fluid p-options _pdv-24px">
      <PurchaseOptions />
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
      }
    }
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
</style>
