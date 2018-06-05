<template>
  <div 
    v-if="crumbs && crumbs.length" 
    class="container _pdt-12px ">
    <div class="row">
      <div class="col">
        <ul class="_dp-f _alit-ct _pdt-12px _jtfct-fs _fs-7">
          <li v-if="crumbs.length >= 1">
            <nuxt-link 
              to="/" 
              class="_cl-neutral _ttf-upc">
              Home
            </nuxt-link>
          </li>
          <li 
            v-for="(x, i) in crumbs" 
            :key="i"
            class="_dp-f _alit-ct _cl-neutral"
          >
            <fa-icon 
              v-if="crumbs.length >= 1"
              icon="chevron-right"
              class="_mgh-8px"
            />
            <nuxt-link 
              :to="`/${x.path}`" 
              class="_cl-neutral _ttf-upc">
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
</template>

<script>
export default {
  computed: {
    crumbs() {
      const c =
        this.$route.path &&
        this.$route.path !== '/' &&
        this.$route.path.split('/')
      let crumbs = []
      if (c && c.length) {
        for (let i = 1; i < c.length; i++) {
          crumbs.push({
            path: `${c[i - 2] ? c[i - 2] : ''}${c[i - 2] ? '/' : ''}${
              c[i - 1]
            }${c[i - 1] ? '/' : ''}${c[i]}`,
            title: c[i]
          })
        }
      }
      return crumbs
    }
  }
}
</script>


<style lang="scss" scoped>
.breadcrumbs {
  background: rgba(0, 0, 0, 0.02);
}
</style>
