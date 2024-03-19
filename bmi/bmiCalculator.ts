// set types interface

// parse arguments


//
const calculateBmi = (heightCm: number, weightKg: number): void => {
  // check if 0 or negative numbers  

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal(Healthy Weight)");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
};

console.log(calculateBmi(180, 85));


// try/catch run the program
