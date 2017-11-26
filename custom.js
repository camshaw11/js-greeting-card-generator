// initialise function and add an event listener around the entire code so only after 
// the button is clicked stuff will happen
var init = function(){
		var btn = document.getElementsByClassName('pure-button-primary');
		btn[0].addEventListener('click', myCard, false);
	
	function myCard() {
		event.preventDefault(); // prevents default action of submit button

		var imageCard		 = 		document.getElementById('image'); // variables = dom queries to grab the required id
		var backgroundColour = 		document.getElementById('background');
		var fontStyle		 = 		document.getElementById('font');
		var borderStyle		 = 		document.getElementById('border');
		var h1Elem			 =		document.getElementsByTagName('h1');
		var cover 			 = 		document.getElementsByTagName('img');
		var textType 		 = 		document.getElementById('message').value;

	function myImages() { // if a value is selected from the image options - inject suitable image file
		if 	(imageCard.value === 'christmas') {
			cover[0].attributes["0"].value = 'assets/christmas.jpg'; // vanilla js to access img value
	 	} 	else if (imageCard.value === 'valentines') {
	 		cover[0].attributes["0"].value = 'assets/valentines.jpg'; 	// vanilla js to access img value
		}	else if (imageCard.value === 'birthday') {
	   		cover[0].attributes["0"].value = 'assets/birthday.jpg'; // vanilla js to access img value
		}
	} // end myImages
		myImages(); // invoke function

	function myBackground() { // if a value is selected from the background colour options - change class name to access different css properties
		if 	(backgroundColour.value === 'graphite') {
			$("div.card").attr('class', 'card graphiteBackground'); // jquery attr() method to change class name
		} 	else if (backgroundColour.value === 'rose') {
			$("div.card").attr('class', 'card roseBackground'); // jquery attr() method to change class name
		}	else if (backgroundColour.value === 'celadon'){
			$("div.card").attr('class', 'card celadonBackground'); // jquery attr() method to change class name
		}
	} // end myBackground
		myBackground(); // invoke function

	function myFontStyle() { // on change from font options run this function to change the class name
		$('#font').on("change", function() {
		var fontChange = this.value // this.value = the value of the select options
		$('h1').attr('class', fontChange); // jquery attr() method to change classname
		});
	} // end myFontStyle
		myFontStyle(); // invoke function

	function myBorder() { // if a value is selected from the border options change the class name to the representative border style
		if 	(borderStyle.value === 'none') {
			h1Elem[0].parentNode.className = 'noneBorder'; // vanilla js to access the parent node of the h1 element and replace the class name
		} 	else if (borderStyle.value === 'thin') {
			h1Elem[0].parentNode.className = 'smallBorder';
		}	else if (borderStyle.value === 'thick'){
			h1Elem[0].parentNode.className = 'bigBorder';
		}	else if (borderStyle.value === 'filled'){
			h1Elem[0].parentNode.className = 'filledBorder';
		}
	} // end myBorder
		myBorder(); // invoke function

	function myMessage() { // grabs the text content that has been typed into the input field and pastes it into the div with an id of message
		h1Elem["0"].textContent = textType;
	}
		myMessage(); // invoke function

	}; 	// myCard function ends

}(); 	// end main function
