const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

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
    initScrollProgress();
    updateName();
    window.addEventListener('resize', updateName);
}

function toggleNav() {
    navLinks.classList.toggle('active');
}

function openFacebook(){
    safeWindowOpen('https://www.facebook.com/rjay.tolentino.54/', '_blank');
}

function openLinkedIn() {
    safeWindowOpen('https://www.linkedin.com/in/rhoneetolentino', '_blank');
}

function openGithub() {
    safeWindowOpen('https://www.github.com/Sariel15');
}

function openProjectRepo1() {
    safeWindowOpen('https://github.com/Sariel15/BlockChain-Charity-Donation', '_blank');
}

function openProjectRepo2() {
    safeWindowOpen('https://github.com/Sariel15/OOPLANG-Case-Study', '_blank');
}

function openProjectRepo3() {
    safeWindowOpen('https://github.com/Sariel15/productReviewSA', '_blank');
}

function openProjectRepo4() {
    safeWindowOpen('https://github.com/Sariel15/AppDev-TechCheck', '_blank');
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

document.querySelectorAll('.project-card, .skills-card, .about-card-container').forEach(card => {
    observer.observe(card);
});

function safeWindowOpen(url, target = '_blank') {
    try {
        window.open(url, target);
    } catch (error) {
        console.error('Failed to open URL:', error);
        alert('Failed to open link. Please try again later.');
    }
}

function initScrollProgress() {
    if (!document.querySelector('.scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);
    }

    function updateProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        const winScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (winScroll / height) * 100;
        
        if (progressBar) {
            progressBar.style.width = `${scrolled}%`;
        }
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

function updateName() {
    const nameElements = [
        document.querySelector('.info-box h1'),
        document.querySelector('.logo span')
    ];
    
    const fullName = "Rhonee James Tolentino";
    const shortName = "Rhonee Tolentino";
    
    nameElements.forEach(element => {
        if (element) {
            if (window.innerWidth <= 425) {
                element.textContent = shortName;
            } else {
                element.textContent = fullName;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', setupEventListeners);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
} else {
    setupEventListeners();
}