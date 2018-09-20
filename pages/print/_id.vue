<template>
<div class="_w-100pct">
    <div id="printtemplate" ref="printtemplate">
      <div class="container _bgcl-neutral-100 ">
        <div class="row">
          <div class="col-12">
        <h5 class="txt">Title : {{title_project}}</h5><br>
        <h5 class="txt">Description : {{des_pro}} </h5><br>       
          <div v-for="p in page" v-bind:key="p.id">
            <h5>Title{{p.title_page}}</h5><br>
             <h5>Description {{p.des_page}}</h5><br>
               <div class="col-12 _pd-16px">
                <div id="preview">
                    <img :src="previewimage" alt="" id="picture" >
                       <div v-for="(label, i) in labels" :key="i" class="label-circle" :style="'left: ' + label.x+ 'px; top: ' + (label.y) + 'px'" >
                        {{i+1}}
                    </div>
                </div>
                <!-- <div id="picture"></div> -->
                <div v-for="(label, i) in labels" :key="i">                 
                    <div class="bio-textarea _pd-16px">
                        <h5>{{i+1}} : {{labels[i].description}}</h5>
                    </div> 
                </div>
            </div>
                </div>
              </div>
             </div>
            
            </div>
    </div>
    <button id="pdf" @click="generatePDF">GeneratePDF</button>
</div>
</template>
<script>
import { firestore as db, store } from "~/services/firebaseInit";

export default {
  name: "#app",
  data: () => ({
    project: null,
    title_project: null,
    des_pro: null,
    page: []
  }),
  async created() {
    const id = this.$route.params.id;
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      //console.log(doc.id, "=>", doc.data());
      if (doc.id === id) {
        // (this.project = doc.data()),
        (this.id = doc.id),
          (this.title_project = doc.data().title_project),
          (this.des_pro = doc.data().des_pro);
      }
    });
    const snapshotpage = await db
      .collection("project")
      .doc(this.id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      //console.log(doc.id, "=>", doc.data());
      const data = {
        id: doc.id,
        title_page: doc.data().title_page,
        des_page: doc.data().des_page
      };
      this.page.push(data);
    });
  },
  methods: {
    generatePDF() {
      const doc = new jsPDF();
      doc.fromHTML(this.$refs.printtemplate);
      doc.save("sample");
    }
  }
};
</script>
<style lang="scss" scoped>
.txt {
  text-align: center;
}
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