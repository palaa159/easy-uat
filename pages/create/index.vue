<template>
<div class="_w-100pct">
  <div class="container _bgcl-neutral-100">
      <div class="container-fluid _bgcl-primary-300">
        <div class="row">
          <div class="col-12 myHeader">
            <h1 class="text">Easy UAT</h1>  
          </div>
        </div>
      </div>
        <div class="container _bgcl-neutral-200 _pd-16px" >
          <!-- open div row -->
          <div class="row">
              <!-- open div col --> 
            <div class="col-12 _pd-16px">
              <div class="bio-input _pd-16px">
                <h5>Title</h5>
                  <input type="text" v-model="title_project">
              </div>
            </div> 
          <div class="col-12 _pd-16px">
              <!-- Normal Textarea -->
            <div class="bio-textarea _pd-16px" >
              <h5>Description </h5>
                <textarea rows="7" v-model="des_pro"></textarea>
            </div>      
          </div>   
          </div>   
        </div>
  </div>
        <br>
          <div >
            <!--  @click="saveData" -->
            <div class="bio-button u-rise bn" @click="saveData" > Save</div> 
          </div>
</div>

</template>
<script>
import db from "~/services/firebaseInit";
export default {
  data() {
    return {
      title_project: null,
      des_pro: null,
      project_id: null
    };
  },
  methods: {
    saveData() {
      db
        .collection("project")
        .add({
          // project_id: this.project_id,
          title_project: this.title_project,
          des_pro: this.des_pro
        })
        .then(docRef => {
          // console.log(docRef);
          return this.$router.push("/create/" + docRef.id);
        })
        .catch(error => console.log(err));
    }
  }
};
</script>


