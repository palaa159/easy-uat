<!--
    File Name: _id.vue
    Description: Create page
    Folder: pages/create/_id.vue 
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
<!-- ******************************* start output project  ******************************* -->
            <div class="container _bgcl-neutral-200 _pd-16px">
                <div class="row">
                    <div class="col-12 _pd-16px">
                        <div class="bio-input _pd-16px">
                            <h5>Title : {{title_project}}</h5>
                        </div>
                    </div>
                    <div class="col-12 _pd-16px">
                        <div class="bio-textarea _pd-16px">
                            <h5>Description : {{des_project}}</h5>
                        </div>
                    </div>
                </div>
            </div>
<!-- ******************************* start output project  ******************************* -->
            <br>
<!-- ******************************* start output page (table)  ******************************* -->
            <div class="container" >
                <div class="col-12">
                    <div class="texttd">
                        <table>
                            <tr>
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
            </div>
<!-- ******************************* start output page (table)  ******************************* -->
<!-- ******************************* start form page  ******************************* -->
            <div>
                <!-- start input title page -->
                <div class="col-12 _pd-16px">
                    <div class="bio-input _pd-16px">
                        <h5>Title</h5>
                        <input type="text" v-model="title_page">
                        <h5>Condition for test</h5>
                        <input type="text" v-model="condition">
                    </div>
                </div>
                <!-- end input title page -->
                <!-- start input image and label -->
                <input type="file" @change="onFileChange" accept="image/*"><br>
                    <div id="preview" @click="addLabel">
                        <img :src="previewimage" id="picture" >
                            <div class="label-circle" v-for="(labels, i) in labels_data"
                        :key="i" :style="'left: ' + labels.x + 'px; top: ' + labels.y + 'px'">
                        {{ i + 1 }}
                            </div>
                    </div>
                    <!-- end input image and label -->
                    <!-- start input textarea -->
                    <div class="container">
                        <div class="col-12">
                            <div class="row">
                                <div v-for="(item, i) in labels_data" :key="i">
                                    <p>{{ i + 1 }}</p>
                                    <p>Manual</p>
                                    <textarea v-model="item.manual" id="" rows="8" cols="130"></textarea>
                                    <p>Test</p>
                                    <textarea v-model="item.test" id="" rows="8" cols="130"></textarea>
                                    <p>Result</p>
                                    <textarea v-model="item.test_result" id="" rows="8" cols="130"></textarea>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <!-- end input textarea -->            
                    <!-- start Save button -->
                    <div class="col-12 _pd-16px">
                        <div class="  bnsave ">
                            <div class="bio-button u-rise " @click="savePage">Save </div>
                        </div>
                    </div>
                    <!-- end Save button -->
            </div>
<!-- ******************************* end form page  ******************************* -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
#preview {
  position: relative;
  border: 2px solid rgb(148, 146, 146);
  display: inline-block;
}
#picture {
  width: 1020px;
  height: 600px;
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
</style>

<script>
import { firestore as db, store } from "~/services/firebaseInit";

export default {
  data: () => ({
    id: null,
    title_page: null,
    condition: null,
    title_project: null,
    des_project: null,
    previewimage: "",
    img: "",
    labels_data: [],
    pages: [],
    pages_Object: [],
    downloadURL: null,
    toggle: true
  }),
  async created() {
    const id = this.$route.params.id;
    //collection project
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
        title_page: doc.data().title_page,
        condition: doc.data().condition
      };
      this.pages_Object.push(data);
    });
  },
  methods: {
    //function addpage
    // addPage() {
    //   this.pages.push({
    //     title_page: " "
    //   });
    // },
    //function choose file and save in storage
    onFileChange(e) {
      const file = e.target.files[0];
      const metadata = {
        contentType: file.type
      };
      const task = store
        .ref()
        .child(file.name)
        .put(file);
      task.then(snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
          this.previewimage = url;
        });
      });
      const reader = new FileReader();
      reader.onload = e => {
        this.previewimage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    //function addlabel -> circle and textarea
    addLabel(e) {
      var x = e.offsetX;
      var y = e.offsetY;
      var labelLength = this.labels_data.length;
      this.labels_data.push({
        x: x,
        y: y,
        manual: "",
        test: "",
        test_result: ""
      });
    },
    //function save document subcollection page
    savePage() {
      db
        .collection("project")
        .doc(this.id)
        .collection("page")
        .add({
          title_page: this.title_page,
          condition: this.condition,
          img: this.previewimage,
          label: this.labels_data
        });
      return location.reload();
    }
  }
};
</script>
