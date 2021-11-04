// import { create } from "enhanced-resolve";
import loadAbout from "./about.js";
import loadContact from "./contact.js";
import loadTeaching from "./teaching.js";
import loadMusic from "./music.js";

function createHeader() {
    let header = document.createElement("header");

    let b1 = document.createElement("h1");
    b1.textContent = "Stu Pender";
    header.appendChild(b1);

    let b2 = document.createElement("h2");
    b2.textContent = "Guitarist & Composer";
    header.appendChild(b2);

    return header;
}

function createNav() {
    let navBar = document.createElement("nav");

    let aboutButton = document.createElement("a");
    aboutButton.textContent = "About";
    aboutButton.setAttribute("href", "#")
    aboutButton.setAttribute("class", "about button-nav");
    aboutButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(aboutButton);
        loadAbout();
    });

    let musicButton = document.createElement("a");
    musicButton.textContent = "Music";
    musicButton.setAttribute("href", "#")
    musicButton.setAttribute("class", "expression button-nav");
    musicButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(musicButton);
        loadMusic();
    });

    let teachingButton = document.createElement("a");
    teachingButton.textContent = "Teaching";
    teachingButton.setAttribute("href", "#")
    teachingButton.setAttribute("class", "teaching button-nav");
    teachingButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(teachingButton);
        loadTeaching();
    });

    let contactButton = document.createElement("a");
    contactButton.textContent = "Contact";
    contactButton.setAttribute("href", "#")
    contactButton.setAttribute("class", "contact button-nav");
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });

    let filters = document.createElement("div");
    filters.setAttribute("id", "filters");

    let filterLabel = document.createElement("p");
    filterLabel.textContent = "FILTER WORK BY";
    filterLabel.setAttribute("href", "#")
    filterLabel.setAttribute("class", "contact-title");

    let allFilter = document.createElement("a");
    allFilter.textContent = "All";
    allFilter.setAttribute("href", "#")
    allFilter.setAttribute("class", "filter-item");

    let personalFilter = document.createElement("a");
    personalFilter.textContent = "Personal";
    personalFilter.setAttribute("href", "#")
    personalFilter.setAttribute("class", "filter-item");

    let collaborationFilter = document.createElement("a");
    collaborationFilter.textContent = "Collaboration";
    collaborationFilter.setAttribute("href", "#")
    collaborationFilter.setAttribute("class", "filter-item");

    filters.appendChild(filterLabel);
    filters.appendChild(allFilter);
    filters.appendChild(personalFilter);
    filters.appendChild(collaborationFilter);

    navBar.appendChild(aboutButton);
    navBar.appendChild(musicButton);
    navBar.appendChild(teachingButton);
    navBar.appendChild(contactButton);
    navBar.appendChild(filters);

    return navBar;
}


function setActiveButton(button) {
    let buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
    button.classList.add("active");
  }

  function createMain() {
    let main = document.createElement("nav");
    main.setAttribute("id", "page");
    
    return main;
}

function initializeWebsite() {
    let content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());

    setActiveButton(document.querySelector(".button-nav"));
    loadAbout();
}

export default initializeWebsite;