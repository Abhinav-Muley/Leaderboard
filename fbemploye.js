// import ""
  // Your web app's Firebase configuration
// const a= require('./fblogin')
  const firebaseConfig = {
    apiKey: "AIzaSyD9tq9rBWQcl8djhTX1vaCnw3UKAKLN2ZM",
    authDomain: "leaderboard-c4797.firebaseapp.com",
    databaseURL: "https://leaderboard-c4797-default-rtdb.firebaseio.com",
    projectId: "leaderboard-c4797",
    storageBucket: "leaderboard-c4797.appspot.com",
    messagingSenderId: "207200592356",
    appId: "1:207200592356:web:4ac617c8267ff77edca7f1"
  };  


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig) 
  
  let profileImg = document.getElementById('upload')
  let uploadImg = document.getElementById('upload-img')
  let createbt = document.getElementById('create-btn')
  console.log(createbt)

  let file;
  // profileImg.addEventListener('change',(e)=>{
  //   file = e.target.files[0]
  //   console.log("dddd");
  // })
  let storageRef = firebase.storage().ref('photos/')
  let fileUpload = document.getElementById("cameraInput")
  let firstFile={};

  profileImg.addEventListener('change', function(evt) {
      firstFile = evt.target.files[0] // upload the first file only
      // let uploadTask = storageRef.put(firstFile)
  })

  createbt.addEventListener('click',(e)=>{
    let email = document.getElementById('empmailID').value;
    let password = "Aasd@1234"


    let FirstName = document.getElementById('fn').value;
 
    let empmobileno = document.getElementById('empmobileno').value;
    let empdes = document.getElementById('empdes').value;
    let empadd = document.getElementById('empadd').value;
    
    


    // alert("fdscvjb")
    firebase.auth().createUserWithEmailAndPassword(email, password).then(auth=>{
      firebase.storage().ref('user/'+email +"/profile.jpg").put(firstFile).then(function(){
        alert("uploaded")
      }).catch(error  =>{
        console.log(error.message);
      })
      alert("sgnsd")
      firebase.database().ref('users/'+ auth.user.uid).set({
        FirstName:FirstName,
        email:email,
        empmobileno:empmobileno,
        empdes:empdes,
        empadd:empadd,
      })


      console.log("database")

      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          firebase.storage().ref('user/'+email+'/profile.jpg').getDownloadURL().then(imgurl=>{
            console.log(imgurl);
          })
        }else{
          // show signout page 
          alert("logged out")
        }
      })
      
      
    })
  // .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //   // ...
  //   // console.log(user.uid)
  // })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
  });
})
  
// if user login or sign out state change 
// firebase.auth().onAuthStateChanged(user=>{
//   if(user){
//     firebase.storage().ref('user/'+user.uid+'/profile.jpg').getDownloadURL().then(imgurl=>{
//       console.log(imgurl);
//     })
//   }else{
//     // show signout page 
    
//   }
// })





document.getElementById('log-out').addEventListener('click',()=>{

  firebase.auth().signOut().then(()=>{
    // window.location.replace("index.html")

  }).catch((error)=>{
    console.log(error.message);
  })
  // firebase.auth().signOut()
  
})

function getAllData(){
  // firebase.storage().ref('user/'+user.uid+'/profile.jpg').getDownloadURL().then(imgurl=>{
  //   console.log(imgurl);
  // })
  // const deRef=ref(database)
  firebase.database().ref("users").once('value',(AllRecords)=>{
    
    AllRecords.forEach((CurrentRecord)=>{
      let name=CurrentRecord.val().FirstName
      let email=CurrentRecord.val().email
      let designation=CurrentRecord.val().empdes
      let mobile=CurrentRecord.val().empmobileno

      

      allData(name,email,designation,mobile)
    })

    
  
    // snapshot.forEach(childSnapshot=>{
    //   students.push(childSnapshot.val())
    // })
    // console.log(students)
  }).catch(error=>{
    console.log(error);
  })
}

let addemployeesection = document.getElementById('employee-section')
function allData(name, email, designation, mobile){
   
  
  

  let child = document.createElement('div')
    firebase.storage().ref('user/'+email+'/profile.jpg').getDownloadURL().then(imgurl=>{
      
      
      child.className="employee"
      child.innerHTML= `
      <div class="employee-image">
        <img class="emp-profile" src=${imgurl} alt="" />
    
        <h3>${name}</h3>
        <p>${designation}</p>
        
        </div>
        <button class="view-profile">View Profile</button>
        `
       
        const win = document.getElementById('tr-display')
        const btns = document.getElementsByClassName('view-profile');
        const profile = document.getElementById('slide-up-center');

        const buttonList = Array.prototype.filter.call(
        btns,
        (testElement) => testElement.nodeName === "BUTTON",
        );
        console.log(buttonList);
        buttonList.forEach(element => {
        element.addEventListener('click', () => {
        profile.classList.toggle('show');
        console.log('click');
        win.classList.toggle('show-display')
        // profile.style.visibility="visible";
        })
        });
    })
  

  addemployeesection.prepend(child)
  // let st=firebase.getStorage()


  // st.getDownloadURL(ref(st,'user/'+email+'/profile.jpg')).then((url)=>{
  //   console.log(url);
    
  // }).catch((error)=>{
  //   console.log(error.message);
  // })
  
  
  
}

window.onload=getAllData

// let email = "abhinavmule13@gmail.com"
// firebase.auth().getAuth()
//   .getUserByEmail(email)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });
// let uid ="NlEoQcQ12mQBgknAhowyJMVOxE82"
// console.log(firebase.storage().ref("/user/NlEoQcQ12mQBgknAhowyJMVOxE82/profile.jpg")).then((result)=>{
//   console.log(result);
// });

// const storage = firebase.storage();
//       storage.ref('user/'+uid+'/profile.jpg').getDownloadURL().then(imgurl=>{
//               console.log(imgurl)
//           })        
          
          // getDownloadURL(ref(storage,'user/'+user.uid+'/profile.jpg')).then((url)=>{
          //     console.log(url);
          //     //   location.replace("dashboard.html")
          //     localStorage.setItem("myValue", url);

          //     window.location.href = "dashboard.html" ;
          //   })

// storage.ref().child(`user/`+uid).listAll().then((result)=>{
//   result.forEach((img)=>{
//     console.log(img);
//   })
// })

document.getElementById('log-out').addEventListener('click',()=>{
  firebase.auth().
signOut().then(() => {
  // Sign-out successful.
  window.location.replace('/')
  alert("user logged out")
}).catch((error) => {
  console.log(error.message);
  // An error happened.
});
})