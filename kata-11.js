const calculateChange = function(total, cash) {
  // total change to be given
  let change = cash - total;
  // denominations
  const denominations = {};

  if (change >= 2000) {
    denominations["twentyDollar"] = Math.floor(change / 2000);
    change = change % 2000;
  }
  if (change >= 1000) {
    denominations["tenDollar"] = Math.floor(change / 1000);
    change = change % 1000;
  }
  if (change >= 500) {
    denominations["fiveDollar"] = Math.floor(change / 500);
    change = change % 500;
  }
  if (change >= 200) {
    denominations["twoDollar"] = Math.floor(change / 200);
    change = change % 200;
  }
  if (change >= 100) {
    denominations["oneDollar"] = Math.floor(change / 100);
    change = change % 100;
  }
  if (change >= 25) {
    denominations["Quarter"] = Math.floor(change / 25);
    change = change % 25;
  }
  if (change >= 10) {
    denominations["Dime"] = Math.floor(change / 10);
    change = change % 10;
  }
  if (change >= 5) {
    denominations["Nickel"] = Math.floor(change / 5);
    change = change % 5;
  }
  if (change >= 1) {
    denominations["Penny"] = Math.floor(change / 1);
    change = change % 1;
  }

  return denominations;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));