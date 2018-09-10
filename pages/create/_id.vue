<template>
 <div class="_w-100pct">
   <div class="container _bgcl-neutral-100">
     <div class="container-fluid _bgcl-primary-300">
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
             <h5>Title : {{title_project}}</h5>
             <!-- <input type="text" v-model="title_project"> -->
           </div>
         </div>
         <div class="col-12 _pd-16px">
           <div class="bio-textarea _pd-16px">
             <h5>Description : {{des_pro}}</h5>
             <!-- <textarea name="" id="" cols="30" rows="10"  v-model="des_pro">
             </textarea> -->
           </div>
         </div>
         </div>         
          </div>
            <div class="col-12 _pd-16px">
              <div class="_dp-f  bnsave ">
                <div @click="addPage()" class="bio-button -gray u-rise "> Add Page</div>
              <!-- <div class="bio-button u-rise ">Save All</div>              -->
            </div>
        </div>
        <div class="container">
           <div class="texttd">
               <no-ssr>
             <table>
               <tr>
                 <th>Title</th>
                 <th>Description</th>
                 <th>Tools</th>
               </tr>
               <tr v-for="p in page" v-bind:key="p.id">
                 <!-- <td>จองตั๋ว</td>
                 <td>ผู้ใช้สามารถจองตั๋วรถข้ามจังหวัด</td> -->
                 <td><div>{{p.title_page}}</div></td>
                 <td><div> {{p.des_page}}</div></td>
                 <td>
                   <div>
                     <ul class="bio-breadcrumb">
                       <li><a>Edit</a></li>
                       <li><a>Delete</a></li>
                       <li><a>Print</a></li>
                     </ul>
                   </div>
                   </td>
               </tr>
             </table>
             </no-ssr>
           </div>
         </div>
         <div v-for="(page, i) in pages" :key="i">
           <div class="col-12 _pd-16px">
             <div class="bio-input _pd-16px">
              <h5>Title</h5>
                <input type="text" v-model="title_page">
              </div>
           </div>
           <div class="col-12 _pd-16px">
            <div class="bio-textarea _pd-16px">
              <h5>Description</h5>
              <textarea name="" id="" cols="30" rows="10" v-model="des_page">
              </textarea>
            </div>
         </div>
         <!-- <div>
           <input type="file" @change="onFileChange"> <br>
            <div id="preview" @click="addLabel">
             <img v-if="url" :src="url" id="picture" >
           </div>
         </div>
         <div class="label-circle" v-for="(label, i) in labels" 
              :key="i" :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'">
               {{ i + 1 }}
         </div>
         <div class="container">
           <div class="col-12">
             <div class="row">
               <div v-for="(item, i) in labels" :key="i">
                 <p>{{ i + 1 }}</p>
                 <textarea v-model="item.description" id="" rows="12" cols="170"></textarea>
               </div>
             </div>
           </div>
         </div>  -->        
         </div>
         <!-- <button @click="savePage">Save</button>   -->
         <div class="col-12 _pd-16px">
              <div class="_dp-f  bnsave ">
                <!-- <div @click="addPage()" class="bio-button -gray u-rise "> Add Page</div> -->
              <div class="bio-button u-rise " @click="savePage">Save </div>             
            </div>
            </div>
   </div>
 </div>
</template>
<style>
#preview {
  position: relative;
  border: 2px solid rgb(148, 146, 146);
  display: inline-block;
  /* width: 300px;
  height: 300px; */
  margin-left: 20%;
}
#picture {
  width: 700px;
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
import db from "~/services/firebaseInit";

export default {
  data: () => ({
    id: null,
    title_page: null,
    title_project: null,
    des_pro: null,
    des_page: null,
    url: "",
    labels: [],
    pages: [],
    page: []
  }),
  async created() {
    const id = this.$route.params.id;
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      //console.log(doc.id, "=>", doc.data());
      if (doc.id === id) {
        // (this.project = doc.data()),
        (this.id = doc.id),
          (this.title_project = doc.data().title_project),
          (this.des_pro = doc.data().des_pro);
      }
    });
    const snapshotpage = await db
      .collection("project")
      .doc(this.id)
      .collection("page")
      .get();
    snapshotpage.forEach(doc => {
      //console.log(doc.id, "=>", doc.data());
      const data = {
        id: doc.id,
      title_page: doc.data().title_page,
      des_page: doc.data().des_page
      }
      //this.page.push(data);
    });
    // return { data };
  },
  //   async processData() {
  //     const projectCollection = await firebase.firestore().collection(`project`).get();
  //     const pageCollection = await firebase.firestore().collection(`page`).get();
  //     const clients = [];
  //     clients.push(projectCollection);
  //     clients.push(pageCollection);
  //     const res = await Promise.all(clients);
  //     // res should equal a combination of both querySnapshots
  //   },
  methods: {
    addPage() {
      this.pages.push({
        title_page: " ",
        des_page: " "
      });
    },
    // onFileChange(e) {
    //   const file = e.target.files[0];
    //   this.url = URL.createObjectURL(file);
    // },
    // addLabel(e) {
    //   var x = e.pageX;
    //   var y = e.pageY;
    //   //console.log(e,x,y)
    //   var labelLength = this.labels.length;
    //   //console.log(labelLength)
    //   this.labels.push({
    //     x: x,
    //     y: y,
    //     description: ""
    //   });
    // },
    // savePage() {
    //   db
    //     .collection("project")
    //     .doc.id()
    //     .set({
    //       name: "Los Angeles",
    //       state: "CA",
    //       country: "USA"
    //     });
    // }

    savePage() {
      db
        .collection("project")
        .doc(this.id)
        .collection("page")
        .add({
          // project_id: this.project_id,
          //id: this.id,
          title_page: this.title_page,
          des_page: this.des_page
        })
         //.then(docRef => {
        //   console.log(docRef);
           return this.reload();
        // })
       // .catch(error => console.log(err));
    }
  }
};
</script>
