<template>
  <div>
    <no-ssr>
      <form @submit.stop.prevent="updateProfile">
        <h5>อัพเดทข้อมูลส่วนตัว</h5>
        <float-label>
          <input 
            v-validate="{required: true, email: true}"
            v-model="email"
            disabled
            name="email"
            class="_bgcl-tpr"
            type="email" 
            data-vv-delay="500"
            placeholder="✉️ อีเมล">
          <small 
            v-show="errors.has('email')"
            class="_cl-negative" 
          >กรุณาใส่อีเมล์</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="firstName"
            name="firstName"
            class="_bgcl-tpr"
            type="text" 
            data-vv-delay="500"
            placeholder="ชื่อ">
          <small 
            v-show="errors.has('firstName')"
            class="_cl-negative" 
          >กรุณาใส่ชื่อจริง</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="lastName"
            name="lastName"
            class="_bgcl-tpr"
            type="text" 
            data-vv-delay="500"
            placeholder="นามสกุล">
          <small 
            v-show="errors.has('lastName')"
            class="_cl-negative" 
          >กรุณาใส่นามสกุล</small>
        </float-label>
        <div 
          v-if="errorMsg" 
          class="bio-message -negative">
          {{ errorMsg }}
        </div>
        <button 
          :class="{'-loading -disabled': isBtnLoading}"
          type="submit" 
          class="bio-button -info -outline _w-100pct _mgv-24px">
          <h5>
            อัพเดทข้อมูล
            <font-awesome-icon icon="long-arrow-alt-right"/>
          </h5>
        </button>
      </form>
    </no-ssr>
    <no-ssr>
      <form 
        class="_mgt-32px" 
        @submit.stop.prevent="updatePassword">
        <h5>เปลี่ยนรหัสผ่าน</h5>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="currentPassword"
            name="currentPassword"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="500"
            placeholder="🔒 รหัสผ่านเดิม">
          <small 
            v-show="errors.has('currentPassword')"
            class="_cl-negative" 
          >กรุณาใส่ Password</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="newPassword"
            name="newPassword"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="500"
            placeholder="🔒 รหัสผ่านใหม่">
          <small 
            v-show="errors.has('newPassword')"
            class="_cl-negative" 
          >กรุณาใส่ Password</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="confirmNewPassword"
            name="confirmNewPassword"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="500"
            placeholder="🔒 ยืนยันรหัสผ่านใหม่">
          <small 
            v-show="errors.has('confirmNewPassword')"
            class="_cl-negative" 
          >กรุณาใส่ Password</small>
        </float-label>
        <button 
          :class="{'-loading -disabled': isBtnLoading}"
          type="submit" 
          class="bio-button -info -outline _w-100pct _mgv-24px">
          <h5>
            เปลี่ยนแปลงรหัสผ่าน
            <font-awesome-icon icon="long-arrow-alt-right"/>
          </h5>
        </button>
      </form>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data: () => ({
    isBtnLoading: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    errorMsg: 'x'
  }),
  methods: {
    async submitProfile () {
      const redirect = this.$route.query.redirect
      const res = await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      if (res) {
        return this.$router.replace(`/${redirect}`)
      }
      return this.$router.replace('/')
    },
    async updateProfile () {
      const isValid = await this.$validator.validateAll()
      if (isValid) {
        this.submitProfile()
          .catch(err => this.errorMsg = 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
    }
  }
}
</script>
