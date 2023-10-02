
it('should calculate the monthly rate correctly', function () {
  const values = {amount:10000 , years: 5, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual("186.43");//returned num a string
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10043, years: 8, rate:5.8};
  expect(calculateMonthlyPayment(values)).toEqual("131.00");
});

afterEach(function(){
  values = {};
});

/// etc
