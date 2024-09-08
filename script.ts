//listing Elements
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


    //type assertion

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const firstnameElement = document.getElementById('firstname') as HTMLInputElement;
    const lastnameElement = document.getElementById('lastname') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phonenumberElement = document.getElementById('phonenumber') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if (  profilePictureInput && firstnameElement && lastnameElement && emailElement && phonenumberElement && addressElement && educationElement && experienceElement && skillsElement) {

        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const email = emailElement.value;
        const phonenumber = phonenumberElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experienced = experienceElement.value;
        const skills = skillsElement.value;


        // picture elements
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


        //create Resume Output
        const resumeOutput = `<h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ""}
    <p> <strong> First Name: </strong>${firstname}}</p>
    <p> <strong> Last Name: </strong>${lastname} </p>
    <p> <strong> Email Address: </strong>${email} </p>
    <p> <strong> Phone Number: </strong>${phonenumber} </p>
    <p> <strong> Address: </strong>${address} </p>
        

        <h3>Education </h3>
        <p>${education}</p>

        <h3>Experience </h3>
        <p>${experienced}</p>

         <h3>Skills </h3>
        <p>${skills}</p>
    
    `;
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error('the resume output elements are missing')
    }
} else {
    console.error('one or more output elements are missing')


}
})