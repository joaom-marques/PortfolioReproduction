function scrollToForm() {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth'});
}


const contacts = [];

function registerContact() {
    let contactName = document.getElementById('contact_name').value;
    let contactEmail = document.getElementById('contact_email').value;
    let contactMessage = document.getElementById('contact_message').value;

    const formSubmission = {
        name: contactName,
        email: contactEmail,
        message: contactMessage
    }
    localStorage.setItem(`Contact Submission: ${contactName}`, `{ Email: ${formSubmission.email} },
{ Message: ${formSubmission.message} }`);
}