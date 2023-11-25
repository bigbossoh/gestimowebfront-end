/* tslint:disable */
export interface ReservationRequestDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  idAppartementdDto?: number;
  dateDebut?: string;
  dateFin?: string;
  idClient?: number;
  idBien?: number;
  idUtilisateur?: number;
  nom?: string;
  prenom?: string;
  pourcentageReduction?: number;
  montantReduction?: number;
  soldReservation?: number;
  montantPaye?: number;
  montantReservation?: number;
  nmbreAdulte?: number;
  nmbrEnfant?: number;
}
