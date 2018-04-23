<template>
  <div class="container">
    <nuxt-link to="/kitchensink">
      kitchensink
    </nuxt-link>

    <div class="row">
      <div class="col">
        <h2 v-html="`heading`" /> 
        <ul class="_pdh-16px">
          <!-- <li 
            v-for="(li, i) in list" 
            :key="i" 
            v-html="li" /> -->
        </ul>
      </div>
      <div class="col">
        <!-- Image container -->
        <div class="_pst-rlt">
          <!-- Image -->
          <!-- <div 
            v-lazy:background-image="image" 
            class="image _ratio" 
          /> -->
        </div>
      </div>
    </div>

    <div class="row _jtfct-ct">
      <div 
        v-for="(item, i) in featuredProducts" 
        :key="i" 
        class="col-12 col-lg-10 _mgv-16px">
        <HomeShowcase 
          :left-image="(i + 1) % 2 != 0"
          :image="item.images[0].src"
          :heading="item.name"
          :url="`/products/${item.slug}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import HomeShowcase from '~/components/products/HomeShowcase'
  // import WooCommerce from 'woocommerce'
  export default {
    async asyncData ({ store }) {
      const featuredProducts = await store.dispatch('product/getFeaturedProducts')
      // console.log(featured)
      return {
        featuredProducts
      }
    },
    components: {
      HomeShowcase
    },
    data: () => ({
      // mockProducts: 
      // [{
      //   image: require('~/assets/images/products/home-product1.png'),
      //   heading: 'เครื่องตรวจระดับน้ำตาลในเลือดยี่ห้อ SD จากประเทศเกาหลี',
      //   list: [
      //     'บันทึกผลการทดสอบได้ถึง 500 ค่า พร้อมแสดงค่าเฉลี่ยของระดับน้ำตาลที่ 7,14,30 วัน', 
      //     'มีสัญลักษณ์เพื่อบันทึกผลการทดสอบ ก่อนและหลังอาหารได้b', 
      //     'สามารถตั้งเวลาเตือนในการเจาะเลือดได้ถึง 4 ครั้ง/วัน',
      //     'ใช้เวลาในการอ่านค่าผลน้ำตาล 5 วินาที',
      //     'เป็นระบบที่ไม่ต้องใช้โค้ด ชิป หรือเข้ารหัสใดๆ'
      //     ],
      //   url: ''
      // }, {
      //   image: require('~/assets/images/products/home-product2.png'),
      //   heading: 'เครื่องตรวจระดับน้ำตาลในเลือดยี่ห้อ SD จากประเทศเกาหลี',
      //   list: [
      //     'บันทึกผลการทดสอบได้ถึง 500 ค่า พร้อมแสดงค่าเฉลี่ยของระดับน้ำตาลที่ 7,14,30 วัน', 
      //     'มีสัญลักษณ์เพื่อบันทึกผลการทดสอบ ก่อนและหลังอาหารได้b', 
      //     'สามารถตั้งเวลาเตือนในการเจาะเลือดได้ถึง 4 ครั้ง/วัน',
      //     'ใช้เวลาในการอ่านค่าผลน้ำตาล 5 วินาที',
      //     'เป็นระบบที่ไม่ต้องใช้โค้ด ชิป หรือเข้ารหัสใดๆ'
      //     ],
      //   url: ''
      // }, {
      //   image: require('~/assets/images/products/home-product3.png'),
      //   heading: 'เครื่องตรวจระดับน้ำตาลในเลือดยี่ห้อ SD จากประเทศเกาหลี',
      //   list: [
      //     'บันทึกผลการทดสอบได้ถึง 500 ค่า พร้อมแสดงค่าเฉลี่ยของระดับน้ำตาลที่ 7,14,30 วัน', 
      //     'มีสัญลักษณ์เพื่อบันทึกผลการทดสอบ ก่อนและหลังอาหารได้b', 
      //     'สามารถตั้งเวลาเตือนในการเจาะเลือดได้ถึง 4 ครั้ง/วัน',
      //     'ใช้เวลาในการอ่านค่าผลน้ำตาล 5 วินาที',
      //     'เป็นระบบที่ไม่ต้องใช้โค้ด ชิป หรือเข้ารหัสใดๆ'
      //     ],
      //   url: ''
      // }, {
      //   image: require('~/assets/images/products/home-product4.png'),
      //   heading: 'เครื่องตรวจระดับน้ำตาลในเลือดยี่ห้อ SD จากประเทศเกาหลี',
      //   list: [
      //     'บันทึกผลการทดสอบได้ถึง 500 ค่า พร้อมแสดงค่าเฉลี่ยของระดับน้ำตาลที่ 7,14,30 วัน', 
      //     'มีสัญลักษณ์เพื่อบันทึกผลการทดสอบ ก่อนและหลังอาหารได้b', 
      //     'สามารถตั้งเวลาเตือนในการเจาะเลือดได้ถึง 4 ครั้ง/วัน',
      //     'ใช้เวลาในการอ่านค่าผลน้ำตาล 5 วินาที',
      //     'เป็นระบบที่ไม่ต้องใช้โค้ด ชิป หรือเข้ารหัสใดๆ'
      //     ],
      //   url: ''
      // }, {
      //   image: require('~/assets/images/products/home-product5.png'),
      //   heading: 'แนวทางการให้บริการ',
      //   list: [
      //     'รับประกันตัวเครื่อง…..ปี', 
      //     'สามารถ Download คู่มือการใช้งานเครื่องภาษาไทยอย่างง่าย', 
      //     'สามารถ Download แนวทางการแก้ไขปัญหาเบื้องต้น',
      //     'บริการให้คำปรึกษาการใช้งานเครื่อง โดยผู้เชี่ยวชาญผลิตภัณฑ์'
      //     ],
      //   url: ''
      // }],
      featuredProducts: []
    }),
    head () {
      const siteTitle = this.$store.state.site.title
      return { 
        title: `Home ${siteTitle}`
      }
    }
  }
</script>