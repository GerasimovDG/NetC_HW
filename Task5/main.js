function OpenMenu() {
	 // document.getElementById("rrr").classList.toggle('active');
	var drop = document.getElementsByClassName("dropdown");
	drop[0].classList.toggle('dropdown_active');
}

function CloseMenu() {
	var drop = document.getElementsByClassName("dropdown");
	drop[0].classList.remove('dropdown_active');
}


// проверка нажатия -> изменение состояния active
let btn;
//this == window
this.onclick = function(event) {
  let target = event.target; // где был клик?
  // console.log(target.tagName);

  if (target.className == "button" && target.closest('.button-block') != null){
  	// если клик на кнопку - открыть/закрыть меню.
  	OpenMenu();
  	btn = target;
  }
  else if (target.tagName == 'LI'){
  	// если клик на элемент меню - именить текст кнопки
	// console.log(event.target.textContent);
	btn.innerHTML = event.target.textContent;
	CloseMenu();
  }
  else{
  	// если клик в другом месте - скрыть меню
  	CloseMenu();
  }
};

// добавляем еще один пункт в dropdown
let li = document.createElement('li');
li.className = "dropdown__item";
li.innerHTML = "<a href=\"#\">...</a>";

let drop = document.getElementsByClassName("dropdown");
drop[0].append(li);



/*------- HomeWork - геттер и сеттер -------*/
let strObj = {
  text: "",
  reverseText: "",

  get strText(){
    if(this.text == ""){
      return "0";
    }
    // split при делении создает массив. join соединяет массив в один сплошный текст
    this.reverseText = this.text.split('').reverse().join('');
    return `text: ${this.text}\nreverse text: ${this.reverseText}`;
  },

  set strText(text){
    let split = text.split(',');  
    let _text = split.join('');  

    this.text = _text;
  },
};

console.log(strObj.strText);
strObj.strText = "1,2,3,4,5";
console.log(strObj.strText);


/*------ Homework - try catch-------*/
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  this.calcAge = function(){
    let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
  }
}

//меняет цвет кнопки при
function drowButton(color){
  var trycatch = document.querySelectorAll('.trycatch');
  for (let i = 0; i < trycatch.length; i++){
    var btn = trycatch[i].querySelectorAll('.button')[0];
    btn.addEventListener("click", function(){
      if (this.style.backgroundColor == color){
        this.style.backgroundColor = "";
        return;
      }
      this.style.backgroundColor = color;
    })
  }
}

let tooltipElem = "";
function positionMessage(target){
  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();
    
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth)/2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
}

function showMessage(text){
  var trycatch = document.querySelectorAll('.trycatch');
    for (let i = 0; i < trycatch.length; i++){
      var btn2 = trycatch[i].querySelectorAll('.button')[0];
      btn2.onclick = function(){

        // если есть подсказка - удаляем ее
        if (tooltipElem) {
          tooltipElem.remove();
          tooltipElem = null;
          return;
        }
        let target = event.target;
      
            // ...создадим элемент для подсказки
            tooltipElem = document.createElement('div');
            tooltipElem.className = 'tooltip';
            tooltipElem.innerHTML = text;
            document.body.append(tooltipElem);
      
            // спозиционируем его сверху от аннотируемого элемента (top-center)
            positionMessage(target);
    }
  }
}


const name = "Дима";
const born = "new Date(1998, 4, 24)"; // введем текст вместо нормальной даты -> будет ошибка в дальнейших вычислениях
let text = "";

try{
  let Dima = new User(name, born);
  console.log(Dima.calcAge());
  text = "Все получилось!";
  b_color = "rgb(72, 214, 167)"
} catch(e){
  console.log(e);
  console.log("Ошибочка. Что-то не так с датой");
  text = "Ошибочка";
  b_color = "rgb(153, 56, 56)"
} finally {
  showMessage(text);
  drowButton(b_color);
}