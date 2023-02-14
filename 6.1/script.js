const dataPath="https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fake-graph-data.json"

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

const chart= new ApexCharts(document.querySelector("#chart"),options);
chart.render();


async function getResult(){
    let result= await axios.get(dataPath);
    console.log(result.data.temperatures)
      return result.data.temperatures
    }
    getResult()
     
window.addEventListener("DOMContentLoaded", async function(){
    const series = await getResult()
    chart.updateSeries([
        {
            "name" : "series",
             "data" : series
         }
    ])
})
    
    


