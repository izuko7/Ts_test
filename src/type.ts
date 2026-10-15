// types etendre
type AnimalT = {nom: string};
type ChienT = AnimalT& {race: string};


// Interfaces etendre
interface Animal {nom: string}
interface Chien extends Animal {race: string}


// fusion 
interface Config { port: number}
interface Config { debug: boolean}

type Option = {port: number};
// type Option = {debug: boolean} Duplication imposible


// implements
interface Affichable {
  afficher(): string;
}

class Produit implements Affichable {
  constructor(private nom: string) {}
  afficher(): string {
    return `Produit : ${this.nom}`;
  }
}

// tuples 
const point: [number, number] = [10, 20];
const entree: [string, number] = ["attieke", 500];

// const faux: [string, number] = [500, "attieke"];   // mauvais ordre
// const court: [string, number] = ["attieke"];       // il manque un élément