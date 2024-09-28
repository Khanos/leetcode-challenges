/**
 * @param {number[][]} accounts
 * @return {number}
 */
// const maximumWealth = function(accounts) {
//   let largestWealth = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     const account = accounts[i];
//     let currentWealth = 0;
//     for (let j = 0; j < account.length; j++) {
//       currentWealth += account[j]; 
//     }
//     if(currentWealth > largestWealth) {
//       largestWealth = currentWealth;
//     }
//   }
//   return largestWealth;
//  };

// optimized version
const maximumWealth = function(accounts) {
  return Math.max(...accounts.map(account => account.reduce((acc, curr) => acc + curr, 0)));
}

export default maximumWealth;
