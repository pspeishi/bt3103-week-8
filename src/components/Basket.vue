<template>
    <div>
        <p>Menu:</p>
        <ul>
            <li v-for="menu in itemsSelected" v-bind:key="menu[0]">
                <p>{{menu[0]}} x {{menu[1]}}</p>
            </li>
        </ul>
        <button v-on:click="findTotal(); sendOrder()">Calculate total</button>
        <p v-show="showTotal">Subtotal: ${{total}}</p>
        <p v-show="showTotal">Grand Total: ${{grandTotal.toFixed(2)}}</p>

  </div>
</template>

<script>
import database from '../firebase.js'

export default {
    data() {
        return {
            total: 0,
            showTotal: false,
            dishes: ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"]
        }
    },
    props:{
        itemsSelected:{
            type:Array
        },
    },
    methods:{
        sendOrder:function(){
            var order = {};
            for(var dishName of this.dishes) {
                var found = false;
                for (var dish of this.itemsSelected) {
                    if (dish[0] == dishName) {
                        order[dishName] = dish[1];
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    order[dishName] = 0;
                }
            }
            database.collection('orders').add(order).then(() => location.reload());
        },
        findTotal:function(){
            this.total = 0;
            for (var itemSelected of this.itemsSelected){
                this.total += itemSelected[2] * itemSelected[1];
            }
            this.showTotal = true;
            return this.total;
        }
    },
    computed:{
        grandTotal:function(){
            return this.total * 1.07;
        }
    }
}
</script>

<style scoped>
div{
    font-size: 25px;
    text-align: left;
}
button{
    background:lightpink;
    text-align: center;
    width: 200px;
    border-radius: 5px;
    font-size: 20px;
    
}
</style>