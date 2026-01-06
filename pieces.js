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

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", ev => {
    let piecesTrie = Array.from(pieces);

    piecesTrie.sort(function(a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesTrie);
});

const boutonFiltre = document.querySelector(".btn-filtrer");
boutonFiltre.addEventListener("click", _ => {
    let piecesFiltre = Array.from(pieces);

    piecesFiltre = piecesFiltre.filter( piece => piece.prix <= 35 );
    console.log(piecesFiltre);
});

const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");
boutonTrierDecroissant.addEventListener("click", ev => {
    let piecesTrieDec = Array.from(pieces);

    piecesTrieDec.sort( (a, b) => (b.prix - a.prix) );
    console.log(piecesTrieDec);
});

const boutonFiltreDesc = document.querySelector(".brn-filtrer-description");
boutonFiltreDesc.addEventListener("click", _ => {
    let piecesFiltreDesc = Array.from(pieces);

    piecesFiltreDesc = piecesFiltreDesc.filter( piece => piece.description );
    console.log(piecesFiltreDesc);
});

const piecesAbordables = pieces.filter( piece => piece.prix <= 35 );
const nomPiecesAbordables = piecesAbordables.map(piece => piece.nom);

const listeAbordablesElement = document.createElement("li");

nomPiecesAbordables.forEach( (nomPiece, index) => {
    const listElement = document.createElement("li");

    listElement.textContent = nomPiece;
    listeAbordablesElement.appendChild(listElement);
});

const sectionAbordable = document.querySelector(".abordables");
sectionAbordable?.appendChild(listeAbordablesElement);

const piecesDisponibles = pieces.filter( piece => piece.disponibilite)
const nomPiecesDisponibles = piecesDisponibles.map(pieceDispo => {
    return {
        "nom": pieceDispo.nom, 
        "prix" : pieceDispo.prix
    } 
});

const sectionDisponible = document.querySelector(".disponibles");
const listeDisponiblesElement = document.createElement("li");

nomPiecesDisponibles.forEach( (piece, index) => {
    const listElement = document.createElement("li");

    listElement.textContent = `${piece.nom} (${piece.prix} €)`;
    listeDisponiblesElement.appendChild(listElement)
})

sectionDisponible.appendChild(listeDisponiblesElement);
