<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/orders" exact>Orders</router-link></li>
        <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav> 
      <ul id="orderList">
          <li id="order" v-for="order in orders" v-bind:key="order.name">
            <ul>
              <li id="dish" v-for="dish of Object.entries(order[1])" v-bind:key="dish[0]">
                <p>{{dish[0] + ": " + dish[1]}}</p>
              </li>
            </ul>
            <div id="buttons">
              <button v-bind:id="order[0]" v-on:click="deleteItem($event)">Delete</button>
              <button v-bind:id="order[0]" v-on:click="routeEvent($event)">Modify</button>
            </div>
          </li>
      </ul>
  </div>  
</template>

<script>
import database from "../firebase.js"

export default {
  data(){
    return{
        orders: [],
    }
  },
  methods:{
    fetchItems:function() {
      database.collection('orders').get().then((querySnapShot)=>{
        querySnapShot.forEach(doc=>{
          this.orders.push([doc.id, doc.data()])
        }) 
      }) 
    },
    deleteItem:function(event) {
      let doc_id = event.target.getAttribute("id");
      database.collection('orders').doc(doc_id).delete().then(() => location.reload());
    },
    routeEvent:function(event) {
      let doc_id = event.target.getAttribute("id");      
      this.$router.push({name: 'modify', params: {id: doc_id}});
    },

  },
  created(){
      this.fetchItems()
  }
}
</script>

<style scoped>
nav ul{
  list-style-type: none;
  text-align: center;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -30px;
}
nav li{
  flex-grow: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
#orderList {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
}
#order {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
#dish {
  list-style-type: none;
  padding-right: 50%;
}
#buttons {
  display:inline-block;
  position: relative;
  left: 30%;
  bottom: 80%;
}
button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  font-size: 15px;
}

</style>
