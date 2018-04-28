<template>
  <no-ssr>
    <div class="_mgv-32px container">
      <div class="row _dp-f _fdrt-cl _alit-ct">
        <!-- ชื่อ -->
        <div class="col-12 col-md-6 _pdh-0px _pdh-16px-sm">
          <form @submit.stop.prevent="submit">
            <float-label>
              <input 
                type="text" 
                placeholder="ชื่อ">
            </float-label>
            <float-label>
              <input 
                type="email" 
                placeholder="อีเมล">
            </float-label>
            <float-label>
              <textarea 
                placeholder="ข้อความ"
              />
            </float-label>
            <button 
              :class="{'-loading -disabled': isBtnLoading}"
              :disabled="isBtnLoading"
              type="submit" 
              class="bio-button -positive -outline _w-100pct _mgv-48px">
              <h4>
                ส่งข้อความ
                <fa-icon icon="long-arrow-alt-right"/>
              </h4>
            </button>
          </form>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
  export default {
    
  }
</script>