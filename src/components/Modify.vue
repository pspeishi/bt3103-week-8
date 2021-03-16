<template>
  <div>
      <ul>
          <li v-for="(quantity, name, index) in datapacket[0]" v-bind:key="index">
            <p>{{ name }}: {{ quantity }}</p>
            <input v-bind:id="index" placeholder=0 type="number" and min="0">
          </li>
          <br>
          <button v-on:click="updateOrder">Update Order</button>
      </ul>
  </div>  
</template>

<script>
import database from "../firebase.js"

export default {
  data(){
    return{
        datapacket: [],
        docId: 0
    }
  },
  methods:{
    fetchItems:function() {
        this.docId = this.$route.params.id;
        database.collection('orders').doc(this.docId).get().then((querySnapShot)=>this.datapacket.push(querySnapShot.data()));
    },
    updateOrder:function() {
        let copied = this.datapacket[0];
        var keys = Object.keys(copied);
        for (var i=0; i<=5; i++) {
          var input = document.getElementById(i);
          if (input.value.length == 0) {
            input = copied[keys[i]];
          } else {
            input = parseInt(input.value);
          }
          copied[keys[i]] = input;
        }
        database.collection('orders').doc(this.docId).set(copied).then(() => location.replace('/orders').reload());
    }
  },
  created(){
      this.fetchItems()
  }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: left;
}
button {
  width: 200px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  font-size: 15px;
}
</style>