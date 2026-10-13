function repeter<T>(valeur: T, fois: number): T[] {
  const resultat: T[] = [];
  for (let i = 0; i < fois; i++) {
    resultat.push(valeur);
  }
  return resultat;
}

const a = repeter("ab", 3);   // T devient string  → string[]
const b = repeter(7, 2);      // T devient number  → number[]

function dernier<T>(tab: T[]): T | undefined {
  let tb1 = tab.length - 1;
  return tab[tb1]
}

function dernierAny(tab: any[]): any {
    
}

console.log(dernier([1, 2, 3]));        // 3
console.log(dernier(["a", "b"]));       // b
console.log(dernier([]));               // undefined

