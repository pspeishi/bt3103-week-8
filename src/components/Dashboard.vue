<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/orders" exact>Orders</router-link></li>
        <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav>
    <div id="barchart">
        <bar-chart></bar-chart>
    </div>
    <div id="linechart">
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script>
import BarChart from './charts/BarChart.vue'
import LineChart from './CallAPI.vue'
export default {
  name: 'app',
  components: {
    'bar-chart':BarChart,
    'line-chart':LineChart
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
h1 {
    background-color:mediumslateblue;
    color: white;
}
</style>