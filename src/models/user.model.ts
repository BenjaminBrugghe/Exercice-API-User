export default class User {
  // Attributs
  id: number;
  nom: string;
  prenom: string;
  date_inscription: Date; // Format d/m/y hh:mm:ss
  date_de_naissance?: string;
  nationalite?: string;

  // Constructeur
  constructor(
    id: number,
    nom: string,
    prenom: string,
    date_de_naissance?: string,
    nationalite?: string
  ) {
    (this.id = id), (this.nom = nom);
    this.prenom = prenom;
    this.date_inscription = new Date();
    this.date_de_naissance = date_de_naissance;
    this.nationalite = nationalite;
  }
}
