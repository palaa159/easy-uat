<template>
  <div class="container">
    <div class="row _mgt-32px">
      <div class="col-12 col-md-9">
        <!-- Images -->
        <div>
          <div 
            v-lazy:background-image="currentImage" 
            class="image _bgrp-nrp _bgs-cv _bgpst-ct"/>
          <div class="container-fluid  _pd-0px">
            <div class="row _mgv-24px">
              <div 
                v-for="(image, i) in gallery" 
                :key="i" 
                :class="{'active': imageIndex === i}"
                class="col-4 col-md-2 _mgbt-12px _cs-pt image-item"
                @click="selectGalleryImage(i)">
                <div 
                  v-lazy:background-image="image.src" 
                  class="_bgs-cv _bgpst-ct"/>
              </div>
            </div>
          </div>
        </div>
        <!-- Description -->
        <h3 class="_cl-neutral-500">รายละเอียดสินค้า</h3>
        <!-- Youtube link -->
        <div 
          v-if="product.acf.review_link && product.acf.review_link"
          class="_pdv-32px embed-responsive embed-responsive-21by9 _mgv-32px">
          <iframe 
            :src="`${product.acf.review_link}?rel=0`" 
            class="embed-responsive-item" 
            allowfullscreen/>
        </div>
        <div v-html="product.description"/>
        <!-- Attributes -->
        <div 
          v-if="product.attributes.length" 
          class="_mgt-24px">
          <h3 class="_cl-neutral-500">สเป็ค</h3>
          <div 
            v-for="(x, i) in product.attributes" 
            :key="i"
            class="_dp-f _pdv-8px _bdbtw-1px _bdcl-neutral-300">
            <!-- Left -->
            <div class="_f-2 _pdr-8px">
              {{ x.name }}
            </div>
            <!-- Right -->
            <div class="_f-1 _fw-700">
              {{ x.options.join(', ') }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div>
          <h3 
            class="_lh-100pct" 
            v-html="product.name"/>
          <p class="_cl-neutral-500">รหัสสินค้า: 
            <span 
              class="_ttf-upc" 
              v-html="product.sku"/>
          </p>
          <!-- ราคา -->
          <!-- <h3>THB {{ currentProduct.regular_price | currency }}</h3> -->
          <h4>ราคา</h4>
          <h3 
            v-if="currentProduct.price_html" 
            class="_lh-100pct"
            v-html="currentProduct.price_html"/>
          <h3 
            v-else 
            class="_lh-100pct">{{ currentProduct.price | currency }}</h3>
          <!-- If has variations -->
          <div 
            v-if="product.variations.length" 
            class="_mgt-32px">
            <h4 class="_lh-100pct">เลือกแบบ</h4>
            <!-- Attribute in case of variations -->
            <div>
              <div 
                v-for="(v, i) in product.attributes" 
                :key="i">
                <!-- Loop each attribute -->
                <button 
                  v-for="(vx, ix) in v.options"
                  :key="ix" 
                  :class="{'-white': selectedVariation !== vx}"
                  class="bio-button _w-100pct _mgv-12px _tal-l"
                  @click="selectedVariation = vx">
                  <h5 class="_pd-8px">{{ vx }}</h5>
                </button>
              </div>
            </div>
          </div> 
          <!-- Dimension and weight -->
          <div>
            <div class="_mgv-16px">
              <h5>ขนาด (มม.): </h5>
              <p>{{ currentProduct.dimensions.width * 10 }} x {{ currentProduct.dimensions.length * 10 }} x {{ currentProduct.dimensions.height * 10 }}</p>
            </div>
            <div class="_mgv-16px">
              <h5>น้ำหนัก (กรัม): </h5>
              <p>{{ (parseFloat(currentProduct.weight || 0).toFixed(2) * 1000).toLocaleString() }}</p>
            </div>
          </div>
          <!--  -->
          <div 
            v-if="currentProduct.in_stock" 
            class="_mgbt-16px">
            <strong>มีสินค้า{{ currentProduct.stock_quantity? ':': '' }} {{ currentProduct.stock_quantity }}</strong>
          </div>
          <!-- Add Cart -->
          <form @submit.stop.prevent="addToCart">
            <div class="_dp-f _bdw-2px _bdcl-primary">
              <div class="_f-1 _dp-f _alit-ct _jtfct-ct">
                <input 
                  v-model="quantity"
                  :max="product.stock_quantity" 
                  min="1"
                  class="_bgcl-tpr _bdw-0px _w-48px _h-48px _tal-ct _mgl-12px" 
                  type="number">
              </div>
              <div class="_f-3 _pd-12px _ttf-upc _tal-ct _bgcl-primary _cl-white _cs-pt">
                <h5 class="_ltspc-1px">หยิบใส่ตะกร้า</h5>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductThumb from '~/components/products/ProductThumb'
import PageHeading from '~/components/text/PageHeading'
export default {
  async asyncData({ store, error, params }) {
    const product = await store.dispatch('product/getProductByAttr', {
      slug: params.slug
    })
    const gallery = product.images
    return {
      product,
      gallery
    }
  },
  components: {
    ProductThumb,
    PageHeading
  },
  data: () => ({
    imageIndex: 0,
    variations: [],
    selectedVariation: null,
    gallery: [],
    quantity: 1
  }),
  computed: {
    currentImage() {
      // console.log(this.selectedVariation)
      if (this.selectedVariation === null) {
        return this.product.images[this.imageIndex].src
      } else {
        // Find variations from selectedVariation -> รุ่นใหญ่
        let thisVar = this.variations.find(v => {
          return v.attributes.find(a => a.option === this.selectedVariation)
        })
        return thisVar.image
      }
    },
    currentProduct() {
      if (this.selectedVariation === null) {
        return this.product
      } else {
        // Find variations from selectedVariation -> รุ่นใหญ่
        let thisVar = this.variations.find(v => {
          return v.attributes.find(a => a.option === this.selectedVariation)
        })
        return thisVar
      }
    }
  },
  async created() {
    if (this.product && this.product.variations.length) {
      const variations = await this.$store.dispatch(
        'product/getProductVariationsById',
        {
          id: this.product.id
        }
      )
      // console.log(variations)
      this.variations = variations
    }
  },
  methods: {
    selectGalleryImage(i) {
      // this.selectedVariation = null
      this.imageIndex = i
    },
    addToCart() {
      alert('add')
    }
  },
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `สินค้า ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `สินค้า` },
        { hid: 'og:description', name: 'og:description', content: `สินค้า` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 600px;
}
.image-item {
  div {
    height: 80px;
    border: 3px solid rgba(255, 255, 255, 1);
  }
  &.active {
    div {
      border: 3px solid rgba(0, 0, 0, 0.85);
    }
  }
}
</style>
