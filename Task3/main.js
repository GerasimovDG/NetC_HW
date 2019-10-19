function OpenMenu() {
	 // document.getElementById("rrr").classList.toggle('active');
	var drop = document.getElementsByClassName("dropdown");
	drop[0].classList.toggle('dropdown_active');

	// for(var i=0; i < drop.length; i++) { 
	// 	drop[i].classList.toggle('active');
	// }
	// console.log(drop[0]);
}

function CloseMenu() {
	var drop = document.getElementsByClassName("dropdown");
	drop[0].classList.remove('dropdown_active');
}


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
