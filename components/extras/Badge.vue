<template>
  <div class="badge _bgcl-accent _dp-f _bdrd-8px _jtfct-ct _alit-ct">
    <span>{{ number }}</span>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.badge {
  color: #fff;
  min-width: 12px;
  height: 12px;
  font-size: 12px;
  padding: 10px 6px;
}
</style>
