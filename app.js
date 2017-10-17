
<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAH3yHq5Y9x4FKTTN6YRCao7L_P159zxRU",
    authDomain: "fire-storage-1b94a.firebaseapp.com",
    databaseURL: "https://fire-storage-1b94a.firebaseio.com",
    projectId: "fire-storage-1b94a",
    storageBucket: "fire-storage-1b94a.appspot.com",
    messagingSenderId: "580506345372"
  };
  firebase.initializeApp(config);
var firestore = firebase.firestore();
</script>
//window.onload=function(){
	  const docRef = firestore.doc("textFromUserCollection/textFromUserDocument");
	const inputTextField  =document.querySelector("#textFieldEntry");
	
	const saveButton = document.querySelector("#saveButton");
	//const saveButton = document.getElementByID("saveButton");
	//}
	
	
	saveButton.addEventListener("click", function(){
	const textToSave= inputTextField.value;
	console.log("We have data");
	docRef.set({
	    textInput: textToSave
	}).then(function(){
	  console.log("Saved!!!");
	}).catch(function(error){
	    console.log("Got an error: ", error);
	});
	})
