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
            </div>
            <div class="col-12 _pd-16px">
                <div id="preview">
                    <img :src="previewimage" alt="" id="picture" >
                </div>
                <div v-for="(label, i) in labels" :key="i">
                    <div  class="label-circle" :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'" >
                    {{i+1}}
                    </div>
                    <p>{{ i + 1 }}</p>
                <p>Manual</p>
                <textarea v-model="labels[i].manual" id="" rows="12" cols="130"></textarea>
                <p>Test</p>
                <textarea v-model="labels[i].test" id="" rows="12" cols="130"></textarea>
                <p>Result</p>
                <textarea v-model="labels[i].test_result" id="" rows="12" cols="130"></textarea>
                </div>
            </div>
            <div class="_dp-f bndelete">
                <div @click="deletePage" class="bio-button u-rise bio-button -negative ">Delete Page</div>
            </div>
            
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
  height: 600px;
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
    async deletePage() {
      const id = this.$route.params.id;
      const pageid = this.$route.params.viewpageid;
      console.log(pageid);
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