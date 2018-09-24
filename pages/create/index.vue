<!--
    File Name: index.vue
    Description: หน้าเพิ่มโปรเจกต์
    Folder: pages/create/index.vue 
-->
<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100">
<!-- ******************************* start head website  ******************************* -->
            <div class="container-fluid _bgcl-primary-300">
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
<!-- ******************************* start head website  ******************************* -->
<!-- ******************************* start input project  ******************************* -->
            <div class="container _bgcl-neutral-200 _pd-16px" >
                <div class="row">
                    <div class="col-12 _pd-16px">
                        <div class="bio-input _pd-16px">
                            <h5>Title</h5>
                                <input type="text" v-model="title_project">
                        </div>
                    </div>
                    <div class="col-12 _pd-16px">
                        <div class="bio-textarea _pd-16px" >
                            <h5>Description </h5>
                                <textarea rows="7" v-model="des_project"></textarea>
                        </div>
                    </div>
                </div>
            </div>
<!-- ******************************* end input project  ******************************* -->
            <br>
            <!-- start Save button -->
            <div class="bio-button u-rise bn" @click="saveData" > 
                Save
            </div>
            <!-- end Save button -->
        </div>
    </div>
</template>
<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data() {
    return {
      title_project: null,
      des_project: null,
      project_id: null
    };
  },
  methods: {
    //function save document collection project
    saveData() {
      db
        .collection("project")
        .add({
          title_project: this.title_project,
          des_project: this.des_project
        })
        .then(docRef => {
          return this.$router.push("/create/" + docRef.id);
        })
        .catch(error => console.log(err));
    }
  }
};
</script>


