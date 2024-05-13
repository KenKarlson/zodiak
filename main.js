function play() {
  const button =document.querySelector(".button");
  let txt = document.querySelector(".txt");


function getZoo(year) {
  let zoo = '';
  let numberOfYear = Number(year)%12;
  switch (numberOfYear) {
    case 0:zoo='Обезьяна';break;
    case 1:zoo='Петух';break;
    case 2:zoo='Собака';break;
    case 3:zoo='Кабан';break;
    case 4:zoo='Мышь';break;
    case 5:zoo='Буйвол';break;
    case 6:zoo='Тигр';break;
    case 7:zoo='Кролик';break;
    case 8:zoo='Дракон';break;
    case 9:zoo='Змея';break;
    case 10:zoo='Лошадь';break;
    case 11:zoo='Коза';break;
    default:zoo='Знак года не определен';break;
  }
  return zoo;
}
function getColor(year, info) {
  info = 0;
  let color = '';
  let element = '';
  let numberOfYear = Number(year)%10;
  switch (numberOfYear) {
    case 0:color='#ffffff'; element ='металл'; break;
    case 1:color='#ffffff'; element ='металл'; break; 
    case 2:color='black'; element ='вода'; break; 
    case 3:color='black'; element ='вода'; break; 
    case 4:color='green'; element ='дерево'; break;
    case 5:color='green'; element ='дерево'; break;
    case 6:color='red'; element ='огонь'; break;
    case 7:color='red'; element ='огонь'; break;
    case 8:color='saddlebrown'; element ='земля'; break;
    case 9:color='saddlebrown'; element ='земля'; break;
  }
  if (info===0) {
    return color;
  }else {
    return color +'' + element;
  }
}


  button.addEventListener("click", (event) => {  
    event.preventDefault();
    let year = +prompt("Enter Year");
    //getZoo(year);
    txt.innerHTML = getZoo(year);
    txt.style.color = getColor(year);
  });
}

play();