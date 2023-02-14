const option ={
    chart : {
        "type":"bar"
    },
    series : [{
        "name" : "Number of male residents",
        "data" : [175000,188000,190000,185000,190760]
    },
    {
                "name" : "Number of female residents",
                "data" : [180000,190000,210000,200000,210000]
            },
        ],
    "xaxis": {
        "categories" : [1999,2000,2001,2002,2003]
    }
}

const chart = new ApexCharts(document.querySelector("#chart"),option)
chart.render()