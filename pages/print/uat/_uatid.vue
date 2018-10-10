<!--
    File Name: _uatid.vue
    Description: Form for print UAT
    Folder: pages/print/uat/_uatid.vue 
-->
<template>
    <div class="_w-100pct">
        <div class="container ">
            <div class="cover">
                <h2>User Acceptance Testing</h2>
                <h2>{{title_project}}</h2>
                <h2>{{des_project}}</h2>
            </div>
            <div class="page-break "></div>
            <div class="container" v-for="(pages, i) in pages_Object" :key="i">
                <!-- start 1st table output title_page-->
                <table class="testtable">
                    <tr>
                        <th width=30%>Name</th>
                        <td>{{pages.title_page}}</td>
                        <th>Date</th>
                        <td width=20%></td>
                    </tr>
                    <tr>
                        <th width=30%>Conditions</th>
                        <td>{{pages.condition}}</td>
                        <th>Tester</th>
                        <td></td>
                    </tr>
                </table>
                <!-- end 1st table output title_page-->   
                <br>
                <!-- start 2nd table output label-->
                <table class="testtable">
                    <tr>
                        <th width =20% class="txt">Test</th>
                        <th class="txt" colspan="2">Result</th>
                        
                    </tr>
                    <tr v-for="(labels, i) in pages.labels_data" :key="i">
                        <td width=30%>{{i+1}}. {{labels.test}}</td>
                        <td width=30%>{{labels.test_result}}</td>
                        <td width=15%>
                            <div>
                                <input type="checkbox" id="scales" name="feature" value="scales"/>  Yes
                                <br>
                                <input type="checkbox" id="scales" name="feature" value="scales"/>  No
                            </div>
                        </td>
                    </tr>
                </table>
                <!-- end 2nd table output label-->
                    <div class="footer">
                        <p>ลงชื่อ.......................................................................</p>
                        <br>
                        <p>(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</p>
                        <br>
                        <p>ผู้ทดสอบ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <br>
                <div class="page-break "></div>
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
.txt {
  text-align: center;
}
table,
th,
td {
  border: 1px solid black;
}
.triangle {
  float: left;
  width: 10px;
  height: 10px;
  border: 1px solid black;
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
  .footer {
    margin-top: 15%;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: right;
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
    const id = this.$route.params.uatid;
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
        condition: doc.data().condition,
        previewimage: doc.data().img,
        labels_data: doc.data().label
      };
      this.pages_Object.push(data);
    });
  }
};
</script>