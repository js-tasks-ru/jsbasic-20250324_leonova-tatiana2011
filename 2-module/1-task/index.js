function sumSalary(salaries) {
  let value = 0;

  for (let key in salaries) {

    if ((!Number.isNaN(salaries[key])) && (Number.isFinite(salaries[key]))) {
      value = value + salaries[key];
    } 
   
  }
   return(value);
  // ваш код...
}
