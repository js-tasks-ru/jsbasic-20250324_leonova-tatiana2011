function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let cells = table.rows[i].cells;
 
    //Если в ячейке "Status" есть атрибут data-available, и его значение равно true или false, то добавлять классы available или unavailable //соответственно. Если у ячейки "Status" нет атрибута data-available, то проставлять атрибут hidden.
    let statusCell = table.rows[i].cells[3];
    if (statusCell.hasAttribute('data-available')) {
      if (statusCell.dataset.available === 'true') {
          table.rows[i].classList.add('available');
      } else if (statusCell.dataset.available === 'false') {
          table.rows[i].classList.add('unavailable');
      } 

    } else {
      table.rows[i].setAttribute('hidden', 'true');
    }
      
    //Если в ячейке "Gender" значение m, то добавлять класс male, если f — класс female.
    let genderCell = table.rows[i].cells[2];
    if (genderCell.textContent === 'm') {
      table.rows[i].classList.add('male');
    } else if (genderCell.textContent === 'f') {
      table.rows[i].classList.add('female');
    }
        
    //Если в ячейке "Age" значение меньше 18, то добавлять стиль text-decoration: line-through.
    let ageCell = table.rows[i].cells[1];
    let age = parseInt(ageCell.textContent, 10);
    if (age < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }      
  }
  // ваш код...
}