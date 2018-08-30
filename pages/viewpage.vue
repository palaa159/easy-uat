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
            <div class="row">
                <div class="col-12 _pd-16px">
                    <div class="bio-input _pd-16px">
                    <h5>Title</h5>
                    <input type="text"  v-model="title_project">
                    
                    </div>
                </div>
            </div>
              <div class="col-12 _pd-16px">
         <!-- Normal Textarea -->
                    <div class="bio-textarea _pd-16px">
                        <h5>Description </h5>
                            <textarea rows="7"  v-model="des_pro"></textarea>
                    </div>
                </div>  
            <div class="col-12 _pd-16px">
                <div class="_dp-f  bnsave ">
                        <div class="bio-button -gray u-rise  "><nuxt-link to="/add">Add Page</nuxt-link></div>  
                             <div class="bio-button u-rise   "> Save </div>  
                        </div>
                </div>
            </div>
     <div class="container">
    <div class="texttd">
 <table>
  <tr class="">
    <th>Title</th>
    <th>Description</th>
    <th>Tools</th>
  </tr>
  <tr v-for="(page, i) in pages" :key="i">
    <td>{{page.title_page}}</td>
    <td>{{page.des_page}}</td>
    <td > 
        <div >
                <ul class="bio-breadcrumb" >
                  <!-- v-for="project in projects" v-bind:key="project.id" -->
                    <li><a class="bio-link -negative" href="#">Delete</a></li>
                        <!-- <router-link v-bind:to="{name:'editpage', params: {project_id: project.project_id}}">
                            <p>Edit</p>
                        </router-link> -->
                    <li><a class="bio-link  " href="#">Print</a></li>
  
                </ul>
          </div></td>
  </tr>
  
  
</table>
<!-- <router-link v-bind:to="{name:'editpage', params: {project_id: project.project_id}}">
<p>Edit</p></router-link> -->
</div>
</div>
       
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    data () {
        return {
            project_id: null,
            title_project: null,
            des_pro: null,
            pages: null,
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
