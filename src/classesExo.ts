class CompteBancaire {
    private solde: number;
    readonly titulaire: string;

    constructor(titulaire: string, solde: number = 0){
        this.titulaire = titulaire;
        this.solde = solde;
    }

    deposer(montant: number) : void {
        this.solde += montant;
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
    super(titulaire);
  }

  ajouterInterets(): void {
    // calculer solde × taux / 100, puis le déposer
    montant * this.taux / 100
  }

  override deposer(montant: number): void {
      
  }
}