<template>
  <header class="_zid-1">
    <!-- Bread, User, Cart -->
    <UserNav />
    <!-- Menu -->
    <MenuNav />
  </header>
</template>

<script>
  import MenuNav from '~/components/navigations/MenuNav'
  import UserNav from '~/components/navigations/UserNav'
  export default {
    components: {
      MenuNav,
      UserNav,
    },
    data: () => ({
      menuItems: []
    })
  }
</script>

<style lang="scss" scoped>
  
</style>
