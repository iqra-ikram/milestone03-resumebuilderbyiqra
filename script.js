var _a;
//listing Elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var emailElement = document.getElementById('email');
    var phonenumberElement = document.getElementById('phonenumber');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && firstnameElement && lastnameElement && emailElement && phonenumberElement && addressElement && educationElement && experienceElement && skillsElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var email = emailElement.value;
        var phonenumber = phonenumberElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experienced = experienceElement.value;
        var skills = skillsElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //create Resume Output
        var resumeOutput = "<h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n    <p> <strong> First Name: </strong>").concat(firstname, "}</p>\n    <p> <strong> Last Name: </strong>").concat(lastname, " </p>\n    <p> <strong> Email Address: </strong>").concat(email, " </p>\n    <p> <strong> Phone Number: </strong>").concat(phonenumber, " </p>\n    <p> <strong> Address: </strong>").concat(address, " </p>\n        \n\n        <h3>Education </h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience </h3>\n        <p>").concat(experienced, "</p>\n\n         <h3>Skills </h3>\n        <p>").concat(skills, "</p>\n    \n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
