<template>
  <div class="container">
    <div class="row _mgt-24px special-row">
      <div 
        id="product-content" 
        class="col-12 col-md-9">
        <!-- Images -->
        <div class="_dp-n _dp-b-md">
          <div 
            v-lazy:background-image="currentImage" 
            class="image _bgrp-nrp _bgpst-ct"/>
          <div class="container-fluid _pdv-0px _pdh-8px">
            <div class="row _mgv-12px">
              <div 
                v-for="(image, i) in gallery" 
                :key="i" 
                :class="{'active': imageIndex === i}"
                class="col-4 col-md-2 _mgbt-12px _cs-pt image-item _pdh-4px"
                @click="selectGalleryImage(i)">
                <div 
                  v-lazy:background-image="image.src" 
                  class="_bgs-cv _bgpst-ct"/>
              </div>
            </div>
          </div>
        </div>
        <!-- Description -->
        <h3 
          id="description" 
          class="_cl-neutral-500">รายละเอียดสินค้า</h3>
        <!-- Youtube link -->
        <div 
          v-if="product.acf.review_link && product.acf.review_link"
          class="_pdv-32px embed-responsive embed-responsive-21by9 _mgv-32px">
          <iframe 
            :src="`${product.acf.review_link}?rel=0`" 
            class="embed-responsive-item" 
            allowfullscreen/>
        </div>
        <div 
          class="cms-content" 
          v-html="product.description"/>
        <!-- Review Content -->
        <div v-if="product.acf.related_content && product.acf.related_content.length">
          <!-- {{ product.acf.related_content }} -->
          <div class="bio-message -dark _pdv-24px">
            <div class="bio-message-content">
              <h4 class="_lh-100pct _mgbt-12px">เนื้อหาที่เกี่ยวข้อง</h4>
              <li 
                v-for="(item, i) in product.acf.related_content" 
                :key="i"
                class="_mgbt-8px _mgh-8px"
              >
                <a 
                  :href="`/blog/${item.post_name}`" 
                  target="_blank"
                  class="bio-link -fancy" 
                >{{ item.post_title }}</a>
              </li>
            </div>
          </div>
        </div>
        <!-- Specs -->
        <div 
          v-if="product.attributes.filter(a => a.visible).length"
          id="specs" 
          class="_mgt-24px">
          <h3 class="_cl-neutral-500">สเป็ค</h3>
          <div 
            v-for="(x, i) in product.attributes.filter(a => a.visible)" 
            :key="i"
            class="_dp-f _pdv-8px _bdbtw-1px _bdcl-neutral-300">
            <!-- Left -->
            <div class="_f-2 _pdr-8px">
              {{ x.name }}
            </div>
            <!-- Right -->
            <div 
              class="_f-1 _fw-700" 
              v-html="x.options.join('<br>')"/>
          </div>
        </div>
        <!-- Buyers guide -->
        <div 
          v-if="product.acf.buyers_guide && product.acf.buyers_guide.length"
          id="buyers-guide" 
          class="_mgv-32px" 
        >
          <h3 class="_cl-neutral-500">วิธีการเลือกซื้อ</h3>
          <div 
            class="cms-content" 
            v-html="product.acf.buyers_guide"/>
        </div>
        <!-- Prerequisites -->
        <div 
          v-if="product.acf.prerequisites && product.acf.prerequisites.length"
          id="prerequisites" 
          class="_mgv-32px" 
        >
          <h3 class="_cl-neutral-500">สิ่งที่ต้องมี</h3>
          <ul class="_mgh-24px">
            <li 
              v-for="(item, i) in product.acf.prerequisites"
              :key="i" 
              class="_lst-d _mgv-8px _lh-150pct">
              <nuxt-link 
                v-if="item.tag_link || item.product"
                :to="getPrereqLink(item)" 
                class="bio-link -fancy">{{ item.title }}</nuxt-link>
              <span v-else>{{ item.title }}</span>
            </li>
          </ul>
        </div>
        <!-- FAQs -->
        <div 
          v-if="product.acf.faqs && product.acf.faqs.length"
          id="faqs" 
          class="_mgv-32px" 
        >
          <h3 class="_cl-neutral-500">คำถามที่พบบ่อย</h3>
          <div 
            class="cms-content" 
            v-html="product.acf.faqs"/>
        </div>
      </div>
      <div 
        ref="cont" 
        class="col-12 col-md-3 _mgbt-48px">
        <no-ssr>
          <affix 
            :enabled="!isMobile"
            :offset="{ top: 60, bottom: 0 }"
            :scroll-affix="false" 
            :style="`width: ${isMobile? '100%': stickyWidth}`" 
            relative-element-selector="#product-content">
            <div>
              <h3 
                class="_lh-100pct _fs-5 _fs-4-md" 
                v-html="_productName"/>
              <p 
                v-if="product.categories.find(c => c.slug === 'pre-order')" 
                class="_cl-accent">สินค้า Pre-Order</p>
              <p class="_cl-neutral-500">รหัสสินค้า: 
                <span 
                  class="_ttf-upc" 
                  v-html="product.sku"/>
              </p>
              <!-- Mobile Image -->
              <!-- Images -->
              <div class="_dp-b _dp-n-md _mgt-12px">
                <div 
                  v-lazy:background-image="currentImage" 
                  class="image _bgrp-nrp _bgs-cv _bgpst-ct"/>
                <div class="container-fluid _pdv-0px _pdh-8px">
                  <div class="row _mgt-12px">
                    <div 
                      v-for="(image, i) in gallery" 
                      :key="i" 
                      :class="{'active': imageIndex === i}"
                      class="col-3 _mgbt-12px _cs-pt image-item _pdh-4px"
                      @click="selectGalleryImage(i)">
                      <div 
                        v-lazy:background-image="image.src" 
                        class="_bgs-cv _bgpst-ct"/>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ราคา -->
              <!-- <h3>THB {{ currentProduct.regular_price | currency }}</h3> -->
              <h6 class="_lh-100pct _mgbt-4px">{{ _productPriceLabel }}</h6>
              <h3 
                class="_lh-100pct _fs-5 _fs-4-md"
              >
                <span 
                  v-if="currentProduct.price_html" 
                  v-html="currentProduct.price_html"/>
                <span 
                  v-else-if="currentProduct.price" 
                  v-html="currentProduct.price | currency"/>
                <span v-else>{{ product.acf.deposit_price | currency }}</span>
              </h3>
              <!-- If pre-order -->
              <div 
                v-if="_isPreOrder" 
                class="_mgt-12px">
                <h6 class="_lh-100pct _mgbt-4px">ระยะเวลา:</h6>
                <h3 
                  class="_lh-100pct _fs-5 _fs-4-md"
                >
                  {{ product.acf.duration.minimum }} - {{ product.acf.duration.maximum }} วัน
                </h3>
              </div>
              <!-- If has variations -->
              <div 
                v-if="product.variations.length" 
                class="_mgt-16px">
                <h6 class="_lh-100pct _mgbt-12px">เลือก {{ product.attributes.filter(a => a.variation)[0].name }}:</h6>
                <!-- Attribute in case of variations -->
                <div class="container-fluid">
                  <div 
                    v-for="(v, i) in product.attributes.filter(a => a.variation)"
                    :key="i" 
                    class="row">
                    <!-- Loop each attribute -->
                    <div 
                      v-for="(vx, ix) in v.options"
                      :key="ix"
                      class="col-6 attr-btn">
                      <button 
                        :disabled="!product.variations.length"
                        :class="{'-white': selectedVariation !== vx, '-loading': !product.variations.length}"
                        class="bio-button _w-100pct _mgbt-8px _pdv-8px"
                        @click="selectedVariation = vx">
                        <div class="_fw-400 _tal-ct">{{ vx }}</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Dimension and weight -->
              <div class="row _mgt-12px">
                <div 
                  v-if="currentProduct.dimensions.width" 
                  class="col">
                  <h6 class="_lh-100pct">ขนาด (mm.): </h6>
                  <p class="_fs-7">{{ currentProduct.dimensions.width * 10 }} x {{ currentProduct.dimensions.length * 10 }} x {{ currentProduct.dimensions.height * 10 }}</p>
                </div>
                <div 
                  v-if="currentProduct.weight" 
                  class="col">
                  <h6 class="_lh-100pct">น้ำหนัก (g.): </h6>
                  <p class="_fs-7">{{ (parseFloat(currentProduct.weight || 0)).toLocaleString() }}</p>
                </div>
              </div>
              <!-- Add Cart -->
              <form @submit.stop.prevent="addToCart">
                <!-- Stock -->
                <div 
                  v-if="_shouldShowQuantity" 
                  class="_mgv-12px">
                  <h6 class="_lh-100pct _mgbt-8px">เลือกจำนวน:</h6>
                  <div class="bio-select">
                    <select v-model="quantity">
                      <option 
                        disabled 
                        value="">เลือกจำนวน</option>
                      <option 
                        v-for="i in currentProduct.stock_quantity" 
                        :key="i" 
                        :value="i"
                      >{{ i }}</option>
                    </select>
                  </div>
                </div>
                <div 
                  v-if="!currentProduct.in_stock" 
                  class="_mgv-12px _cl-accent">
                  <strong>ไม่มีสินค้า</strong>
                </div>
                <button 
                  :class="{'_bgcl-primary': !isDisabled, '-disabled': isDisabled, '-loading': isBtnLoading}" 
                  :disabled="isDisabled" 
                  type="submit"
                  class="bio-button _w-100pct _bdw-0px _bdcl-tpr _pdv-12px _cl-white">
                  <h5 
                    class="_ltspc-1px">หยิบใส่ตะกร้า</h5>
                </button>
              </form>
              <!-- Extra contents -->
              <nav class="_mgv-16px">
                <ul>
                  <li>
                    <a 
                      v-scroll-to="'#description'" 
                      href="#">
                      <h5 class="_cl-primary _mgv-12px _fw-100">รายละเอียดสินค้า</h5>
                    </a>
                  </li>
                  <li v-if="product.attributes.filter(a => a.visible).length">
                    <a 
                      v-scroll-to="'#specs'" 
                      href="#">
                      <h5 class="_cl-primary _mgv-12px _fw-100">สเป็ค</h5>
                    </a>                    
                  </li>
                  <li v-if="product.acf.buyers_guide">
                    <a 
                      v-scroll-to="'#buyers-guide'" 
                      href="#">
                      <h5 class="_cl-primary _mgv-12px _fw-100">วิธีการเลือกซื้อ</h5>
                    </a>
                  </li>
                  <li v-if="product.acf.prerequisites">
                    <a 
                      v-scroll-to="'#prerequisites'" 
                      href="#">
                      <h5 class="_cl-primary _mgv-12px _fw-100">สิ่งที่ต้องมี</h5>
                    </a>                    
                  </li>
                  <li v-if="product.acf.faqs">
                    <a 
                      v-scroll-to="'#faqs'" 
                      href="#">
                      <h5 class="_cl-primary _mgv-12px _fw-100">คำถามที่พบบ่อย</h5>
                    </a>                    
                  </li>
                  <!-- <li>
                    <a 
                      v-scroll-to="'#reviews'" 
                      href="#">
                      <h5 class="_cl-primary _mgv-12px _fw-100">รีวิวจากผู้ใช้จริง</h5>
                    </a>                    
                  </li> -->
                </ul>
              </nav>
              <!-- Buyers guide -->
              <!-- Prereq -->
              <!-- FAQs -->
            </div>
          </affix>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import ProductThumb from '~/components/products/ProductThumb'
