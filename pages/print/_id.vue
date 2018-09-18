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
             <img class="bio-card-cover" src="https://placehold.it/150x80?text=IMAGE" alt="image">
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
      console.log(doc.id, "=>", doc.data());
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
<style>
.txt {
  text-align: center;
}
</style>