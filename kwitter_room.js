
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBmP7pZ_7s8CY3KzuJowq9rvOANL9sbZd0",
      authDomain: "practicek-50c95.firebaseapp.com",
      databaseURL: "https://practicek-50c95-default-rtdb.firebaseio.com",
      projectId: "practicek-50c95",
      storageBucket: "practicek-50c95.appspot.com",
      messagingSenderId: "171057067903",
      appId: "1:171057067903:web:79afd7a8e26b4bacf78c4a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<dive class='room_name id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
