const sidebarbtn = document.getElementById('menu-btn')
const dashboard = document.getElementById('dashboard');
const popup = document.getElementById('pr-popup');
const icon = document.getElementById('pr-icon');
const notiIcon = document.getElementById('noti-icon');
const notiPopup = document.getElementById('noti-popup');
sidebarbtn.addEventListener('click', () => {
    dashboard.classList.toggle('show-menu');
  })
notiIcon.addEventListener('click', () => {
    notiPopup.classList.toggle('show-noti-popup');
  })

icon.addEventListener('click',()=>{
  popup.classList.toggle('show-icon')
})

let b = localStorage.getItem("myValue");
// alert("The Value Received is " + b);
document.getElementById('user-icon').src=b 