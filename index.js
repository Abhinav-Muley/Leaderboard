const sidebarbtn = document.getElementById('menu-btn')
const dashboard = document.getElementById('dashboard');
const popup = document.getElementById('pr-popup');
const icon = document.getElementById('pr-icon');
const notiIcon = document.getElementById('noti-icon');
const notiPopup = document.getElementById('noti-popup');
const createTask = document.getElementById('sec-container')
const bgpopup = document.getElementById('bg-popup')
const taskbtn = document.getElementById('task-btn')
const closebtn = document.getElementById('close')
const delrow = document.getElementsByClassName('red')
const edit = document.getElementsByClassName('edit')
const editrow = document.getElementById('edit-row')
const pic = document.getElementById('pc')
const editbg = document.getElementById('editbg')
const cls = document.getElementById('cls')
const save = document.getElementById('save')


for(let i=0;i<delrow.length;i++){
  delrow[i].onclick = function(){
    let div = this.parentNode.parentNode.parentNode;
    div.style.display = "none";
  }
}

for(let i=0;i<edit.length;i++){
  edit[i].onclick = function(){
    let dd = document.getElementById('dd')
    let statusp = document.getElementById('statusp')
    let priorityp = document.getElementById('priorityp');
    const div = this.parentNode.parentNode.parentNode;
    save.addEventListener('click',()=>{
      
      div.firstChild.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling.innerText=statusp.value
      div.firstChild.nextSibling.nextSibling.nextSibling.nextElementSibling.innerText=dd.value
      div.firstChild.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText=priorityp.value
    })
    // console.log( div.firstChild.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling.nextElementSibling)
    // console.log(div);
    // console.log(editrow.firstChild.nextSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText)
    // div.firstChild.nextSibling.nextSibling.nextSibling.innerText="12/01/2024"
    editrow.classList.toggle('showedit')
    pic.src =div.firstElementChild.firstChild.nextSibling.firstChild.nextSibling.src
    editrow.firstChild.nextSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText=div.firstElementChild.firstChild.nextSibling.nextElementSibling.firstElementChild.innerText
    editbg.classList.toggle('showeditbg')
  }
}
editbg.addEventListener('click',()=>{
  editrow.classList.toggle('showedit')
  editbg.classList.toggle('showeditbg')
  
})
cls.addEventListener('click',()=>{
  editrow.classList.toggle('showedit')
  editbg.classList.toggle('showeditbg')

  
})
closebtn.addEventListener('click',()=>{
  createTask.classList.toggle('show-create-task')
  bgpopup.classList.toggle('show-bg')
  
})
taskbtn.addEventListener('click',()=>{
  bgpopup.classList.toggle('show-bg')
  createTask.classList.toggle('show-create-task')
})

bgpopup.addEventListener('click',()=>{
  bgpopup.classList.toggle('show-bg')
  
  createTask.classList.toggle('show-create-task')
})

sidebarbtn.addEventListener('click', () => {
    dashboard.classList.toggle('show-menu');
  })
notiIcon.addEventListener('click', () => {
    notiPopup.classList.toggle('show-noti-popup');
  })

icon.addEventListener('click',()=>{
  popup.classList.toggle('show-icon')
})
window.addEventListener('click',(event)=>{
  if(event.type==="click"){
    popup.display="none"
  }
})






let b = localStorage.getItem("myValue");
// alert("The Value Received is " + b);
document.getElementById('user-icon').src=b 