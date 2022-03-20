export interface ITableReservation {
  data?: string
  idStruttura?: string
  court?: string
}

export interface IReservations {
  giorno: string;
  id: string;
  id_campo: string;
  id_citta: string;
  id_struttura: string;
  id_user: string;
  ora: string;
}

export interface IReservation {
  time : string
  data : string | undefined

}