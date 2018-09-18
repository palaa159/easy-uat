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
            
            <div class="col-12 _pd-16px">
                <div id="preview">
                    <img :src="previewimage" alt="" id="picture" >
                </div>
                    
                <!-- <div id="picture"></div> -->
                <div v-for="(label, i) in labels" :key="i">
                    <div  class="label-circle" :style="'left: ' + (label.x)+ 'px; top: ' + (label.y)+ 'px'" >
                    {{i+1}}
                    </div>
                    <div class="bio-textarea _pd-16px">
                        <h5>{{i+1}} : {{labels[i].description}}</h5>
                    </div> 
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
  /* width: 300px;
    height: 300px; */
  //    margin-left: 20%;
}
#picture {
  width: 700px;
  height: 600px;
  //   background-previewimage: url("previewimage");
}
</style>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data: () => ({
    //page: []
    id: null,
    title_page: null,
    des_page: null,
    previewimage: null,
    labels: [],
    width: null,
    height: null
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
      //console.log(doc.id, "=>", doc.data());
      //console.log(doc.id);
      if (doc.id === pageid) {
        //console.log(doc.data().img);
        (this.id = doc.id),
          (this.title_page = doc.data().title_page),
          (this.des_page = doc.data().des_page),
          (this.previewimage = doc.data().img),
          (this.labels = doc.data().label);
      }
    });
    var img = new Image();
    var width, height;
    img.src = this.previewimage;
    img.onload = function() {
      width = this.width;
      height = this.height;
      //alert(this.width + " " + this.height);
      //console.log(width);
      //return { width: width, height: height };
    };

    console.log("x");
    console.log(width);

    //return { data };
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
        .then(function() {
          //return this.$router.push("/view/" + id);
        })
        .catch(function(error) {});
      return this.$router.push("/view/" + id);
    }
  }
};
</script>