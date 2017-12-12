// $(document).ready(function () {
    
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC5XRhB9LJx5eLpZFz08oR-ny9YMiZXeCg",
    authDomain: "stef-s-project.firebaseapp.com",
    databaseURL: "https://stef-s-project.firebaseio.com",
    projectId: "stef-s-project",
    storageBucket: "stef-s-project.appspot.com",
    messagingSenderId: "690006513895"
  };
  firebase.initializeApp(config);

$("#submitInfo Btn").on("click", function () {
event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var trainTime = moment($("#tain-time-input").val().trim(), "HH:mm").format("x");
    var frequency = moment($("#frequency-input").val().trim(), "mm").format("x");

    var newTrain={

        name: trainName,
        trainDestination: destination,
        trainFrequency:frequency,
        nextArrival: arrival,
        minutesAway: minutes
        
    }

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.trainDestinati);
    console.log(newTrain.trainFrequency);
    console.log(newTrain.nextArrival);
    console.log(newTrain.minutesAway);
  
    // Alert
    alert("Employee successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#tain-time-input").val("");
    $("#frequency-input").val("");
  });
  

