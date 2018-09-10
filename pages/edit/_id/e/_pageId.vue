<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100">
            <div class="container-fluproject_id _bgcl-primary-300">
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
                                        <input type="text"  v-model="title_page">
                    
                                </div>
                            </div>
                        </div>
                        <div class="col-12 _pd-16px">
                            <!-- Normal Textarea -->
                                <div class="bio-textarea _pd-16px">
                                    <h5>Description </h5>
                                        <textarea rows="7"  v-model="des_page"></textarea>
                                </div>
                        </div>  
                    </div>
                    <div class="container">
                        <div class="texttd">
                        </div>
                    </div>
        </div>
    </div>
</template>

<script>
import db from "~/services/firebaseInit";
export default {
  data: () => ({
    project: null,
    page: null,
    //pageid: null,
    title_page: null,
    des_page: null
  }),
  async created() {
    const id = this.$route.params.id;
    const pageid = this.$route.params.pageId;
    //console.log(pageid);
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      if (doc.id === id) {
        //console.log(doc.data().page);
        for (let i = 0; i < doc.data().page.length; i++) {
          //console.log(doc.data().page[i].pageid);
          if (doc.data().page[i].pageid === pageid) {
            this.title_page = doc.data().page[i].title_page;
            this.des_page = doc.data().page[i].des_page;
          }
        }
        //console.log(doc.data().page[0].pageid);
      }
      //console.log(doc.data());
    });
  }
};
</script>