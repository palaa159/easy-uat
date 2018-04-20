<template>
   <div class="container">
    <div class="row">
       <div class="col-12 col-sm-5">
        <!-- Image container -->
        <div class="_pst-rlt">
          <!-- Image -->
          <div 
            v-lazy:background-image="image" 
            class="image _ratio" 
          />
        </div>
        <div class="col-12 col-sm-7">
          <h2 class="_lh-100pct" v-html="heading" /> 
          <ul class="_pdh-16px">
            <li 
              v-for="(li, i) in list" 
              :key="i" 
              v-html="li" />
          </ul>
          <div class="price">
            <span class="currency-text">THB</span>
            <span class="price">{{price}}</span>
            <nuxt-link 
              :to="url" 
              class="link">
              <div class=" _pst-asl _bt-0px _r-0px _dp-f _jtfct-ct _alit-ct">
                <span>Buy Now!</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
       <div class="col-12 col-sm-5">
         <div class="length"></div>
         <span>- หรือ -</span>
         <nuxt-link 
            :to="url" 
            class="link">
            <div class=" _pst-asl _bt-0px _r-0px _dp-f _jtfct-ct _alit-ct">
              <span>แพ็ครายเดือน</span>
            </div>
          </nuxt-link>
      </div>
      <div class="col-12 col-sm-7">
        
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
      heading: {
        type: String,
        default: 'เฮด'
      },
      list: {
        type: Array,
        default: () => (['a', 'b', 'c'])
      },
      price: {
        type: String,
        default: 'ราคา'
      },
      url: {
        type: String,
        default: '/'
      }
    }
  }
</script>