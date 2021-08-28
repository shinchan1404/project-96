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

function addRoom(){
   
    room_name=document.getElementById("room_name").value;
   
    
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       
      });});}
getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location.replace("index.html");
 }
function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwittr_page.html";
}
