const panier : {
    nom: string,
    prix: number,
    quantite: number,
    categorie?: string  
} [] = [
    {
        nom: "attieke",
        prix: 500,
        quantite: 15,
        categorie: "resistance"
    },
    {
        nom: "t-shirt",
        prix: 1500,
        quantite: 10,
        categorie: "vêtements"
    },
    {
        nom: "yaourt",
        prix: 350,
        quantite: 15,
        categorie: "produits laitier"
    }
];

function totalArticle(article:{prix: number, quantite: number}) {
    return article.prix * article.quantite;
}

console.log(totalArticle({prix: 500, quantite: 15}));
console.log(totalArticle({prix: 1500, quantite: 10}));


function totalPanier(articles: { prix: number; quantite: number }[]): number {
  let total = 0;                 
  for (const elements of articles) {
    total += totalArticle(elements);         
  }
  return total;                  
}

console.log(totalPanier(panier));


function afficherMessage(message: string, valeur: number | string) : void {
    console.log(`Message: ${message}, est d'une valeur de ${valeur}`)
}


afficherMessage("Le total de vos articles", totalPanier(panier));


let reduction: number | null = null;

function appliquerReduction(total: number, reduction: number | null) : number {
    if(reduction === null) {
        return total
    } else{
        return total - (total * reduction) / 100;
    }  
}

console.log(appliquerReduction(27750, null));  
console.log(appliquerReduction(27750, 10));   

const premier = panier[0];
if(premier !== undefined) {
    console.log(premier.nom)
}