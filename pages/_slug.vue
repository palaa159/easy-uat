<template>
  <section 
    :style="`background: rgba(${shop.profileImage.colors.LightMuted._rgb.join(',')}, 0.15)`" 
    class="_w-100pct">
    <div class="container">
      <!-- name -->
      <div class="row _pdt-24px">
        <div class="col-12">
          <div class="_tal-ct">
            <div 
              v-lazy:background-image="shop.profileImage.src" 
              class="profile-image _bdrd-50pct _mgh-at"/>
            <div class="_pdt-24px">
              <h3 
                class="_lh-100pct _mgbt-12px"
                v-html="shop.fullName"/>
              <div 
                class="_lh-125pct _w-100pct _w-70pct-md _mgh-at" 
                v-html="shop.description"/>
            </div>
            <!-- Line add friend -->
            <div class="_mgt-12px">
              <div 
                class="line-it-button" 
                data-lang="en" 
                data-type="friend" 
                data-lineid="@5lab" 
                data-count="true" 
                style="display: none;"/>
              <script 
                src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" 
                async="async" 
                defer="defer"/>
            </div>
          </div>
        </div>
      </div>
      <!-- products -->
      <div class="row _pdv-32px">
        <div class="col-12 _mgv-12px">
          <h4>Posts</h4>
        </div>
        <div 
          v-for="(item, i) in shop.posts" 
          :key="i"
          class="col-6 col-md-4 _mgbt-24px">
          <div 
            class="item-link _cs-pt">
            <!-- image -->
            <!-- <div 
              v-lazy:background-image="item.imageUrl" 
              class="image _pst-rlt"> -->
            <div class="_pst-rlt _ovf-hd _bdrd-4px">
              <img 
                :src="item.image.src" 
                class="_w-100pct"
                alt="">
              <article class="_pst-asl _t-0px _l-0px _w-100pct _h-100pct _ovfy-at _dp-f _alit-ct _jtfct-ct">
                <p 
                  class="_pdv-8px _fs-6 _wsp-pl caption _w-100pct" 
                  v-html="item.caption"/>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, app }) {
    const slug = params.slug
    const shop = await app.$axios.$get(`/user/${slug}`)
    return { shop }
  },
  head () {
    return {
      title: `${this.shop.fullName} – IGshopping.co`,
      meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: this.shop.fullName
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: this.shop.description
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: this.shop.profileImage
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-image {
  width: 100px;
  height: 100px;
}
.item-link {
  div {
    article {
      transition: 0.5s;
      opacity: 0;
      background: rgba(0, 0, 0, 0.7);
      color: white;
    }
  }
  &:hover {
    div {
      article {
        opacity: 1;
      }
    }
  }
}
.image {
  width: 100%;
  padding-top: 100%;
  // &:hover {
  //   & + p {
  //     height: auto;
  //     &::after {
  //       display: none;
  //     }
  //   }
  // }
}
.caption {
  padding: 0px 12px;
  // &::after {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 24px;
  //   bottom: 0px;
  //   left: 0px;
  //   right: 0px;
  //   /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100;White+to+Transparent */
  //   background: -moz-linear-gradient(
  //     bottom,
  //     rgba(250, 250, 250, 1) 0%,
  //     rgba(255, 255, 255, 0) 100%
  //   ); /* FF3.6-15 */
  //   background: -webkit-linear-gradient(
  //     bottom,
  //     rgba(250, 250, 250, 1) 0%,
  //     rgba(255, 255, 255, 0) 100%
  //   ); /* Chrome10-25,Safari5.1-6 */
  //   background: linear-gradient(
  //     to top,
  //     rgba(250, 250, 250, 1) 0%,
  //     rgba(255, 255, 255, 0) 100%
  //   ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  //   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  // }
  &:hover {
    height: auto;
    &::after {
      display: none;
    }
  }
}
</style>
