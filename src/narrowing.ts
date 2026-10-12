function formater(valeur: string | number): string {
  
  if (typeof valeur === "string") {
    return valeur.toUpperCase();   
  }
  return valeur.toFixed(2);      
}

console.log(formater(23));
console.log(formater('papa'));

function longueur(texte: string | null | undefined): number {
  if (texte) {
    return texte.length;   // ici : string
  }
  return 0;
}

console.log(longueur("String"))


type Chat = { miauler: () => void };
type Chien = { aboyer: () => void };

function parler(animal: Chat | Chien) {
  if ("miauler" in animal) {
    animal.miauler();   // ici : Chat
  } else {
    animal.aboyer();    // ici : Chien
  }
}

const monChat : Chat = {
  miauler: () => console.log("miaounnn")
};

const monChien : Chien = {
  aboyer: ()=> console.log("wouwouwowu")
};

parler(monChat);
parler(monChien);


function afficher(valeur: Date | string): string {
  if (valeur instanceof Date) {
    return valeur.toLocaleDateString();   // ici : Date
  }
  return valeur;                          // ici : string
}

const date = new Date(2026, 9, 12);
console.log(afficher(date));

const message= "Bonjour Campbell";
console.log(afficher(message));


type Paiement =
  | { methode: "carte"; numero: string }
  | { methode: "mobile"; operateur: string; telephone: string }
  | { methode: "especes" };

function decrire(p: Paiement): string {
  switch (p.methode) {
    case "carte":
      return `Carte ${p.numero}`;                    // ici : le cas carte
    case "mobile":
      return `${p.operateur} au ${p.telephone}`;     // ici : le cas mobile
    case "especes":
      return "Paiement en espèces";
  }
}


// objet paiement1 
const paiement1: Paiement = {
  methode: 'carte', numero:"010151567"
};

const paiement2: Paiement = {
  methode: 'especes'
};

const paiement3: Paiement = {
  methode: "mobile", operateur: 'Orange', telephone: "010151567"
};

console.log(decrire(paiement1))
console.log(decrire(paiement2))
console.log(decrire(paiement3))