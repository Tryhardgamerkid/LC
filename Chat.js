function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "ChatRoom.html";
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();