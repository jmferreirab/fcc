let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;
let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;
let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  const duplexCheck =
    annualIncome >= minIncomeForDuplex &&
    creditScore >= minCreditScoreForDuplex;

  const condoCheck =
    annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo;
  const carCheck =
    annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar;

  if (duplexCheck) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (condoCheck) {
    return "You qualify for a condo and car loan.";
  } else if (carCheck) {
    return "You qualify for a car loan.";
  }
}

let duplexLoanMsg = getLoanMessage(85000, 850);
let condoLoanMsg = getLoanMessage(65000, 690);
let carLoanMsg = getLoanMessage(45000, 660);
let noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
