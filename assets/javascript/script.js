document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM chargé !");

    function createCarousel(containerId, images) {
        let container = document.getElementById(containerId);

        if (!container) {
            console.error(`Erreur : L'élément #${containerId} n'existe pas.`);
            return; // Sortie pour éviter d'exécuter la suite sur un élément null
        }

        let carousel = document.createElement("div");
        carousel.classList.add("carousel");

        let track = document.createElement("div");
        track.classList.add("carousel-track");

        let prevButton = document.createElement("button");
        prevButton.innerText = "<";
        prevButton.classList.add("carousel-button", "prev");

        let nextButton = document.createElement("button");
        nextButton.innerText = ">";
        nextButton.classList.add("carousel-button", "next");

        images.forEach((src) => {
            let slide = document.createElement("div");
            slide.classList.add("carousel-slide");
            let img = document.createElement("img");
            img.src = src;
            slide.appendChild(img);
            track.appendChild(slide);
        });

        carousel.appendChild(prevButton);
        carousel.appendChild(track);
        carousel.appendChild(nextButton);
        container.appendChild(carousel);

        console.log(`Carrousel ajouté à #${containerId}`);

        let index = 0;
        function updateCarousel() {
            let slideWidth = 488 + 65; // Largeur image + espacement
            track.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        nextButton.addEventListener("click", () => {
            index = (index + 1) % images.length;
            updateCarousel();
        });

        prevButton.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            updateCarousel();
        });
    }

    // Initialisation des carrousels
    createCarousel("carousel-services", [
        "assets/images/images/uber.jpg",
        "assets/images/images/dejeuner.jpg",
        "assets/images/images/repas.jpg",
        "assets/images/images/guide.jpg"
    ]);

    createCarousel("carousel-activites", [
        "assets/images/images/chien-traineaux.jpg",
        "assets/images/images/rando-raquette.jpg",
        "assets/images/images/volcan.png",
        "assets/images/images/speleologie.png"
    ]);
});



