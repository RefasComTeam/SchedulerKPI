import { Column, Entity } from "typeorm";

@Entity("XFOXCSTA", { schema: "RefasKpi" })
export class Xfoxcsta {
  @Column("varchar", { name: "FORNITORE_COD", nullable: true, length: 6 })
  fornitoreCod: string | null;

  @Column("varchar", { name: "FORNITORE_DES", nullable: true, length: 35 })
  fornitoreDes: string | null;

  @Column("varchar", {
    name: "FORNITORE_CLASSE_ABC",
    nullable: true,
    length: 1,
  })
  fornitoreClasseAbc: string | null;

  @Column("varchar", { name: "INDIRIZZO_FOR", nullable: true, length: 35 })
  indirizzoFor: string | null;

  @Column("varchar", { name: "LOCALITA_FOR", nullable: true, length: 25 })
  localitaFor: string | null;

  @Column("varchar", { name: "PROVINCIA_FOR", nullable: true, length: 2 })
  provinciaFor: string | null;

  @Column("varchar", { name: "CAP_FOR", nullable: true, length: 9 })
  capFor: string | null;

  @Column("varchar", { name: "NAZIONE_FOR", nullable: true, length: 3 })
  nazioneFor: string | null;

  @Column("varchar", { name: "MACRO_COD", nullable: true, length: 4 })
  macroCod: string | null;

  @Column("varchar", { name: "MACRO_DES", nullable: true, length: 50 })
  macroDes: string | null;

  @Column("varchar", { name: "CLASSE_COD", nullable: true, length: 4 })
  classeCod: string | null;

  @Column("varchar", { name: "CLASSE_DES", nullable: true, length: 50 })
  classeDes: string | null;

  @Column("decimal", {
    name: "FATTURATO",
    nullable: true,
    precision: 17,
    scale: 2,
  })
  fatturato: string | null;

  @Column("decimal", {
    name: "NUM_ORDINI_EMESSI",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  numOrdiniEmessi: string | null;

  @Column("decimal", {
    name: "NUM_CODICI_GESTITI",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  numCodiciGestiti: string | null;

  @Column("decimal", {
    name: "NUM_PROD_IMPATTATI",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  numProdImpattati: string | null;

  @Column("varchar", { name: "STRATEGICO", nullable: true, length: 1 })
  strategico: string | null;

  @Column("decimal", {
    name: "PESO_FATTURATO",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  pesoFatturato: string | null;

  @Column("decimal", {
    name: "PESO_NUMERO_ORDINI",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  pesoNumeroOrdini: string | null;

  @Column("decimal", {
    name: "PESO_CODICI_GESTITI",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  pesoCodiciGestiti: string | null;

  @Column("decimal", {
    name: "PESO_PROD_IMPATTANTI",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  pesoProdImpattanti: string | null;

  @Column("decimal", {
    name: "PESO_STRATEGICO",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  pesoStrategico: string | null;

  @Column("decimal", {
    name: "PESO_TOTALE",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  pesoTotale: string | null;

  @Column("decimal", { name: "OTD", nullable: true, precision: 5, scale: 2 })
  otd: string | null;

  @Column("decimal", { name: "PPM", nullable: true, precision: 9, scale: 0 })
  ppm: string | null;

  @Column("decimal", {
    name: "LATIDUDINE",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  latidudine: string | null;

  @Column("decimal", {
    name: "LONGITUDINE",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  longitudine: string | null;
}
