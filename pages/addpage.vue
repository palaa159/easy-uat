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
<div class="container _bgcl-neutral-200 _pd-16px">
    <!-- open div row -->
    <div class="row">
        <!-- open div col -->
    <div class="col-12 _pd-16px">
          <!-- Normal Input -->
            <div class="bio-input _pd-16px">
            <h5>Title</h5><input type="text" placeholder="Type Something " >
            </div>
        
     </div>
     <!-- colse div col -->
     <!-- open div col -->
     <div class="col-12 _pd-16px">
         <!-- Normal Textarea -->
        <div class="bio-textarea _pd-16px"><h5>
  Description </h5><textarea rows="7" placeholder="Textarea"></textarea>
</div>
     </div>
     <!-- colse div col -->
     <!-- open div col -->
     <div class="col-12 _pd-16px">
         <div class="_dp-f  bnsave ">
      <div class="bio-button -gray u-rise  "><nuxt-link to="/add">Add Page</nuxt-link></div>  
       <div class="bio-button u-rise   "> Save </div>  
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
 <table v-for="pro in project" v-bind:key="pro.id" >
  <tr class="">
    <th>Title</th>
    <th>Description</th>
    <th>Tools</th>
  </tr>
  <tr>
    <td >{{pro.title_project}}</td>
    <td><p>A witness gave a detailed description</p></td>
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

</div><!-- close div -->
</template>
<script>
import db from '~/pages/firebaseinit'
export default {
  data(){
    return{
      project:[]
    }
  },
created (){
db.collection('project').get().then
(querySnapshot => {
  querySnapshot.forEach(doc => {
    // console.log(doc.data());
    const data = {
      'id': doc.id,
      'title_project':doc.data().title_project,
      'project_id':doc.data().project_id,
      'des_pro':doc.data().des_pro
    }
    this.project.push(data)
  })
})
}
}
</script>


