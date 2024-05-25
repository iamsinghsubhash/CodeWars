document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});



// right profile 
let hoverProfile = document.getElementById('hover-profile');
let profileWrapper = document.querySelector('.profile-wrapper');

hoverProfile.addEventListener('mouseover', showProfile);
profileWrapper.addEventListener('mouseover', showProfile);
profileWrapper.addEventListener('mouseout', hideProfile);

function showProfile() {
    profileWrapper.style.display = 'block';
}
function hideProfile() {
    profileWrapper.style.display = 'none';
}


// right menu 
function showFun() {
    let rightMenuElements = document.getElementsByClassName('right-top-menu');
    // Loop through each element with the class name 'right-top-menu'
    for (let i = 0; i < rightMenuElements.length; i++) {
        rightMenuElements[i].style.backgroundColor = 'black';
    }
}


// delete my account button 

// let deleteAcc = document.getElementById('delete-account');
// let exampleModal = document.getElementById('exampleModal');
// deleteAcc.addEventListener('click', showModel);
// function showModel(){
//     confirm("You are about to delete everything you have worked so hard for. If all you wish to do is stop receiving notification emails you can simply turn them off without deleting your account.");
//         exampleModal.style.display = 'block';
   
// }

// darkMode
function myFunction() {
    // event.preventDefault();
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
