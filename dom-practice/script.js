const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);


const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
container.appendChild(paragraph);


const heading3 = document.createElement("h3");
heading3.classList.add("heading3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";
container.appendChild(heading3);


const seconddiv = document.createElement("div");
seconddiv.classList.add("seconddiv");
seconddiv.setAttribute("style", "border: 2px solid black; background-color: pink;");

const anotherh1 = document.createElement("h1");
anotherh1.classList.add("anotherh1");
anotherh1.textContent = "I'm in a div";
seconddiv.appendChild(anotherh1);

const metoo = document.createElement("p");
metoo.classList.add("metoo");
metoo.textContent = "ME TOO!";
seconddiv.appendChild(metoo);

container.appendChild(seconddiv);


const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello Mudi!");