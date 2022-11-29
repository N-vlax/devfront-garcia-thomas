function Chaussure(img,nom,cat,prix){
    this.img = img,
    this.nom = nom,
    this.cat = cat,
    this.prix = prix,
}

const Chaussure1 = new Chaussure('src/Chaussure 1.webp','Chaussure Forum Low','Originals',130);
const Chaussure2 = new Chaussure('src/Chaussure 2.webp','Chaussure basse Forum Exhibit','Originals',120);
const Chaussure3 = new Chaussure('src/Chaussure 3.webp','Chaussure Ultraboost 22','Performance',80);
const Chaussure4 = new Chaussure('src/Chaussure 4.webp','Chaussure Superstar','Originals',60);
const Chaussure5 = new Chaussure('src/Chaussure 5.webp','Chaussure Daily 3.0','Sportwear',200);
const Chaussure6 = new Chaussure('src/Chaussure 6.webp','Chaussure Daily 3.2','Sportwear',200);
const Chaussure7 = new Chaussure('src/Chaussure 7.webp','Chaussure Trezoid','Originals',130);
const Chaussure8 = new Chaussure('src/Chaussure 8.webp','Chaussure Forum Low dos','Originals',130);
const Chaussure9 = new Chaussure('src/Chaussure 9.webp','Chaussure M&M S x ADIDAS','Originals',130);

let chaussure = [];
chaussure.push(Chaussure1,Chaussure2,Chaussure3,Chaussure4,Chaussure5,Chaussure6,Chaussure7,Chaussure8,Chaussure9);


/// TEST ///



function savePanier(panier) {
    localStorage.setitem("panier",JSON.stringify(panier))
}

function getPanier() {
    let panier = localStorage.getItem("panier");
    if(panier == null){
        return [];
    }else{
        return JSON.parse(panier)
    }
}

function addPanier(produit){
    let panier = getPanier();
    let foundProduit = panier.find(x => x.id == produit.id)
    if(foundProduit != undefined){ 
        foundProduit.quantite++;    
    }else{ 
        Produit.quantite = 1;
        panier.push(produit);

    }
    savePanier(panier);

}

function removeFromPanier(produit) {
    let panier = getPanier();
    panier = panier.filter(x => x.id != produit.id);
}

function changeQuantite(produit, quantite) {
    let panier = getPanier();
    let foundProduit = panier.find(x => x.id == produit.id );
    if (foundProduit != undefined) {
        foundProduit.quantite += quantite;
        if (foundProduit.quantite <= 0){
            removeFromPanier(foundProduit);
        }else{
            savePanier(panier);
        }
    }
}


function getNombreProduit(){
    let panier = getPanier();
    let nombre = 0
    for(let produit of panier){
        nombre += produit.quantite;
    }
    return nombre
}


function GetTotal(){
    let panier = getPanier();
    let total = 0
    for(let produit of panier){
        total += produit.quantite * produit.prix;
    }
    return total;
}