<template>
  <div class="container">
      <!-- start text -->
      <div class="bio-input">
        Title<input type="text" placeholder="Type Something">
      </div>
      <!-- end textarea -->
      <!-- start textarea -->
      <div class="bio-textarea">
        Description<textarea rows="8" placeholder="Type Something"></textarea>
      </div>
      <!-- end textarea -->
      <!-- start input file -->
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
      <div>
        <div v-for="(item, i) in labels" :key="i">
          <p>{{ i + 1 }}</p>
          <textarea v-model="item.description" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <!-- end textarea -->
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
      url: null,
      labels: []
    }),
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
      },
      addLabel (e) {
      var x = e.pageX
      var y = e.pageY

      console.log(e,x,y)
      var labelLength = this.labels.length
       //console.log(labelLength)
      this.labels.push({
        x: x,
        y: y,
        description: ''
      })
    }
    }
  }
</script>


