const Year = document.querySelector("#currentYear");
const today = new Date();
Year.innerHTML = `<span>${today.getFullYear()}</span>`;

let lastMod = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: <span>${lastMod}</span>`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});