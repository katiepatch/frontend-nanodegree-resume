

// var firstName = "Katie";
// console.log(firstName);

// var age = 32;

// var awesomeThoughts = "I am Katie and I am Awesome!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
// console.log(funThoughts);

// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Katie Patch");
$("#header").append(formattedName);


var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedRole);
