<template>
  <div>
    <Header :isSticky="false"/>
    <!-- Content -->
    <main class="min-height-100vh _dp-f _alit-fst">
      <div class="container _mgv-32px">
        <!-- <div class="row">
          <div class="col">
            <h4 class="_tal-ct _mgv-16px">ข้อมูลบัญชีของคุณ</h4>
          </div>
        </div> -->
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="_bgcl-white _pd-16px">
              <!-- User profile -->
              <User />
              <!--  Menu -->
              <Menu />
            </div>
          </div>
          <div class="col-12 col-md-8 _mgt-16px _mgt-0px-md">
            <div class="_bgcl-white _pd-16px-md">
              <nuxt/>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import User from '~/components/profile/User'
import Menu from '~/components/profile/Menu'
export default {
  components: {
    Header,
    Footer,
    User,
    Menu
  }
}
</script>