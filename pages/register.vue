<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-5 _mgv-16px _bgcl-tpr _bgcl-white-md _pdh-32px-md _pdv-24px-md">
        <Register />
      </div>
    </div>
  </div>
</template>

<script>
import Register from '~/components/forms/Register'
export default {
  components: {
    Register
  },
  fetch ({ store, redirect }) {
    if (store.authUser) {
      return redirect('/')
    }
  }
}
</script>
