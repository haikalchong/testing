const file1="https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/meteors.json";
const options= {
    "chart": {
        "type":"line",
        "height": "100%"
    },
    series:[],
    noData:{
        "text":"no content added yet"
    }
}

const chartTwo= new ApexCharts(document.querySelector("#chart"),options);
chart.render()

async function data1(){
    let result1 = await axios.get(file1)
    return result1.data
}

async function chartOne(){
    let dataChart= await data1()

    chart.updateSeries([
        {
            "name" : "series1",
            "data" : dataChart,
            "group" : "one"
        }
    ])
}