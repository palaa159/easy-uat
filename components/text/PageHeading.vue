<template>
  <h1 
    class="_lh-100pct _cl-light-purple _tal-ct _fs-4 _fw-600 _pdv-32px _w-100pct" 
    v-html="text"/>  
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: 'เฮด'
      }
    }
  }
</script>