window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    return calculateMonthlyPayment(getCurrentUIValues());
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const monthlyPay = document.querySelector("#monthly-payment");
  monthlyPay.innerText = setupIntialValues();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
const {amount,years,rate} = values;
console.log(amount,years,rate);
const pRate = rate/12;
const quantity = 1 + pRate;
const n = years * 12;
const payment = (amount * pRate) / (1 - (quantity**-n));
return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
