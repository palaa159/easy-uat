<template>
  <div class="container">
    <div 
      class="row _alit-ct _fdrt-rrv _pdv-48px" 
    >
      <div class="col-12 col-sm-5">
        <!-- Image container -->
        <div class="_pst-rlt">
          <!-- Image -->
          <div 
            v-lazy:background-image="`https://cms.maplelife.co.th/wp-content/uploads/2018/04/PIC2.png`"
            class="hero-image _ratio" 
          />
        </div>
      </div>
      <div class="col-12 col-sm-7 hero-text">
        <h1 class="_fs-3 _fw-400 _fs-1-md _fw-700-md _lh-125pct">เครื่องตรวจวัดระดับ<span class="_dp-ilb">น้ำตาลในเลือด</span><span class="_dp-ilb">SD GLUCONAVII</span></h1> 
        <h5 class="_dp-b _pdt-32px _fs-5 _fs-4-md _fw-300 _fw-600-md _lh-125pct _cl-blue">ง่าย สะดวก รวดเร็ว
        <span class="_dp-b _fw-300 _cl-blue">ด้วยเทคโนโลยีในการดูแลสุขภาพ</span></h5>
      </div>
    </div>

    <div class="row _jtfct-ct">
      <div 
        v-for="(item, i) in mockProducts" 
        :key="i" 
        class="col-12 col-lg-10 _mgv-16px">
        <!-- <HomeShowcase 
          :left-image="(i + 1) % 2 != 0"
          :image="item.images[0].src"
          :heading="item.name"
          :url="`/products/${item.slug}`"
        /> -->
        <HomeShowcase 
          :left-image="(i + 1) % 2 != 0"
          :image="item.image"
          :heading="item.heading"
          :list="item.list"
          :url="item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import HomeShowcase from '~/components/products/HomeShowcase'
  // import WooCommerce from 'woocommerce'
  export default {
    // async asyncData ({ store }) {
    //   const featuredProducts = await store.dispatch('product/getFeaturedProducts')
    //   // console.log(featured)
    //   return {
    //     featuredProducts
    //   }
    // },
    components: {
      HomeShowcase
    },
    data: () => ({
      mockProducts: 
      [{
        image: `https://cms.maplelife.co.th/wp-content/uploads/2018/04/home-product1.png`,
        heading: 'เครื่องตรวจระดับน้ำตาลในเลือดยี่ห้อ SD <span class="_dp-b _fw-500">จากประเทศเกาหลี</span>',
        list: [
          'บันทึกผลการทดสอบได้ถึง 500 ค่า พร้อมแสดงค่าเฉลี่ยของระดับน้ำตาลที่ 7, 14, 30 วัน', 
          'มีสัญลักษณ์เพื่อบันทึกผลการทดสอบ ก่อนและหลังอาหารได้b', 
          'สามารถตั้งเวลาเตือนในการเจาะเลือดได้ถึง 4 ครั้ง/วัน',
          'ใช้เวลาในการอ่านค่าผลน้ำตาล 5 วินาที',
          'เป็นระบบที่ไม่ต้องใช้โค้ด ชิป หรือเข้ารหัสใดๆ'
          ],
        url: '/products/เครื่องตรวจระดับน้ำตาล'
      }, {
        image: `https://cms.maplelife.co.th/wp-content/uploads/2018/04/home-product2.png`,
        heading: 'แผ่นวัดระดับน้ำตาล<span class="_dp-ilb">ในเลือด</span><span class="_dp-ilb _fw-500">ยี่ห้อ SD</span>',
        list: [
          'ใช้เวลาในการรายงานผลเพียง 5 วินาที', 
          'ใช้ปริมาณเลือดเพียงเล็กน้อย', 
          'เทคโนโลยี Gold electrode'
          ],
        url: '/products/แผ่นตรวจน้ำตาลในเลือด'
      }, {
        image: `https://cms.maplelife.co.th/wp-content/uploads/2018/04/home-product3-1.png`,
        heading: '<span class="_fw-500">เข็ม DROPLET LANCE</span> สำหรับการเจาะเลือด',
        list: [
          'เข็มเจาะเลือดผ่านการฆ่าเชื้อแล้ว', 
          'ใช้ร่วมกับปากกาเจาะเลือด', 
          'ขนาดเล็กด้วยเข็มเบอร์ 28G'
          ],
        url: '/products/เข็มเจาะเลือด'
      }, {
        image: `https://cms.maplelife.co.th/wp-content/uploads/2018/04/home-product4.png`,
        heading: '<span class="_fw-500">แผ่นแอลกอฮอล์<span class="_dp-iln _dp-b-md">สำเร็จรูป</span></span>',
        list: [
          'ใช้เช็ดผิวหนังเพื่อฆ่าเชื้อ', 
          'แยกบรรจุซองละ 1 แผ่น สะดวกพกพา', 
          'แห้งเร็วกว่าการเทแอลกอฮอล์บนสำลี',
          'ใช้ได้ดีสำหรับการเจาะเลือดตรวจเบาหวาน'
          ],
        url: '/products/แผ่นเช็ดแอลกอฮอล์'
      }, {
        image: `https://cms.maplelife.co.th/wp-content/uploads/2018/04/home-product5.png`,
        heading: '<span class="_fw-500">แนวทาง<span class="_dp-ilb  _dp-b-md">การให้บริการ</span></span>',
        list: [
          'รับประกันตัวเครื่อง…..ปี', 
          'สามารถ Download คู่มือการใช้งานเครื่องภาษาไทยอย่างง่าย', 
          'สามารถ Download แนวทางการแก้ไขปัญหาเบื้องต้น',
          'บริการให้คำปรึกษาการใช้งานเครื่อง โดยผู้เชี่ยวชาญผลิตภัณฑ์'
          ],
        url: '/products/แพ็คเกจรายเดือน'
      }]
    }),
    head () {
      const siteTitle = this.$store.state.site.title
      return { 
        title: `Home ${siteTitle}`
      }
    }
  }
</script>
<style lang="scss" scoped>
  .hero-image {
    /* background:  */
    width: 100%;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    &[lazy=loaded] {
      filter: drop-shadow(0mm 5mm 4mm rgba(0, 0, 0, .15));
    }
  }
  h1 {
    font-family: 'Kanit', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    line-height: 3.4rem;
    letter-spacing: 3px;
    color: #182F69;
  }
</style>
