function calculateAge() {
  const dob = new Date(document.getElementById("datepicker").value);

  if (!isValidDate(dob)) {
    alert("Please enter a valid date.");
    return;
  }

  const today = new Date();

  let ageYears = today.getFullYear() - dob.getFullYear();

  let ageMonths = today.getMonth() - dob.getMonth();
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const ageDays = today.getDate() - dob.getDate();
  if (ageDays < 0) {
    ageMonths--;
    ageDays += isLeapYear(dob.getFullYear()) ? 29 : 30;
  }

  const result = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
  document.getElementById("result").innerHTML = result;
}

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
