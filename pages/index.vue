<template>
  <section class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>IGGU.ME</h3>
        </div>
      </div>
    </div>
    <div class="container-fluid _pd-0px">
      <!-- Hashtags -->
      <div class="row no-gutters">
        <div 
          v-for="(item, i) in hashtags.posts.slice(0, 12)" 
          :key="i" 
          class="col-6 col-md-2">
          <a 
            :href="`https://instagram.com/p/${item.imageId}`" 
            class="_pst-rlt post-container">
            <!-- Image -->
            <article class="_pst-rlt _ovf-hd">
              <img 
                :src="item.image.src" 
                :alt="item.caption"
                class="_w-100pct">
              <div class="_pst-asl _t-0px _l-0px _w-100pct _h-100pct _ovfy-at _dp-f _alit-ct _jtfct-ct">
                <p 
                  class="_pdv-8px _fs-6 _wsp-pl caption _w-100pct _tal-ct" 
                  v-html="item.caption"/>
              </div>
            </article>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ store }) {
    const hashtags = await store.dispatch('tag/getPosts', { q: 'jamateurwanderer', max: 8 })
    return {
      hashtags: hashtags.result
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  padding-top: 100%;
}
.post-container {
  article {
    img {
      transform: scale(1.01);
      transition: 0.75s;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    div {
      transition: 0.3s;
      color: transparent;
      padding: 0px 12px;
      &:hover {
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
      }
    }
  }
}
</style>
