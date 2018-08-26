<template>
  <div class="container">
      <!-- start text -->
      <div class="bio-input">
        Title<input type="text" placeholder="Type Something" v-model="title">
      </div>
      <!-- end text -->
      <!-- start textarea -->
      <div class="bio-textarea">
        Description<textarea rows="8" placeholder="Type Something" v-model="des"></textarea>
      </div>
      <!-- end textarea -->
      <!-- start input file -->
      <div>
          <input type="file" @change="onFileChange">
          <br>
          <div id="preview" @click="addLabel">
            <img v-if="url" :src="url" id="picture">
          </div>
      </div>
      <!-- end input file -->
      <!-- start circle -->
      <div class="label-circle" v-for="(label, i) in labels" :key="i" :style="'left: ' + label.x + 'px; top: ' + label.y + 'px'">
    {{ i + 1 }}
      </div>
      <!-- end circle -->
      <!-- start textarea -->
      <div>
        <div v-for="(item, i) in labels" :key="i">
          <p>{{ i + 1 }}</p>
          <textarea v-model="item.description" id="" rows="10" cols="50"></textarea>
        </div>
      </div>
      <!-- end textarea -->
      <p>
    <button @click="save">Save</button>
  </p>
  </div>
</template>
<style>
 #preview {
  position: relative;
  border: 2px solid black;
  display: inline-block;
  margin-left: 30%;
} 
#picture {
  width: 400px;
  height: 400px;
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
    // beforeMounted(){
    //   var vm = this;
    //   console.log("before mounted")
    //   vm.get('img')
    // },
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


