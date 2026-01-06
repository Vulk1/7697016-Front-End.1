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
categorieElement.textContent = article.categorie ?? "(aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.textContent = article.description ?? "Pas de description pour le moment.";
const stockElement = document.createElement("p");
stockElement.textContent = article.disponibilite ? "En stock" : "Rupture de stock";

//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);

