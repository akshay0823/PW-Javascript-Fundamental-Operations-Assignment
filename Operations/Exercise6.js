let weight = 45,
  height = 1.73;

let calculateBMI = (weight, height) => {
  let BMI = weight / (height * height);
  return Math.round(BMI);
};

console.log(calculateBMI(weight, height));
