function doubler(valeur: string | number): string | number {
    if(typeof valeur === "number") {
        return valeur * 2
    }

    return valeur.repeat(2);
}


console.log(doubler(21));     // 42
console.log(doubler("ab"));   // abab
console.log(doubler(0));      // 0


type Forme = 
    | {type: "cercle"; rayon: number}
    | {type: "rectangle"; largeur: number; hauteur: number}
    | {type: "carre"; cote: number}


function aire(forme: Forme) : number {
    switch (forme.type) {
        case "cercle":
            return Math.PI * forme.rayon ** 2;
        case "rectangle":
            return forme.largeur * forme.hauteur;
        case "carre":
            return forme.cote * forme.cote;
    }
};


console.log(aire({ type: "cercle", rayon: 2 }));                        // 12.566370614359172
console.log(aire({ type: "rectangle", largeur: 3, hauteur: 4 }));       // 12
console.log(aire({ type: "carre", cote: 5 }));   // 25