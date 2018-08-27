<template>
<!-- open div -->
<div class="_w-100pct">
    <div class="container _bgcl-neutral-100">
    <div class="container-fluid _bgcl-primary-300">
      <div class="row">
      <div class="col-12 myHeader">
      <h1 class="text">Easy UAT</h1>  
      </div>
    </div>
  </div>
  
    <!-- open div container -->
<div class="container _bgcl-neutral-300 _pd-16px">
    <!-- open div row -->
    <div class="row">
        <!-- open div col -->
        <div class="col-12 _pd-16px">
          <!-- Normal Input -->
            <div class="bio-input _pd-16px">
            <h5>Title</h5><input type="text" placeholder="Type Something " >
            </div>
    </div>
     <!-- colse div col -->
     <!-- open div col -->
     <div class="col-12 _pd-16px">
           <!-- Normal Textarea -->
        <div class="bio-textarea _pd-16px">
          <h5>Description </h5>
          <textarea rows="7" placeholder="Textarea"></textarea>
</div>
     </div>
     <!-- colse div col -->
      <div class="col-12 _pd-16px">
  
  </div>   
     
</div><!-- close div row -->

</div><!-- close div container -->
<!-- start input file -->
<br>
  
  <div>
          <input type="file" @change="onFileChange" >
          <br>
          <div id="preview" @click="addLabel">
            <img v-if="url" :src="url" id="picture" >
          </div>
      </div>
        
<!-- end input file -->
 <!-- start circle -->
 
      <div class="label-circle" v-for="(label, i) in labels" :key="i" :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'">
    {{ i + 1 }}
      </div>
      <!-- end circle -->
      <!-- start textarea -->
      <div class="container">
        <div class="col-12">
          <div class="row">
        <div v-for="(item, i) in labels" :key="i">
          <p>{{ i + 1 }}</p>
          <textarea v-model="item.description" id="" rows="12" cols="170"></textarea>
        </div>
        </div>
      </div>
      </div><br>
    
      <!-- end textarea -->
       <p>
    <button @click="save" class="bio-button u-rise bn">Save</button>
     
  </p>
</div>
</div><!-- close div -->
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
  export default {
    data: () => ({
      url: '',
      labels: [],
      newlabels:null,
      title: '',
      des: ''
    }),
     beforeMounted(){
       var vm = this;
       console.log("before mounted")
       vm.get('img')
     },
     mounted() {
       var vm = this;
       console.log("mounted");
       vm.get('img')
      if (localStorage.title) {
        this.title = localStorage.title;
      }
      if (localStorage.textarea) {
        this.des = localStorage.des;
      }
      if (localStorage.getItem('labels')) {
      try {
        this.labels = JSON.parse(localStorage.getItem('labels'));
      } catch(e) {
        localStorage.removeItem('labels');
      }
    }
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
      },
      deleteRow(item) {
      this.labels.splice(item,1)
      },
      addLabel (e) {
        var x = e.pageX
        var y = e.pageY
      //console.log(e,x,y)
        var labelLength = this.labels.length
        //console.log(labelLength)
        this.labels.push({
           x: x,
           y: y,
          description: ''
        })
        if (!this.newlabels) {
        return;
      }
      this.labels.push(this.newlabels);
      this.newlabels = '';
      // this.saveCats();
      },
       get(key){
         this.url=localStorage.getItem(key);
       },
       set(key){
         var vm = this
         try{
           localStorage.setItem(key,this.url);
         }
         catch(e){
           console.log("failed");
         }
       },
      save() {
        localStorage.title = this.title;
        localStorage.des = this.des;
        const parsed = JSON.stringify(this.labels);
        localStorage.setItem('labels', parsed);
        console.log("finish");
      }
    }
  }
</script>