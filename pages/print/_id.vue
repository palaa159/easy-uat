<template>
<div>
    <!-- <PDFData>
    <PDFPreview
      slot="preview"
      slot-scope="{title_project}"
      v-bind="{des_pro}"
      />
       <PDFDocument
      slot="document"
      slot-scope="{title_project}"
      v-bind="{title_project}"
      />
    </PDFData> -->
  <!-- <pdf src="./static/relativity.pdf"></pdf> -->
    <!-- <button @click="pdf">PDF</button> -->
</div>
</template>
<script>
// import db from "~/services/firebaseInit";

// export default {
//   data: () => ({
//     id: null,
//     title_page: null,
//     title_project: null,
//     des_pro: null,
//     des_page: null,
//     projects: [],
//     pageid: [],
//     todos: [
//       {
//         title: "title 1 ",
//         description: "description 1"
//       },
//       {
//         title: "title 2 ",
//         description: "description 1"
//       },
//       {
//         title: "title 3 ",
//         description: "description 1"
//       },
//       {
//         title: "title 4 ",
//         description: "description 1"
//       },
//       {
//         title: "title 5 ",
//         description: "description 1"
//       }
//     ]
//   }),
//   methods: {
//     async createPDF() {
//       let pdfName = "test";
//       var doc = new jsPDF();
//       db
//         .collection("project")
//         .get()
//         .then(querySnapshot => {
//           querySnapshot.forEach(doc => {
//             //console.log(doc.data());
//             const data = {
//               id: doc.id,
//               title_project: doc.data().title_project,
//               des_pro: doc.data().des_pro,
//               page: doc.data().page
//             };
//             this.projects.push(data);
//             console.log(this.projects);
//           });
//         });

//       //   doc.data();
//       //   doc.save(pdfName + ".pdf");
//     },

//     pdf() {
//       //   let pdfName = 'test';
//       //   var doc = new jsPDF();
//       // //   doc.projects;
//       // //  //this.title_project= doc.data().title_project
//       // var vm =  this
//       //     var colums =[
//       //       {title:"Title",dataKey:"title_project"},
//       //       {title:"Description",dataKey:"des_pro"}
//       //     ];

//       //     doc.autoTable(columns,vm.todos);
//       // doc.addPage()
//       // doc.text('I am on page 3', 10, 10)
//       // doc.setPage(1)

//       // doc.text('I am on page 1', 10, 10)
//       // doc.save(pdfName + ".pdf");

//       var doc = new jsPDF();
//       doc.;
//       doc.viewerPreferences({ FitWindow: true }, true);
//       doc.save("viewerPreferences.pdf");

//       // Example printing 10 copies, using cropbox, and hiding UI.
//         doc.viewerPreferences({
//         HideWindowUI: true,
//         PrintArea: "CropBox",
//         NumCopies: 10
//       });
//     }
//   }
// };
</script>
