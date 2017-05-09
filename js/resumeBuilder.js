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
  "contacts": {
    "mobile": "248 722 8683",
    "email": "mike.tikh@gmail.com",
    "github": "learnathoner",
    "blog": "selflearnathon.com",
    "location": "Las Vegas, NV"
  },
  "biopic": "images/me.jpg",
  "welcomeMsg": "Welcome",
  "skills": [
    "Being Mike", "Not being other people", "Nice enough guy"
  ]
};

var work = {
  "jobs": [
    {
    "employer": "Surfing Donkey Hostel",
    "title": "Co-Owner",
    "dates": "02/2015 - 08/2016",
    "location": "San Juan Del Sur, Nicaragua",
    "description": "Owned and operated a hostel in Nicaragua"
    },
    {
    "employer": "Great Point Capital",
    "title": "Securities Trader",
    "dates": "05/2009 - Present",
    "location": "Austin, TX",
    "description": "Securities trader"
    }
  ]
};

var projects = [
  {
    "title": "Web Resume",
    "dates": "5/8/17 - Present",
    "description": "Web resume using json, java, and html",
    "images": ""
  }
]

var education = {
  "schools": [
    {
      "name": "Michigan",
      "degree": "BA",
      "dates": "07/05 - 04/09",
      "location": "Ann Arbor, MI",
      "major": "Economics"
  }
],
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

function displayWork() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates
      + formattedDescription);
  });
};

displayWork();

$(document).click(function(loc) {
  logClicks(loc.clientX, loc.clientY);
});

$("#main").append(internationalizeButton);

function inName(name) {
  intName = name.split(" ");
  firstName = intName[0];
  intName[0] = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = intName[1];
  intName[1] = lastName.toUpperCase();
  return intName.join(" ");
};

projects.display = function(){
  for (proj = 0; proj < projects.length; proj++) {
    $("#projects").append(HTMLprojectStart);
    formattedTitle = HTMLprojectTitle.replace("%data%", projects[proj].title);
    formattedDates = HTMLprojectDates.replace("%data%", projects[proj].dates);
    formattedDescription = HTMLprojectDescription.replace("%data%", projects[proj].description);

    $(".project-entry:last").append(formattedTitle + formattedDates +
      formattedDescription);

    if (projects[proj].images.length > 0) {
      for (image in projects[proj].images) {
        formattedImage = HTMLprojectImage.replace("%data%", projects[proj].images);
        $(".project-entry:last").append(formattedImage);
      };
    };
  };
};

projects.display();

$("#mapDiv").append(googleMap);
