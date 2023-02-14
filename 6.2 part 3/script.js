async function advert(){
    let advertData = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/hands-on-6.2b/adverts.json")
    return advertData.data
}
async function review(){
    let reviewData = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/hands-on-6.2b/reviews.json")
    return reviewData.data
}
async function sales(){
    let salesData= await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/hands-on-6.2b/sales.json")
    return salesData.data
}

window.addEventListener("DOMContentLoaded", async function(){
    const options= {
        "chart": {
            "type":"line",
            "height": "70%"
        },
        series:[],
        noData:{
            "text":"no content added yet"
        }
    }
    
    const chart= new ApexCharts(document.querySelector("#chart"),options);
    chart.render()

    const adverts = await advert()
    const reviews = await review()
    const sale = await sales()

    chart.updateSeries([
        {
            "name" : "advert",
            "data" : adverts
        },
        // {
        //     "name" : "review",
        //     "data" : reviews
        // },
        // {
        //     "name" : "sales",
        //     "data" : sale
        // }
    ])

    const revBtn = document.querySelector("#rev")
    revBtn.addEventListener("click", function(){
        chart.updateSeries([
            {"name" : "review",
            "data" : reviews
        }

        ])
    })
    const advBtn = document.querySelector("#adv")
    advBtn.addEventListener("click", function(){
        chart.updateSeries([
            {
                "name" : "advert",
                "data" : adverts
            }
        ])

    const salesBtn = document.querySelector("#sales")

    salesBtn.addEventListener("click", function(){
        chart.updateSeries([
            {
                "name": "sales",
                "data" : sale
            }
        ])
    })
    })

})