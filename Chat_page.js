function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

var firebaseConfig = {
      apiKey: "AIzaSyA2_9-Mi26SA7xf_xg0FgsHU4bmzgVnlEo",
      authDomain: "kwitter-f050a.firebaseapp.com",
      databaseURL: "https://kwitter-f050a-default-rtdb.firebaseio.com",
      projectId: "kwitter-f050a",
      storageBucket: "kwitter-f050a.appspot.com",
      messagingSenderId: "150571471553",
      appId: "1:150571471553:web:e943c56a99b7e4d3f9fa40",
      measurementId: "G-JZZ0YE0R42"
    };
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addRoom()
{
      room_name = docment.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });


      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}