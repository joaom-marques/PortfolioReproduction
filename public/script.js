function scrollToForm() {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth'});
}


const contactForm = document.getElementById('contact_form')

contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    const json = JSON.stringify(value);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json,
    }
    const response = await fetch('/form', options);
    const responseJson = await response.json();
    console.log(responseJson);

    contactForm.reset();
    // localStorage.setItem(`Contact submission: ${formSubmission.name}`, json);
    
//     localStorage.setItem(`Contact Submission: ${contactName}`, `{ Email: ${formSubmission.email} },
// { Message: ${formSubmission.message} }`);

});