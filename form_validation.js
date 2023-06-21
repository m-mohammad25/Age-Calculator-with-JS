let emptyErrMsg = "This field is required";

export let isFormValid = (day, month, year) => {
  let isValidForm = true;

  if (isEmpty(month.value)) {
    displayErrMsg(month, emptyErrMsg);
    isValidForm = false;
  } else if (!isValidMonth(month.value)) {
    displayErrMsg(month, "Must be a valid month");
    isValidForm = false;
  }

  if (isEmpty(year.value)) {
    displayErrMsg(year, emptyErrMsg);
    isValidForm = false;
  } else if (!isValidYear(year.value)) {
    displayErrMsg(year, "Must be a valid year");
    isValidForm = false;
  } else if (isYearInFuture(year.value)) {
    displayErrMsg(year, "Must be in the past");
    isValidForm = false;
  }

  if (isEmpty(day.value)) {
    displayErrMsg(day, emptyErrMsg);
    isValidForm = false;
  } else if (!isValidDay(day.value)) {
    displayErrMsg(day, "Must be a valid day");
    isValidForm = false;
  }

  if (!isValidForm) {
    return isValidForm;
  }
  if (!isValidDate(day.value, month.value, year.value)) {
    displayErrMsg(day, "Must be a valid date");
    displayErrMsg(month, "");
    displayErrMsg(year, "");
    isValidForm = false;
  }

  return isValidForm;
};

let isEmpty = (field) => {
  return field == "";
};

let isDayInRange = (day) => {
  return day >= 1 && day <= 31;
};

let isValidYear = (year) => {
  if (!isNaN(year)) {
    return year > 0;
  }
  return false;
};

let isMonthInRange = (month) => {
  return month >= 1 && month <= 12;
};

let isYearInFuture = (year) => {
  let currentYear = new Date().getFullYear();
  return year > currentYear;
};

let isValidDate = (day, month, year) => {
  let lastDayInMonth = new Date(year, month, 0).getDate();
  return day <= lastDayInMonth;
};

let isValidDay = (day) => {
  if (!isNaN(day)) {
    return isDayInRange(day);
  }
  return false;
};

let isValidMonth = (month) => {
  if (!isNaN(month)) {
    return isMonthInRange(month);
  }
  return false;
};
let displayErrMsg = (field, msg) => {
  let lightRed = "hsl(0, 100%, 67%)";

  field.style.borderColor = lightRed;

  let label = field.previousElementSibling;
  label.style.color = lightRed;

  let errLabel = field.nextElementSibling;
  errLabel.innerHTML = msg;
};
