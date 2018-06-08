<template>
  <div class="wrapper _pst-asl _zid-1">
    <div class="_pdt-16px">
      <div class="_bgcl-white _pdh-16px _pdv-16px _bdrd-4px">
        <div 
          v-for="(item, i) in menus" 
          :key="i" 
          class="_pdv-8px">
          <nuxt-link 
            :to="`/store/${item.slug}`"
            class="bio-link _cl-neutral-700" 
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: '3d-printing'
    },
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>


<style lang="scss" scoped>
.wrapper {
  transform: translateX(-16px);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>
