class Joueur {
  nom: string;
  points: number;

  constructor(nom: string) {
    this.nom = nom;
    this.points = 0;
  }

  marquer(valeur: number): void {
    this.points += valeur;
  }

  resume(): string {
    return `${this.nom} : ${this.points} points`;
  }
}

const j = new Joueur("Awa");
j.marquer(10);
console.log(j.resume());   // Awa : 10 points

class Etudiant {
    nom: string;
    note: number;

    constructor(nom: string) {
        this.nom = nom;
        this.note = 0;
    }

    noter(valeur: number): void {
    this.note += valeur;
    }

    resume() : string {
        return`${this.nom} : ${this.note} / 20`;
    }
}


const etudiant1 = new Etudiant("Junior");
etudiant1.noter(10)
console.log(etudiant1.resume());