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
                                    <h5>Title : {{title_page}}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 _pd-16px">
                            <!-- Normal Textarea -->
                                <div class="bio-textarea _pd-16px">
                                    <h5>Description : {{des_page}}</h5>
                                </div>
                        </div>
                    </div>
                       
        </div>
    </div>
</template>

<script>
import db from "~/services/firebaseInit";
export default {
  data: () => ({
    //page: []
    id: null,
    title_page: null,
    des_page: null,
    url: ""
  }),
  async created() {
    const id = this.$route.params.id;
    const pageid = this.$route.params.pageid;
    //console.log(pageid);
    const snapshotpage = await db
      .collection("project")
      .doc(id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      //console.log(doc.id, "=>", doc.data());
      if (doc.id == pageid) {
        console.log(doc.data().img);
        (this.id = doc.id),
          (this.title_page = doc.data().title_page),
          (this.des_page = doc.data().des_page);
        //this.url = Image.data().img
      }
    });
    //return { data };
  }
};
</script>