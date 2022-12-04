// function produit(id,img,nom,cat,prix){
//     this.id = id;
//     this.img = img;
//     this.nom = nom;
//     this.cat = cat;
//     this.prix = prix;
// }

// function createproduit(id, img, nom, cat, prix) {
//     Chaussure = new produit(id, img, nom, cat, prix)
//     return

// let chaussure2 {
    
    let Chaussure1 = {     
        name: "Chaussure Forum Low", 
        cat: "Originals",
        prix: "130€",
        img: "src/Chaussure 1.webp",
      };

    let Chaussure2 = {     
        name: "Chaussure basse Forum Exhibit", 
        cat: "Originals",
        prix: "120€",
        img: "src/Chaussure 2.webp",
      };

    let Chaussure3 = {     
        name: "Chaussure Ultraboost 22", 
        cat: "Performance",
        prix: "80€",
        img: "src/Chaussure 3.webp",
      };

    let Chaussure4 = {     
        name: "Chaussure Superstar", 
        cat: "Originals",
        prix: "60€",
        img: "src/Chaussure 4.webp",
      };

    let Chaussure5 = {     
        name: "Chaussure Daily 3.0", 
        cat: "Sportwear",
        prix: "200€",
        img: "src/Chaussure 5.webp",
      };

    let Chaussure6 = {     
        name: "Chaussure Daily 3.2", 
        cat: "Sportwear",
        prix: "200€",
        img: "src/Chaussure 6.webp",
      };

    let Chaussure7 = {     
        name: "Chaussure Trezoid", 
        cat: "Originals",
        prix: "130€",
        img: "src/Chaussure 7.webp",
      };

    let Chaussure8 = {     
        name: "Chaussure Forum Low dos", 
        cat: "Originals",
        prix: "130€",
        img: "src/Chaussure 8.webp",
      };
    
    let Chaussure9 = {     
        name: "Chaussure M&M S x ADIDAS", 
        cat: "Originals",
        prix: "145€",
        img: "src/Chaussure 9.webp",
      };
// }
        //'1','src/Chaussure 1.webp','Chaussure Forum Low','Originals',130);
// }
//const Chaussure2 = new produit('2','src/Chaussure 2.webp','Chaussure basse Forum Exhibit','Originals',120);
//const Chaussure3 = new produit('3','src/Chaussure 3.webp','Chaussure Ultraboost 22','Performance',80);
//const Chaussure4 = new produit('4','src/Chaussure 4.webp','Chaussure Superstar','Originals',60);
//const Chaussure5 = new produit('5','src/Chaussure 5.webp','Chaussure Daily 3.0','Sportwear',200);
//const Chaussure6 = new produit('6','src/Chaussure 6.webp','Chaussure Daily 3.2','Sportwear',200);
//const Chaussure7 = new produit('7','src/Chaussure 7.webp','Chaussure Trezoid','Originals',130);
//const Chaussure8 = new produit('8','src/Chaussure 8.webp','Chaussure Forum Low dos','Originals',130);
//const Chaussure9 = new produit('9','src/Chaussure 9.webp','Chaussure M&M S x ADIDAS','Originals',130);

// let produit = [];
// produit.push(Chaussure1,Chaussure2,Chaussure3,Chaussure4,Chaussure5,Chaussure6,Chaussure7,Chaussure8,Chaussure9);


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


function changeImg(img){
    img = "src/Chaussure 2.webp"
    return
}