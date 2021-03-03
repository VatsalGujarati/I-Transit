// import firebase from "firebase/app";
// import "firebase/auth";

/*var firebaseConfig = {
    apiKey: "AIzaSyCjxG9xWuFHtCqaWcbRaWOta1_Gqg15wQc",
    authDomain: "itransitweb-354c2.firebaseapp.com",
    projectId: "itransitweb-354c2",
    storageBucket: "itransitweb-354c2.appspot.com",
    messagingSenderId: "645638835611",
    appId: "1:645638835611:web:30fd53809ebdbd0673253e",
    measurementId: "G-34NP527L5X"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyCuNM0amIw9exx6KzsGpGYSW-JfXQSkB_o",
  authDomain: "i-transit-e35c6.firebaseapp.com",
  databaseURL: "https://i-transit-e35c6.firebaseio.com",
  projectId: "i-transit-e35c6",
  storageBucket: "i-transit-e35c6.appspot.com",
  messagingSenderId: "432284344425",
  appId: "1:432284344425:web:3141faf85a556e0131c2f8",
  measurementId: "G-8L45ZEKZX8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();            
    
const auth = firebase.auth();        
        
// function signUp(){
            
//     var email = document.getElementById("LoginEmail");
//     var password = document.getElementById("Loginpassword");
    
//     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//     promise.catch(e => alert(e.message));
    
//     alert("Signed Up");
// }

function signIn(){
    
    var email = document.getElementById("LoginEmail");
    var password = document.getElementById("Loginpassword");
    
    auth.signInWithEmailAndPassword(email.value, password.value).then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        window.location = "./home.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("error: " + errorMessage);
      });    
}

function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    window.location = "./index.html";
    
}

// auth.onAuthStateChanged(function(user){
    
//     if(user){
        
//         var email = user.email;
//         alert("Active User " + email);
        
//     }else{
        
//         alert("No Active User");
        
//         //no user is signed in
//     }   
// });        
 //------------------------MONITOR--------------------------------       
 