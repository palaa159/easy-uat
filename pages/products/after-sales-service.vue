<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5"/>
            <div class="col-12 col-md-7">
              <PageHeading 
                text="After Sales Service"
                class="_ttf-upc"
              />
              <p>
                บริษัทมีความต้องการให้ลูกค้าทุกท่านได้รับการดูแลที่ดี ท่านสามารถติดต่อเราเพื่อสอบถามเรื่องต่างๆ ได้ที่อีเมล
              </p>
              <span><a href="mailto:customerservice@makerstation">customerservice@makerstation</a></span>
              <p>
                ทางบริษัทจะทำการตอบกลับภายใน 24 ชม.
                เพื่อให้การบริการเป็นไปได้ครบถ้วน ขอให้ท่านระบุ ชื่อ-นามสกุล อีเมล และเบอร์โทร ที่ใช้ในการซื้อผลิตภัณฑ์ หรือหากเป็นการสอบถามข้อมูลผลิตภัณฑ์ ขอให้ท่านระบุชื่อจริง อีเมล และเบอร์โทร พร้อมเวลาที่ท่านสะดวกให้ทางบริษัทติดต่อกลับ
              </p>
              <span>ทางบริษัทมุ่งมันที่จะให้บริการท่านอย่างดีที่สุด</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row"/>
  </div>
</template>

<script>
import PageHeading from '~/components/text/PageHeading'
export default {
  components: {
    PageHeading
  },
  head () {
    return {
      title: `AFTER SALES SERVICE ${this.$store.state.site.title}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `AFTER SALES SERVICE` },
        { hid: 'og:description', name: 'og:description', content: `AFTER SALES SERVICE` }
      ]
    }
  },
}
</script>
