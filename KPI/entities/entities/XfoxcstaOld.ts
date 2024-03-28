import { Column, Entity } from "typeorm";

@Entity("XFOXCSTA-old", { schema: "RefasKpi" })
export class XfoxcstaOld {
  @Column("int", { name: "FORNITORE_COD", nullable: true })
  fornitoreCod: number | null;

  @Column("varchar", { name: "FORNITORE_DES", nullable: true, length: 50 })
  fornitoreDes: string | null;

  @Column("varchar", {
    name: "FORNITORE_CLASSE_ABC",
    nullable: true,
    length: 50,
  })
  fornitoreClasseAbc: string | null;

  @Column("varchar", { name: "INDIRIZZO_FOR", nullable: true, length: 50 })
  indirizzoFor: string | null;

  @Column("varchar", { name: "LOCALITA_FOR", nullable: true, length: 50 })
  localitaFor: string | null;

  @Column("varchar", { name: "PROVINCIA_FOR", nullable: true, length: 50 })
  provinciaFor: string | null;

  @Column("int", { name: "CAP_FOR", nullable: true })
  capFor: number | null;

  @Column("varchar", { name: "NAZIONE_FOR", nullable: true, length: 50 })
  nazioneFor: string | null;

  @Column("int", { name: "MACRO_COD", nullable: true })
  macroCod: number | null;

  @Column("varchar", { name: "MACRO_DES", nullable: true, length: 50 })
  macroDes: string | null;

  @Column("int", { name: "CLASSE_COD", nullable: true })
  classeCod: number | null;

  @Column("varchar", { name: "CLASSE_DES", nullable: true, length: 50 })
  classeDes: string | null;

  @Column("varchar", { name: "FATTURATO", nullable: true, length: 50 })
  fatturato: string | null;

  @Column("int", { name: "NUM_ORDINI_EMESSI", nullable: true })
  numOrdiniEmessi: number | null;

  @Column("int", { name: "NUM_CODICI_GESTITI", nullable: true })
  numCodiciGestiti: number | null;

  @Column("int", { name: "NUM_PROD_IMPATTATI", nullable: true })
  numProdImpattati: number | null;

  @Column("varchar", { name: "STRATEGICO", nullable: true, length: 50 })
  strategico: string | null;

  @Column("varchar", { name: "PESO_FATTURATO", nullable: true, length: 50 })
  pesoFatturato: string | null;

  @Column("varchar", { name: "PESO_NUMERO_ORDINI", nullable: true, length: 50 })
  pesoNumeroOrdini: string | null;

  @Column("varchar", {
    name: "PESO_CODICI_GESTITI",
    nullable: true,
    length: 50,
  })
  pesoCodiciGestiti: string | null;

  @Column("varchar", {
    name: "PESO_PROD_IMPATTANTI",
    nullable: true,
    length: 50,
  })
  pesoProdImpattanti: string | null;

  @Column("int", { name: "PESO_STRATEGICO", nullable: true })
  pesoStrategico: number | null;

  @Column("varchar", { name: "PESO_TOTALE", nullable: true, length: 50 })
  pesoTotale: string | null;

  @Column("varchar", { name: "OTD", nullable: true, length: 50 })
  otd: string | null;

  @Column("int", { name: "PPM", nullable: true })
  ppm: number | null;

  @Column("decimal", {
    name: "LATIDUDE",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  latidude: string | null;

  @Column("decimal", {
    name: "LONGITUDE",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  longitude: string | null;

  @Column("varchar", { name: "LATIDUDINE", nullable: true, length: 50 })
  latidudine: string | null;

  @Column("varchar", { name: "LONGITUDINE", nullable: true, length: 50 })
  longitudine: string | null;
}
