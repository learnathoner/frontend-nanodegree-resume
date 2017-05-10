/*
  Objects Bio, Work, Projects, and Education, with relevant information
  Display functions for Objects
  International name button
  Google Map
*/

var bio = {
  "name": "Michael Tikh",
  "role": "Programmer-In-Training",
  "contacts": {
    "mobile": "555 555 5555",
    "email": "mike.tikh@gmail.com",
    "github": "learnathoner",
    "twitter": "",
    "blog": "selflearnathon.com",
    "location": "Las Vegas, NV"
  },
  "biopic": "images/me.jpg",
  "welcomeMessage": "Welcome. Please send offers for large salaries here.",
  "skills": [
    "Operating a computer", "Runs sort-of fast", "Can almost touch my toes",
    "At least 7th grade literacy"
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

  //Append contacts to header and footer
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGitHub);
  $("#topContacts").append(formattedBlog);
  $("#topContacts").append(formattedLocation);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedBlog);
  $("#footerContacts").append(formattedLocation);

  $("#header").append(formattedWelcomeMsg);
  $("#header").append(formattedBioPic);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%",skill));
    });
  }
};

var work = {
  "jobs": [
    {
    "employer": "Great Point Capital",
    "title": "Securities Trader",
    "dates": "05/2009 - Present",
    "location": "Austin, TX",
    "description": "Securities trader"
    },
    {
    "employer": "Surfing Donkey Hostel",
    "title": "Co-Owner",
    "dates": "02/2015 - 08/2016",
    "location": "San Juan Del Sur, Nicaragua",
    "description": "Owned and operated a 60 person hostel in Nicaragua. " +
      "Increased Occupancy from 20% to 80% average."
    }

  ]
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates +
      formattedLocation + formattedDescription);
  });
};

var projects = [
  {
    "title": "Web Resume",
    "dates": "5/8/17 - 5/10/17",
    "description": "Web resume using html, css, and javascript",
    "images": ["images/web_project.png"]
  }
];

projects.display = function(){
  for (project = 0; project < projects.length; project++) {
    $("#projects").append(HTMLprojectStart);
    formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
    formattedDates = HTMLprojectDates.replace("%data%", projects[project].dates);
    formattedDescription = HTMLprojectDescription.replace("%data%", projects[project].description);

    $(".project-entry:last").append(formattedTitle + formattedDates +
      formattedDescription);

    if (projects[project].images.length > 0) {
      for (index = 0; index < projects[project].images.length; index ++) {
        var image = projects[project].images[index];
        console.log(image);
        formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

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
    //URL looks awful using mix of double and single quotes, but I made the project
    //using double quotes and it's too late to switch. Noted to use single for future.
    "url": '<a href = "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000">Udacity.com/IntroToProgramming</a>'
    }
  ]
};

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
    });
  }
};

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
}





$("#mapDiv").append(googleMap);
