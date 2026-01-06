export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");

    for (let i = 0; i < piecesElements.length; i++) {

      piecesElements[i].addEventListener("click", async function (event) {
        let pieceId = event.target.dataset.id;
        const avis = fetch(`http://localhost:8081/pieces/${pieceId}/avis`);
        console.log(avis);
           

      });

    }
}