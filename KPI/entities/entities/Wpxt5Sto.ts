import { Column, Entity } from "typeorm";

@Entity("WPXT5STO", { schema: "RefasKpi" })
export class Wpxt5Sto {
  @Column("decimal", {
    name: "DATA_ANNO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  dataAnno: string | null;

  @Column("decimal", {
    name: "DATA_MESE",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  dataMese: string | null;

  @Column("decimal", {
    name: "DATA_GIORNO",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  dataGiorno: string | null;

  @Column("varchar", { name: "ARTICOLO", nullable: true, length: 4 })
  articolo: string | null;

  @Column("decimal", {
    name: "COLLAUDO",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  collaudo: string | null;

  @Column("varchar", { name: "DATA_ORA", nullable: true, length: 19 })
  dataOra: string | null;

  @Column("varchar", { name: "OPERATORE", nullable: true, length: 15 })
  operatore: string | null;

  @Column("varchar", { name: "PRODOTTO", nullable: true, length: 25 })
  prodotto: string | null;

  @Column("decimal", {
    name: "TEMPO_CICLO",
    nullable: true,
    precision: 5,
    scale: 1,
  })
  tempoCiclo: string | null;

  @Column("decimal", {
    name: "ESITO_PESO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  esitoPeso: string | null;

  @Column("decimal", {
    name: "ESITO_PRIMA_CONTATTAZIONE",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  esitoPrimaContattazione: string | null;

  @Column("decimal", {
    name: "ESITO_COPPIA_A_VUOTO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  esitoCoppiaAVuoto: string | null;

  @Column("decimal", {
    name: "ESITO_COPPIA_POLO_CHIUSO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  esitoCoppiaPoloChiuso: string | null;

  @Column("decimal", {
    name: "ESITO_CDT",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  esitoCdt: string | null;

  @Column("decimal", {
    name: "ESITO_SCARTO_OPERATORE",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  esitoScartoOperatore: string | null;

  @Column("decimal", {
    name: "ESITO_TEST_TOTALE",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  esitoTestTotale: string | null;

  @Column("varchar", { name: "ESCLUDI_PESO", nullable: true, length: 5 })
  escludiPeso: string | null;

  @Column("varchar", {
    name: "ESCLUDI_PRIMO_CONTATTO",
    nullable: true,
    length: 5,
  })
  escludiPrimoContatto: string | null;

  @Column("varchar", {
    name: "ESCLUDI_COPPIA_A_VUOTO",
    nullable: true,
    length: 5,
  })
  escludiCoppiaAVuoto: string | null;

  @Column("varchar", {
    name: "ESCLUDI_COPPIA_POLO_CHIUSO",
    nullable: true,
    length: 5,
  })
  escludiCoppiaPoloChiuso: string | null;

  @Column("varchar", { name: "ESCLUDI_CDT", nullable: true, length: 5 })
  escludiCdt: string | null;

  @Column("decimal", { name: "PESO_G", nullable: true, precision: 5, scale: 0 })
  pesoG: string | null;

  @Column("decimal", {
    name: "PESO_MAX_G",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  pesoMaxG: string | null;

  @Column("decimal", {
    name: "PESO_MIN_G",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  pesoMinG: string | null;

  @Column("decimal", {
    name: "ANGOLO_PRIMO_CONTATTO",
    nullable: true,
    precision: 5,
    scale: 1,
  })
  angoloPrimoContatto: string | null;

  @Column("decimal", {
    name: "ANGOLO_PRIMO_CONTATTO_MAX",
    nullable: true,
    precision: 5,
    scale: 1,
  })
  angoloPrimoContattoMax: string | null;

  @Column("decimal", {
    name: "ANGOLO_PRIMO_CONTATTO_MIN",
    nullable: true,
    precision: 5,
    scale: 1,
  })
  angoloPrimoContattoMin: string | null;

  @Column("decimal", {
    name: "COPPIA_A_VUOTO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  coppiaAVuoto: string | null;

  @Column("decimal", {
    name: "COPPIA_A_VUOTO_MAX",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  coppiaAVuotoMax: string | null;

  @Column("decimal", {
    name: "COPPIA_A_VUOTO_MIN",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  coppiaAVuotoMin: string | null;

  @Column("decimal", {
    name: "ANGOLO_FINE_MISURA_CAV",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  angoloFineMisuraCav: string | null;

  @Column("decimal", {
    name: "COPPIA_POLO_CHIUSO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  coppiaPoloChiuso: string | null;

  @Column("decimal", {
    name: "COPPIA_POLO_CHIUSO_MAX",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  coppiaPoloChiusoMax: string | null;

  @Column("decimal", {
    name: "COPPIA_POLO_CHIUSO_MIN",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  coppiaPoloChiusoMin: string | null;

  @Column("decimal", { name: "VOLT", nullable: true, precision: 5, scale: 0 })
  volt: string | null;

  @Column("decimal", {
    name: "VOLT_MAX",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  voltMax: string | null;

  @Column("decimal", {
    name: "VOLT_MIN",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  voltMin: string | null;

  @Column("decimal", {
    name: "AMPERE_IMPOSTATI",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  ampereImpostati: string | null;

  @Column("decimal", { name: "AMPERE", nullable: true, precision: 5, scale: 0 })
  ampere: string | null;

  @Column("decimal", {
    name: "RANGE_CORRENTE_EROGATA",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  rangeCorrenteErogata: string | null;

  @Column("decimal", {
    name: "DATA_COLLAUDO_ANNO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  dataCollaudoAnno: string | null;

  @Column("decimal", {
    name: "DATA_COLLAUDO_MESE",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  dataCollaudoMese: string | null;

  @Column("decimal", {
    name: "DATA_COLLAUDO_GIORNO",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  dataCollaudoGiorno: string | null;
}
