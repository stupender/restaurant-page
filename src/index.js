console.log("Hello from JavaScript!");

// DOM Bindings 
let aboutButton = document.querySelector("a.about");
let musicButton = document.querySelector("a.expression");
let teachingButton = document.querySelector("a.teaching");
let contactButton = document.querySelector("a.contact");



// let aboutCard = document.querySelector(".about-container");
// let connectCard = document.querySelector(".contact-container");

// // Event Listeners
// aboutButton.addEventListener("click", displayAbout);
// contactButton.addEventListener("click", displayContact);

// // Functions
// function displayAbout() {
//     aboutCard.classList.toggle("show");
//     aboutButton.classList.toggle("showing");
// }

// function displayContact() {
//     contactCard.classList.toggle("show");
//     contactButton.classList.toggle("showing");
// }


// Tab Modules
let aboutTab = (() => {
    'use strict';
    return {
        pageContent: function() {
            let a = document.createElement("div");
            a.classList("about-container").add;

            let b1 = document.createElement("img");
            b1.setAttribute("id", "about-pic");
            b1.setAttribute("src", "images/about.jpeg");

            let b2 = document.createElement("p");
            b2.setAttribute("id", "about-text");
            b2.textContent = "Stu Pender is a Brooklyn based guitarist and composer from the suburbs of Chicago, Illinois. A graduate of the Jazz Studies Conservatory at SUNY Purchase, Stu studied under John Abercrombie and Vic Juris. He has since performed music at notable venues such as the United Nations General Assembly Hall, Beacon Theatre, and Brooklyn Steel — with musical acts Poetic Thrust, Photay, Elijah Wolf, The Gipsy Kings, Los Lobos, and more. Stu continues his musical studies on the guitar with Fabiano do Nascimento and Derek Gripper."
        
            a.appendChild(b1);
            a.appendChild(b2);
        }
    };
})();

let musicTab = (() => {
    'use strict';
    return {
        pageContent: function() {
            
        }
    };
})();

let teachingTab = (() => {
    'use strict';
    return {
        pageContent: function() {          
        }
    };
})();

let contactTab = (() => {
    'use strict';
    return {
        pageContent: function() {   
            let a = document.createElement("div");
            a.classList("contact-container").add;
            
            let b1 = document.createElement("div");
            let b1p = document.createElement("p");
            b1p.classList("contact-title").add;
            b1p.textContent = "CONTACT AT";
            let b1a = document.createElement("a");
            b1a.classList("contact-link").add;
            b1a.setAttribute("href", "#");
            b1a.setAttribute("target", "_blank");
            b1a.textContent = "stu_pender@mac.com";
            b1.appendChild(b1p);
            b1.appendChild(b1a);

            let b2 = document.createElement("div");
            let b2p = document.createElement("p");
            b2p.classList("contact-title").add;
            b2p.textContent = "YOUTUBE";
            let b2a = document.createElement("a");
            b2a.classList("contact-link").add;
            b2a.setAttribute("href", "#");
            b2a.setAttribute("target", "_blank");
            b2a.textContent = "Filmed Musical Studies & Expressions";
            b2.appendChild(b2p);
            b2.appendChild(b2a);

            let b3 = document.createElement("div");
            let b3p = document.createElement("p");
            b3p.classList("contact-title").add;
            b3p.textContent = "INSTAGRAM";
            let b3a = document.createElement("a");
            b3a.classList("contact-link").add;
            b3a.setAttribute("href", "#");
            b3a.setAttribute("target", "_blank");
            b3a.textContent = "@pendergram";
            b3.appendChild(b3p);
            b3.appendChild(b3a);

            a.appendChild(b1);
            a.appendChild(b2);
            a.appendChild(b3);
        }
    };
})();