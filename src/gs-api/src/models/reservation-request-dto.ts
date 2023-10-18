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
  utilisateurIdApp?: string;
  idUtilisateur?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  username?: string;
  mobile?: string;
  dateDeNaissance?: string;
  lieuNaissance?: string;
  typePieceIdentite?: string;
  numeroPieceIdentite?: string;
  dateDebutPiece?: string;
  dateFinPiece?: string;
  nationalite?: string;
  genre?: string;
  montantCautionBail?: number;
  nbreMoisCautionBail?: number;
  nouveauMontantLoyer?: number;
  idBienImmobilier?: number;
  advancePayment?: number;
  remainingPayment?: number;
  soldReservation?: number;
  nmbreHomme?: number;
  nmbreFemme?: number;
  nmbrEnfant?: number;
}
