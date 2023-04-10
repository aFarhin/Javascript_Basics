
// This code defines a BankAccount class that has a private property #accountNumber and two methods, getMaskedAccountNumber() and #getAccountNumber().

class BankAccount {
     #accountNumber;
     constructor(name, phone, aadhaar, accountNumber) {
      this.name = name;
      this.phone = phone;
       this.aadhaar = aadhaar;
       this.#accountNumber = accountNumber; 
     }

/*  class BankAccount {: starts the class definition for BankAccount.
#accountNumber;: declares a private property called accountNumber.
constructor(name, phone, aadhaar, accountNumber): defines a constructor that takes in name, phone, aadhaar, and accountNumber as parameters, 
and initializes the instance properties name, phone, aadhaar, and the private property accountNumber.
this.#accountNumber = accountNumber;: assigns the value of the accountNumber parameter to the private property #accountNumber.
getMaskedAccountNumber(): declares a public method called getMaskedAccountNumber.
"XXXX" + this.#accountNumber.slice(4, 8) + "XXXX" + this.#accountNumber.slice(-4): returns a masked version of the account number with only
the first 4 and last 4 digits visible.
*/ 
  
    getMaskedAccountNumber() {
    return (
      "XXXX" +
      this.#accountNumber.slice(4, 8) +
      "XXXX" +
      this.#accountNumber.slice(-4)
    );
  }

  
  
/*  #getAccountNumber(): declares a private method called #getAccountNumber.
return this.#accountNumber;: returns the private property #accountNumber.
*/
    #getAccountNumber() {
    return this.#accountNumber;
  }
}



// var farhinAccount = new BankAccount(...): creates a new instance of the BankAccount class with the provided arguments and assigns it to the farhinAccount variable.
var farhinAccount = new BankAccount(
  "Farhin",
  "9299192192",
  "1234 5678 1234",
  "1234567890123"
);

console.log("My Account>>>> ", farhinAccount);



/* function sendSMS() { ... }: defines a function sendSMS that logs a message to the console.
${aviAccount.getMaskedAccountNumber()}: calls the getMaskedAccountNumber() method on aviAccount to get the masked account number and includes it in the log message.
*/
function sendSMS() {
  console.log(
    `From Your Account - ${farhinAccount.getMaskedAccountNumber()} 100/- has been debitted`
  );
}
sendSMS();



/* console.log(farhinAccount.#accountNumber);: attempts to directly access the private property #accountNumber using the private field access syntax,
but results in a syntax error because private members cannot be accessed from outside the class.

console.log(farhinAccount.#getAccountNumber());: attempts to directly call the private method #getAccountNumber() using the private method access syntax, 
After the line console.log(farhinAccount.#getAccountNumber());, an error will be thrown because #getAccountNumber() 
is a private method that can only be accessed from within the BankAccount class.

Attempting to access private methods or properties from outside the class, like in this case, will result in a syntax error. Private methods and 
properties are meant to be accessed only from within the class,
providing better encapsulation and preventing external code from modifying or accessing private data.
*/

//console.log(farhinAccount.#accountNumber);
//console.log(farhinAccount.#getAccountNumber());







