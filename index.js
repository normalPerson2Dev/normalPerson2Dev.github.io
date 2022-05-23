// DOM Elements
const time = document.getElementById("time")
let greeting = document.getElementById("greet")
let userName = document.getElementById("name")
let userFocus = document.getElementById("focus")

// Show Time
function showTime(){
   let today = new Date();
    day = today.getDay();
    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();
   console.log(hour,min,sec)

   // Set AM or PM
const amPm = hour >= 12 ? "PM" : "AM"; 

// Option
const showAmPm = "true"

//12hr Format
hour = hour %12 || 12;

//Output Time on Screen
time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${showAmPm ? amPm : ''}` 

setTimeout(showTime,1000)
}

function addZero(n){
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//set Back Ground and Greeting
function setBgandGreeting(){
  let today = new Date();
  hour = today.getHours();

  if (hour < 12){
    document.body.style.backgroundImage = "url('../imgs/morning2.jpg')"
    greeting.textContent = 'Good Morning'
  } else if ( hour < 18){
    document.body.style.backgroundImage = "url('../imgs/noon.jpg')"
    greeting.textContent = 'Good Afternoon'
    document.body.style.color = '#c83349'
  } else {
    document.body.style.backgroundImage = "url('../imgs/night.jpg')"
    document.body.style.color = 'white';
    greeting.textContent = 'Good Evening'
  }
}

// Display Name Typed by User
function getName(){
  if(localStorage.getItem('userName') === null){
    userName.textContent = '[Enter Name]'

  }else {
    userName.textContent = localStorage.getItem('userName')
  }
}

function setName(e){
  if(e.type === 'keypress'){
    if(e.which == 13 || e.keycode == 13){
      localStorage.setItem('userName', e.target.textContent);
      userName.blur();
    }
  }else{
    localStorage.setItem('userName', e.target.textContent);
  }
}

// Display Focus Typed by User
function getFocus(){
  if(localStorage.getItem('userFocus') === null){
    userFocus.textContent = '{Enter Focus}'
  }else {
    userFocus.textContent = localStorage.getItem('userFocus')
  }
}

function setFocus(e){
  if (e.type === 'keypress'){
    if(e.which == 13|| e.keycode == 13 ){
      localStorage.setItem('userFocus', e.target.textContent);
      userFocus.blur();
    }
  } else{
    localStorage.setItem('userFocus', e.target.textContent)
  }
}

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
userFocus.addEventListener('keypress', setFocus);
userFocus.addEventListener('blur', setFocus);


getName();
getFocus();
showTime();
setBgandGreeting();