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
                            <input type="text" v-model="title_project">
                        </div>
                    </div>
                </div>
                <div class="col-12 _pd-16px">
                    <!-- Normal Textarea -->
                    <div class="bio-textarea _pd-16px">
                        <h5>Description</h5>
                        <textarea rows="7" v-model="des_pro"></textarea>
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
    project: null,
    title_project: null,
    des_pro: null,
    page: null
  }),
  async created() {
    const id = this.$route.params.id;
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      if (doc.id === id) {
        (this.title_project = doc.data().title_project),
          (this.des_pro = doc.data().des_pro),
          (this.page = doc.data().page);
      }
    });
  }
};
</script>