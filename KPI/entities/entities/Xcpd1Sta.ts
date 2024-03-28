import { Column, Entity } from "typeorm";

@Entity("XCPD1STA", { schema: "RefasKpi" })
export class Xcpd1Sta {
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

  @Column("varchar", { name: "FASE", nullable: true, length: 4 })
  fase: string | null;

  @Column("varchar", { name: "DESCRIZIONE_FASE", nullable: true, length: 30 })
  descrizioneFase: string | null;

  @Column("decimal", {
    name: "PCP_VALORE",
    nullable: true,
    precision: 11,
    scale: 4,
  })
  pcpValore: string | null;

  @Column("decimal", {
    name: "NUMERO_VALORI",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  numeroValori: string | null;

  @Column("varchar", { name: "LEGENDA_VALORI", nullable: true, length: 3 })
  legendaValori: string | null;
}
