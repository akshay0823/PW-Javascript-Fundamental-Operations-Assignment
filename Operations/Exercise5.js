let princpleAmount = 2000;
let interestRate = 10;
let durationTime = 2;

let calculateInterest = caculateSimpleInterest(
  princpleAmount,
  interestRate,
  durationTime
);

function caculateSimpleInterest(princpleAmount, interestRate, durationTime) {
  let calculateSI = (princpleAmount * interestRate * durationTime) / 100;
  return calculateSI;
}

console.log(calculateInterest);
