var profile_picture = "https://silicon.createx.studio/assets/img/logo.svg";
var name_of_user = "Shameek Biswas";
var user_name = "@power_dev";
var user_about = "Hi Guys";
var experience = 70;
var verified = "Yes";

// get references to the HTML elements you want to update
var profilePicElem = document.getElementById("USER_PROFILE_PIC");
var nameElem = document.getElementById("NAME-text-details");
var userNameElem = document.getElementById("USER_NAME-text-details");
var aboutUserElem = document.getElementById("ABOUT_USER-text-details");
var experienceElem = document.getElementById("EXPERIENCE-text-details");

// update the element contents with the JSON values
profilePicElem.src = profilePicElem;
nameElem.innerText = nameElem;
userNameElem.innerText = userNameElem;
aboutUserElem.innerText = aboutUserElem;
experienceElem.innerText = experienceElem;
