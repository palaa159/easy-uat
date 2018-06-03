<template>
  <div class="container">
    <div class="row _mgt-32px special-row">
      <div 
        id="product-content" 
        class="col-12 col-md-9">
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
                  :href="`/content/${item.post_name}`" 
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
                class="_lh-100pct" 
                v-html="product.name"/>
              <p class="_cl-neutral-500">รหัสสินค้า: 
                <span 
                  class="_ttf-upc" 
                  v-html="product.sku"/>
              </p>
              <!-- ราคา -->
              <!-- <h3>THB {{ currentProduct.regular_price | currency }}</h3> -->
              <h6 class="_lh-100pct">ราคา:</h6>
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
                class="_mgt-16px">
                <h6 class="_lh-100pct _mgbt-12px">Choose {{ product.attributes.filter(a => a.variation)[0].name }}:</h6>
                <!-- Attribute in case of variations -->
                <div class="container-fluid">
                  <div 
                    v-for="(v, i) in product.attributes"
                    :key="i" 
                    class="row">
                    <!-- Loop each attribute -->
                    <div 
                      v-for="(vx, ix) in v.options"
                      :key="ix"
                      class="col-6 attr-btn">
                      <button 
                        :disabled="!variations.length"
                        :class="{'-white': selectedVariation !== vx, '-loading': !variations.length}"
                        class="bio-button _w-100pct _mgbt-8px"
                        @click="selectedVariation = vx">
                        <h5 class="_pdv-4px _tal-ct">{{ vx }}</h5>
                      </button>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Dimension and weight -->
              <div>
                <div class="_mgv-16px">
                  <h6 class="_lh-100pct">ขนาด (mm.): </h6>
                  <p>{{ currentProduct.dimensions.width * 10 }} x {{ currentProduct.dimensions.length * 10 }} x {{ currentProduct.dimensions.height * 10 }}</p>
                </div>
                <div class="_mgv-16px">
                  <h6 class="_lh-100pct">น้ำหนัก (g.): </h6>
                  <p>{{ (parseFloat(currentProduct.weight || 0).toFixed(2) * 1000).toLocaleString() }}</p>
                </div>
              </div>
              <!-- Stock -->
              <div 
                v-if="currentProduct.in_stock" 
                class="_mgbt-16px _cl-accent">
                <strong>มีสินค้า{{ currentProduct.stock_quantity? ':': '' }} {{ currentProduct.stock_quantity? currentProduct.stock_quantity + ' ชิ้น': '' }}</strong>
              </div>
              <!-- Add Cart -->
              <form @submit.stop.prevent="addToCart">
                <div 
                  :class="{'_bdcl-primary': !isDisabled, '_bdcl-gray': isDisabled}" 
                  class="_dp-f _bdw-2px">
                  <div class="_f-1 _dp-f _alit-ct _jtfct-ct _bgcl-white">
                    <input 
                      :disabled="isDisabled"
                      v-model="quantity"
                      :max="product.stock_quantity" 
                      :class="{'_cl-primary': !isDisabled, '_cl-gray': isDisabled}"
                      min="1"
                      required
                      class="_bgcl-white _bdw-0px _w-100pct _h-48px _tal-ct _pdl-12px" 
                      type="number">
                  </div>
                  <button 
                    :class="{'_bgcl-primary': !isDisabled, '_bgcl-gray -loading -disabled': isDisabled}" 
                    :disabled="isDisabled" 
                    type="submit"
                    class="_f-3 bio-button _bdw-0px _pd-12px _ttf-upc _tal-ct _cl-white _cs-pt">
                    <h5 
                      v-show="!isDisabled" 
                      class="_ltspc-1px">หยิบใส่ตะกร้า</h5>
                  </button>
                </div>
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
    <!-- {{ product }} -->
  </div>
</template>

<script>
import ProductThumb from '~/components/products/ProductThumb'
import PageHeading from '~/components/text/PageHeading'
import pkg from '~/package.json'
import db from 'debounce'
export default {
  async asyncData({ store, error, params }) {
    const product = (await store.dispatch('product/getProductByAttr', {
      slug: params.slug
    }))[0]
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
    quantity: 1,
    isMobile: true,
    stickyWidth: '260px',
    isBtnLoading: false
  }),
  computed: {
    isDisabled() {
      return (
        (this.variations.length > 0 && !this.selectedVariation) ||
        this.isBtnLoading
      )
    },
    currentImage() {
      // console.log(this.selectedVariation)
      if (this.selectedVariation === null) {
        return this.product.images[this.imageIndex].src
      } else {
        // Find variations from selectedVariation -> รุ่นใหญ่
        let thisVar = this.variations.find((v) => {
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
        let thisVar = this.variations.find((v) => {
          return v.attributes.find((a) => a.option === this.selectedVariation)
        })
        return thisVar
      }
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
    getPrereqLink(item) {
      if (item.is_product) return `/shop/product/${item.product.post_name}`
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
      const added = await this.$store.dispatch('purchase/addToCart', {
        id: this.product.id,
        quantity: this.quantity,
        data: this.product
      })
      this.isBtnLoading = false
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
  padding-top: 75%;
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
