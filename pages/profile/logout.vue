<template>
  <div class="container">
    <div class="row">
      <div class="col-12"/>
    </div>
    <modal 
      :pivot-y="0.1"
      :adaptive="true" 
      :max-width="400" 
      name="logout-modal" 
      modal 
      classes="modal-fixed" 
      width="95%" 
      height="auto" 
      @closed="onClosed"
    >
      <div class="container _pdv-16px">
        <div class="row">
          <div class="col-12 _dp-f _jtfct-fe">
            <fa-icon 
              icon="times" 
              class="_cs-pt"
              @click="$modal.hide('logout-modal')" />
          </div>
          <div class="col-12">
            <h5>คุณแน่ใจว่าต้องการออกจากระบบ?</h5>
          </div>
        </div>
        <div class="row _mgt-32px _mgbt-12px">
          <div class="col">
            <button 
              class="bio-button -accent -outline _w-100pct" 
              @click="$store.dispatch('auth/logout')">ออกจากระบบ</button>
          </div>
          <div class="col">
            <button 
              class="bio-button -primary -outline _w-100pct" 
              @click="$modal.hide('logout-modal')">อยู่ในระบบต่อ</button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  async mounted() {
    return this.$modal.show('logout-modal')
  },
  methods: {
    onClosed() {
      return this.$router.replace('/profile')
    }
  }
}
</script>

