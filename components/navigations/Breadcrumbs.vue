<template>
  <slide-y-down-transition>
    <div 
      v-if="crumbs.length > 1" 
      class="breadcrumbs">
      <div class="row">
        <div class="col">
          <ul class="_dp-f _pdv-12px _jtfct-ct _fs-7">
            <li>
              <nuxt-link 
                to="/" 
                class="_cl-primary-300">
                หน้าแรก
              </nuxt-link>
            </li>
            <li 
              v-for="(x, i) in crumbs" 
              :key="i"
              class="_dp-f _alit-ct _cl-primary-300"
            >
              <font-awesome-icon 
                v-if="i" 
                icon="chevron-right"
                class="_mgh-8px"
              />
              <nuxt-link 
                :to="x" 
                class="_cl-primary-300">
                {{ x }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </slide-y-down-transition>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
