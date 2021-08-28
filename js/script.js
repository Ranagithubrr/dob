var menuBar = document.querySelector('#bar-icon');
var menuBarIcon = document.querySelector('#bar-icon i');
var closeBar = document.querySelector('#close-icon');
var menuLeft = document.querySelector('nav .menus');

menuBar.addEventListener('click',barClicked);

function barClicked(){
    menuLeft.classList.add('lefted');
    menuBarIcon.classList.add('hiddenclass');
    menuBarIcon.classList.remove('bar-icon');
}
closeBar.addEventListener('click',closeClicked);

function closeClicked(){
    menuLeft.classList.remove('lefted');
    menuBarIcon.classList.remove('hiddenclass');
    menuBarIcon.classList.add('bar-icon');
}