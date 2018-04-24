<template>
  <div class="container">
    <div 
      :class="{'_fdrt-rrv': !leftImage}"
      class="row _alit-ct" 
    >
      <div class="col-12 col-sm-5">
        <!-- Image container -->
        <div class="_pst-rlt">
          <!-- Image -->
          <div 
            v-lazy:background-image="image" 
            class="image _ratio _mgbt-24px" 
          />
          <!-- Button -->
          <nuxt-link 
            :to="url" 
            class="link _dp-n _dp-b-md ">
            <div class="hexagon _pst-asl _bt-0px _r-0px _dp-f _jtfct-ct _alit-ct">
              <fa-icon 
                class="_cl-white"
                size="lg" 
                icon="search"/>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <h2  
          class="_fs-3 _fs-1-md _lh-125pct _fw-300 _cl-blue"
          v-html="heading" /> 
        <ul class="_pdt-48px _pdbt-16px _mgl-16px home-list">
          <li 
            v-for="(li, i) in list" 
            :key="i" 
            v-html="li" 
            class="_fw-300 _lh-150pct"
          />
        </ul>
      </div>
      <div class="col-12 _dp-n-md _dp-f _fdrt-cl _alit-ct _mgt-12px">
        <nuxt-link 
            :to="url" 
            class="link">
            <div class="hexagon _pst-rlt _dp-f _jtfct-ct _alit-ct">
              <fa-icon 
                class="_cl-white"
                size="lg" 
                icon="search"/>
            </div>
          </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        default: 'http://via.placeholder.com/350x350'
      },
      leftImage: {
        type: Boolean,
        default: true
      },
      heading: {
        type: String,
        default: 'test title'
      },
      list: {
        type: Array,
        default: () => (['a', 'b', 'c'])
      },
      url: {
        type: String,
        default: '/'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    width: 100%;
    // height: 300px;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .hexagon {
    background-image: url(~/assets/images/icons/hexagon.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100px;
    height: 100px;
  }
  .link div {
    transition: 0.15s;
    transform: scale(1);
    &:hover {
      transform: scale(1.1);
    }
  }
  ul {
    list-style-image: url(~/assets/images/icons/hexagon-bullet.svg);
    li{
      padding-left: 8px; 
    }
  }
  .home-list{
    font-family: 'Kanit', sans-serif;
    color: #4F4F4F;
  }
</style>
