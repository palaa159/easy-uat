<template>
  <div class="_w-100pct">
    <div class="container-fluid">
      <div class="row">
      <div class="col-12 myHeader">
        Easy UAT
      </div>
    </div>
  </div>
    <div class="container">
      <div class="row">
        <div class="col-12 _pd-16px btn-create">
          <button type="button" class="bio-button"><nuxt-link to="/home">CREATE</nuxt-link></button>
        </div>
        <div class="col-4 _pd-16px">
          <div class="box">
            A
          </div>
        </div>
         <div class="col-4 _pd-16px">
          <div class="box">
            B
          </div>
        </div>
         <div class="col-4 _pd-16px">
          <div class="box">
            C
          </div>
        </div>
         <div class="col-4 _pd-16px">
          <div class="box">
            D
          </div>
        </div>
         <div class="col-4 _pd-16px">
          <div class="box">
            E
          </div>
        </div>
         <div class="col-4 _pd-16px">
          <div class="box">
            F
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.myHeader {
  
  height: 100px;
  color: white;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
}
.btn-create {
  display:flex;
  justify-content:flex-end;
  align-items:center; 
}
</style>