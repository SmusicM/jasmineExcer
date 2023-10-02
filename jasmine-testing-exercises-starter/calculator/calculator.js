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
   document.getElementById("loan-amount").value = 10000;
   document.getElementById("loan-years").value = 10;
   document.getElementById("loan-rate").value = 4.5
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const vals = getCurrentUIValues();
  const mopayment = calculateMonthlyPayment(vals);
  updateMonthly(mopayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(vals) {
  const { amount, years, rate} = vals;
  const morate = rate / 100 / 12;
  const numOfPayments = years * 12;
  const mopayment = (amount * morate) / (1- Math.pow(1+ morate, - numOfPayments));
  return mopayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const mopaymentEl = document.getElementById("monthly-payment");
  mopaymentEl.textContent = monthly;
}
