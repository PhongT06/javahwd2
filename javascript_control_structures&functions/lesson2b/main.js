// Task 1

let currentBalance = 1000;

function deposit(currentBalance, amount) {
    return currentBalance + amount;
}


// Task 2

function withdraw(currentBalance, amount) {
    if (amount <= currentBalance) {
        return currentBalance - amount;
    } else {
        return "Insufficient balance";
    }
}


// Task 3

function checkBalance(currentBalance) {
    return currentBalance;
}

currentBalance = deposit(currentBalance, 700);
console.log("Balance after deposit:", checkBalance(currentBalance));

currentBalance = withdraw(currentBalance, 1200);
console.log("Balance after withdrawal:", checkBalance(currentBalance));

console.log(withdraw(currentBalance, 2000));