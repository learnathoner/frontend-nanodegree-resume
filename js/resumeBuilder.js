/*
This is empty on purpose! Your code to build the resume will go here.
 */


// console.log(email);
var myName = "Michael Tikh";
var myRole = "Programmer";

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

/*var formattedContact = HTMLemail.replace("%data%", myContact);
var formattedPicURL = HTMLbioPic.replace("%data%", myPicURL);
var formattedWelcome_message = HTMLwelcomeMsg.replace("%data%", myWelcome_message);
var formattedSkills = HTMLskills.replace("%data%", mySkills);
*/

var bio = {
  "name": "Michael Tikh",
  "role": "Programmer",
  "contact": {
    "mobile": "248 722 8683",
    "email": "mike.tikh@gmail.com",
    "github": "learnathoner",
    "blog": "selflearnathon.com",
  },
  "biopic": "images/me.jpg",
  "welcomeMsg": "Welcome"
};

var work = [
  {
    "employer": "Surfing Donkey Hostel",
    "title": "Co-Owner",
    "dates": "02/2015 - 08/2016",
    "location": "Nicaragua",
    "description": "Owned and operated a hostel in Nicaragua"
  },
  {
    "employer": "Great Point Capital",
    "title": "Securities Trader",
    "dates": "05/2009 - Present",
    "location": "Austin, TX",
    "description": "Securities trader"
}
];

var education = {
  "schools": [
    {
      "name": "Michigan",
      "city": "Ann Arbor",
      "degree": "science"
  },
  {
    "name": "MSU",
    "city": "East Lansing",
    "degree": "None"
  }
]
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
