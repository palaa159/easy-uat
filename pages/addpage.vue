<template>
<!-- open div -->
<div class="_w-100pct">
    <div class="container _bgcl-neutral-100">
    <div class="container-fluid _bgcl-primary-300">
      <div class="row">
      <div class="col-12 myHeader">
      <h1 class="text">Easy UAT</h1>  
      </div>
    </div>
  </div>
  <br>

    <!-- open div container -->
<div class="container _bgcl-neutral-200 _pd-16px" v-for="(project, i) in projects" :key="i" >
    <!-- open div row -->
    <div class="row">
         <!-- open div col -->
 
     <!-- colse div col -->
        <!-- open div col -->
    <div class="col-12 _pd-16px"  >
          <!-- Normal Input -->
            <div class="bio-input _pd-16px">
            <h5>{{project.project_title}}</h5>
            
            </div>
        
     </div>
     <!-- colse div col -->
     <!-- open div col -->
     <div class="col-12 _pd-16px"   >
         <!-- Normal Textarea -->
        <div class="bio-textarea _pd-16px">
          <h5>Description</h5>
          <input v-model="project.pro_des"> 
        </div>
    </div>
     </div>
     <!-- colse div col -->
     <!-- open div col -->
     <div class="col-12 _pd-16px">
         <div class="_dp-f  bnsave ">
      <div class="bio-button -gray u-rise  "><nuxt-link to="/add">Add Page</nuxt-link></div>  
       <div class="bio-button u-rise "> Save </div>  
      </div>
     </div>
     <!-- colse div col -->
        <!-- open div col -->
     <div class="col-4 _pd-16px">
        
     </div>
      <!-- colse div col -->
        <!-- open div col -->
     <div class="col-4 _pd-16px">
        
            
     </div>
     <!-- colse div col -->
      <!-- open div col -->
     <div class="col-4 _pd-16px">
        
            
     </div><!-- colse div col -->
     
</div><!-- close div row -->

</div><!-- close div container -->
<br>
<br>
<div class="container">
    <div class="texttd">
 <table>
  <tr class="">
    <th>Title</th>
    <th>Description</th>
    <th>Tools</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td > 
        <div >
              <ul class="bio-breadcrumb">
    <li><a class="bio-link -negative" href="#">Delete</a></li>
    <li><a class="bio-link -primary" href="#">Edit</a></li>
    <li><a class="bio-link  " href="#">Print</a></li>
  
</ul>
          </div></td>
  </tr>
  
  
</table>
</div>
</div>

</div>  <!-- close div container bg -->
<!-- <div v-for="(project, i) in projects" :key='i'>
  <div v-html="project.title_project"></div>
</div> -->
<!-- </div>close div -->
</template>

<script>
import db from './firebaseInit'
export default {
  data () {
    return {
    // projects:[]
      // title_project: null,
      // des_pro: null,
      //  project_id: null
    }
  },
  // created (){
  //   db.collection('project').get().then(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       //console.log(doc.data());
  //       const data = {
  //         'id': doc.id,
  //         'project_id': doc.data().project_id,
  //         'title_project': doc.data().title_project,
  //         'des_pro': doc.data().des_pro,
  //         // 'page': doc.data().page
  //       }
  //       this.projects.push(data)
  //       console.log(this.projects)
  //     })
  //   })

  // }
 
}
</script>