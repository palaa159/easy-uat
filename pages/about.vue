<template>
<div class="container ">  
  
            
                 <!-- Normal Input -->
<div class="bio-input _pd-16px">
 Title <input type="text" placeholder="Type Something">
</div>
<!-- Normal Textarea -->
<div class="bio-textarea _pd-16px">
  Description <textarea rows="3" placeholder="Textarea"></textarea>
</div>
<div class="_dp-f _jtfct-fe">
  <div class="bio-button -gray "><nuxt-link to="/addpage">Add page</nuxt-link></div>
   <div class="bio-button   ">Save</div>
  </div>      
  <br>
    <br>       
      
<table class="">
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Tools</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td> <div class="_dp-f _jtfct-ct">
              <div class="bio-button -accent">Delet</div>
              <div class="bio-button -warning">Edit</div>
              <div class="bio-button -dark">Print</div>
          </div></td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td> <div class=" _dp-f _jtfct-ct">
              <div class="bio-button -accent">Delet</div>
              <div class="bio-button -warning">Edit</div>
              <div class="bio-button -dark">Print</div>
          </div></td>
  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
   
  
       
      <td>
          <div class=" _dp-f _jtfct-ct">
              <div class="bio-button -accent">Delet</div>
              <div class="bio-button -warning">Edit</div>
              <div class="bio-button -dark">Print</div>
          </div>

      </td> 
         
   
  
  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td> <div class="_dp-f _jtfct-ct">
             <div class="bio-button -accent">Delet</div>
              <div class="bio-button -warning">Edit</div>
              <div class="bio-button -dark">Print</div>
          </div></td>
</tr>
</table>

     </div>
   
</template>
 <style lang="scss" scoped>
          table {
    border-collapse: collapse;
    width: 100%;
    border: #f2f2f2;
}

th, td {
    text-align: center;
    padding: 10px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
    background-color: #FF3333;
    color: white;
}
left{
    margin-right: 250px;
}
          
           </style> 