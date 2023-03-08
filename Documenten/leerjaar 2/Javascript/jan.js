const getallen = parseInt(prompt("Hoeveel termen?", 0));
let n1 = 0, n2 = 1;
let count = 0;

if (getallen <= 0) {
  console.log("Please enter a positive number");
} else if (getallen === 1) {
  console.log(`Fibonacci sequence up to ${getallen}:`);
  console.log(n1);
} else {
  console.log("Fibonacci sequence:");
  while (count < getallen) {
    console.log(n1);
    const nth = n1 + n2;
    n1 = n2;
    n2 = nth;
    count++;
  }
}