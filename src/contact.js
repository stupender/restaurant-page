function createContact() {
    let a = document.createElement("div");
    a.classList.add("contact-container");
    
    let b1 = document.createElement("div");
    let b1p = document.createElement("p");
    b1p.classList.add("contact-title");
    b1p.textContent = "CONTACT AT";
    let b1a = document.createElement("a");
    b1a.classList.add("contact-link");
    b1a.setAttribute("href", "#");
    b1a.setAttribute("target", "_blank");
    b1a.textContent = "stu_pender@mac.com";

    let b2 = document.createElement("div");
    let b2p = document.createElement("p");
    b2p.classList.add("contact-title");
    b2p.textContent = "YOUTUBE";
    let b2a = document.createElement("a");
    b2a.classList.add("contact-link");
    b2a.setAttribute("href", "#");
    b2a.setAttribute("target", "_blank");
    b2a.textContent = "Filmed Musical Studies & Expressions";

    let b3 = document.createElement("div");
    let b3p = document.createElement("p");
    b3p.classList.add("contact-title");
    b3p.textContent = "INSTAGRAM";
    let b3a = document.createElement("a");
    b3a.classList.add("contact-link");
    b3a.setAttribute("href", "#");
    b3a.setAttribute("target", "_blank");
    b3a.textContent = "@pendergram";

    a.appendChild(b1);
    b1.appendChild(b1p);
    b1.appendChild(b1a);

    a.appendChild(b2);
    b2.appendChild(b2p);
    b2.appendChild(b2a);


    a.appendChild(b3);
    b3.appendChild(b3p);
    b3.appendChild(b3a);

    return a;
}

function loadContact() {
    let page = document.getElementById("page");
    page.textContent = ""; // do i need this? ... Clears the page from previous stuff.
    page.appendChild(createContact());
}

export default loadContact;