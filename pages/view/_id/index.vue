<!--
    File Name: index.vue
    Description: Shoe description project
    Folder: pages/view/_id/index.vue
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
<!-- ******************************* start output project  ******************************* -->
            <div class="container _bgcl-neutral-200 _pd-16px">     
                <div class="row">
                    <div class="col-12 _pd-16px">
                        <div class="bio-input _pd-16px">
                            <h5>Title : {{title_project}}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-12 _pd-16px">
                    <div class="bio-textarea _pd-16px">
                        <h5>Description : {{des_project}} </h5>
                    </div>
                </div>  
            </div>
            <br>
<!-- ******************************* end output project  ******************************* -->

<!-- ******************************* start output page (table)  ******************************* -->
            <div class="container">
                <div class="texttd">
                <br>
                    <table>
                        <tr class="">
                            <th>No.</th>
                            <th>Title</th>
                            <th>Tool</th>
                        </tr>
                        <tr v-for="(pages, i) in pages_Object" :key="i">
                            <td>{{i+1}}</td>
                            <td>{{pages.title_page}}</td>
                            <td>
                                <ul class="bio-breadcrumb">
                                    <li>
                                        <nuxt-link :to="{name:'view-id-viewpage-viewpageid', params: { viewpageid: pages.id, id: $route.params.id}}"> 
                                            View
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link :to="{name:'edit-id-editpage-editpageid', params: { editpageid: pages.id, id: $route.params.id}}">
                                            Edit
                                        </nuxt-link>
                                    </li>  
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
<!-- ******************************* end output page (table)  ******************************* -->
            <br>
<!-- ******************************* start tool  ******************************* -->
            <div class=" col-12 _dp-f ">
                <!-- start Link to create/_id.vue -->
                <nuxt-link :to="{name: 'create-id', params: {id: $route.params.id}}">
                    <div class="bio-button u-rise  ">Add Page</div>
                </nuxt-link> 
                <!-- end Link to create/_id.vue -->
                <!-- start Delete Project button -->
                <div @click="deleteProject" class="bio-button u-rise bio-button -negative ">
                    Delete Project
                </div>
                <!-- end Delete Project button -->
                <!-- start Link to print/manual/_manualid.vue -->
                <nuxt-link :to="{name:'print-manual-manualid', params: { manualid: $route.params.id}}">
                    <div  class="bio-button u-rise bio-button -gray">Print Manual</div>
                </nuxt-link>
                <!-- end Link to print-uat -->
                <!-- start Link to print/uat/_uatid.vue -->
                <nuxt-link :to="{name:'print-uat-uatid', params: { uatid: $route.params.id}}">
                    <div  class="bio-button u-rise bio-button -gray">Print UAT</div>
                </nuxt-link>  
                <!-- end Link to print-uat --> 
            </div>
<!-- ******************************* end tool  ******************************* -->
        </div>
    </div>
</template>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data: () => ({
    project: null,
    title_project: null,
    des_project: null,
    pages_Object: []
  }),
  async created() {
    //collection project
    const id = this.$route.params.id;
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      if (doc.id === id) {
        (this.id = doc.id),
          (this.title_project = doc.data().title_project),
          (this.des_project = doc.data().des_project);
      }
    });
    //collection page
    const snapshotpage = await db
      .collection("project")
      .doc(this.id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      const data = {
        id: doc.id,
        title_page: doc.data().title_page
      };
      this.pages_Object.push(data);
    });
  },
  methods: {
    //function deleteproject
    async deleteProject() {
      const id = this.$route.params.id;
      // delete project
      const snapshotpage = await db
        .collection("project")
        .doc(id)
        .collection("page")
        .get();
      snapshotpage.forEach(doc => {
        if (doc.id !== id) {
          doc.ref.delete();
        }
      });
      // delete page
      const snapshot = await db.collection("project").get();
      snapshot.forEach(doc => {
        if (doc.id === id) {
          doc.ref.delete();
          return this.$router.push("/");
        }
      });
    }
  }
};
</script>