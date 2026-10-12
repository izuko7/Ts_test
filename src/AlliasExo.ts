type Article = {
    nom: string;
    prix: number;
    quantite: number;
    categorie?: string;
};

type Statut = "en_attente" | "paye" | "annule"