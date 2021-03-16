import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        count: [0,0,0,0,0,0],
        datacollection: {
            labels: ['Cereal Prawn', 'Dry Beef Hor Fun', 'Mapo Tofu', 'Pork Fried Rice', 'Prawn omelette', 'Sambal KangKung'],
            datasets: [{
                label: "Dishes ordered",
                backgroundColor: ['blue', 'green', 'pink', 'purple', 'turquoise', 'violet'],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales:{
              yAxes:[{
                  ticks:{
                      min:0
                  }

              }]
          }
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.count[0] += doc.data()['Cereal Prawn'];
          this.count[1] += doc.data()['Dry Beef Hor Fun']
          this.count[2] += doc.data()['Mapo Tofu'];
          this.count[3] += doc.data()['Pork Fried Rice']
          this.count[4] += doc.data()['Prawn omelette'];
          this.count[5] += doc.data()['Sambal KangKung']
        })
        this.datacollection.datasets[0].data = this.count
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  mounted () {
    this.fetchItems()
  }
}
