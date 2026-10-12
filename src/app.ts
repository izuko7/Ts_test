// syntaxe de base 
const nom: string = "42";
// nom = 24; c'est qu'on appelle une interferance en Ts 
const age : number = 20;
const estEtudiant : boolean = false; 

console.log(nom);
console.log(age, estEtudiant);


// les tableaux 
const note : number [] =  [12, 4, 6];
const noms : Array<string> = ["Awa",  "Laurant", "12"];
note.push(13);

console.log(note, noms);


// Les objets 
// le symbole ? rend la propriété optionnelle 

const user : {nom: string, age: number; email?: string} = {
    nom: "Koffi",
    age: 22
};

// Les unions 
let id : number | string;
id = 12;
id = "KOolU8oJJSbfbutFR803DEIQGdjdmLWm1+v48CrnXNI=";

console.log(id);

// any & unknown 
// let a: any = 5;
// a.rien();

// let b: unknown = 5;
// b.tofixed();

// les functions en Ts 
function addition(a: number, b:number) {
    return a + b;
}

console.log(addition(1, 3));

const saluer = (nom: string, titre?: string): string =>
  titre ? `${titre} ${nom}` : nom;

function log(message: string, niveau: string = "info"): void {
  console.log(`[${niveau}] ${message}`);
}

