for (let i = 1; i <= 5; i++) {
    let spaces = " ".repeat(5 - i);
  
    let hashes = "#".repeat(i * 2 - 1);
  
    console.log(spaces + hashes);
  }
  