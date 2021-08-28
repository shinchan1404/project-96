var firebaseConfig = {
    apiKey: "AIzaSyCzfdT0nCl-FECiY6ES4zg-MJs-suTbo5M",
    authDomain: "death-3eacc.firebaseapp.com",
    databaseURL: "https://death-3eacc-default-rtdb.firebaseio.com",
    projectId: "death-3eacc",
    storageBucket: "death-3eacc.appspot.com",
    messagingSenderId: "413883495529",
    appId: "1:413883495529:web:184ea5f56ca76aaa099ef8",
    measurementId: "G-ZGYL425FRV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser (){
    user_name=document.getElementById("user_name").value;
   
    
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}

