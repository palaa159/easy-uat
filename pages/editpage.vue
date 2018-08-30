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
  
    <!-- open div container -->
<div class="container _bgcl-neutral-300 _pd-16px">
    <!-- open div row -->
    <div class="row">
        <!-- open div col -->
        <div class="col-12 _pd-16px">
          <!-- Normal Input -->
            <div class="bio-input _pd-16px">
            <h5>Title</h5><input type="text" placeholder="Type Something " v-model="title_project" >
            </div>
    </div>
     <!-- colse div col -->
     <!-- open div col -->
     <div class="col-12 _pd-16px">
           <!-- Normal Textarea -->
        <div class="bio-textarea _pd-16px">
          <h5>Description </h5>
          <textarea rows="7" v-model="des_pro"></textarea>
</div>
     </div>
     <!-- colse div col -->
      <div class="col-12 _pd-16px">
  
  </div>   
     
</div><!-- close div row -->

</div><!-- close div container -->
<!-- start input file -->
<br>
  
  <div>
          <input type="file" @change="onFileChange" >
          <br>
          <div id="preview" @click="addLabel">
            <img v-if="url" :src="url" id="picture" >
          </div>
      </div>
        
<!-- end input file -->
 <!-- start circle -->
 
      <div class="label-circle" v-for="(label, i) in labels" :key="i" :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'">
    {{ i + 1 }}
      </div>
      <!-- end circle -->
      <!-- start textarea -->
      <div class="container">
        <div class="col-12">
          <div class="row">
        <div v-for="(item, i) in labels" :key="i">
          <p>{{ i + 1 }}</p>
          <textarea v-model="item.description" id="" rows="12" cols="170"></textarea>
        </div>
        </div>
      </div>
      </div><br>
    
      <!-- end textarea -->
       <p>
    <button class="bio-button u-rise bn">Save</button>
     
  </p>
</div>
</div><!-- close div -->

  
</template>
// firebase
<script>
import db from './firebaseInit'
export default {
    data () {
        return {
            project_id: null,
            title_project: null,
            des_pro: null,
            pages: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('project').where('project_id', '==', to.params.project_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.project_id = doc.data().project_id
                    vm.title_project = doc.data().title_project
                    vm.des_pro = doc.data().des_pro
                    vm.pages = doc.data().pages
                })
            })
        })
    },
    watch: {
        '$route' : 'fetchData'
    },
    methods: {
        fetchData() {
            db.collection('project').where
            ('project_id', '==', this.$route.params.project_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.project_id = doc.data().project_id
                    this.title_project = doc.data().title_project
                    this.des_pro = doc.data().des_pro
                    this.pages = doc.data().pages
                })
            })
        }
    }
}
</script>
