<template>
  <div>
    <no-ssr>
      <div>
        <!-- Basic -->
        <ProfileBasic />
        <!-- Password -->
        <ProfilePassword />
      </div>
    </no-ssr>
  </div>
</template>

<script>
import urls from '~/services/apiUrl'
import ProfileBasic from '~/components/forms/ProfileBasic'
import ProfilePassword from '~/components/forms/ProfilePassword'
export default {
  components: {
    ProfileBasic,
    ProfilePassword
  }
}
</script>
