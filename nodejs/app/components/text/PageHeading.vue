<template>
  <h1 class="_lh-100pct" v-html="text" :style="`color: ${color}`" /> 
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: '#6A17F0'
      },
      text: {
        type: String,
        default: 'เฮด'
      }
    }
  }
</script>
