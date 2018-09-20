<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100">
            <div class="container-fluproject_id _bgcl-primary-300">
                <div class="row">
                    <div class="col-12 myHeader">
                        <h1 class="text">Easy UAT</h1>  
                    </div>
                </div>
            </div>

            <div class="container _bgcl-neutral-200 _pd-16px">    
                <div class="row">
                    <div class="col-12 _pd-16px">
                        <div class="bio-input _pd-16px">
                            <h5>Title Page</h5>  
                            <input type="text" v-model="title_page">
                        </div>
                    </div>
                </div>

                <div class="col-12 _pd-16px">
                <!-- Normal Textarea -->
                    <div class="bio-textarea _pd-16px">
                        <h5>Description Page</h5> 
                        <textarea rows="7" v-model="des_page"></textarea>
                    </div>
                </div>
            </div>
            
            <div class="col-12 _pd-16px">
                <input type="file" @change="onFileChange" accept="image/*"> <br>
                <div id="preview" @click="addLabel">
                    <img :src="previewimage" alt="" id="picture">
                        <div class="label-circle" v-for="(label, i) in labels"
                            :key="i" :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'">
                            {{ i + 1 }}
                        </div>
                </div>
            </div>

            <div class="bio-textarea _pd-16px" v-for="(label, i) in labels" :key="i">
                <h5>{{i+1}}</h5>
                <textarea v-model="labels[i].description" id="" rows="12" cols="130"></textarea>
            </div> 

            <div class="col-12 _pd-16px">
                <div class="  bnsave ">
                    <div class="bio-button u-rise " @click="savePage">Save </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
#preview {
  position: relative;
  border: 2px solid rgb(148, 146, 146);
  display: inline-block;
  /* width: 300px;
    height: 300px; */
  //    margin-left: 20%;
}
#picture {
  width: 700px;
  height: 600px;
  //   background-image: url("image");
}
</style>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data: () => ({
    //page: []
    id: null,
    title_page: null,
    des_page: null,
    previewimage: null,
    labels: [],
    downloadURL: null,
    img: null
  }),
  async created() {
    const id = this.$route.params.id;
    const pageid = this.$route.params.editpageid;
    const snapshotpage = await db
      .collection("project")
      .doc(id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      //console.log(doc.id, "=>", doc.data());
      //console.log(doc.id);
      if (doc.id === pageid) {
        //console.log(doc.data().title_page);
        (this.id = doc.id),
          (this.title_page = doc.data().title_page),
          (this.des_page = doc.data().des_page),
          (this.previewimage = doc.data().img),
          (this.labels = doc.data().label);
      }
    });
    //return { data };
  },
  methods: {
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
          console.log(url);
          this.previewimage = url;
        });
      });
      const reader = new FileReader();
      reader.onload = e => {
        this.previewimage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    addLabel(e) {
      var x = e.offsetX;
      var y = e.offsetY;
      console.log(e, x, y);
      var labelLength = this.labels.length;
      console.log(labelLength);
      this.labels.push({
        x: x,
        y: y,
        description: ""
      });
      console.log(this.labels);
    },
    savePage() {
      const id = this.$route.params.id;
      const pageid = this.$route.params.editpageid;
      db
        .collection("project")
        .doc(id)
        .collection("page")
        .doc(pageid)
        .update({
          title_page: this.title_page,
          des_page: this.des_page,
          img: this.previewimage,
          label: this.labels
        });
      return this.$router.push("/view/" + id);
    }
  }
};
</script>