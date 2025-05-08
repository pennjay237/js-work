let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  const sumSalaries = (salaries) => {
    let sum = 0;
  
    for (let name in salaries) {
      switch (name) {
        case "John":
          sum += salaries[name];
          break;
        case "Ann":
          sum += salaries[name];
          break;
        case "Pete":
          sum += salaries[name];
          break;
        default:
          break;
      }
    }
  
    return sum;
  };
  
  console.log(sumSalaries(salaries)); // Output: 390
  