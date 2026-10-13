function repeter<T>(valeur: T, fois: number) : T[] {
    const resultat: T[] = [];
    for(let i = 0; i < fois; i++) {
        resultat.push(valeur)
    }
    return resultat;
}

const a = repeter("ab", 3);
const b = repeter(7, 2);


function dernier<T>(tab: T[]) : T | undefined {
    let taba = tab.length -1
    return tab[taba] 
}

console.log(dernier([1, 2, 3]));        // 3
console.log(dernier(["a", "b"]));       // b
console.log(dernier([]));               // undefined