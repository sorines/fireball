
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwmF-_w6zgCgipIlP3m3JRJctm4q1Zpr8",
    authDomain: "fire-train-07.firebaseapp.com",
    databaseURL: "https://fire-train-07.firebaseio.com",
    projectId: "fire-train-07",
    storageBucket: "fire-train-07.appspot.com",
    messagingSenderId: "448757267825"
  };
  firebase.initializeApp(config);

  var database = firebase.database();





   // Initial Values
   var name = "";
   var destination = "";
   var time = 0;
   var frequency = "";

   // Capture Button Click
   $("#add-user").on("click", function() {
     // Don't refresh the page!
     event.preventDefault();

     // YOUR TASK!!!
     // Code in the logic for storing and retrieving the most recent user.
     // Don't forget to provide initial data to your Firebase database.
     name = $("#name-input").val().trim();
     destination = $("#destination-input").val().trim();
     time = $("#time-input").val().trim();
     frequency = $("#frequency-input").val().trim();

     database.ref().set({
       name: name,
       destination: destination,
       time: time,
       frequency: frequency
     });

   });

   // Firebase watcher + initial loader HINT: .on("value")
   database.ref().on("value", function(snapshot) {

     // Log everything that's coming out of snapshot
     console.log(snapshot.val());
     console.log(snapshot.val().name);
     console.log(snapshot.val().destination);
     console.log(snapshot.val().time);
     console.log(snapshot.val().frequency);
  //testing this out

  var trainTable = $("<td>");

  // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
  trainTable.addClass("table tableTrain");

  // 4. Then give each "letterBtn" a data-attribute called "data-letter".
trainTable.attr("data-letter");

//   // 5. Then give each "letterBtns" a text equal to "letters[i]".
//  $("#tableTrain").text(snapshot.val().name);

  // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
  // table.append(trainTable);

  $("#tableTrain").text(snapshot.val().name);
  $("#table").append(trainTable);
     // Change the HTML to reflect
     $("#table").text(snapshot.val().name);
     $("#tableTrain").text(snapshot.val().destination);
     $("#tableTrain").text(snapshot.val().time);
     $("#tableTrain").text(snapshot.val().frequency);

     // Handle the errors
   }, function(errorObject) {
     console.log("Errors handled: " + errorObject.code);
   });




  var tFrequency = 3;

  // Time is 3:30 AM
  var firstTime = "03:30";

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minute Until Train
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



