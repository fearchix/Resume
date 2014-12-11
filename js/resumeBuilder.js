// JavaScript source code 
//Bio
var bio = {
    "name": "Kathryn Patterson",
    "role": "Web Master",
    "contacts": {
        "email": "CA@MO@live.com",
        "mobile": "636-707-0111",
        "location": "St Louis, MO"
    },
    "bioPic": "images/kbogartsm.jpg",
    "welcome": "Welcome to my jungle!",
    "skills": ["Awesomeness", "JS", "Hard Working", "ABC"]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Mobile
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

//Email
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

//Location
var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLoc);
$("#footerContacts").append(formattedLoc);

//BioPic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

//Welcome
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcomeMsg);

//Skills
function displaySkills() {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
};
displaySkills();

//Work
var work = {
    "jobs": [
	  {
	      "employer": "AT&T",
	      "title": "Professional Business Manager",
	      "dates": "1996 to Present",
	      "location": "St Louis MO",
	      "description": "Front Door and Web Developer for the Common Services Integration team. I maintain several websites, create metrics on work intake, delegate work items to appropriate team and maintain weekly status updates."
	  },
	  {
	      "employer": "SBC",
	      "title": "Business Manager",
	      "dates": "1996 to Present",
	      "location": "Eastvale, CA",
	      "description": "Front Door and Web Developer for the Common Services Integration team. I maintain several websites, create metrics on work intake, delegate work items to appropriate team and maintain weekly status updates."
	  },
    ]
};

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
displayWork();


//Projects
var projects = {
    "projects": [
       {
           "title": "Eastvale Edition",
           "dates": "2003 to Present",
           "description": "Eastvale Edition is an online and printed quarterly magazine which I design and maintain.",
           "images": "images/EastvaleEditionsm.png"
       },
       {
           "title": "Eastvale Events",
           "dates": "2003 to Present",
           "description": "Eastvale Events.com is an online directory of events going on in the community of Eastvale.",
           "images": "images/EastvaleEventsm.png"
       }
    ]
};

function displayProjects() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
    }
};
displayProjects();

//Education
var education = {
    "schools": [
    {
        "name": "Saddleback College",
        "location": "Mission Viejo, CA",
        "dates": "1994-1995",
        "major": "CompSci",
        "degree": "AA",
        "url": "http://www.Saddleback.edu/"
    },
    {
        "name": "Orange Coast College",
        "location": "Costa Mesa, CA",
        "dates": "1976-1978",
        "major": "Office Automation",
        "degree": "AA",
        "url": "http://www.orangecoastcollege.edu/"
    }
    ]
,
    "onlineCourses": [
		   {
		       "school": "Udacity",
		       "title": "Intro to HTML and CSS",
		       "dates": "2014 to 2015",
		       "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617/m-2698138588"
		   },
		   {
		       "school": "Udacity",
		       "title": "JavaScript Basics",
		       "dates": "2014 to 2015",
		       "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1946788554/m-2550568535"
		   }
    ]
};

function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedURL);
    }

    $("#education").append(HTMLonlineClasses);
    for (school in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedSchoolTitle);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
        $(".education-entry:last").append(formattedOnlineDate);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
        $(".education-entry:last").append(formattedURL);
    }
};
displayEducation();

//you want to see a map? here's a map.
$("#mapDiv").append(googleMap);