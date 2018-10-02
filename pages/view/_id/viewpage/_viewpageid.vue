<!--
    File Name: _viewpageid.vue
    Description: Show description page
    Folder: pages/view/_id/viewpage/_viewpageid.vue
-->
<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100">
<!-- ******************************* start head website  ******************************* -->
            <div class="container-fluproject_id _bgcl-primary-300">
                <div class="row">
                    <div class="col-12 myHeader">
                        <h1 class="text">
                            <nuxt-link to="/">
                                Easy UAT
                            </nuxt-link> 
                        </h1>  
                    </div>
                </div>
            </div>
<!-- ******************************* end head website  ******************************* -->
<!-- ******************************* start output page  ******************************* -->
            <div class="container _bgcl-neutral-200 _pd-16px">    
                <div class="row">
                    <div class="col-12 _pd-16px">
                        <div class="bio-input _pd-16px">
                            <h5>Title : {{title_page}}</h5>
                        </div>
                    </div>
                </div>
            </div>
<!-- ******************************* end output page  ******************************* -->
<!-- ******************************* start output image, label and textarea  ******************************* -->
            <div class="col-12 _pd-16px">
                <!-- start output image -->
                <div id="preview">
                    <img :src="previewimage" alt="" id="picture" >
                    <!-- start circlel  -->
                        <div  class="label-circle" v-for="(label, i) in labels" :key="i" 
                        :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'" >
                            {{i+1}}
                        </div>
                    <!-- end circlel  -->
                </div>
                <!-- end output image -->
                <!-- start output label  -->
                <div v-for="(label, i) in labels" :key="i">
                    <!-- start textarea  -->
                        <p>{{ i + 1 }}.  Manual: {{labels[i].manual}}</p>
                            <p>Test: {{labels[i].test}}</p>
                            <p>Result: {{labels[i].test_result}}</p> <br>
                    <!-- end textarea  -->
                </div>
                <!-- end output label  -->
            </div>
<!-- ******************************* end output image, label and textarea  ******************************* -->
            <!-- start Delete Page button -->
            <div class="_dp-f bndelete">
                <div @click="deletePage" class="bio-button u-rise bio-button -negative ">Delete Page</div>
            </div>
            <!-- end Delete Page button -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.label-circle {
  width: 30px;
  height: 30px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 50%;
  position: absolute;
}
#preview {
  position: relative;
  border: 2px solid rgb(148, 146, 146);
  display: inline-block;
}
#picture {
  width: 1020px;
  height: 500px;
}
</style>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data: () => ({
    id: null,
    title_page: null,
    des_page: null,
    previewimage: null,
    labels: []
  }),
  async created() {
    const id = this.$route.params.id;
    const pageid = this.$route.params.viewpageid;
    //collection page
    const snapshotpage = await db
      .collection("project")
      .doc(id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      if (doc.id === pageid) {
        (this.id = doc.id),
          (this.title_page = doc.data().title_page),
          (this.previewimage = doc.data().img),
          (this.labels = doc.data().label);
      }
    });
  },
  methods: {
    //function deletepage
    async deletePage() {
      const id = this.$route.params.id;
      const pageid = this.$route.params.viewpageid;
      const snapshot = await db
        .collection("project")
        .doc(id)
        .collection("page")
        .doc(pageid)
        .delete()
        .then(function() {})
        .catch(function(error) {});
      return this.$router.push("/view/" + id);
    }
  }
};
</script>