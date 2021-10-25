const firebaseConfig = {
    apiKey: "AIzaSyDCje5JRq2XFbPkENmHT-RnxGG3TvUwIkU",
    authDomain: "kwitter-861a3.firebaseapp.com",
    databaseURL: "https://kwitter-861a3-default-rtdb.firebaseio.com",
    projectId: "kwitter-861a3",
    storageBucket: "kwitter-861a3.appspot.com",
    messagingSenderId: "789567656698",
    appId: "1:789567656698:web:2ac7bd2956f729a3672f43"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
 addRoom() 
 {
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html"
 }

 function getData() 
 {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

});});}
getData


function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwitter_page.html"
}