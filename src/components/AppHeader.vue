<template>
  <div class="header">
    <nav>
      <h1>{{ title }}</h1>
      
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
        title: "PS Zi Char",
    }
  }
}
</script>

<style>
h1{
  text-align: center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 70px;
  background-color:lightpink;
  color:brown;
  height: 80px;
  padding-top: 10px;
}
</style>