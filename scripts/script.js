const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

function setupEventListeners() {
    menuIcon.onclick = toggleNav;
    document.getElementById('github-icon').onclick = openGithub;
    document.getElementById('facebook-icon').onclick = openFacebook;
    document.getElementById('linkedin-icon').onclick = openLinkedIn;
    document.getElementById('project1-gitrepo').onclick = openProjectRepo;
    document.getElementById('download-cv').onclick = downloadCV;
    document.getElementById('submit-btn').onclick = validateForm;
}

function toggleNav() {
    navLinks.classList.toggle('active');
}

function openFacebook(){
    window.open('https://www.facebook.com/rjay.tolentino.54/', '_blank');
}

function openLinkedIn() {
    window.open('https://www.linkedin.com/in/rhoneetolentino', '_blank');
}


function openGithub() {
    window.open('https://www.github.com/Sariel15', '_blank');
}

function openProjectRepo() {
    window.open('https://github.com/Sariel15/BlockChain-Charity-Donation', '_blank');
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'resources/RhoneeResume.pdf';
    link.download = "Rhonee's Resume.pdf";
    document.body.appendChild(link);    
    link.click();
    document.body.removeChild(link);
}

function validateForm() {
    // const email = document.getElementById('email-input').value;
    const email = "cmarunrjay99@gmail.com";
    const body = document.getElementById('message-input').value;
    const subject = 'Message to creator';

    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
}

setupEventListeners();