const smartBank = {
    bankName: "Bank Misr",
    accounts: [
        { accountNumber: 1001, holderName: "Ibrahim Mostafa", balance: 12000, type: "current" },
        { accountNumber: 1002, holderName: "Ahmed Hossam", balance: 5000, type: "saving" },
        { accountNumber: 1003, holderName: "Mahmoud Hassan", balance: 3500, type: "saving" }
    ],

    addAccount: function (accNum, Holder, Balance, Type) {
        let account = {accountNumber: accNum, holderName: Holder, balance: Balance, type: Type}
        this.accounts.push(account);
        console.log("Account added successfully")
        console.table(account)
    },

    deleteAccount: function (accNum) {
        let account = this.accounts.find(acc => acc.accountNumber === accNum);
        if (account) {
            this.accounts = this.accounts.filter(acc => acc.accountNumber != account.accountNumber);
            console.log("Account deleted successfully")
        }
        else {
            console.log("Account number not found.");
        }
    },

    deposit: function(accNum, amount) {
        let account = this.accounts.find(acc => acc.accountNumber === accNum);
        if (account && amount > 0) {
            account.balance += amount;
            console.log(`Successfully deposited ${amount} into ${account.holderName}'s account.\n New balance: ${account.balance}`);
        } else {
            console.log("Deposit failed: Verify account number and amount.");
        }
    },

    withdraw: function(accNum, amount) {
        let account = this.accounts.find(acc => acc.accountNumber === accNum);
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;
                console.log(`Successfully withdrew ${amount} from ${account.holderName}'s account.\n Remaining balance: ${account.balance}`);
            } else {
                console.log(`Sorry ${account.holderName}, insufficient balance.`);
            }
        } else {
            console.log("Account number not found.");
        }
    },

    printAllAccounts: function() {
        console.log(`=== Account Report for ${this.bankName} ===`);
        for (let acc of this.accounts) {
            console.table(`Holder: ${acc.holderName} | Account: ${acc.accountNumber} | Balance: ${acc.balance} EGP`);
        }
    },
};

smartBank.printAllAccounts();
console.log("========================");
smartBank.addAccount(1004, "Mohamed Ahmed", 4000, "saving");
smartBank.printAllAccounts();
console.log("========================");
smartBank.deleteAccount(1002);
smartBank.printAllAccounts();
console.log("========================");
smartBank.deposit(1001, 2000);
smartBank.withdraw(1003, 4000);
smartBank.withdraw(1004, 1500)


