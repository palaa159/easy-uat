<!--
    File Name: _editpageid.vue
    Description: Edit page
    Folder: pages/edit/_id/editpage/_editpageid.vue 
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
<!-- ******************************* start input page  ******************************* -->
            <div class="container _bgcl-neutral-200 _pd-16px">    
                <div class="row">
                    <div class="col-12 _pd-16px">
                        <div class="bio-input _pd-16px">
                            <h5>Title Page</h5>  
                            <input type="text" v-model="title_page">
                            <h5>Condition for test</h5>
                            <input type="text" v-model="condition">
                        </div>
                    </div>
                </div>
            </div>
<!-- ******************************* end input page  ******************************* -->
<!-- ******************************* start input image, label and textarea  ******************************* -->        
            <!-- start input image and label -->
            <input type="file" @change="onFileChange" accept="image/*"> <br>
                <div id="preview" @click="addLabel">
                    <img :src="previewimage" id="picture">
                        <div class="label-circle" v-for="(labels, i) in labels_data"
                        :key="i" :style="'left: ' + labels.x + 'px; top: ' + labels.y + 'px'">
                         {{ i + 1 }}
                        </div>
                </div>
            <!-- end input image and label -->
            <!-- start input textarea -->
            <div class="bio-textarea _pd-16px" v-for="(labels, i) in labels_data" :key="i">
                <p>{{ i + 1 }}</p>
                <p>Manual</p>
                <textarea v-model="labels_data[i].manual" id="" rows="12" cols="130"></textarea>
                <p>Test</p>
                <textarea v-model="labels_data[i].test" id="" rows="12" cols="130"></textarea>
                <p>Result</p>
                <textarea v-model="labels_data[i].test_result" id="" rows="12" cols="130"></textarea>
            </div>
            <!-- end input textarea -->
<!-- ******************************* start input image, label and textarea  ******************************* -->
            <!-- start Save button -->
            <div class="col-12 _pd-16px">
                <div class="  bnsave ">
                    <div class="bio-button u-rise " @click="savePage">Save</div>
                </div>
            </div>
            <!-- end Save button -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
//circle
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
//picture border
#preview {
  position: relative;
  border: 2px solid rgb(148, 146, 146);
  display: inline-block;
}
//picture
#picture {
  width: 1020px;
  height: 600px;
}
</style>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data: () => ({
    id: null,
    title_page: null,
    condition: null,
    previewimage: null,
    labels_data: [],
    downloadURL: null,
    img: null
  }),
  async created() {
    const id = this.$route.params.id;
    const pageid = this.$route.params.editpageid;
    //collection page
    const snapshotpage = await db
      .collection("project")
      .doc(id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      if (doc.id === pageid) {
        (this.id = doc.id),
          (this.title_page = doc.data().title_page),
          (this.condition = doc.data().condition),
          (this.previewimage = doc.data().img),
          (this.labels_data = doc.data().label);
      }
    });
  },
  methods: {
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
      const id = this.$route.params.id;
      const pageid = this.$route.params.editpageid;
      db.collection("project")
        .doc(id)
        .collection("page")
        .doc(pageid)
        .update({
          title_page: this.title_page,
          condition: this.condition,
          img: this.previewimage,
          label: this.labels_data
        });
      return this.$router.push("/view/" + id);
    }
  }
};
</script>