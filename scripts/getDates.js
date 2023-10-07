let d = new Date();

let newUpdate = document.getElementById('footer-sect');
newUpdate.querySelector('#currentYear').innerHTML = d.getFullYear();
newUpdate.querySelector('#currentDateAndTime').innerHTML = document.lastModified;

//const btn = document.getElementById('menu-btn')
//const nav = document.getElementById('menu')

//function navToggle() {
  //btn.classList.toggle('open')
  //nav.classList.toggle('hidden')
  //document.body.classList.toggle('no-scroll')
//}

//btn.addEventListener('click', navToggle);


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	classList.toggle('open');
	hamButton.classList.toggle('open');
});
