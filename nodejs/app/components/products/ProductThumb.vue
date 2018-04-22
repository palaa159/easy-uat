<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-sm-4">
         <!-- Image container -->
        <div class="_pst-rlt">
          <!-- Image -->
          <div 
            v-lazy:background-image="image" 
            class="image _ratio" 
          />
        </div>
        <nuxt-link 
            :to="url" 
            class="link">
            <span>{{text}}</span>
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
  }
  .link span {
    transition: 0.15s;
    transform: scale(1);
    &:hover {
      transform: scale(1.1);
    }
  }
</style>