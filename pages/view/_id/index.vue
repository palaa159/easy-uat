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
                                    <h5>Title : {{title_project}}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 _pd-16px">
                            <!-- Normal Textarea -->
                                <div class="bio-textarea _pd-16px">
                                    <h5>Description : {{des_pro}} </h5>
                                </div>
                        </div>  
                    </div>
                    <div class="container">
                        <div class="texttd">
                        <table>
                            <tr class="">
                                <th>Title</th>
                                <th>Description</th>
                                <th>Tool</th>
                            </tr>
                            <tr v-for="(pages, i) in page" :key="i">
                                <td>{{pages.pageid}}: {{pages.title_page}}</td>
                                <td>{{pages.des_page}}</td>
                                <td>
                                    <ul class="bio-breadcrumb">
                                        <nuxt-link :to="{name:'view-id-p-pageId', params: { pageId: pages.pageid, id: $route.params.id}}">
                                            <li>View</li>
                                        </nuxt-link>
                                        <nuxt-link :to="{name:'edit-id-e-pageId', params: { pageId: pages.pageid, id: $route.params.id}}">
                                            <li>Edit</li>  
                                        </nuxt-link>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <br>
       <button @click="deleteData">Delete Project</button>
        </div>
    </div>
</template>

<script>
import db from "~/services/firebaseInit";
export default {
  data: () => ({
    project: null,
    title_project: null,
    des_pro: null,
    page: null,
    page_id: null,
    title_page: null,
    des_page: null
  }),
  async created() {
    const id = this.$route.params.id;
    //const pageid = this.$route.params.pageId;
    //console.log(pageid);
    const snapshot = await db.collection("project").get();
    snapshot.forEach(doc => {
      if (doc.id === id) {
        (this.title_project = doc.data().title_project),
          (this.des_pro = doc.data().des_pro),
          (this.page = doc.data().page),
          (this.page_id = doc.data().page_id);
      }
    });
  },
  methods: {
    async deleteData() {
      const id = this.$route.params.id;
      //console.log(pageid);
      const snapshot = await db.collection("project").get();
      snapshot.forEach(doc => {
        if (doc.id === id) {
          //console.log(doc.data());
          doc.ref.delete();
          return this.$router.push("/");
        }
      });
    }
  }
};
</script>