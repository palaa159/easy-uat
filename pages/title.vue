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
    <!-- open div row -->
    <div class="row">
        <!-- open div col --> 
          <div class="col-12 _pd-16px">
                    <div class="bio-input _pd-16px">
                        <h5>Title</h5>
                            <input type="text"  v-model="title_project">
                    </div>
                </div>  
             <div class="col-12 _pd-16px">
         <!-- Normal Textarea -->
                    <div class="bio-textarea _pd-16px">
                        <h5>Description </h5>
                            <textarea rows="7"  v-model="des_pro"></textarea>
                    </div>
                </div>      
         </div>
     </div>
     <br>
    <div class="bio-button u-rise bn"><nuxt-link to="/addpage">Save</nuxt-link></div>
        </div>    
    </div>
</template>



