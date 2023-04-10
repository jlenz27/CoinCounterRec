function counter(amount){
     if(isNaN(amount))
     {
       return;
     }
     if(amount >= .25){
         console.log(`Quaters: ${Math.floor(amount/.25)}`);
         return counter(Math.round((amount % .25) * 100) / 100);
     }
     if(amount >= .10){
         console.log(`Dimes: ${Math.floor(amount/.10)}`);
         return counter(Math.round((amount % .10) * 100) / 100);
     }
     if(amount >= .05){
         console.log(`Nickels: ${Math.floor(amount/.05)}`);
         return counter(Math.round((amount % .05) * 100) / 100);
     }
     if(amount < .05){
         console.log(`Pennies: ${Math.round(amount/.01)}`);
        return;
     }

 }  
counter(4.99);




//-------------------------------------Recursive Function 1

// let quarters = 0;
// let dimes = 0;
// let nickels = 0;
// let pennies = 0;

// const countCoins = (amount) => {
    
//     if(isNaN(amount)){
//         return;
//     } else if (amount >=.25) {
//       quarters++;
//       return countCoins(amount - .25);
//     } else if (amount >=.10) {
//       dimes++;
//       return countCoins(amount - .10);
//     } else if (amount >=.05) {
//       nickels++;
//       return countCoins(amount - .05);
//     } else if (amount >=.01) {
//       pennies++;
//       return countCoins(amount - .01);
//     } else {
//     //   return (amount);
//       return `Quarters: ${quarters}, Dimes: ${dimes}, Nickels :${nickels}, Pennies: ${pennies}`;
//     }
    
//   }

  
// console.log(countCoins(4.99));



//------------- ------------Not Recursive function just a function

// function calculateChange(amount) {
//  const quarters = Math.floor(amount /.25);
//  amount -= quarters * .25;
//  const dimes = Math.floor(amount /.10);
//  amount -= dimes * .10;
//  const nickels = Math.floor(amount /.05);
//  amount -= nickels * .05;
//  const pennies = Math.floor(amount /.01);

//  return `Quarters: ${quarters}, Dimes: ${dimes}, Nickels :${nickels}, Pennies: ${pennies}`;
// }

