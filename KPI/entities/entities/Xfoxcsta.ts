import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("XFOXCSTA", { schema: "RefasKpi" })
export class Xfoxcsta {

  @PrimaryColumn("varchar", { name: "FORNITORE_COD", length: 6 })
  FORNITORE_COD: string | null;

  @Column("varchar", { name: "FORNITORE_DES", nullable: true, length: 35 })
  FORNITORE_DES: string | null;

  @Column("varchar", {
    name: "FORNITORE_CLASSE_ABC",
    nullable: true,
    length: 1,
  })
  FORNITORE_CLASSE_ABC: string | null;

  @Column("varchar", { name: "INDIRIZZO_FOR", nullable: true, length: 35 })
  INDIRIZZO_FOR: string | null;

  @Column("varchar", { name: "LOCALITA_FOR", nullable: true, length: 25 })
  LOCALITA_FOR: string | null;

  @Column("varchar", { name: "PROVINCIA_FOR", nullable: true, length: 2 })
  PROVINCIA_FOR: string | null;

  @Column("varchar", { name: "CAP_FOR", nullable: true, length: 9 })
  CAP_FOR: string | null;

  @Column("varchar", { name: "NAZIONE_FOR", nullable: true, length: 3 })
  NAZIONE_FOR: string | null;

  @Column("varchar", { name: "MACRO_COD", nullable: true, length: 4 })
  MACRO_COD: string | null;

  @Column("varchar", { name: "MACRO_DES", nullable: true, length: 50 })
  MACRO_DES: string | null;

  @Column("varchar", { name: "CLASSE_COD", nullable: true, length: 4 })
  CLASSE_COD: string | null;

  @Column("varchar", { name: "CLASSE_DES", nullable: true, length: 50 })
  CLASSE_DES: string | null;

  @Column("decimal", {
    name: "FATTURATO",
    nullable: true,
    precision: 17,
    scale: 2,
  })
  FATTURATO: string | null;

  @Column("decimal", {
    name: "NUM_ORDINI_EMESSI",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  NUM_ORDINI_EMESSI: string | null;

  @Column("decimal", {
    name: "NUM_CODICI_GESTITI",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  NUM_CODICI_GESTITI: string | null;

  @Column("decimal", {
    name: "NUM_PROD_IMPATTATI",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  NUM_PROD_IMPATTATI: string | null;

  @Column("varchar", { name: "STRATEGICO", nullable: true, length: 1 })
  STRATEGICO: string | null;

  @Column("decimal", {
    name: "PESO_FATTURATO",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  PESO_FATTURATO: string | null;

  @Column("decimal", {
    name: "PESO_NUMERO_ORDINI",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  PESO_NUMERO_ORDINI: string | null;

  @Column("decimal", {
    name: "PESO_CODICI_GESTITI",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  PESO_CODICI_GESTITI: string | null;

  @Column("decimal", {
    name: "PESO_PROD_IMPATTANTI",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  PESO_PROD_IMPATTANTI: string | null;

  @Column("decimal", {
    name: "PESO_STRATEGICO",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  PESO_STRATEGICO: string | null;

  @Column("decimal", {
    name: "PESO_TOTALE",
    nullable: true,
    precision: 12,
    scale: 5,
  })
  PESO_TOTALE: string | null;

  @Column("decimal", { name: "OTD", nullable: true, precision: 5, scale: 2 })
  OTD: string | null;

  @Column("decimal", { name: "PPM", nullable: true, precision: 9, scale: 0 })
  PPM: string | null;

  @Column("decimal", {
    name: "LATIDUDINE",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  LATIDUDINE: string | null;

  @Column("decimal", {
    name: "LONGITUDINE",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  LONGITUDINE: string | null;

  @Column("varchar", { name: "LEADTIME_MEDIO_EFF", nullable: true, length: 20 })
  LEADTIME_MEDIO_EFF: string | null;

  @Column("varchar", { name: "LEADTIME_MEDIO_EFF_GG", nullable: true, length: 20 })
  LEADTIME_MEDIO_EFF_GG: string | null;

  @Column("varchar", { name: "LEADTIME_MEDIO_PRE", nullable: true, length: 20 })
  LEADTIME_MEDIO_PRE: string | null;

  @Column("varchar", { name: "LEADTIME_MEDIO_PRE_GG", nullable: true, length: 20 })
  LEADTIME_MEDIO_PRE_GG: string | null;

  @Column("varchar", { name: "LEADTIME_ORDINI_NO", nullable: true, length: 20 })
  LEADTIME_ORDINI_NO: string | null;
}