console.log("Hello!");

function renderHome() {
    let content = document.querySelector('#content');
    let title = document.createElement('h1');
    let image = document.createElement('img').add;
    image.src = 'dist/images/flowers.jpeg';
    let text = document.createElement('p');
    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(text);
}

// ./node_modules/.bin/webpack