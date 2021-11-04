function createTeaching() {
    let a = document.createElement("div");
    a.classList.add("about-container");

    let b1 = document.createElement("img");
    b1.setAttribute("id", "about-pic");
    b1.setAttribute("src", "images/guitar.jpeg");

    let b2 = document.createElement("p");
    b2.setAttribute("id", "teaching-text");
    b2.textContent = "Students of all ages and skill levels are encouraged to register. These are project based lessons directed by each student's individual goals and needs. Some topics we'll cover include guitar technique, music theory, ear training, repertoire, improvisation, composition, & music production. \n I am a graduate of the Jazz Conservatory at SUNY Purchase where I studied under John Abercrombie, Vic Juris, Charles Blenzig, and Jon Faddis. I've been invited to perform at some great venues such as the Beacon Theatre, Brooklyn Steel, and the United Nations General Assembly Hall with artists such as Los Lobos, The Gipsy Kings, Photay, Elijah Wolf, and more. I offer experience in many styles such as jazz, classical, hip hop, blues, folk, and contemporary guitar. I continue my own study in the traditions of Brazilian guitar and the Kora music of Mali. \n In order to help make these courses affordable to as many people as possible, I'm offering flexible rates based on a choice of either private lessons or guided video feedback, as well as the option of a half-hour or hour private lesson length. I've found these all to have unique benefits. These will all take place remotely for the time being. May creativity bring us all a little closer together!!"

    a.appendChild(b1);
    a.appendChild(b2);

    return a;
}

function loadTeaching() {
    let page = document.getElementById("page");
    page.textContent = ""; // do i need this? to clear the page?
    page.appendChild(createTeaching());
}

export default loadTeaching;