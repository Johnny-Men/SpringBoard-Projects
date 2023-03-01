
it('should calculate the monthly rate correctly', function () {
  const m = {amount:100, years:10, rate:1};
  const result = calculateMonthlyPayment(m);
  expect(result).toEqual("8.33");
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 200, years: 20, rate: 2};
  expect(calculateMonthlyPayment(values)).toBe("33.33");
});

/// etc
