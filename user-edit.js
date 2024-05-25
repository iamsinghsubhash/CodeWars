var element = document.body;
let clickMoon = document.getElementById('click-moon');
let body = document.getElementsByTagName('body');

clickMoon.addEventListener('click',darkMode);

function darkMode(){
    alert();
    let body = document.getElementsByTagName('body');
    body.style.backgroundColor = "#ffff";
}


// hover-profile
let hoverProfile = document.getElementById('hover-profile');
let profileWrapper = document.querySelector('.profile-wrapper');

hoverProfile.addEventListener('mouseover', showProfile);
// hoverProfile.addEventListener('mouseout', hideProfile);
profileWrapper.addEventListener('mouseover', showProfile);
profileWrapper.addEventListener('mouseout', hideProfile);
profileWrapper.addEventListener('onscroll',positionFix)

function showProfile() {
    profileWrapper.style.display = 'block';
    // profileWrapper.style.position = "fixed";
}

function hideProfile() {
    profileWrapper.style.display = 'none';
}

