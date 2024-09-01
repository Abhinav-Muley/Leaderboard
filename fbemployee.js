// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// import { getStorage, ref, uploadByte, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apikey: "FROM_YOUR_FIREBASE_CONFIG",
    authDomain: "FROM_YOUR_FIREBASE_CONFIG",
    databaseURL: "FROM_YOUR_FIREBASE_CONFIG",
    projectId: "FROM_YOUR_FIREBASE_CONFIG",
    storageBucket: "FROM_YOUR_FIREBASE_CONFIG",
    messagingSenderId: "FROM_YOUR_FIREBASE_CONFIG",
    appId: "FROM_YOUR_FIREBASE_CONFIG"
  };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app)
//   const auth = getAuth();
   firebase.initializeApp(firebaseConfig)
  let createEmployeebtn = document.getElementById('create-btn');
  let uploadImg = document.getElementById('upload-img');
  let empprpic = document.getElementById('upload');
  let fileitem;
  let filename;
  empprpic.addEventListener('change',(e)=>{
    fileitem=e.target.files[0]
    filename=fileitem.name
  })
  uploadImg.addEventListener('click',()=>{
    let storageRef = firebase.storage().ref("images/"+filename)
    uploadTask = storageRef.put(fileitem)

    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
    }),(error)=>{
console.log(error)
    },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log(url);
            if(url!=""){
                img.setAttribute("img",url)
                img.style.display="block"

            }
        })
    }
  })
// createEmployeebtn.addEventListener('click',(e)=>{
//   let FirstName = document.getElementById('fn').value;
//   let email = document.getElementById('empmailID').value;
//   let empmobileno = document.getElementById('empmobileno').value;
//   let empdes = document.getElementById('empdes').value;
//   let empadd = document.getElementById('empadd').value;
  
  

//   let password = "xScientist@"+FirstName
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//       // Signed up 
      
      
     
//       const user = userCredential.user;
//       set(ref(database,"users/"+user.uid),{
         
//           FirstName:FirstName,
//           empmailID:email,
//           empmobileno:empmobileno,
//           empdes:empdes,
//           empadd:empadd,
      
//         })
//         alert("user created")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });
  


// })
