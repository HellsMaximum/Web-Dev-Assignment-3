/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let dayCounter = 0;
let clickedElement;
let weeklyCost;

const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thu = document.getElementById("thursday");
const fri = document.getElementById("friday");

const clearButton = document.getElementById("clear-button");

const full = document.getElementById("full");
const half = document.getElementById("half");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
mon.addEventListener("click", dayClick);
tue.addEventListener("click", dayClick);
wed.addEventListener("click", dayClick);
thu.addEventListener("click", dayClick);
fri.addEventListener("click", dayClick);

function dayClick(){
  clickedElement = this;
  if(!clickedElement.classList.contains("clicked")){
      clickedElement.classList.add("clicked");
      dayCounter += 1;
      calculate();
  }
  else{
      clickedElement.classList.remove("clicked");
      dayCounter -= 1;
      calculate();
  }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", clearDays);

function clearDays(){
  mon.classList.remove("clicked");
  tue.classList.remove("clicked");
  wed.classList.remove("clicked");
  thu.classList.remove("clicked");
  fri.classList.remove("clicked");
  dayCounter = 0;
  calculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
full.addEventListener("click", changeRate);
half.addEventListener("click", changeRate);

function changeRate(){
  clickedElement = this;
  if(clickedElement.id === "half"){
      dailyRate = 20;
      half.classList.add("clicked");
      full.classList.remove("clicked");
  } 
  else{
      dailyRate = 35;
      full.classList.add("clicked");
      half.classList.remove("clicked");
  }
  calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// did in one function above as it made more sense to me to do it that way

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
  weeklyCost = dailyRate * dayCounter;
  document.getElementById("calculated-cost").innerHTML = weeklyCost;
}