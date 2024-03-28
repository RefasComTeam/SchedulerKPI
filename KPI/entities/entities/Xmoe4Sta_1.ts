import { Column, Entity } from "typeorm";

@Entity("XMOE4STA_1", { schema: "RefasKpi" })
export class Xmoe4Sta_1 {
  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  azienda: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  tipo: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  codice: string | null;

  @Column("decimal", { name: "ANNO", nullable: true, precision: 4, scale: 0 })
  anno: string | null;

  @Column("decimal", { name: "MESE", nullable: true, precision: 2, scale: 0 })
  mese: string | null;

  @Column("decimal", {
    name: "ORE_PROD_EFF",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  oreProdEff: string | null;

  @Column("decimal", {
    name: "ORE_PROD_PRE",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  oreProdPre: string | null;

  @Column("decimal", {
    name: "ORE_PROD_DIS",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  oreProdDis: string | null;

  @Column("decimal", {
    name: "QTA_PR",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  qtaPr: string | null;

  @Column("decimal", {
    name: "QTA_NC",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  qtaNc: string | null;

  @Column("decimal", {
    name: "QTA_PREV",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  qtaPrev: string | null;

  @Column("decimal", {
    name: "OEE_DIS",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  oeeDis: string | null;

  @Column("decimal", {
    name: "OEE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  oeePer: string | null;

  @Column("decimal", {
    name: "OEE_QUA",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  oeeQua: string | null;

  @Column("decimal", { name: "OEE", nullable: true, precision: 4, scale: 0 })
  oee: string | null;

  @Column("decimal", {
    name: "ORE_MAN_PREV",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  oreManPrev: string | null;

  @Column("decimal", {
    name: "ORE_MAN_EFF",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  oreManEff: string | null;

  @Column("decimal", {
    name: "ORE_MAN_TOT",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  oreManTot: string | null;

  @Column("decimal", {
    name: "PRESIDIO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  presidio: string | null;

  @Column("decimal", {
    name: "PERF_ASS",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  perfAss: string | null;
}
