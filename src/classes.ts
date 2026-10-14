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
// console.log(j.resume());   // Awa : 10 points

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
// console.log(etudiant1.resume());


class Voiture {
  nom: string;
  modele: string;

  constructor(nom: string, modele: string){
    this.nom = nom;
    this.modele = modele;
  }

  choisir() : string {
    return `${this.nom} votre modèle est le : ${this.modele}`;
  }
}

// const mercedes = new Voiture("mercedes", "AMG 45")
// console.log(mercedes.choisir());

// modificateur d'accès 
// public 
// private
// protected
// readonly

class Coffre {
  private code: string;
  readonly proprietaire: string;

  constructor(proprietaire: string, code: string) {
    this.proprietaire = proprietaire;
    this.code = code;
  }

  ouvrir(essai: string) : boolean {
    return essai === this.code;
  }
}

const c = new Coffre("Koffi", "1234");
// console.log(c.ouvrir("10000"))

class Wave {
  constructor(
    readonly proprietaire: string,
    private code: string,
  ) {}

  ouvrir(essai: string) : boolean {
    return essai === this.code
  }
}

const Waveuser = new Wave('Campbell', '301234');
const essai1 = Waveuser.ouvrir("301234");

// console.log(essai1);


class Aniaml {
  constructor(protected nom: string) {}

  parler(): string {
    return `${this.nom} fait un bruit`;
  }
}

class Chien extends Aniaml {
  constructor(nom: string, private race: string) {
    super(nom);
  }

  override parler(): string {
    return `${this.nom} (${this.race}) aboie`;
  }
}

console.log(new Chien("Rex", "berger").parler());


