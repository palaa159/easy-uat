<!--
    File Name: _id.vue
    Description: หน้าเพิ่ม page
    Folder: pages/create/_id.vue 
-->
<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100">
<!-- ******************************* start head website  ******************************* -->
            <div class="container-fluid _bgcl-primary-300">
                <div class="row">
                    <div class="col-12 myHeader">
                    <h1 class="text">Easy UAT</h1>
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
                <!-- start add page button -->     
                <div class="col-12 _pd-16px">
                    <div class="_dp-f  bnsave ">
                        <div @click="addPage()" class="bio-button -gray u-rise "> Add Page</div>
                    </div>
                </div>
                <!-- end add page button -->  
            </div>
<!-- ******************************* start output project  ******************************* -->
            <br>
<!-- ******************************* start output page (table)  ******************************* -->
            <div class="container">
                <div class="col-12">
                    <div class="texttd">
                        <table>
                            <tr>
                                <th >Title</th>
                            </tr>
                            <tr v-for="p in page" v-bind:key="p.id">
                                <td><div>{{p.title_page}}</div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
<!-- ******************************* start output page (table)  ******************************* -->
<!-- ******************************* start form page  ******************************* -->
            <div v-for="(page, i) in pages" :key="i">
                <!-- start input title page -->
                <div class="col-12 _pd-16px">
                    <div class="bio-input _pd-16px">
                        <h5>Title</h5>
                        <input type="text" v-model="title_page">
                    </div>
                </div>
                <!-- end input title page -->
                <!-- start input image and label -->
                <input type="file" @change="onFileChange" accept="image/*"><br>
                    <div id="preview" @click="addLabel">
                        <img :src="previewimage" id="picture" >
                            <div class="label-circle" v-for="(label, i) in labels"
                        :key="i" :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'">
                        {{ i + 1 }}
                            </div>
                    </div>
                    <!-- end input image and label -->
                    <!-- start input textarea -->
                    <div class="container">
                        <div class="col-12">
                            <div class="row">
                                <div v-for="(item, i) in labels" :key="i">
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
            </div>
<!-- ******************************* end form page  ******************************* -->
            <!-- start Save button -->
            <div class="col-12 _pd-16px">
                <div class="  bnsave ">
                    <div class="bio-button u-rise " @click="savePage">Save </div>
                </div>
            </div>
            <!-- end Save button -->
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
    title_project: null,
    des_project: null,
    previewimage: "",
    img: "",
    labels: [],
    pages: [],
    page: [],
    downloadURL: null
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
        title_page: doc.data().title_page
      };
      this.page.push(data);
    });
  },
  methods: {
    //function addpage
    addPage() {
      this.pages.push({
        title_page: " "
      });
    },
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
      var labelLength = this.labels.length;
      this.labels.push({
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
          img: this.previewimage,
          label: this.labels
        });
      return location.reload();
    }
  }
};
</script>
