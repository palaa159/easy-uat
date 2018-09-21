<template>
    <div class="_w-100pct">
        <div class="container _bgcl-neutral-100">
            <div class="container" v-for="(pages, i) in page" :key="i">
                <div>
                    <table class="testtable">
                        <tr>
                            <th width=30%>ชื่อการทำงาน</th>
                            <td>{{pages.title_page}}</td>
                            <th>วันที่ทดสอบ</th>
                            <td width=20%></td>
                        </tr>
                        <tr>
                            <th width=30%>ผลที่คาดหวัง</th>
                            <td></td>
                            <th>ชื่อผู้ทดสอบ</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th width=30%>เงื่อนไขก่อนการทำงาน</th>
                            <td colspan="3"></td>
                        </tr>
                    </table>
                <br>
                </div>
                <div>
                    <table class="testtable">
                        <tr>
                            <th class="txt">การทดสอบ</th>
                            <th class="txt">ผลที่ควรจะได้</th>
                            <th class="txt">ผลการทดสอบ</th>
                            <th class="txt">หมายเหตุ</th>
                        </tr>
                        <tr v-for="(label, i) in pages.labels" :key="i">
                            <td width=30%>{{i+1}}. {{label.test}}</td>
                            <td width=30%>{{label.test_result}}</td>
                            <td width=15%>
                                <div>
                                    <div class="triangle" style="display: inline">ผ่าน</div> 
                                    <div class="triangle" style="display: inline"></div> ไม่ผ่าน
                                </div>
                            </td>
                            <td width=20%></td>
                        </tr>
                    </table>
                    <p align="right">{{i+1}}</p>
                    <div class="page-break "></div>
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
}
#text {
  text-align: center;
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
        previewimage: doc.data().img,
        labels: doc.data().label
      };
      this.page.push(data);
      //console.log(this.page);
    });
  }
};
</script>