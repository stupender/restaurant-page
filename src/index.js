console.log("Hello from JavaScript!");

// DOM Bindings 
let aboutButton = document.querySelector(".about");
let contactButton = document.querySelector(".contact");
let aboutCard = document.querySelector(".about-container");
let contactCard = document.querySelector(".contact-container");

// Event Listeners
aboutButton.addEventListener("click", displayAbout);
contactButton.addEventListener("click", displayContact);

// Functions
function displayAbout() {
    aboutCard.classList.toggle("show");
    aboutButton.classList.toggle("showing");
}

function displayContact() {
    contactCard.classList.toggle("show");
    contactButton.classList.toggle("showing");
}



// const homepage = (() => {
//     'use strict';
//     return {
//         pageContent: function() {

//         }
//     };
// })();


// const pageTwo = (() => {
//     'use strict';
//     return {
//         pageContent: function() {
            
//         }
//     };
// })();


// const pageThree = (() => {
//     'use strict';
//     return {
//         pageContent: function() {
            
//         }
//     };
// })();