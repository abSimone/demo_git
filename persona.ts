export interface Persona {
  nome: string;
  congome: string;
  indirizzo: Indirizzo;
}

export interface Indirizzo {
  strada: string;
  civico: number | undefined;
}
