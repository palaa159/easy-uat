<template>
  <div 
    class="content-wp cms-content" 
    v-html="content"/>
</template>

<script>
export default {
  props: {
    content: {
      default: '',
      type: String
    }
  }
}
</script>

