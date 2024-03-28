import { Column, Entity } from "typeorm";

@Entity("XCPK4STA", { schema: "RefasKpi" })
export class Xcpk4Sta {
  @Column("varchar", { name: "ARTICOLO_COD", nullable: true, length: 15 })
  articoloCod: string | null;

  @Column("decimal", { name: "SEQ", nullable: true, precision: 3, scale: 1 })
  seq: string | null;

  @Column("varchar", { name: "CONTROLLO_TIPO", nullable: true, length: 1 })
  controlloTipo: string | null;

  @Column("varchar", { name: "CONTROLLO_COD", nullable: true, length: 7 })
  controlloCod: string | null;

  @Column("varchar", { name: "CENTRO", nullable: true, length: 5 })
  centro: string | null;

  @Column("varchar", { name: "ORDINE", nullable: true, length: 6 })
  ordine: string | null;

  @Column("decimal", {
    name: "VALORE_MINIMO",
    nullable: true,
    precision: 11,
    scale: 4,
  })
  valoreMinimo: string | null;

  @Column("decimal", {
    name: "VALORE_MEDIO",
    nullable: true,
    precision: 11,
    scale: 4,
  })
  valoreMedio: string | null;

  @Column("decimal", {
    name: "VALORE_MASSIMO",
    nullable: true,
    precision: 11,
    scale: 4,
  })
  valoreMassimo: string | null;

  @Column("decimal", {
    name: "NR_RILEVAZIONI",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  nrRilevazioni: string | null;

  @Column("decimal", {
    name: "TOT_VALORI_RILEVATI",
    nullable: true,
    precision: 17,
    scale: 4,
  })
  totValoriRilevati: string | null;

  @Column("decimal", {
    name: "VAL_SCARTO_QUADRAT_MEDIO",
    nullable: true,
    precision: 11,
    scale: 4,
  })
  valScartoQuadratMedio: string | null;

  @Column("decimal", {
    name: "TOT_SCARTO_QUADRAT_MEDIO",
    nullable: true,
    precision: 17,
    scale: 4,
  })
  totScartoQuadratMedio: string | null;

  @Column("decimal", {
    name: "DATA_REGISTRAZIONE",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  dataRegistrazione: string | null;
}
