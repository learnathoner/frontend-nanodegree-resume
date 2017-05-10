/*
This is empty on purpose! Your code to build the resume will go here.
 */


// console.log(email);

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
    "twitter": "",
    "blog": "selflearnathon.com",
    "location": "Las Vegas, NV"
  },
  "biopic": "images/me.jpg",
  "welcomeMessage": "Welcome",
  "skills": [
    "Being Mike", "Not being other people", "Nice enough guy"
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGitHub);
  $("#topContacts").append(formattedBlog);
  $("#topContacts").append(formattedLocation);

  $("#header").append(formattedWelcomeMsg);
  $("#header").append(formattedBioPic);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%",skill));
    });
  }
}

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
}

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates
      + formattedLocation + formattedDescription);
  });
}

var projects = [
  {
    "title": "Web Resume",
    "dates": "5/8/17 - Present",
    "description": "Web resume using json, java, and html",
    "images": [""]
  }
]

projects.display = function(){
  for (proj = 0; proj < projects.length; proj++) {
    $("#projects").append(HTMLprojectStart);
    formattedTitle = HTMLprojectTitle.replace("%data%", projects[proj].title);
    formattedDates = HTMLprojectDates.replace("%data%", projects[proj].dates);
    formattedDescription = HTMLprojectDescription.replace("%data%", projects[proj].description);

    $(".project-entry:last").append(formattedTitle + formattedDates +
      formattedDescription);

    if (projects[proj].images.length > 0) {
      projects[proj].images.forEach(function(image) {
        formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  }
}

var education = {
  "schools": [
    {
      "name": "Michigan",
      "degree": "BA",
      "dates": "07/05 - 04/09",
      "location": "Ann Arbor, MI",
      "majors": "Economics",
    }
  ],
  "onlineCourses": [
    {
    "title": "Intro to Programming",
    "school": "Udacity",
    "dates": "05/01/17 - Present",
    "url": "Udacity.com"
    }
  ]
}

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    formattedSchoolMajor =   HTMLschoolMajor.replace("%data%", school.majors);

    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree +
      formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
  });

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(online) {
      $("#education").append(HTMLschoolStart);
      formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
      formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
      formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
      formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);

      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool +
        formattedOnlineDates + formattedOnlineURL);
    })
  }
}

bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);

function inName(name) {
  intName = name.split(" ");
  firstName = intName[0];
  intName[0] = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = intName[1];
  intName[1] = lastName.toUpperCase();
  return intName.join(" ");
};





$("#mapDiv").append(googleMap);
