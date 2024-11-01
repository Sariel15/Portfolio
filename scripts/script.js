const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const facebookIcon = document.querySelector('#facebook-icon');
const githubIcon = document.querySelector('#github-icon');
const linkedInIcon =document.querySelector('#linkedin-icon');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

facebookIcon.onclick = () => {
    window.open('https://www.facebook.com/rjay.tolentino.54/', '_blank');
}

githubIcon.onclick = () => {
    window.open('https://www.github.com/Sariel15', '_blank');
}

linkedInIcon.onclick = () => {
    window.open('https://www.linkedin.com/in/rhoneetolentino', '_blank');
}

document.getElementById('github-button').addEventListener('click', function() {
    window.open('https://www.github.com/Sariel15', '_blank');
});

document.getElementById('download-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'resources/Rhonee_Resume.pdf';
    link.download = "Rhonee's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const email = document.getElementById('email-input').value;
    const body = document.getElementById('message-input').value;
    const subject = 'Message to creator';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) && body.trim()) {

        window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    } else {
        alert('Please enter a valid email address and message.');
    }
});