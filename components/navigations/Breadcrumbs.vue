<template>
  <no-ssr>
    <div 
      v-show="crumbs && crumbs.length" 
      class="breadcrumbs">
      <div class="row">
        <div class="col">
          <ul class="_dp-f _pdv-12px _jtfct-ct _fs-7">
            <li>
              <nuxt-link 
                to="/" 
                class="_cl-primary-300 _ttf-upc">
                Home
              </nuxt-link>
            </li>
            <li 
              v-for="(x, i) in crumbs" 
              :key="i"
              class="_dp-f _alit-ct _cl-primary-300"
            >
              <fa-icon 
                icon="chevron-right"
                class="_mgh-8px"
              />
              <nuxt-link 
                :to="`/${x.path}`" 
                class="_cl-primary-300 _ttf-upc">
                <span 
                  v-if="x.title.indexOf(':') > -1" 
                >{{ $route.params[x.title.substring(1)] }}</span>
                <span 
                  v-else 
                >{{ decodeURI(x.title) }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </no-ssr>
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
