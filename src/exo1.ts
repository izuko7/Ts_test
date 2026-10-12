const produit : {nom: string, prix: number, promo?: boolean} = {
    nom: "Mandarine",
    prix: 200,
    promo: true
};


let code : string | number
code = 12;
code = "number";

function prixFinal(prix: number, reduction: number = 0) {
    return prix - (prix * reduction) / 100;
}


console.log(prixFinal(200));
console.log(prixFinal(200, 10));
console.log(prixFinal(produit.prix, 30));