import PageHeading from '~/components/text/PageHeading'
import pkg from '~/package.json'
import db from 'debounce'
export default {
  async asyncData({ store, error, params }) {
    const product = await store.dispatch('product/getProductBySlug', {
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
    selectedVariation: null,
    gallery: [],
    quantity: 1,
    isMobile: true,
    stickyWidth: '260px',
    isBtnLoading: false
  }),
  computed: {
    _isPreOrder () {
            if (this.product.categories.find(c => c.slug === 'pre-order')) {
        return true
      }
      return false
    },
    _productPriceLabel () {
      if (this.product.categories.find(c => c.slug === 'pre-order')) {
        return 'ราคามัดจำ:'
      }
      return 'ราคา:'
    },
    _productName () {
      return this.product.name
    },
    isDisabled() {
      return (
        (this.product.variations.length > 0 && !this.selectedVariation) ||
        this.isBtnLoading
      )
    },
    currentImage() {
      // console.log(this.selectedVariation)
      if (this.selectedVariation === null) {
        return this.product.images[this.imageIndex].src
      } else {
        // Find variations from selectedVariation -> รุ่นใหญ่
        let thisVar = this.product.variations.find((v) => {
          return v.attributes.find((a) => a.option === this.selectedVariation)
        })
        return thisVar.image
      }
    },
    currentProduct() {
      if (this.selectedVariation === null) {
        return this.product
      } else {
        // Find variations from selectedVariation -> รุ่นใหญ่
        let thisVar = this.product.variations.find((v) => {
          return v.attributes.find((a) => a.option === this.selectedVariation)
        })
        return thisVar
      }
    },
    _shouldShowQuantity() {
      if (
        this.product.variations.length === 0 &&
        this.currentProduct.in_stock
      ) {
        return true
      }
      if (this.product.variations.length > 0 && this.selectedVariation) {
        return true
      }
      return false
    }
  },
  watch: {
    isMobile: {
      handler: 'checkMobile',
      immediate: true
    },
    '$refs.cont.clientWidth'() {
      this.stickyWidth = this.$refs.cont.clientWidth + 'px'
    }
  },
  async created() {
    if (process.browser) {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    getPrereqLink(item) {
      if (item.is_product) return `/store/product/${item.product.post_name}`
      return `/tag/${item.tag_link[0].slug}`
    },
    checkMobile() {
      if (process.browser) {
        this.resize()
        window.addEventListener('resize', this.resize)
      }
    },
    resize() {
      if (window.innerWidth < 770) {
        return (this.isMobile = true)
      }
      return (this.isMobile = false)
    },
    selectGalleryImage(i) {
      this.selectedVariation = null
      this.imageIndex = i
    },
    async addToCart() {
      // alert('add')
      this.isBtnLoading = true
      // console.log(this.currentProduct)
      await this.$store.dispatch('purchase/addToCart', {
        id: this.product.id,
        quantity: this.quantity,
        variationId: this.currentProduct.id,
        data: this.product
      })
      this.isBtnLoading = false
      this.$toast.show(`${this.quantity} item(s) added to bag`).goAway(3500)
    }
  },
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `${this.product.name} ${siteTitle}`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.product.name} ${siteTitle}`
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `${pkg.url}` + this.$route.fullPath
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.product.description}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${(this.gallery[0] && this.gallery[0].src) || ''}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.special-row {
  @include breakpoint(mobile) {
    flex-direction: column-reverse;
  }
}
.image {
  padding-top: 70%;
}
.image-item {
  div {
    height: 80px;
    border: 3px solid rgba(255, 255, 255, 1);
  }
  &.active {
    div {
      border: 3px solid rgba(0, 0, 0, 0.55);
    }
  }
}
.attr-btn {
  padding: 0px 4px;
  &:nth-child(odd) {
    padding-left: 0px;
  }
  &:nth-child(even) {
    padding-right: 0px;
  }
}
</style>
