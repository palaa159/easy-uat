<template>
  <h1 class="_lh-100pct _cl-purple" v-html="text"/> 
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
ß