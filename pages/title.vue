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
    <div class="container _bgcl-neutral-200 _pd-16px">
    <!-- open div row -->
    <div class="row">
        <!-- open div col --> 
          <div class="col-12 _pd-16px">
                    <div class="bio-input _pd-16px">
                        <h5>Title</h5>
                            <input type="text"  >
                    </div>
                </div>  
             <div class="col-12 _pd-16px">
         <!-- Normal Textarea -->
                    <div class="bio-textarea _pd-16px">
                        <h5>Description </h5>
                            <textarea rows="7" ></textarea>
                    </div>
                </div>      
         </div>
     </div>
     <br>
     <div v-for="project in projects" v-bind:key="project.id">
    <div class="bio-button u-rise bn"  @click="saveData" ><nuxt-link :to="{name:'addpage', params: {project_id:project_id}}">Save</nuxt-link></div>
    </div></div>
</template>
<script>
import db from './firebaseInit'
export default {
  data () {
    return {
      project_id: null,
      title_project: null,
      des_pro: null
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
    saveData () {
      db.collection('project').add({
        project_id: this.project_id,
        title_project: this.title_project,
        des_pro: this.des_pro
      })
      .then(docRef => this.$router.push('/'))
      .catch(error => console.log(err))
    },
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


