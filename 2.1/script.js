const options={
    chart:{
        "type": "bar"
    },
    series: [
        {
        "name": "Revenue",
        "data": [120000,75000,80000,45000,33000,55000]
    },
    {
        "name": "Loss",
        "data": [25000,15000,30000,5000,12000,12500]
    }
    ],
    xasis:{
        "categories":["Jan","Feb","Mar","Apr","May","Jun"]
    }
}
const chart= new ApexCharts(document.querySelector("#chart") ,options)
chart.render();