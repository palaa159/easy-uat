<template>
   
       <div class="_w-100pct">
        <!-- {{ project }} -->
            <div class="container _bgcl-neutral-100">
                 <div class="container-fluid _bgcl-primary-300">
                           <div class="row">
                                <div class="col-12 myHeader">
                                <h1 class="text">Easy UAT</h1>  
                            </div>
                    </div>
                </div>

            </div>
            <div class="container _bgcl-neutral-200 _pd-16px"  >
    <!-- open div row -->
    <div class="row">
         <!-- open div col -->
 
     <!-- colse div col -->
        <!-- open div col -->
    <div class="col-12 _pd-16px"  >
          <!-- Normal Input -->
          
            <div class="bio-input _pd-16px">
                 <h5>Title</h5>
            <input type="text"  v-model="title_project">
            </div>
        
     </div>
     <!-- colse div col -->
     <!-- open div col -->
     <div class="col-12 _pd-16px"   >
         <!-- Normal Textarea -->
        <div class="bio-textarea _pd-16px">
          <h5>Description</h5>
        <textarea v-model="des_pro"></textarea>
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
     <!-- {{project}} -->
   
     
   

     
</div>

       </div>
 
</template>

<script>
import db from "~/services/firebaseInit";
export default {
  data: () => ({
    project: null,
    title_project: null,
    des_pro: null
  }),
  async created() {
    const id = this.$route.params.id;
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      //   console.log(doc.id, "=>", doc.data());
      if (doc.id === id) {
        // (this.project = doc.data()),
        (this.title_project = doc.data().title_project),
          (this.des_pro = doc.data().des_pro);
      }
    });
    // return { data };
  }
};
</script>
