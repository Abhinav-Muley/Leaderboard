import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { getDatabase, set,ref, onValue,child, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apikey: "FROM_YOUR_FIREBASE_CONFIG",
    authDomain: "FROM_YOUR_FIREBASE_CONFIG",
    databaseURL: "FROM_YOUR_FIREBASE_CONFIG",
    projectId: "FROM_YOUR_FIREBASE_CONFIG",
    storageBucket: "FROM_YOUR_FIREBASE_CONFIG",
    messagingSenderId: "FROM_YOUR_FIREBASE_CONFIG",
    appId: "FROM_YOUR_FIREBASE_CONFIG"
  };

const app = initializeApp(firebaseConfig)
let database = getDatabase(app)

let submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{
    let pd = document.getElementById('project-description').value
    let lead = document.getElementById('lead').value
    let start_date = document.getElementById('start_date').value
    let priority = document.getElementById('priority').value
    let employee = document.getElementById('employee').value
    let due_date = document.getElementById('due_date').value
    let project = document.getElementById('project').value
    let tbody = document.getElementById('tbody');

    tbody.innerHTML+=`
    <tr>
    <td class="user-info">
      <div class="user-img">
        <img
          src="https://randomuser.me/api/portraits/women/36.jpg"
          alt=""
        />
      </div>
      <div>
        <b> ${lead} </b>
        <small class="block">${employee}</small>
      </div>
    </td>
    <td>${start_date}</td>
    <td>${due_date}</td>
    <td>${project}</td>
    <td>${priority}</td>
    
    <td>
      <div class="flex gap-5 td-end">
        <button class="edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button class="red">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </td>
  </tr>
    `

    console.log("fsdg")
    let a=1;
    set(ref(database,'user/'),{
        sr:a,
        pd:pd,
        lead:lead,
        start_date:start_date,
        priority:priority,
        employee:employee,
        due_date:due_date,
        project:project,
        
    })
    
    alert("adsdjn")

    // const dbRef = ref(getDatabase());
get(child(dbRef, `user/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val().lead);
    a=snapshot.val().sr;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

    
})



// const dbRef = ref(getDatabase());
const auth = getAuth();
const userId = auth.currentUser;
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log("snapshot");
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// const starCountRef = ref(dbRef, 'users/' + userId );
// console.log("data");
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   // updateStarCount(postElement, data);
// });
get(child(database, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
