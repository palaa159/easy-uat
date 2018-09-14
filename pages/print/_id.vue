<template>
<div id='app'>
    <div id="printtemplate" ref="printtemplate">
        <h5>Title : {{title_project}}</h5>
        <h5>Description : {{des_pro}} </h5>
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
    des_pro: null
    //page: []
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
    // const snapshotpage = await db
    //   .collection("project")
    //   .doc(this.id)
    //   .collection("page")
    //   .get();
    // snapshotpage.forEach(doc => {
    //   //console.log(doc.id, "=>", doc.data());
    //   const data = {
    //     id: doc.id,
    //     title_page: doc.data().title_page,
    //     des_page: doc.data().des_page
    //   };
    //   this.page.push(data);
    // });
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
