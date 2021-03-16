import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        results: [],
        datacollection: {
            labels: [],
            datasets: [
                { 
                    data: [],
                    label: 'west',
                    fill: false,
                    borderColor:"red"
                },
                { 
                    data: [],
                    label: 'national',
                    fill: false,
                    borderColor:"blue",
                },
                { 
                    data: [],
                    label: 'east',
                    fill: false,
                    borderColor:"indigo",
                },
                { 
                    data: [],
                    label: 'central',
                    fill: false,
                    borderColor:"turquoise",
                },
                { 
                    data: [],
                    label: 'south',
                    fill: false,
                    borderColor:"pink",
                },
                { 
                    data: [],
                    label: 'north',
                    fill: false,
                    borderColor:"green",
                },
            ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            this.results = response.data.items;
            for(let key in this.results){
                this.datacollection.datasets[0].data.push(this.results[key].readings.psi_twenty_four_hourly.west);
                this.datacollection.labels.push(this.results[key].timestamp);
            }

            for(let key in this.results){
                this.datacollection.datasets[1].data.push(this.results[key].readings.psi_twenty_four_hourly.national);
            }
            for(let key in this.results){
                this.datacollection.datasets[2].data.push(this.results[key].readings.psi_twenty_four_hourly.east);
            }
            for(let key in this.results){
                this.datacollection.datasets[3].data.push(this.results[key].readings.psi_twenty_four_hourly.central);
            }
            for(let key in this.results){
                this.datacollection.datasets[4].data.push(this.results[key].readings.psi_twenty_four_hourly.south);
            }
            for(let key in this.results){
                this.datacollection.datasets[5].data.push(this.results[key].readings.psi_twenty_four_hourly.north);
            }
            this.renderChart(this.datacollection,this.options)
        })
    }
  },
  mounted() {
    this.fetchItems()
  }
}
