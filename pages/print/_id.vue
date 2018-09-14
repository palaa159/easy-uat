<template>
<div>
</div>
</template>
<script>
import db from "~/services/firebaseInit";

export default {
  data: () => ({}),
  methods: {
    async createPDF() {
      db
        .collection("project")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            //console.log(doc.data());
            const data = {
              id: doc.id,
              title_project: doc.data().title_project,
              des_pro: doc.data().des_pro,
              page: doc.data().page
            };
            this.projects.push(data);
            console.log(this.projects);
          });
        });
    }
  }
};
</script>
