function printFibonacci() {
    const n = parseInt(prompt("Enter how many Fibonacci numbers to print:"));

    let a = 0, b = 1;

    console.log("Fibonacci sequence:");
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

printFibonacci();
