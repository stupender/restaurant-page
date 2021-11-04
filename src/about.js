function createAbout() {
    let a = document.createElement("div");
    a.classList.add("about-container");

    let b1 = document.createElement("img");
    b1.setAttribute("id", "about-pic");
    b1.setAttribute("src", "images/about.jpeg");

    let b2 = document.createElement("p");
    b2.setAttribute("id", "about-text");
    b2.textContent = "Stu Pender is a Brooklyn based guitarist and composer from the suburbs of Chicago, Illinois. A graduate of the Jazz Studies Conservatory at SUNY Purchase, Stu studied under John Abercrombie and Vic Juris. He has since performed music at notable venues such as the United Nations General Assembly Hall, Beacon Theatre, and Brooklyn Steel — with musical acts Poetic Thrust, Photay, Elijah Wolf, The Gipsy Kings, Los Lobos, and more. Stu continues his musical studies on the guitar with Fabiano do Nascimento, Derek Gripper, Miguel Atwood-Ferguson, and is a student of the Sound & Music Institute at the New York Open Center. Working in a wide variety of styles has led him to carve out a sonic signature uniquely his own."

    a.appendChild(b1);
    a.appendChild(b2);

    return a
}

function loadAbout() {
    let page = document.getElementById("page");
    page.textContent = ""; // do i need this? to clear the page?
    page.appendChild(createAbout());
}

export default loadAbout;