document.addEventListener("DOMContentLoaded", function () {

    // Fonction pour créer la modal
    function createModal() {
        let modal = document.createElement("div");
        modal.id = "modal-reservation";
        modal.classList.add("modal");
        modal.style.display = "none"; // Cachée par défaut

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h4>Réserver votre séjour</h4>
                 <form id="formulaire">
                    <input type="text" id="nomcomplet" placeholder="Nom Prenom">
                    <span id="erreurNom" class="erreur"></span>
                    <div>
                        <input type="text" id="numeroRue" placeholder="N°rue">
                        <span id="erreurNumero" class="erreur"></span>
                        <input type="text" id="rue" placeholder="Rue">
                        <span id="erreurRue" class="erreur"></span>
                    </div>
                    <div>  
                        <input type="text" id="codePostal" placeholder="Code postal">
                        <span id="erreurPostal" class="erreur"></span>
                        <input type="text" id="ville" placeholder="Ville">
                        <span id="erreurVille" class="erreur"></span>
                    </div>
                    <input type="text" id="email" placeholder="email">
                    <span id="erreurEmail" class="erreur"></span>
    
                    <input type="text" id="telephone" placeholder="Numero de telephone">
                    <span id="erreurTel" class="erreur"></span>

                    <div>
                        <input type="text" id="nbPersonnes" placeholder="Nombre de personnes">
                        <span id="erreurNombre" class="erreur"></span>
                    </div>

                    <select id="selectHotel" class="select-hotel">
                        <option value="">Choisir un hotel</option>
                        <option value="air">Hotel Air</option>
                        <option value="eau">Hotel Eau</option>
                        <option value="feu">Hotel Feu</option>
                        <option value="terre">Hotel Terre</option>
                    </select>
                    <span id="erreurHotel" class="erreur"></span>

                    <select id="chambreAir" class="select-chambre">
                        <option value="">Choisir la type de chambre Air</option>
                    </select>
                    <span id="erreurChambre" class="erreur"></span>

                    <select id="chambreEau" class="select-chambre">
                        <option value="">Choisir la type de chambre Eau</option>
                    </select>
                    <span id="erreurChambre" class="erreur"></span>

                    <select id="chambreFeu" class="select-chambre">
                        <option value="">Choisir la type de chambre Feu</option>
                        <option value="igloos">Igloos</option>
                        <option value="laponne">Laponne</option>
                    </select>
                    <span id="erreurChambre" class="erreur"></span>

                    <select id="chambreTerre" class="select-chambre">
                        <option value="">Choisir la type de chambre Terre</option>
                    </select>
                    <span id="erreurChambre" class="erreur"></span>

                    <div>
                    <label>Date d'arrivée :</label>
                    <input type="date" id="dateArrivee">
                    <span id="erreurArrivee" class="erreur"></span>
    
                    <label>Date de départ :</label>
                    <input type="date" id="dateDepart" >
                    <span id="erreurDepart" class="erreur"></span>
                    </div>
                    
                    <div class="checkbox-container">
                        <label for="chauffeur">Chauffeur</label>
                        <input type="checkbox" id="chauffeur">
                    </div>
                    <div class="checkbox-container">
                        <label for="guide">Guide</label>
                        <input type="checkbox" id="guide">
                    </div>
                    
                    <div class="checkbox-container">
                        <label for="petitDejeuner">petit-déjeuner</label>
                        <input type="checkbox" id="petitDejeuner">
                    </div>
                    <div class="checkbox-container">
                        <label for="repas">repas</label>
                        <input type="checkbox" id="repas">
                    </div>
                    <div>
                    <select id="sectionRepas">
                        <option value="">Choisir un repas</option>
                        <option value="midi">Midi</option>
                        <option value="soir">Soir</option>
                        <option value="ponctuel">Ponctuel</option>
                    </select>
                    <span id="erreurRepas" class="erreur"></span>
                    
                    <select id="sectionRegime">
                        <option value="">Choisir un régime alimentaire</option>
                        <option value="vegan">Végan</option>
                        <option value="vegetarien">Végétarien</option>
                        <option value="non">Non</option>
                    </select>
                    <span id="erreurRegime" class="erreur"></span>

                    <select id="sectionRestriction">
                        <option value="">Choisir une restriction alimentaires</option>
                        <option value="gluten">Sans gluten</option>
                        <option value="lactoses">Sans lactoses</option>
                        <option value="autres">Autres allergies et intolérances</option>
                        <option value="Aucun">Aucun</option>
                    </select>
                    <span id="erreurRestriction" class="erreur"></span>
                    </div>
                    <button type="submit">Valider</button>
                    <button id="reset" type="reset">Reset</button>
                </form>
                
            </div>
        `;
//<div id="erreur"></div>
//<div id="resultat"></div>

        document.body.appendChild(modal); // Ajoute la modal au body

        console.log("Modal créée !");

        return modal;
    }

    let modal = createModal(); // Création de la modal
    let closeBtn = modal.querySelector(".close");

    // Fonction pour afficher la modal
    function openModal() {
        console.log("Ouverture de la modal");
        modal.style.display = "flex";
    }

    // Fonction pour fermer la modal
    function closeModal() {
        console.log("Fermeture de la modal");
        modal.style.display = "none";
    }

    // Fermer en cliquant sur "×"
    closeBtn.addEventListener("click", closeModal);

    // Fermer en cliquant en dehors de la modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Sélectionne tous les boutons "Réserver" et ajoute l'événement de clic
    let reserveButtons = document.querySelectorAll(".btn-reserver");

    /*if (reserveButtons.length === 0) {
        //console.warn("Aucun bouton 'Réserver' trouvé !");
    } else {
        //console.log(`${reserveButtons.length} bouton(s) 'Réserver' trouvé(s)`);
    }*/

    reserveButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            openModal();
        });
    });

    // Fonction pour créer la modal
    function createModalResumer() {
        let modalResumer = document.createElement("div");
        modalResumer.id = "modalResultat";
        modalResumer.classList.add("modal-resultat");
        modalResumer.style.display = "none"; // Cachée par défaut

        modalResumer.innerHTML = `
            <div class="modal-resumer">
                <span class="close">&times;</span>
                <h4>Réserver votre séjour</h4>
                <div id="erreur"></div>
                <div id="resultat"></div>
            </div>
        `;

        document.body.appendChild(modalResumer); 

        console.log("Modal créée !");

        return modalResumer;
    }

    let modalResumer = createModalResumer(); // Création de la modal
    let closeBtnResumer = modalResumer.querySelector(".close");

    // Fonction pour afficher la modal
    function openModalResumer() {
        console.log("Ouverture de la modal");
        modalResumer.style.display = "flex";
    }

    // Fonction pour fermer la modal
    function closeModalResumer() {
        console.log("Fermeture de la modal");
        modalResumer.style.display = "none";
    }

    // Fermer en cliquant sur "×"
    closeBtnResumer.addEventListener("click", closeModalResumer);

    // Fermer en cliquant en dehors de la modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalResumer();
        }
    });

    // Sélectionne tous les boutons "Réserver" et ajoute l'événement de clic
    /*let submitButton = document.querySelectorAll("button[type='submit']");

    submitButton.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            openModalResumer();
        });
    });*/

//---------------------------------------------------
//  fonction pour choisir un logement avec des option
//---------------------------------------------------

function hotel() {
    const hotelAir= document.getElementById("chambreAir");
    const hotelEau = document.getElementById("chambreEau");
    const hotelFeu = document.getElementById("chambreFeu");
    const hotelTerre = document.getElementById("chambreTerre");
    const selectHotel = document.getElementById("selectHotel");
    
    if(selectHotel.value === "air") {
        hotelAir.style.display = "block";
        hotelEau.style.display = "none";
        hotelFeu.style.display = "none";
        hotelTerre.style.display = "none";
    } else if(selectHotel.value === "eau") {
        hotelEau.style.display = "block";
        hotelFeu.style.display = "none";
        hotelTerre.style.display = "none";
        hotelAir.style.display = "none";
    } else if(selectHotel.value === "feu") {
        hotelFeu.style.display = "block";
        hotelTerre.style.display = "none";
        hotelAir.style.display = "none";
        hotelEau.style.display = "none";
    } else if(selectHotel.value === "terre") {
        hotelTerre.style.display = "block";
        hotelAir.style.display = "none";
        hotelEau.style.display = "none";
        hotelFeu.style.display = "none";
    } else {
        hotelAir.style.display = "none";
        hotelEau.style.display = "none";
        hotelFeu.style.display = "none";
        hotelTerre.style.display = "none";
    }
}
document.getElementById("selectHotel").addEventListener("change",hotel);

//---------------------------------------------------
//  fonction pour choisir un menu
//---------------------------------------------------

/*function regime(){
    const sectionRegime = document.getElementById("sectionRegime");
    const petitDejeuner = document.getElementById("petitDejeuner").checked;
    const dejeuner = document.getElementById("dejeuner").checked;
    const dinner = document.getElementById("dinner").checked;
    
    if (petitDejeuner || dejeuner || dinner ) {
        sectionRegime.style.display ="block";
    }else {
        sectionRegime.style.display ="none";
        document.getElementById("erreurMenu").textContent = "";
    }
}
 document.getElementById("petitDejeuner").addEventListener("change",regime);
 document.getElementById("dejeuner").addEventListener("change",regime);
 document.getElementById("dinner").addEventListener("change",regime);
*/
//---------------------------------------------------
//  on vient ecouter le clique du bouton du formulaire
//---------------------------------------------------

document.getElementById("formulaire").addEventListener("submit",function(e){
    e.preventDefault();

let nomcomplet = document.getElementById("nomcomplet").value.trim();
let numeroRue = document.getElementById("numeroRue").value.trim();// trim pour retire les espcace
let rue = document.getElementById("rue").value.trim();
let codePostal = document.getElementById("codePostal").value.trim();
let ville = document.getElementById("ville").value.trim();
let email = document.getElementById("email").value.trim();
let telephone = document.getElementById("telephone").value.trim();
let nbPersonnes = document.getElementById("nbPersonnes").value.trim();
let arrivee = new Date(document.getElementById("dateArrivee").value);
let depart = new Date(document.getElementById("dateDepart").value);
let selectHotel = document.getElementById("selectHotel").value;
/*const selectMenu = document.getElementById("sectionRegime").value;
const petitDejeuner = document.getElementById("petitDejeuner").checked;*/

let erreur = [];

const emailRegex = /^[^@\s]+@[^@\s]+.[^@\s]+$/;
const phoneRegex = /^[0-9\s-/]{10,14}$/;
const numeroRegex = /^\d{1,5}$/;


if (nomcomplet.length < 2 || nomcomplet.length >50){
    document.getElementById("erreurNom").textContent ="Veuillez saisir un Nom et un Prenom valide";
    erreur.push("Veuillez saisir un Nom et un Prenom valide");
}else {
    document.getElementById("erreurNom").textContent ="";
}

if (!numeroRegex.test(numeroRue)){
    document.getElementById("erreurNumero").textContent ="Veuillez saisir un numero valide";
    erreur.push("Veuillez saisir un numero valide");
}else{
    document.getElementById("erreurNumero").textContent ="";
}

if (rue.length < 2 || rue.length >150){
    document.getElementById("erreurRue").textContent ="Veuillez saisir un nom de rue valide";
    erreur.push("Veuillez saisir un nom de rue valide");
}else{
    document.getElementById("erreurRue").textContent ="";
}

if (!numeroRegex.test(codePostal)){
    document.getElementById("erreurPostal").textContent ="Veuillez saisir une adresse valide";
    erreur.push("Veuillez saisir une adresse valide");
}else{
    document.getElementById("erreurPostal").textContent ="";
}

if (ville.length < 2 || ville.length >100){
    document.getElementById("erreurVille").textContent ="Veuillez saisir une adresse valide";
    erreur.push("Veuillez saisir une adresse valide");
}else{
    document.getElementById("erreurVille").textContent ="";
}

if (!emailRegex.test(email)){
    document.getElementById("erreurEmail").textContent ="Format d'email invalide";
    erreur.push("Format d'email invalide");
}else{
    document.getElementById("erreurEmail").textContent ="";
} 

if (!phoneRegex.test(telephone)){
    document.getElementById("erreurTel").textContent ="Format de telephone invalide";
    erreur.push("Format de telephone invalide");
}else{
    document.getElementById("erreurTel").textContent ="";
} 

if (!selectHotel){
    document.getElementById("erreurHotel").textContent ="Veuillez choisir un logement";
    erreur.push("Veuillez choisir un logement");
}else{
    document.getElementById("erreurHotel").textContent ="";
} 

if (nbPersonnes < 1 || nbPersonnes > 2 || nbPersonnes === ""){
    document.getElementById("erreurNombre").textContent ="Veuillez saisir un nombre 1 à 2 personnes maximum";
    erreur.push("Veuillez saisir un nombre 1 à 2 personnes maximum");
}else {
    document.getElementById("erreurNombre").textContent ="";
} 

if (isNaN(arrivee) || isNaN(depart)) {
    // Vérifier si les dates sont invalides
    document.getElementById("erreurArrivee").textContent = "Veuillez choisir une date valide d'arrivée";
    document.getElementById("erreurDepart").textContent = "Veuillez choisir une date valide de départ";
    erreur.push("La date d'arrivée ne peut pas être après la date de départ");
} else if (arrivee >= depart) {
    // Vérifier si la date d'arrivée est après la date de départ
    document.getElementById("erreurArrivee").textContent = "La date d'arrivée ne peut pas être après la date de départ";
    document.getElementById("erreurDepart").textContent = "La date d'arrivée ne peut pas être après la date de départ";
    erreur.push("La date d'arrivée ne peut pas être après la date de départ");
} else {
    // Si tout est bon
    document.getElementById("erreurArrivee").textContent = "";
    document.getElementById("erreurDepart").textContent = "";
}

/*if ((repas)) {
    // Si au moins une checkbox est cochée, vérifier si un menu est sélectionné
    if (!selectRepas) {
        erreurMenu.textContent = "Veuillez choisir un menu.";
        erreur.push("Menu obligatoire");
    } else {
        erreurMenu.textContent = "";
    }
} else {
    // Si aucune checkbox n'est cochée, on supprime l'erreur
    erreurMenu.textContent = "";
}*/

     
//
//  calcul de la reservation
//

const unJour = 24 * 60 * 60 * 1000;
const nuit = Math.round((depart-arrivee)/unJour);
let total = 0;

if(chambreFeu === "igloos") total += 500 * nuit;
if(chambreFeu === "laponne") total += 250 * nuit;
if(document.getElementById("chauffeur").checked) total += 11 * nuit;
if(document.getElementById("petitDejeuner").checked) total += 15 *nbPersonnes * nuit;
//if(document.getElementById("midi").checked) total += 25 * nbPersonnes;
//if(document.getElementById("soir").checked) total += 25 * nbPersonnes;
if(document.getElementById("guide").checked) total += 20;

//
//      on affiche les erreur en 1er et si ok on affiche un resumer 
//

let modalResumer = document.getElementById("modalResultat");
let erreurForm = modalResumer.querySelector("#erreur");
let resultatForm = modalResumer.querySelector("#resultat");


console.log(modal);


if (erreur.length > 0){
    erreurForm.innerHTML = "";
    resultatForm.innerHTML ="";
}else {
    erreurForm.innerHTML ="";
    let chauffeurText = document.getElementById("chauffeur").checked ? "Chauffeur : Oui" : "Chauffeur : Non";
    resultatForm.innerHTML = `
    <strong>Formulaire valide</strong> <br>
            <strong>Nom :</strong> ${nomcomplet} <br>
            <strong>Adresse :</strong> ${numeroRue} ${rue} <br>
            <stong></strong>${codePostal}${ville}<br>
            <strong>Email :</strong> ${email} <br>
            <strong>Téléphone :</strong> ${telephone} <br>
            <strong>Nombre de personne :</strong> ${nbPersonnes} <br>
            <strong>Date d'arrivée :</strong> ${arrivee.toLocaleDateString()} <br>
            <strong>Date de départ :</strong> ${depart.toLocaleDateString()} <br>
            <strong>Chauffeur :</strong> ${chauffeurText} <br>
            <strong>Hotel :</strong> ${selectHotel} <br>
            <strong>Total :</strong> ${total} € <br>
            <button type="submit">Valider</button>
            <button id="reset" type="reset">Reset</button>
    `;
    modalResumer.style.display = "flex";
}


let resetButton = document.getElementById("reset");

if (resetButton) {
    resetButton.addEventListener("click", function() {
        hotel();
        //regime();
        document.getElementById("erreurNom").textContent = "";
        document.getElementById("erreurNumero").textContent = "";
        document.getElementById("erreurRue").textContent = "";
        document.getElementById("erreurPostal").textContent = "";
        document.getElementById("erreurVille").textContent = "";
        document.getElementById("erreurEmail").textContent = "";
        document.getElementById("erreurTel").textContent = "";
        document.getElementById("erreurHotel").textContent = "";
        document.getElementById("erreurNombre").textContent = "";
        document.getElementById("erreurArrivee").textContent = "";
        document.getElementById("erreurDepart").textContent = "";
        document.getElementById("resultat").textContent = "";
    });
} else {
    console.error("Le bouton 'reset' n'a pas été trouvé !");
}

})



});
