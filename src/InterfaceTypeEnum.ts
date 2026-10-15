interface Livre {titre: string; auteur: string; prix: number}

interface LivreNumerique extends Livre {tailleMo: number}

interface Livre { isbn?: string} 

const livre1: Livre = {
  titre: "Le veille homme et la mer",
  auteur: "Ernest Hemmigwah",
  prix: 5000,
  isbn: "inconnu"
};

const livre: Livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  prix: 5000
};

const livreNumerique: LivreNumerique = {
  titre: "Apprendre TypeScript",
  auteur: "Campbell",
  prix: 10000,
  tailleMo: 15
};


console.log(livre, livreNumerique, livre1)

type Format = "papier" | "pdf" | "epub"
function extension(f: Format) : string {
    switch (f) {
        case "epub": 
            return `Le type du livre est : .epub`
        case "papier":
             return `Le type du livre est : papier`
        case "pdf" :
             return `Le type du livre est : .pdf`
    }   
}

console.log(extension("epub"));

interface Affichable {afficher() : string} 

class Catalogue implements Affichable {
  constructor(private nom: string) {}
  afficher(): string {
    return `Produit : ${this.nom}`;
  }
}

type Coordonnee = [x: number, y: number] 
function distance(a: Coordonnee, b: Coordonnee): number {

    const [x1, y1] = a;
    const [x2, y2] = b;

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

console.log(distance([0, 0], [3, 4]));


function chercherPrix(nom: string): [boolean, number] {
  if (nom === "ordinateur") {
    return [true, 250000];
  }

  if (nom === "souris") {
    return [true, 5000];
  }

  return [false, 0];
}


const [trouve, prix] = chercherPrix("ordinateur");

console.log(trouve, prix);  

enum Role {
  Admin = "ADMIN",
  Editeur = "EDITEUR",
  Lecteur = "LECTEUR"
}

function permissions(role: Role): string {
  switch (role) {
    case Role.Admin:
      return "Toutes les permissions";

    case Role.Editeur:
      return "Créer et modifier du contenu";

    case Role.Lecteur:
      return "Consulter le contenu";
  }
}

console.log(permissions(Role.Admin));


type Niveau = "debutant" | "confirme" | "expert";

let niveau: Niveau = "debutant";

console.log(niveau);

niveau = 'expert'

console.log(niveau);