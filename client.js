// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let bonusPercentage = 0;
  let employeeWithStats = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }
  if (employee.reviewRating === 3) {
   bonusPercentage = .04;
  // return new object with bonus results
  } else if (employee.reviewRating === 4) {
    bonusPercentage = .06;
  }
  else if (employee.reviewRating === 5) {
    bonusPercentage = .10;
  }
  else if (employee.reviewRating === 2) {
    bonusPercentage = 0;
  }
  //console.log(bonusPercentage);
  employeeWithStats.bonusPercentage = bonusPercentage;
  employeeWithStats.totalBonus = bonusPercentage * Number(employee.annualSalary)
  employeeWithStats.totalCompensation = Number(employee.annualSalary) + employeeWithStats.totalBonus;

  return employeeWithStats;

  
}

console.log(calculateIndividualEmployeeBonus(employees[1]));



function loopThroughEmployees(array) {
  for (let i = 0; i < array.length; i++) {
    let employee = array[i]
  calculateIndividualEmployeeBonus(employee);
  }
}



loopThroughEmployees(employees);
/*
### Individual Bonus Rules

- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
and should receive an additional 5%.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
- No bonus can be above 13% or below 0% total.


## The Bonus Calculation Function

Write a declared function that takes in one **Employee** object (as an argument to the function), and `return` a new **object** with the following properties. _Note these properties are different than the ones you start with!_

* The `name` property should contain the employee's name.
* The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
* The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
* The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.
*/
