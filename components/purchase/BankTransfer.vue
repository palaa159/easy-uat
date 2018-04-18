<template>
  <div>
    <p>กรุณาทำรายการชำระค่าสินค้าบริการภายใน 48 ชม. หากท่านไม่ชำระภายในเวลาดังกล่าว การสั่งสินค้าของท่านจะโดนยกเลิก</p>
    <div class="_mgt-16px">
      <button 
        v-for="(x, i) in banks" 
        :key="i"
        class="bio-button -gray -outline _dp-ilb _mgr-8px _mgt-8px _w-30pct"
      >ธนาคาร{{ x.title }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    banks: [
      {
        title: 'กรุงศรี'
      },
      {
        title: 'กรุงเทพ'
      },
      {
        title: 'กสิกรไทย'
      },
      {
        title: 'กรุงไทย'
      },
      {
        title: 'ไทยพาณิชย์'
      }
    ]
  })
}
</script>
