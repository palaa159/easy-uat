<template>
  <section class="_dp-f _alit-ct _pdbt-16px">
    <!-- Picture -->
    <div 
      :style="`background-image: url(${$store.state.auth.user.avatar_urls['96']})`" 
      class="image _w-48px _h-48px _bdrd-50pct _bgs-cv _bgpst-ct" 
    />
    <!-- Info -->
    <div class="_mgl-12px">
      <h5 class="_lh-100pct _mgv-4px _cl-dark">{{ $store.state.auth.user.first_name || $store.state.auth.user.email }} {{ $store.state.auth.user.last_name }}</h5>
      <h6 class="_lh-100pct _mgv-4px _cl-neutral">เป็นสมาชิก 1 ปีที่แล้ว</h6>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .image {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  }
</style>
