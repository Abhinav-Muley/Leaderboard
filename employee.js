const btns = document.getElementsByClassName('view-profile');
const newProfile = document.getElementById('new-employee');
const newForm = document.getElementById('add-new-employee')
const profile = document.getElementById('slide-up-center');
const clos = document.getElementById('c');
const sidebarbtn = document.getElementById('menu-btn')
const dashboard = document.getElementById('dashboard');
const closeform = document.getElementById('x')
const win = document.getElementById('tr-display')
const win1 = document.getElementById('tr-display1')
const uploadbtn = document.getElementById('upload-img')
const createbtn = document.getElementById('create-btn')
const popup = document.getElementById('pr-popup');
const icon = document.getElementById('pr-icon');
const notiIcon = document.getElementById('noti-icon');
const notiPopup = document.getElementById('noti-popup');
const addpr = document.getElementById('add-profile-pic')
const upload = document.getElementById('upload')
// const buttonList = Array.prototype.filter.call(
//   btns,
//   (testElement) => testElement.nodeName === "BUTTON",
// );
// console.log(buttonList);

// buttonList.forEach(element => {
//   element.addEventListener('click', () => {
//     profile.classList.toggle('show');
//     console.log('click');
//     win.classList.toggle('show-display')
//     // profile.style.visibility="visible";
//   })
// });

function viewProfile1(){
  console.log('click');
  profile.classList.toggle('show');
  win.classList.toggle('show-display')

}
notiIcon.addEventListener('click', () => {
  notiPopup.classList.toggle('show-noti-popup');
})

icon.addEventListener('click',()=>{
popup.classList.toggle('show-icon')
})

win.addEventListener('click',()=>{
  win.classList.toggle('show-display')
  profile.classList.toggle('show');
  

})

newProfile.addEventListener('click', () => {
  newForm.classList.toggle('show-new');
  win1.classList.toggle('show-display1')
  
  console.log('click');
  // profile.style.visibility="visible";
})
win1.addEventListener('click',()=>{
  newForm.classList.toggle('show-new');
  win1.classList.toggle('show-display1');
})
clos.addEventListener('click', () => {
  win.classList.toggle('show-display')
  
  console.log("vkm")
  profile.classList.toggle('show');
  // profile.style.display = "none";
})

sidebarbtn.addEventListener('click', () => {
  dashboard.classList.toggle('show-menu');
})
closeform.addEventListener('click', () => {
  newForm.classList.toggle('show-new');
  win1.classList.toggle('show-display1')
})



createbtn.addEventListener('click',(event)=>{
  
  event.preventDefault();
  
})

upload.addEventListener('change',(event)=>{

  // console.log(event.target.files[0])
  const pic =URL.createObjectURL(event.target.files[0]) ;
  addpr.innerHTML=`<img src="${pic}" alt="" width="100px" heigh="100px">`
})

function uploadimage(event){
  // const pic=document.getElementById('upload');
  // addpr.innerHTML=`<img src="${pic}" alt="">`
  console.log('event')
  // console.log(event)
}

//firebase
let b = localStorage.getItem("myValue");
// alert("The Value Received is " + b);
document.getElementById('user-icon').src=b 
















