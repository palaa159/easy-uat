<!--
    File Name: _manualid.vue
    Description: Form for print manual
    Folder: pages/print/manual/_manualid.vue 
-->
<template>
    <div class="_w-100pct">
        <div class="container ">
            <!-- ******************************* start cover  ******************************* -->
            <div class="cover">
                <h1>Manual</h1>
                <h1>{{title_project}}</h1>
                <h1>{{des_project}}</h1>
            </div>
            <!-- ******************************* end cover  ******************************* -->
           <div class="page-break "></div>
           <!-- ******************************* start output page  ******************************* -->
            <div class="col-12 _pd-16px" v-for="(pages, i) in pages_Object" :key="i">
                <!-- start titlepage  -->
                <div class="_pd-16px" id="text">
                    <h5>{{pages.title_page}} </h5>
                </div>
                <!-- start titlepage  -->
                <!-- start image and label  -->
                <div id="preview">
                    <img :src="pages.previewimage" alt="" id="picture" >
                    <div  v-for="(labels, i) in pages.labels_data" :key="i" class="label-circle" :style="'left: ' + (labels.x)+ 'px; top: ' + (labels.y)+ 'px'"  >
                    {{i+1}}
                    </div>
                </div>
                <!-- end image and label  -->
                <br>
                <!-- start textarea  -->
                <div v-for="(labels, i) in pages.labels_data" :key="i">
                    <div class="bio-textarea _pd-16px">
                        <h5>{{i+1}} . {{labels.manual}}</h5>
                    </div> 
                </div>
                <!-- end textarea  -->
                <div class="page-break"></div>
            </div>
            <!-- ******************************* end output page  ******************************* -->     
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
//header
#text {
  text-align: center;
}
//name under picture
.name_picture {
  text-align: center;
  margin-top: 2%;
}
@media all {
  .page-break {
    display: none;
  }
  .page-break-no {
    display: none;
  }
}
@media print {
  .page-break {
    display: block;
    height: 1px;
    page-break-before: always;
  }
  .page-break-no {
    display: block;
    height: 1px;
    page-break-after: avoid;
  }
  .center {
    top: 40%;
    left: 25%;
    position: fixed;
  }
  .cover {
    margin-top: 60%;
    text-align: right;
  }
}
</style>

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
    const id = this.$route.params.manualid;
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
        title_page: doc.data().title_page,
        previewimage: doc.data().img,
        labels_data: doc.data().label
      };
      this.pages_Object.push(data);
    });
  }
};
</script>
