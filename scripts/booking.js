/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let daily_rate = 35
let total_cost = 0
let days = 0

let monday = document.getElementById('monday')
let tuesday = document.getElementById('tuesday')
let wednesday = document.getElementById('wednesday')
let thursday = document.getElementById('thursday')
let friday = document.getElementById('friday')

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. 
// Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clicked() {
    if (this.classList.contains("clicked")) {
        this.classList.remove("clicked)")
        days --;
    }
    else {
        this.classList.add("clicked")
        days++;
    }
    calculate()
}


monday.addEventListener("click", clicked)
tuesday.addEventListener("click", clicked)
wednesday.addEventListener("click", clicked)
thursday.addEventListener("click", clicked)
friday.addEventListener("click", clicked)

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, 
// any other relevant variables are reset, and the calculated cost is set to 0.

let clear_days = document.getElementById('clear-button')

function clearDays() {
    monday.classList.remove("clicked")

    tuesday.classList.remove("clicked")

    wednesday.classList.remove("clicked")

    thursday.classList.remove("clicked")

    friday.classList.remove("clicked")
    
    days = 0

    calculate()
}

clear_days.addEventListener("click", clearDays)

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it 
// from the "full" element, and recalculate the total cost.

let half_days = document.getElementById('half')

function halfday() {
    half_days.classList.add("clicked")
    full_days.classList.remove("clicked")
    daily_rate = 20
    calculate()
    console.log("clicked")
}

half_days.addEventListener("click", halfday)

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and 
// removed from "half", and the total cost is recalculated.

let full_days = document.getElementById('full')

function fullday() {
    half_days.classList.remove("clicked")
    full_days.classList.add("clicked")
    daily_rate = 35
    calculate()
    console.log("clicked")
}

full_days.addEventListener("click", fullday)

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let cost = document.getElementById('calculated-cost')
    total_cost = daily_rate * days
    cost.innerText = total_cost
}

