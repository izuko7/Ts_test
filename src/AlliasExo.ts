type Article = {
    nom: string;
    prix: number;
    quantite: number;
    categorie?: string;
};

type Statut = "en_attente" | "paye" | "annule" | "livre"

function libelle(statut: Statut) : string {
    switch(statut) {
        case "annule":
            return "Paiement annulé";
        case "en_attente":
            return "Paiement en attente";
        case "paye":
            return "Paiement effectué avec succès";
        case "livre":
            return "Le livre";
    }
}

console.log(libelle("paye"));
console.log(libelle("livre"));