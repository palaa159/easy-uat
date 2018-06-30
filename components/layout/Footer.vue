<template>
  <footer class="_pst-rlt">
    <div class="container">
      <div class="row _pdv-12px _alit-ct">
        <div class="col-12 _dp-f _alit-ct _cl-white _pdv-8px _pdv-24px-md _opct-50">
          <div>
            <div class="_dp-f _mgbt-12px">
              <div 
                v-for="(item, i) in socials" 
                :key="i" 
                class="_mgr-12px">
                <a 
                  :href="item.link" 
                  class="_bio-link _cl-white"
                  target="_blank">
                  <fa-icon 
                    :icon="['fab', item.icon]" 
                    size="2x"/>
                </a>
              </div>
            </div>
            <span>Copyright &copy;2018 Makerstation</span>
            <span class="_mgh-8px">|</span>
            <nuxt-link 
              :to="`/terms-conditions`" 
              class="_cl-white"
            >
              <span>ข้อกำหนดและเงื่อนไข</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    socials: []
  }),
  created() {
    this.socials = [
      {
        icon: 'facebook-square',
        link: 'https://www.facebook.com/MakerStation-1956920341285869/'
      }, {
        icon: 'youtube-square',
        link: 'https://www.youtube.com/channel/UCK2ctBeMCG0wIWM8zx6T0TQ?view_as=subscriber'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: rgba(0, 0, 0, 1);
}
.menu-footer {
  border-top: 1px solid #e0e1e1;
  border-bottom: 1px solid #e0e1e1;
  a {
    transition: 0.15s;
    h6 {
      color: #4a4a4a;
    }
    &:first-child {
      padding-left: 0;
    }
  }
}
.logo {
  background-image: url('~/assets/images/logo.png');
  height: 48px;
  margin: 0 auto;
}
</style>
