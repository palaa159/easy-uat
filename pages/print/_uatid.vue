<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100">
            <div class="container-fluproject_id _bgcl-primary-300 center">
                <div class="row ">
                    <div class="col-12 myHeader  " id="text">
                        <h1 >{{title_project}}</h1>  
                        <h2 >USER MANUAL</h2>
                        <h1 >{{des_project}}</h1>
                    </div>
                </div>
            </div>
           <div class="page-break "></div>
            <!-- <div class="container _bgcl-neutral-200 _pd-16px">    
                <div class="row">
                    <div class="col-12 _pd-16px">
                        <div class="bio-input _pd-16px">
                            <h5>Title : {{title_project}}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-12 _pd-16px">
                Normal Textarea
                    <div class="bio-textarea _pd-16px">
                        <h5>Description : {{des_project}} </h5>
                    </div>
                </div>  
            </div> -->
            <div class="col-12 _pd-16px" v-for="(pages, i) in page" :key="i">
                <div class="bio-input _pd-16px" id="text">
                    <h5>Title page : {{pages.title_page}} </h5>
                </div>
                <div class="bio-textarea _pd-16px" >
                    <h5>Description page : {{pages.des_page}}</h5>
               </div>
                <div id="preview">
                    <img :src="pages.previewimage" alt="" id="picture" >
                    <div  v-for="(label, i) in pages.labels" :key="i" class="label-circle" :style="'left: ' + (label.x)+ 'px; top: ' + (label.y)+ 'px'"  >
                    {{i+1}}
                    </div>
                </div>
                <div v-for="(label, i) in pages.labels" :key="i">
                    <div class="bio-textarea _pd-16px">
                        <h5>{{i+1}} : {{label.description}}</h5>
                    </div> 
                </div>
                <div class="page-break"></div>
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
}
#picture {
  width: 700px;
  height: 600px;
}
#text {
  text-align: center;
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
}
.center {
  top: 40%;
  left: 25%;
  position: fixed;
}
</style>

<script>
import { firestore as db, store } from "~/services/firebaseInit";
export default {
  data: () => ({
    project: null,
    title_project: null,
    des_project: null,
    page: []
  }),
  async created() {
    const id = this.$route.params.uatid;
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      if (doc.id === id) {
        (this.id = doc.id),
          (this.title_project = doc.data().title_project),
          (this.des_project = doc.data().des_project);
      }
    });
    const snapshotpage = await db
      .collection("project")
      .doc(this.id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      const data = {
        title_page: doc.data().title_page,
        des_page: doc.data().des_page,
        previewimage: doc.data().img,
        labels: doc.data().label
      };
      this.page.push(data);
      console.log(this.page);
    });
  }
};
</script>
