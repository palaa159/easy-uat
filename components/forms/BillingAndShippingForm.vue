<template>
  <div>
    <form @submit.stop.prevent="submit">
      <!-- ที่อยู่ในการจัดส่ง -->
      <no-ssr>
        <div class="_mgv-24px container">
          <div class="row">
            <div class="col-12 _pdh-0px _pdh-16px-md">
              <h6 class="_mgbt-24px _mgl-4px">
                <fa-icon 
                  :icon="['fal', 'truck']" 
                  class="_mgr-8px"/> ที่อยู่ในการจัดส่ง
              </h6>
            </div>
          </div>
          <div class="row">
            <!-- ชื่อ -->
            <div class="col-12 col-md-6 _pdh-0px _pdh-16px-md">
              <float-label>
                <input 
                  v-validate="{required: true}" 
                  v-model="shipping.firstName"
                  type="text"
                  name="shipping.firstName"
                  placeholder="ชื่อ - สกุล">
                <small 
                  v-show="errors.has('shipping.firstName')"
                  class="_cl-negative" 
                >กรุณาใส่ชื่อ - นามสกุลของผู้รับ</small>
              </float-label>
              <float-label>
                <input 
                  v-validate="{required: true}"
                  v-model="shipping.phone"
                  name="shipping.phone"
                  type="text"
                  placeholder="หมายเลขโทรศัพท์">
                <small 
                  v-show="errors.has('shipping.phone')"
                  class="_cl-negative" 
                >กรุณาใส่หมายเลขโทรศัพท์</small>
              </float-label>
              <float-label>
                <input 
                  v-validate="{required: true}"
                  v-model="shipping.address1"
                  name="shipping.address1"
                  type="text" 
                  placeholder="ที่อยู่">
                <small 
                  v-show="errors.has('shipping.address1')"
                  class="_cl-negative" 
                >กรุณาใส่ที่อยู่</small>
              </float-label>
              <float-label>
                <input 
                  v-model="shipping.address2" 
                  name="shipping.address2"
                  type="text"
                  placeholder="ที่อยู่ (ต่อ)">
              </float-label>
            </div>
            <!-- ที่อยู่ -->
            <div class="col-12 col-md-6 _mgt-32px _mgt-0px-md _pdh-0px _pdh-16px-md">
              <float-label
                label="เขต / อำเภอ">
                <input 
                  v-validate="{required: true}" 
                  v-model="shipping.city"
                  type="text"
                  name="shipping.city"
                  placeholder="เขต / อำเภอ">
                <small 
                  v-show="errors.has('shipping.city')"
                  class="_cl-negative" 
                >กรุณาใส่เขต / อำเภอ</small>
              </float-label>
              <float-label
                label="จังหวัด">
                <select 
                  v-validate="{required: true}" 
                  v-model="shipping.state"
                  name="shipping.state"
                  class="select _w-100pct">
                  <option 
                    disabled 
                    value="">เลือกจังหวัด</option>
                  <option 
                    v-for="(value, key) in $store.state.site.countryCodes[$store.state.auth.customer && $store.state.auth.customer.shipping.country || 'TH'].states" 
                    :key="key" 
                    :value="key" 
                    v-html="value"/>
                </select>
                <small 
                  v-show="errors.has('shipping.state')"
                  class="_cl-negative" 
                >กรุณาใส่จังหวัด</small>
              </float-label>
              <float-label
                label="ประเทศ">
                <select 
                  v-validate="{required: true}" 
                  v-model="shipping.country"
                  name="shipping.country"
                  disabled
                  class="select _w-100pct">
                  <option 
                    disabled 
                    value="">เลือกประเทศ</option>
                  <option 
                    v-for="(value, key) in $store.state.site.countryCodes" 
                    :key="key" 
                    :value="key" 
                    v-html="value.title"/>
                </select>
                <small 
                  v-show="errors.has('shipping.country')"
                  class="_cl-negative" 
                >กรุณาใส่ประเทศ</small>
              </float-label>
              <float-label
                label="รหัสไปรษณีย์">
                <input 
                  v-validate="{required: true}"
                  v-model="shipping.postcode"
                  type="text"
                  name="shipping.postcode"
                  placeholder="รหัสไปรษณีย์">
                <small 
                  v-show="errors.has('shipping.postcode')"
                  class="_cl-negative" 
                >กรุณาใส่รหัสไปรษณีย์</small>
              </float-label>
            </div>
          </div>
        </div>
      </no-ssr>
      <!-- ที่อยู่ในการออกบิล -->
      <no-ssr>
        <div class="_mgv-24px container">
          <div class="row _mgbt-24px">
            <div class="col-12 _dp-f-md _dp-b _alit-ct _jtfct-spbtw _pdh-0px _pdh-16px-md">
              <div>
                <h6 class="_mgl-4px">
                  <fa-icon 
                    :icon="['fal', 'file-alt']" 
                    class="_mgr-8px"/> ที่อยู่ในการออกบิล
                </h6>
              </div>
              <div class="_pd-8px _pdh-0px-md">
                <div class="bio-checkbox">
                  <input 
                    id="c1"
                    v-model="billing.copyChecked" 
                    type="checkbox"
                  >
                  <label for="c1">คัดลอกจากที่อยู่จัดส่ง</label>
                </div>
              </div>
            </div>
          </div>
          <div 
            v-if="!billing.copyChecked" 
            class="row">
            <!-- ชื่อ -->
            <div class="col-12 col-md-6 _pdh-0px _pdh-16px-md">
              <float-label>
                <input 
                  v-validate="{required: true}" 
                  v-model="billing.firstName"
                  type="text"
                  name="billing.firstName"
                  placeholder="ชื่อ - สกุล">
                <small 
                  v-show="errors.has('billing.firstName')"
                  class="_cl-negative" 
                >กรุณาใส่ชื่อ - นามสกุลในการออกบิล</small>
              </float-label>
              <float-label>
                <input 
                  v-validate="{required: true}"
                  v-model="billing.phone"
                  name="billing.phone"
                  type="text"
                  placeholder="หมายเลขโทรศัพท์">
                <small 
                  v-show="errors.has('billing.phone')"
                  class="_cl-negative" 
                >กรุณาใส่หมายเลขโทรศัพท์</small>
              </float-label>
              <float-label>
                <input 
                  v-validate="{required: true}"
                  v-model="billing.address1"
                  name="billing.address1"
                  type="text" 
                  placeholder="ที่อยู่">
                <small 
                  v-show="errors.has('billing.address1')"
                  class="_cl-negative" 
                >กรุณาใส่ที่อยู่</small>
              </float-label>
              <float-label>
                <input 
                  v-model="billing.address2" 
                  name="address2"
                  type="text"
                  placeholder="ที่อยู่ (ต่อ)">
              </float-label>
            </div>
            <!-- ที่อยู่ -->
            <div class="col-12 col-md-6 _mgt-32px _mgt-0px-md _pdh-0px _pdh-16px-md">
              <float-label
                label="เขต / อำเภอ">
                <input 
                  v-validate="{required: true}" 
                  v-model="billing.city"
                  type="text"
                  name="billing.city"
                  placeholder="เขต / อำเภอ">
                <small 
                  v-show="errors.has('billing.city')"
                  class="_cl-negative" 
                >กรุณาใส่เขต / อำเภอ</small>
              </float-label>
              <float-label
                label="จังหวัด">
                <select 
                  v-validate="{required: true}" 
                  v-model="billing.state"
                  name="billing.state"
                  class="select _w-100pct">
                  <option 
                    disabled 
                    value="">เลือกจังหวัด</option>
                  <option 
                    v-for="(value, key) in $store.state.site.countryCodes[$store.state.auth.customer && $store.state.auth.customer.billing.country || 'TH'].states" 
                    :key="key" 
                    :value="key" 
                    v-html="value"/>
                </select>
                <small 
                  v-show="errors.has('billing.state')"
                  class="_cl-negative" 
                >กรุณาใส่จังหวัด</small>
              </float-label>
              <float-label
                label="ประเทศ">
                <select 
                  v-validate="{required: true}" 
                  v-model="billing.country"
                  name="billing.country"
                  disabled
                  class="select _w-100pct">
                  <option 
                    disabled 
                    value="">เลือกประเทศ</option>
                  <option 
                    v-for="(value, key) in $store.state.site.countryCodes" 
                    :key="key" 
                    :value="key" 
                    v-html="value.title"/>
                </select>
                <small 
                  v-show="errors.has('billing.country')"
                  class="_cl-negative" 
                >กรุณาใส่ประเทศ</small>
              </float-label>
              <float-label
                label="รหัสไปรษณีย์">
                <input 
                  v-validate="{required: true}"
                  v-model="billing.postcode"
                  type="text"
                  name="billing.postcode"
                  placeholder="รหัสไปรษณีย์">
                <small 
                  v-show="errors.has('billing.postcode')"
                  class="_cl-negative" 
                >กรุณาใส่รหัสไปรษณีย์</small>
              </float-label>
            </div>
          </div>
        </div>
      </no-ssr>
      <!-- สมัครสมาชิก -->
      <no-ssr v-if="!$store.state.auth.customer">
        <div class="_mgv-24px container">
          <div class="row">
            <div class="col-12 _pdh-0px _pdh-16px-md">
              <h6 class="_mgbt-24px _mgl-4px">
                <fa-icon 
                  :icon="['fal', 'user']" 
                  class="_mgr-8px"/> สมัครสมาชิกเพื่อติดตามออเดอร์
              </h6>
            </div>
          </div>
          <!-- Form -->
          <div class="row">
            <!-- Email -->
            <div class="col-12 col-md-6 _pdh-0px _pdh-16px-md">
              <float-label>
                <input 
                  v-validate="{required: true, email: true}" 
                  v-model="newUser.email"
                  type="email"
                  name="newUser.email"
                  placeholder="อีเมล์">
                <small 
                  v-show="errors.has('newUser.email')"
                  class="_cl-negative" 
                >กรุณาใส่อีเมล์</small>
              </float-label>
            </div>
            <!-- Password -->
            <div class="col-12 col-md-6 _mgt-32px _mgt-0px-md _pdh-0px _pdh-16px-md">
              <float-label>
                <input 
                  v-validate="{required: true, regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%-_*#?&])[A-Za-z\d$@$!%-_*#?&]{8,}$/}" 
                  v-model="newUser.password"
                  type="password"
                  name="newUser.password"
                  placeholder="รหัสผ่าน">
                <InvalidPassword v-show="errors.has('newUser.password')" />
              </float-label>
            </div>
          </div>
        </div>
      </no-ssr>
      <!-- Actions -->
      <div class="container">
        <div class="row _mgt-24px">
          <div class="col-12 col-md-6">
            <div 
              v-if="errorMsg" 
              class="bio-message -negative _mgbt-24px">
              {{ errorMsg }}
            </div>
            <button 
              :class="{'-loading -disabled': isBtnLoading}"
              :disabled="isBtnLoading"
              type="submit" 
              class="bio-button -outline _h-48px -primary _w-100pct">{{ proceedBtnTitle }} <fa-icon icon="long-arrow-alt-right"/></button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InvalidPassword from '~/components/messages/invalid-password'
