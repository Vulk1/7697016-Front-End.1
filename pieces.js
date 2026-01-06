const response = await fetch("pieces-autos.json");
const pieces = await response.json();

let nbArticle = pieces.length;

//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");

for(let i=0; i < nbArticle; i++) {
    const article = pieces[i];

    const pieceElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.textContent = article.nom;
    const prixElement = document.createElement("p");
    prixElement.textContent = `Prix : ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.textContent = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.textContent = article.disponibilite ? "En stock" : "Rupture de stock";

    
    sectionFiches.appendChild(pieceElement);

    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
}
