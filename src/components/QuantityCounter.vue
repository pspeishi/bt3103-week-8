<template>
    <div>
        <button v-on:click="decrement()">-</button>
        <span> {{ " " + counter + " " }} </span>
        <button v-on:click="increment()">+</button>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
    props:{
        item:{
            type:Object
        }
    },
    methods:{
        increment:function(){
            if (this.counter < 10){
                this.counter++;
            } else {
                alert("You cannot buy more than 10 items.");
            }
            this.$emit('counter', this.item, this.counter);
        },
        decrement:function(){
            if (this.counter > 0){
                this.counter--;
            }
            this.$emit('counter', this.item, this.counter);
        }
    }
}
</script>

<style>
    button{
        background:lightpink;
        text-align: center;
        height: 50px;
        width: 50px;
        border-radius: 5px;
        font-size: 50px;
        line-height: 5px;
    }
    span{
        font-size: 30px;
    }
</style>