export default {
  components: {
    InvalidPassword
  },
  props: {
    proceedBtnTitle: {
      type: String,
      default: 'เลือกช่องทางชำระเงิน'
    },
    countryOptions: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isSuccess: null,
    isBtnLoading: false,
    errorMsg: '',
    newUser: {
      email: '',
      password: ''
    },
    shipping: {
      firstName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: 'TH',
      postcode: '',
      phone: ''
    },
    billing: {
      firstName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: 'TH',
      postcode: '',
      phone: '',
      copyChecked: null
    }
  }),
  watch: {
    '$store.state.auth.customer': {
      handler() {
        if (this.$store.state.auth.customer) return this.initValue()
      },
      immediate: true,
      deep: true
    },
    isBtnLoading(val) {
      if (val) {
        this.errorMsg = ''
      }
    }
  },
  methods: {
    decodeHtmlEntity(str) {
      return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec)
      })
    },
    initValue() {
      const us = this.$store.state.auth.customer.shipping
      this.shipping = {
        firstName: `${us.first_name}`,
        phone: `${us.phone}`,
        address1: us.address_1,
        address2: us.address_2,
        city: us.city,
        postcode: us.postcode,
        state: us.state,
        country: us.country || 'TH'
      }
      const ub = this.$store.state.auth.customer.billing
      if (!ub) return (this.billing.copyChecked = true)
      this.billing = {
        firstName: `${ub.first_name}`,
        phone: `${ub.phone}`,
        address1: ub.address_1,
        address2: ub.address_2,
        city: ub.city,
        postcode: ub.postcode,
        state: ub.state,
        country: ub.country || 'TH'
      }
    },
    async submit() {
      // Save to user
      this.isBtnLoading = true
      this.isSuccess = false
      const isValid = await this.$validator.validateAll()
      if (isValid) {
        let billing = {}
        if (this.billing.copyChecked) {
          billing = {
            firstName: this.shipping.firstName,
            phone: this.shipping.phone,
            address_1: this.shipping.address1,
            address_2: this.shipping.address2,
            city: this.shipping.city,
            postcode: this.shipping.postcode,
            state: this.shipping.state,
            country: this.shipping.country
          }
        } else {
          billing = {
            firstName: this.billing.firstName,
            phone: this.billing.phone,
            address_1: this.billing.address1,
            address_2: this.billing.address2,
            city: this.billing.city,
            postcode: this.billing.postcode,
            state: this.billing.state,
            country: this.billing.country
          }
        }
        // Register
        if (!this.$store.state.auth.user) {
          const register = await this.$store.dispatch('auth/register', {
            email: this.newUser.email,
            password: this.newUser.password,
            firstName: this.shipping.firstName.split(' ')[0] || '',
            lastName: this.shipping.firstName.split(' ')[1] || ''
          })
          if (!register) {
            this.isBtnLoading = false
            return (this.errorMsg = 'มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง')
          }
          const token = await this.$store.dispatch('auth/login', {
            email: this.newUser.email,
            password: this.newUser.password
          })
          if (!token) {
            this.isBtnLoading = false
            return (this.errorMsg = 'มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง')
          }
          const user = await this.$store.dispatch('auth/getUser')
          if (!user) {
            return
          }
          // this.$store.commit('auth/SET_USER', user)
        }

        const customer = await this.$store
          .dispatch('user/updateAddress', {
            shipping: {
              firstName: this.shipping.firstName,
              phone: this.shipping.phone,
              address_1: this.shipping.address1,
              address_2: this.shipping.address2,
              city: this.shipping.city,
              postcode: this.shipping.postcode,
              state: this.shipping.state,
              country: this.shipping.country
            },
            billing
          })
          .catch(
            (err) => (this.errorMsg = 'อัพเดทไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
          )
        // console.log(customer)
        if (customer) {
          this.isSuccess = true
          this.$store.commit('auth/SET_CUSTOMER', customer)
          this.$emit('success')
        } else {
          this.errorMsg = 'มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง'
        }
      }
      return (this.isBtnLoading = false)
      // Check if copyCheck is true
      // if true copy from shipping
      // submit to api and save both shipping and billing
      // emit success
      // console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  height: 2em;
  margin-top: 8px;
}
</style>
