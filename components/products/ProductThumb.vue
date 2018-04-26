<template>
    <div >
      <!-- Image container -->
    <div class="_pst-rlt">
      <!-- Image -->
      
    </div>
    <nuxt-link 
        :to="url" 
        class="link _tal-ct">
        <div 
          v-lazy:background-image="image" 
          class="image _ratio _bgs-ct" 
        />
        <h6  
          class="_fs-3 _fs-4-md _lh-125pct _fw-500 _cl-dark-aqua"
          v-html="text" />
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        default: 'http://via.placeholder.com/350x350'
      },
      text: {
        type: String,
        default: 'ชื่อสินค้า'
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &[lazy=loaded] {
      filter: drop-shadow(0mm 5mm 4mm rgba(0, 0, 0, .15));
    }
  }
  .link span {
    transition: 0.15s;
    transform: scale(1);
    &:hover {
      transform: scale(1.1);
    }
  }

</style>