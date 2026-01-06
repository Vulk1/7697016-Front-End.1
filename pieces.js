const response = await fetch("pieces-autos.json");
const pieces = await response.json();

const article = pieces[0];

let imageElement = document.createElement("img");
imageElement.src = article.image;
let nomElement = document.createElement("h2");
nomElement.textContent = article.nom;
let prixElement = document.createElement("p");
prixElement.textContent = `Prix : ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
let categorieElement = document.createElement("p");
categorieElement.textContent = article.categorie;

const sectionFiches = document.querySelector(".fiches")
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
