// Task 1 - Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) {

    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Calculating net salary

    console.log('Net salary: $${netSalary.toFixed(2)}'); //Log net salary
}; 

calculateSalary(5000, 500, 0.1); //Expected output: $5000.00
calculateSalary(7000, 1000, 0.15); //Expected output: $6950.00

// Task 2 - Product Price After Discount

const calculateDiscount = function(price, discountRate) {

    const finalPrice = price - (price * discountRate); //Calculating the final price

    console.log('Final Price: $${finalPrice.toFixed(2)}'); //Logging final price
};

calculateDiscount(100, 0.2); //Final price: $80.00
calculateDiscount(250, 0.15); //Final price: $212.50
