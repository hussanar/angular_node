let dailybtn = document.getElementById("daily")
let weeklybtn = document.getElementById("weekly")
let monthlybtn = document.getElementById("monthly")

let daily_Data = document.getElementsByClassName("daily-data")
let daily_Data_Previous = document.getElementsByClassName("daily-data-previous")


let weekly_Data = document.getElementsByClassName("weekly-data")
let weekly_Data_Previous = document.getElementsByClassName("weekly-data-previous")


let monthly_Data = document.getElementsByClassName("monthly-data")
let monthly_Data_Previous = document.getElementsByClassName("monthly-data-previous")



function show_based_time_data() {
    dailybtn.addEventListener("click", function() {
        dailybtn.style.cssText = "color:white"
        weeklybtn.style.cssText = "color: hsl(235, 45%, 61%)"
        monthlybtn.style.cssText = "color: hsl(235, 45%, 61%)"

        for (let i = 0; i < 6; i++) {
            daily_Data[i].style.cssText = "display:block"
            daily_Data_Previous[i].style.cssText = "display:block"

            weekly_Data[i].style.cssText = "display:none"
            weekly_Data_Previous[i].style.cssText = "display:none"

            monthly_Data[i].style.cssText = "display:none"
            monthly_Data_Previous[i].style.cssText = "display:none"
        }

    })
    weeklybtn.addEventListener("click", function() {
        dailybtn.style.cssText = "color: hsl(235, 45%, 61%)"
        weeklybtn.style.cssText = "color:white"
        monthlybtn.style.cssText = "color: hsl(235, 45%, 61%)"

        for (let i = 0; i < 6; i++) {
            daily_Data[i].style.cssText = "display:none"
            daily_Data_Previous[i].style.cssText = "display:none"

            weekly_Data[i].style.cssText = "display:block"
            weekly_Data_Previous[i].style.cssText = "display:block"

            monthly_Data[i].style.cssText = "display:none"
            monthly_Data_Previous[i].style.cssText = "display:none"
        }


    })
    monthlybtn.addEventListener("click", function() {
        dailybtn.style.cssText = "color: hsl(235, 45%, 61%)"
        weeklybtn.style.cssText = "color: hsl(235, 45%, 61%)"
        monthlybtn.style.cssText = "color:white"

        for (let i = 0; i < 6; i++) {
            daily_Data[i].style.cssText = "display:none"
            daily_Data_Previous[i].style.cssText = "display:none"

            weekly_Data[i].style.cssText = "display:none"
            weekly_Data_Previous[i].style.cssText = "display:none"

            monthly_Data[i].style.cssText = "display:block"
            monthly_Data_Previous[i].style.cssText = "display:block"
        }
    })
}
show_based_time_data()