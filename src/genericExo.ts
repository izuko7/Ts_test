// function repeter<T>(valeur: T, fois: number): T[] {
//   const resultat: T[] = [];
//   for (let i = 0; i < fois; i++) {
//     resultat.push(valeur);
//   }
//   return resultat;
// }

// const a = repeter("ab", 3);   // T devient string  → string[]
// const b = repeter(7, 2);      // T devient number  → number[]

// function dernier<T>(tab: T[]): T | undefined {
//   let tb1 = tab.length - 1;
//   return tab[tb1]
// }

// function dernierAny(tab: any[]): any {
//     return tab[tab.length - 1];
// }

// console.log(dernier([1, 2, 3]));        // 3
// console.log(dernier(["a", "b"]));       // b
// console.log(dernier([]));               // undefined


// const x = dernierAny([1, 2, 3]);   // TS pense : any (il ne sait plus que c'est un nombre)
// const y = dernier([1, 2, 3]);      // TS pense : number | undefined


// type Resultat<T> =
//   | { succes: true; donnees: T }
//   | { succes: false; erreur: string };

// type Eleve = { nom: string; note: number };


type Article = {
  nom: string;
  prix: number;
  quantite: number;
  categorie?: string;
};

// // Tableau contenant 3 articles
const panier: Article[] = [
  {
    nom: "attieke",
    prix: 250000,
    quantite: 2,
    categorie: "Informatique"
  },
  {
    nom: "Souris Logitech",
    prix: 5000,
    quantite: 3,
    categorie: "Accessoires"
  },
  {
    nom: "Clavier",
    prix: 15000,
    quantite: 1
  }
];


// function chercherEleve(eleves: Eleve[], nom: string): Resultat<Eleve> {
//   const trouve = eleves.find((e) => e.nom === nom);
//   if (trouve === undefined) {
//     return { succes: false, erreur: `Élève ${nom} introuvable` };
//   }
//   return { succes: true, donnees: trouve };
// }


// function chercherArticle(articles: Article[], nom: string): Resultat<Article> {
//     const trouver = articles.find((a) => a.nom === nom);
//     if (trouver === undefined) {
//     return { succes: false, erreur: `Articles ${nom} introuvable` };
//   }
//   return { succes: true, donnees: trouver };
// }

// const r  = chercherArticle(panier, "attieke")

// function afficherRecherche(nom: string) : void {
//     const r = chercherArticle(panier, nom);
//     if(r.succes) {
//         console.log(r.donnees)
//     }else {
//         console.log(r.erreur);
        
//     }
// }

// afficherRecherche("Clavier");   // existe dans ton panier → branche succès
// afficherRecherche("pizza");     // n'existe pas → branche erreur


const article1: Article = {
  nom: "Ordinateur",
  prix: 250000,
  quantite: 2
};

const article2: Article = {
  nom: "Souris",
  prix: 5000,
  quantite: 3
};



function plusCher<T extends { prix: number}>(a: T, b: T) : T {
    return a.prix > b.prix ? a : b;
} 

const gagnant = plusCher(article1, article2);


console.log(gagnant)