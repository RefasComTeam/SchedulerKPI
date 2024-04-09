import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("XMOE7STA", { schema: "RefasKpi" })
export class Xmoe7Sta {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  ID: number;

  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  AZIENDA: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  TIPO: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  CODICE: string | null;

  @Column("decimal", { name: "ANNO", nullable: true, precision: 4, scale: 0 })
  ANNO: string | null;

  @Column("decimal", {
    name: "SETTIMANA",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  SETTIMANA: string | null;

  @Column("decimal", {
    name: "ORE_PROD_EFF",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  ORE_PROD_EFF: string | null;

  @Column("decimal", {
    name: "ORE_PROD_PRE",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  ORE_PROD_PRE: string | null;

  @Column("decimal", {
    name: "ORE_PROD_DIS",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  ORE_PROD_DIS: string | null;

  @Column("decimal", {
    name: "QTA_PR",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  QTA_PR: string | null;

  @Column("decimal", {
    name: "QTA_NC",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  QTA_NC: string | null;

  @Column("decimal", {
    name: "QTA_PREV",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  QTA_PREV: string | null;

  @Column("decimal", {
    name: "OEE_DIS",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  OEE_DIS: string | null;

  @Column("decimal", {
    name: "OEE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  OEE_PER: string | null;

  @Column("decimal", {
    name: "OEE_QUA",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  OEE_QUA: string | null;

  @Column("decimal", { name: "OEE", nullable: true, precision: 4, scale: 0 })
  oee: string | null;

  @Column("decimal", {
    name: "ORE_MAN_PREV",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  OEE: string | null;

  @Column("decimal", {
    name: "ORE_MAN_EFF",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  ORE_MAN_EFF: string | null;

  @Column("decimal", {
    name: "ORE_MAN_TOT",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  ORE_MAN_TOT: string | null;

  @Column("decimal", {
    name: "PRESIDIO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  PRESIDIO: string | null;

  @Column("decimal", {
    name: "PRESENZA_EFFETTIVA",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  PRESENZA_EFFETTIVA: string | null;

  @Column("decimal", {
    name: "PERF_ASS",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  PERF_ASS: string | null;

  @Column("varchar", { name: "TIPOLOGIA_LINEA", nullable: true, length: 5 })
  TIPOLOGIA_LINEA: string | null;

  @Column("varchar", { name: "SETTIMANA_DES", nullable: true, length: 20 })
  SETTIMANA_DES: string | null;
}
