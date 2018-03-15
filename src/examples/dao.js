//Blockchain simulation
var contractBalance = 200;
var msg;

function sendMoney(user, amount) {
  document.write("sending money to: "+ user+ "." + " Amount: "+amount+"<br/>");
  contractBalance -= amount;
FALLBACK()
}

//contract Bank
var userBalances = [];

function getBalance() {
  return contractBalance;
}

function addToBalance() {

  if (userBalances[msg.sender] == undefined) {
   userBalances[msg.sender]=0;
  }

  userBalances[msg.sender] = userBalances[msg.sender] + msg.value;
  contractBalance += msg.value;
}

function getUserBalance(x) {
 return userBalances[x];
}

function withdrawBalance() {
   var amountToWithdraw = userBalances[msg.sender];
   sendMoney(msg.sender,amountToWithdraw);
   userBalances[msg.sender] = 0;
}

//Contract BankAttacker
var is_attack=true;

function FALLBACK() {
 if (is_attack == true) {
   is_attack = false;
   withdrawBalance();
 }
}

//Execution simulation
document.write("Contract Balance: "+contractBalance+"<br/>");
msg = {
  "sender":"david",
  "value":75
}

addToBalance();

document.write("Your balance in contract Bank is " + getUserBalance("david")+"<br/>");

msg = {
 "sender":"david"
}

withdrawBalance();

document.write("Your balance in contract Bank is " + getUserBalance("david")+"<br/>");
