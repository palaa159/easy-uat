<template>
  <div>
    <h4 class="_tal-ct">
      ลืมรหัสผ่าน
    </h4>
    <p class="_tal-ct _mgbt-32px">คุณสามารถทำการ Reset รหัสผ่านได้ทางอีเมล</p>
    <no-ssr>
      <form @submit.stop.prevent="submit">
        <float-label>
          <input 
            v-validate="{required: true, email: true}"
            v-model="email"
            name="email"
            class="_bgcl-tpr"
            type="email" 
            data-vv-delay="500"
            data-vv-validate-on="none"
            placeholder="✉️ อีเมลที่ลงทะเบียน">
          <small 
            v-show="errors.has('email')"
            class="_cl-negative" 
          >กรุณาใส่อีเมล์</small>
        </float-label>
        <div 
          v-if="errorMsg" 
          class="bio-message -negative">
          {{ errorMsg }}
        </div>
        <div class="bio-message -positive _mgv-12px">
          ขั้นตอนถูกส่งแล้ว กรุณาเช็คอีเมล
        </div>
        <button 
          :class="{'-loading -disabled': isBtnLoading}"
          type="submit" 
          class="bio-button -positive -outline _w-100pct _mgv-16px">
          <h4>
            ส่งขั้นตอนไปทางอีเมล
            <fa-icon icon="long-arrow-alt-right"/>
          </h4>
        </button>
      </form>
    </no-ssr>
    <div class="_tal-ct _mgv-12px">
      <span>เป็นสมาชิกอยู่แล้ว? </span>
      <nuxt-link 
        to="login" 
        class="bio-link -fancy">
        เข้าสู่ระบบ
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isBtnLoading: false,
    email: '',
    password: '',
    errorMsg: null
  }),
  methods: {
    async forgot () {

    },
    async submit () {
      const isValid = await this.$validator.validateAll()
      if (isValid) {
        this.forgot()
          .catch(err => this.errorMsg = 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
    }
  }
}
</script>
