const file2="https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/sightings.json";

let chart=new ApexCharts(document.querySelector("#charts"),options);

chart.render()

async function data2(){
    let result2 = await axios.get(file2)
    return result2.data
}

async function chartSecond(){
    let chartDataTwo = data2()
    chart.updateSeries([
        {
            "name" : "series2",
            "data" : chartDataTwo,
            "group" : "one"
        }
    ])
}
