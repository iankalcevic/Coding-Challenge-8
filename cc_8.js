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

// Task 4 - Car Rental Cost Calculation

function calcualteRentalCost(days, carType, insurance = false) {

    let dailyRate = 0 //Initialize the daily rate to 0

    if (carType === "Economy") dailyRate = 40; // $40 a day for economy
    else if (carType === "Standard") dailyRate = 60; // $60 a day for standard
    else if (carType === "Luxury") dailyRate = 100; //$100 a day for luxury

    let totalCost = days * dailyRate; //Calculating total cost

    if (insurance) {
        totalCost += days * 20;
    }; //Add insurance cost

    console.log('Total rental cost: $${totalCost}'); //Log rental car cost
};

calcualteRentalCost(3, "Economy", true); //Expected output: $180.00
calcualteRentalCost(5, "Luxury", false); //Expected output: $500.00

// Task 5 - Loan Payment Calculation

function calculateLoanPayment(principal, rate, time) {

    const totalPayment = principal + (principal * rate * time); //Calculate total payment

    console.log('Total payment: $${totalPayment.toFixed(2)}'); //Log total payment 

};

calculateLoanPayment(1000, 0.05, 2); //Expected output $1100.00
calculateLoanPayment(5000, 0.07, 3); //Expected output $6050.00

// Task 6 - Identifying Large Transactions

let transactions = [200, 1500, 3200, 800, 2500]; //Set an array of transactions

function filterLargeTransactions(transactions, filterFunction) {

    const result = transactions.filter(filterFunction); //Filter to get large transactions

    console.log("Updated array:", result); //Log filtered transactions
};

filterLargeTransactions(transactions, amount => amount > 1000); //Expected output: 1500, 3200, 2500
