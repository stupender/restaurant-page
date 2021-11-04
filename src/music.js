function createMusic() {
    let a = document.createElement("div");
    a.classList.add("about-container");

    let b1 = document.createElement("img");
    b1.setAttribute("id", "about-pic");
    b1.setAttribute("src", "images/guitar.jpeg");

    let b2 = document.createElement("p");
    b2.setAttribute("id", "music-text");
    b2.textContent = "New music coming soon!"

    a.appendChild(b1);
    a.appendChild(b2);

    return a;
}

function loadMusic() {
    let page = document.getElementById("page");
    page.textContent = ""; // do i need this? to clear the page?
    page.appendChild(createMusic());
}

export default loadMusic;