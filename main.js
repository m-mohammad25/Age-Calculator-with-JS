import { isFormValid } from "./form_validation.js";

let btn = document.querySelector("button.submit");

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let yearHeading = document.querySelector("h1.h1-year span");
let monthHeading = document.querySelector("h1.h1-month span");
let dayHeading = document.querySelector("h1.h1-day span");

btn.onclick = () => {
  clearErrStyle();
  clearHeadings();

  let isValid = isFormValid(day, month, year);
  if (isValid) {
    let dob = new Date(year.value, month.value - 1, day.value);
    console.log(dob);

    let dobYear = dob.getFullYear();
    let dobMonth = dob.getMonth();
    let dobDate = dob.getDate();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDate = now.getDate();

    yearAge = currentYear - dobYear;

    if (currentMonth >= dobMonth) {
      var monthAge = currentMonth - dobMonth;
    } else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }

    if (currentDate >= dobDate) {
      var dateAge = currentDate - dobDate;
    } else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    updateDays(dateAge);
    updateMonths(monthAge);
    updateYears(yearAge);
  }
};

let clearErrStyle = () => {
  let lightGray = "hsl(0, 0%, 86%)";
  let smokeyGray = "hsl(0, 1%, 44%)";

  day.style.borderColor = lightGray;
  day.nextElementSibling.innerHTML = "";
  let dayLabel = day.previousElementSibling;
  dayLabel.style.color = smokeyGray;

  month.style.borderColor = lightGray;
  month.nextElementSibling.innerHTML = "";
  let monthLabel = month.previousElementSibling;
  monthLabel.style.color = smokeyGray;

  year.style.borderColor = lightGray;
  year.nextElementSibling.innerHTML = "";
  let yearLabel = year.previousElementSibling;
  yearLabel.style.color = smokeyGray;
};

function clearHeadings() {
  dayHeading.innerHTML = "--";
  monthHeading.innerHTML = "--";
  yearHeading.innerHTML = "--";
}

function updateDays(days) {
  let step = 0;
  let stepper = setInterval(() => {
    dayHeading.innerHTML = step;
    step++;
    if (step > days) {
      clearInterval(stepper);
    }
  }, 16.7);
}
function updateMonths(months) {
  let step = 0;
  let stepper = setInterval(() => {
    monthHeading.innerHTML = step;
    step++;
    if (step > months) {
      clearInterval(stepper);
    }
  }, 16.7);
}
function updateYears(years) {
  let step = 0;
  let stepper = setInterval(() => {
    yearHeading.innerHTML = step;
    step++;
    if (step > years) {
      clearInterval(stepper);
    }
  }, 16.7);
}
