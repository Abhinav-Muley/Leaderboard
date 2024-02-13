import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getStorage, ref,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  let signIn = document.getElementById("sign-in")
  signIn.addEventListener('click',()=>{
      let email = document.getElementById("mail").value
      let password = document.getElementById("password").value
console.log("click");
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    console.log("click");
    const user = userCredential.user;
    // ...
    
    // location.replace("dashboard.html")
    console.log("click");
    
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("click");
    alert(errorMessage)
        });
  })

//  auth.currentUser
  onAuthStateChanged(auth, (user) => {
    console.log('onAuthStateChanged');
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      console.log("projectId");
      const storage = getStorage();
      // storage.ref('user/'+user.uid+'/profile.jpg').getDownloadURL().then(imgurl=>{
          //     console.log(imgurl)
          // })
          
          getDownloadURL(ref(storage,'user/'+user.email+'/profile.jpg')).then((url)=>{
              console.log(url);
              //   location.replace("dashboard.html")
              localStorage.setItem("myValue", url);

              window.location.href = "dashboard.html" ;
            })
    //   // ...
} else {
      // User is signed out
      // window.location.href = "/" ;
      // ...
    }
  });