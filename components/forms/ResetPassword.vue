<template>
  <div>
    <h4 class="_tal-ct">
      รีเซ็ตรหัสผ่าน
    </h4>
    <no-ssr>
      <form 
        v-if="!isSet"
        @submit.stop.prevent="submit" 
      >
        x
      </form>
    </no-ssr>
  </div>
</template>
