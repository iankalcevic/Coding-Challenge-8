// Task 1 - Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) {

    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Calculating net salary

    console.log('Net salary: $${netSalary.toFixed(2)}'); //Log net salary
}; 

calculateSalary(5000, 500, 0.1); //Expected output: $5000.00
calculateSalary(7000, 1000, 0.15); //Expected output: $6950.00
