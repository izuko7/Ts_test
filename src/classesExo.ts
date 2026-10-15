class CompteBancaire {
    private solde: number;
    readonly titulaire: string;

    constructor(titulaire: string, solde: number = 0){
        this.titulaire = titulaire;
        this.solde = solde;
    }

    public getSolde() : number {
        return this.solde
    }

    deposer(montant: number) : void {
        if(montant > 0) {
            this.solde += montant;
        }
    }

    retirer(montant: number) : boolean {
        if(montant > 0 && montant <= this.solde){
            this.solde -= montant
            return true
        }
        return false
    }


    consulter() : number {
        return this.solde
    }

    resume() : string {
        return `Votre solde est de : ${this.solde}`
    }
}


const compte = new CompteBancaire("Campbell", 0);
compte.deposer(5000);
console.log(compte.resume());
console.log(compte.retirer(2000));    // attendu : true
console.log(compte.retirer(10000));   // attendu : false
console.log(compte.consulter());      // attendu : 3000


class CompteEpargne extends CompteBancaire {
  constructor(titulaire: string, solde: number, private taux: number) {
    super(titulaire, solde);
  }

  ajouterInterets(): void {
    const interets = this.consulter() * this.taux / 100;
    this.deposer(interets)
  }

  override retirer(montant: number): boolean {
  if (montant > this.consulter() / 2) {
    return false;
  }
  return super.retirer(montant);
}
}


const epargne = new CompteEpargne("Campbell", 10000, 5);
epargne.ajouterInterets();
console.log(epargne.consulter());   // attendu : 10500


console.log(epargne.retirer(6000));   // false (6000 > 5250)
console.log(epargne.retirer(4000));   // true
console.log(epargne.consulter());     // 6500 (et non 6000)


abstract class Employe {

    abstract salaire() : number

    fiche() : string {
        return `Salaire : ${this.salaire()} FCFA`
    }
}

class Permanent extends Employe {
    constructor(private salaireFixe : number) {
        super();
    }

    override salaire(): number {
        return this.salaireFixe;
    }
}


class Stagiaire extends Employe {
    constructor( private indemnite : number) {
        super();
    }

    override salaire(): number {
        return this.indemnite
    }
}


const permanent = new Permanent(350000);
const stagiaire = new Stagiaire(75000);


console.log(permanent.fiche());
console.log(stagiaire.fiche());