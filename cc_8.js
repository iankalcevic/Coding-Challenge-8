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

// Task 3 - Service Fee Calculation

const calculateServiceFee = (amount, serviceType) => {

    let feeRate = 0; //Initializing the rate to 0

    if (serviceType === "Premium") feeRate = 0.15; //15% for premium
    else if (serviceType === "Standard") feeRate = 0.10; //10% for standard
    else if (serviceType === "Basic") feeRate = 0.05; //5% for basic

    const fee = amount * feeRate; //Calculating the fee

    console.log('Service fee: $${fee.toFixed(2)}'); //Log service fee
};

calculateServiceFee(200, "Premium"); //Expected output: $30.00
calculateServiceFee(500, "Standard"); //Expected output: $50.00
