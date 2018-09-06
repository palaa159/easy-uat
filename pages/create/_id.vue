<template>
    <div>
        {{ project }}
    </div>
</template>

<script>
import db from "~/services/firebaseInit";
export default {
  data: () => ({
    project: null
  }),
  async created() {
    const id = this.$route.params.id;
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      //   console.log(doc.id, "=>", doc.data());
      if (doc.id === id) {
        this.project = doc.data();
      }
    });
    // return { data };
  }
};
</script>
