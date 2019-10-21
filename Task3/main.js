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

  if (target.className == "button"){
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
