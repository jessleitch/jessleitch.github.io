function askQuestions (){

	var firstName = prompt('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is named ' + fullName);

	var age = prompt('How old are you?');
		age = parseInt(age);

	if (age>= 18){
		console.log('User is an adult')
	}	else if (age>= 13) {
		console.log ('User is a teenager')
	} 	else {
		console.log('User is a child')
	}

	if (firstName.toLowerCase() ==='general' && lastName.toLowerCase()!=='assembly') {
		console.log('Hey General!');
	}

	var faveColour = prompt ('What is your favourite colour?').toLowerCase();
	if (faveColour === 'red' ||
		faveColour === 'blue'||
		faveColour === 'purple'||
		faveColour === 'yellow'||
		faveColour === 'green') {
		$('h1').css('color', faveColour);

	}

}

//when the page has loaded 
$(function(){

	//hide the content 
	$('h3').next().hide();

	//when the user clicks the image, ask questions 
	$('img').on('click',askQuestions);

	//when the user clicks an H3
	$('h3').on('click',function(){

	//toggle the next element 
	$(this).next().slideToggle();

	});

});