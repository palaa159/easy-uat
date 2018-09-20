<template>
<!-- open div -->
<div class="_w-100pct">
    <div class="container _bgcl-neutral-100">
        <div class="container-fluproject_id _bgcl-primary-300">
            <div class="row">
                <div class="col-12 myHeader">
                    <h1 class="text">Easy UAT</h1>  
                </div>
            </div>
        </div><br>
        <nuxt-link to="/create">
            <div class="bio-button u-rise _dp-il bn "> Create</div>
        </nuxt-link>
        <br><br>
        <!-- open div container -->
        <div class="container _bgcl-neutral-300 _pd-16px">
            <!-- open div row -->
            <div class="row" >
                <!-- open div col -->
                <div class="col-4 _pd-16px" v-for="project in projects" v-bind:key="project.id" > 
                    <div class="bio-card h-100">
                        <!-- <img :src="previewimage" alt="" id="picture" > -->
                            <div class="bio-card-title">
                                <nuxt-link :to="{name:'view-id', params: {id: project.id}}">
                                    <strong>{{project.title_project}}</strong>
                                </nuxt-link>
                            </div>
                            <div class="bio-card-subtitle">
                                {{project.des_project}}
                            </div>
                    </div>
                </div>
                <!-- colse div col -->
            </div>
            <!-- close div row -->
        </div>
        <!-- close div container -->
    </div>
</div>
<!-- close div -->
</template>

<style>
#picture {
  width: 247px;
  height: 200px;
}
</style>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data() {
    return {
      previewimage: null,
      projects: [],
      id: null
    };
  },
  async created() {
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      this.id = doc.id;
      const data = {
        id: doc.id,
        title_project: doc.data().title_project,
        des_project: doc.data().des_project
      };
      this.projects.push(data);
    });
    const snapshotpage = await db
      .collection("project")
      .doc(this.id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      this.previewimage = doc.data().img;
    });
  }
};
</script>