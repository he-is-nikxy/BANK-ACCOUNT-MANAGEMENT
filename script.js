

// Task: Implement a bank account management system using JavaScript objects and functions.
// Instructions:
// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.
// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.

// Please submit the github link after completing the problem.









function bankAccount(accountNumber, name, type, balance) {

    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;

    this.deposit = function(amount) {
        amount = amount + this.balance;
        this.balance = amount;
        console.log(amount);
    }

    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log(amount +" is withdrawn and the current balance is " + this.balance);
        } else if (amount > this.balance) {
            
            console.log(amount + " can't be withdrawn because balance is insufficient");
        }

    }

    this.checkBalance = function() {
        return this.balance;
    }

    this.isActive = function() {
        if (this.type == "Active") {
            return true;
        } else if (this.type == "Not Active") {
            return false;
        }
    }

}


let BankAccount1 = new bankAccount(12345, "Nik", "Active", 1000);

console.log(BankAccount1);
BankAccount1.deposit(5000);
BankAccount1.withdraw(2000);
console.log(BankAccount1.checkBalance());
console.log(BankAccount1.isActive());



let BankAccount2 = new bankAccount(12345000, "Divya", "Active", 10000);

console.log(BankAccount2);
BankAccount2.deposit(2000);
BankAccount2.withdraw(5000);
console.log(BankAccount2.checkBalance());
console.log(BankAccount2.isActive());



let BankAccount3 = new bankAccount(1234500000, "Broodie", "Not Active", 0);

console.log(BankAccount3);
BankAccount3.deposit(5000);
BankAccount3.withdraw(5000);
console.log(BankAccount3.checkBalance());
console.log(BankAccount3.isActive());


let arr = [BankAccount1, BankAccount2, BankAccount3];

function getTotalBalance(arr){
    let sum=0;
    for(let ele of arr){
        if(ele.isActive()==true){
            sum+=ele.checkBalance();
        }
    }
    return sum;
}

console.log(getTotalBalance(arr));










