// Allias
type Article = {
  nom: string;
  prix: number;
  quantite: number;
  categorie?: string;
};

function totalArticle(article: Article): number {
  return article.prix * article.quantite;
}


const article1: Article = {
    nom: "clavier",
    prix: 12000,
    quantite: 2,
}

const article2: Article = {
    nom: "Souris",
    prix: 3500,
    quantite: 2,
}


const article3: Article = {
    nom: "Moniteur",
    prix: 125000,
    quantite: 6,
}

console.log(totalArticle(article1))
console.log(totalArticle(article2))
console.log(totalArticle(article3))



const panier: Article[] = [
  {
    nom: "Ordinateur",
    prix: 250000,
    quantite: 2
  },
  {
    nom: "Souris",
    prix: 5000,
    quantite: 3
  },
  {
    nom: "Clavier",
    prix: 15000,
    quantite: 1
  }
];

// Calcul du montant total
let total = 0;

for (const article of panier) {
  total += totalArticle(article);
}

console.log(`Montant total : ${total} FCFA`);



type Identifiant = string | number;                          // une union
type Statut = "en_attente" | "paye" | "annule";              // union de littéraux
type Operation = (a: number, b: number) => number;           // un type de fonction

const additionner: Operation = (a, b) => a + b;              // a et b sont typés par l'alias

let statut: Statut = "paye";
// statut = "livre";   // erreur : "livre" n'est pas dans l'union

type AvecDate = { creeLe: Date };
type Commande = Article & AvecDate;   // nom, prix, quantite, categorie? ET creeLe