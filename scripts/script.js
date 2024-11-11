const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

function setupEventListeners() {
    menuIcon.onclick = toggleNav;
    document.getElementById('github-button').onclick = openGithub;
    document.getElementById('github-icon').onclick = openGithub;
    document.getElementById('github-icon2').onclick = openGithub;
    document.getElementById('facebook-icon').onclick = openFacebook;
    document.getElementById('facebook-icon2').onclick = openFacebook;
    document.getElementById('linkedin-icon').onclick = openLinkedIn;
    document.getElementById('linkedin-icon2').onclick = openLinkedIn;
    document.getElementById('email-icon').onclick = redirectToEmail;
    document.getElementById('project1-gitrepo').onclick = openProjectRepo1;
    document.getElementById('project2-gitrepo').onclick = openProjectRepo2;
    document.getElementById('project3-gitrepo').onclick = openProjectRepo3;
    document.getElementById('project4-gitrepo').onclick = openProjectRepo4;
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

function openProjectRepo1() {
    window.open('https://github.com/Sariel15/BlockChain-Charity-Donation', '_blank');
}

function openProjectRepo2() {
    window.open('https://github.com/Sariel15/OOPLANG-Case-Study', '_blank');
}

function openProjectRepo3() {
    window.open('https://github.com/Sariel15/productReviewSA', '_blank');
}

function openProjectRepo4() {
    window.open('https://github.com/Sariel15/AppDev-TechCheck', '_blank');
}

function redirectToEmail(){
    window.open('mailto:cmarunrjay99@gmail.com');

}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'resources/RhoneeResume.pdf';
    link.download = "Rhonee's Resume.pdf";
    document.body.appendChild(link);    
    link.click();
    document.body.removeChild(link);
}

setupEventListeners();
