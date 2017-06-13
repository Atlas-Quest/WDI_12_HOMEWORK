var balance = 0; // single source of truth
var chBalance = 0;

var chequeDeposit = function(chAmount) {
  chBalance = chBalance + chAmount;
}
var chequeWithdraw = function(chAmount) {
  chBalance = chBalance - chAmount;
}
var deposit = function(amount) {
  balance = balance + amount;
}
var withdraw = function(amount) {
  balance = balance - amount;
}
//--------------------------------
// DOM API -- Messing with the DOM Functions
var balanceDiv = document.querySelector('.saDiv') // caching the div
var chBalDiv = document.querySelector('.chDiv')
var amountInput = document.querySelector('.amount') //caching the input box
var chAmInput = document.querySelector('.chAmount')
var depositButton = document.querySelector('button')
var withdrawButton = document.querySelector('.withdraw')
var chequeDep = document.querySelector('.chDeposit')
var chequeWith = document.querySelector('.chWithdraw')
//show the initial balance
balanceDiv.textContent = balance;
// we don't want to deposit yet but when??
// when button is clicked
depositButton.addEventListener('click',function() {
  deposit(Number(amountInput.value));
  //show the updated the balance div
  balanceDiv.textContent = balance;
  //set the input back to an empty string
  document.querySelector('.amount').value = "";
});
// withdraw button needs to be added at some point and a function to withdraw funds needs to be created...
withdrawButton.addEventListener('click',function() {
  withdraw(Number(amountInput.value));
  balanceDiv.textContent = balance;
  document.querySelector('.amount').value = "";
})

//cheque account needs to be added - Start with the starting balance: chBalDiv.textContent = balance;

chBalDiv.textContent = chBalance;

chequeDep.addEventListener('click',function(){
  chequeDeposit(Number(chAmInput.value));
  chBalDiv.textContent = chBalance;
  document.querySelector('.chAmount').value = "";

})

chequeWith.addEventListener('click',function(){
  chequeWithdraw(Number(chAmInput.value));
  chBalDiv.textContent = chBalance;
  document.querySelector('.chAmount').value = "";
})
