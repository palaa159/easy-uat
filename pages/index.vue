<!--
    File Name: index.vue
    Description: Show all projects
    Folder: pages/index.vue 
-->
<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100 is-preload" >
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
            <br>
<!-- ******************************* start CREATE button  ******************************* -->
            <nuxt-link to="/create">
                <div class="bio-button u-rise _dp-il bn "> Create</div>
            </nuxt-link>
<!-- ******************************* end CREATE button  ******************************* -->
            <br><br>
<!-- ******************************* start output project  ******************************* -->
            <div class="container _bgcl-neutral-300 _pd-16px">
                <div class="row" >
                    <div class="col-4 _pd-16px" v-for="(projects, i) in projects_Object" :key="i"> 
                        <div class="bio-card h-100">
                            <div class="bio-card-title">
                                <!-- start Link to view/_id/index.vue -->
                                <nuxt-link :to="{name:'view-id', params: {id: projects.id}}">
                                    <strong>{{projects.title_project}}</strong>
                                </nuxt-link>
                                <!-- end Link to view -->
                            </div>
                            <div class="bio-card-subtitle">
                                {{projects.des_project}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!-- ******************************* start output project  ******************************* -->
        </div>
    </div>
</template>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data() {
    return {
      projects_Object: [],
      id: null
    };
  },
  async created() {
    //collection project
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      this.id = doc.id;
      const data = {
        id: doc.id,
        title_project: doc.data().title_project,
        des_project: doc.data().des_project
      };
      this.projects_Object.push(data);
    });
  }
};
</script>