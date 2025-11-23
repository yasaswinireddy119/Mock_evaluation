const c = counter();
for(i=0;i<c.length;i++){
    

}

//question_11

let myWallet = createWallet(checkBalance,addMoney);
myWallet.addMoney(500);
myWallet.addMoney(200);
//pushing the added amount to checkbalance
checkBalance.push(myWallet)
myWallet.checkBalance();  
//returns the total balance
console.log(checkBalance)