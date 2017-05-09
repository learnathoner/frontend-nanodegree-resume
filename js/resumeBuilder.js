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
  "welcomeMsg": "Welcome",
  "skills": [
    "Being Mike", "Not being other people", "Nice enough guy"
  ]
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

var projects = [
  {
    "title": "Web Resume",
    "dates": "5/8/17 - Present",
    "description": "Web resume using json, java, and html",
    "image": "No image"
  }
]

var education = {
  "schools": {
      "name": "Michigan",
      "degree": "BA",
      "dates": "07/05 - 04/09",
      "location": "Ann Arbor, MI",
      "major": "Economics"
  },
  "online": {
    "title": "Intro to Programming",
    "school": "Udacity",
    "dates": "05/01/17 - Present",
    "url": "Udacity.com"
  }
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (entry in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[entry]));
  };
};

work.forEach(function(job) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
  var formattedDates = HTMLworkDates.replace("%data%", job.dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
  $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates
    + formattedDescription);
});
