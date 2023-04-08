
// 1. The program starts by calling the greet function with the takeOrder function passed as an argument
// 2. The greet function is executed and 
// 3. It first prints the string "Say Hello" to the console.
// 4. Then, it calls the takeOrder function and passes the giveFood function as an argument.
function greet(takeOrder) {
    console.log("Say Hello");
    takeOrder(giveFood);
  }
  

// 5. The takeOrder function is executed and initializes a boolean variable order with the value true. 
// 6. The function then prints the string "Taking Order...." to the console.
// 7. Next, it checks if order is true, it prints the string "Your order is true" to the console.
// 8. If not True, call function thankyou().
  function takeOrder(giveFood) {
    var order = true;
    console.log("Taking Order....");
    if (order) {
      console.log("Your order is", order);
      giveFood(takePayment);
    } else {
      thankyou();
    }
  }
  

// 9. The giveFood function is then called with the takePayment function passed as an argument.
// 10. The giveFood function is executed and prints the string "Giving Food..." to the console.
// 11.Then, it calls the takePayment function and passes the thankyou function as an argument.
  function giveFood(takePayment) {
    console.log("Giving Food...");
    takePayment(thankyou);
  }
  

// 12.The takePayment function is executed and initializes the payment variable with the string "success".
// 13.It then prints the string "Please pay for your food" to the console.
// 14.Since the payment variable is equal to "success", the thankyou function is called.
  function takePayment(thankyou) {
    var payment = "success";
    console.log("Please pay for your food");
    if (payment == "success") thankyou();
  }
  

// 15.The thankyou function is executed and prints the string "Thanks for coming, please come again" to the console.
The program execution is completed.
  function thankyou() {
    console.log("Thanks for coming, please come again");
  }
  

// 16.The program execution is completed.
  greet(takeOrder);
  
