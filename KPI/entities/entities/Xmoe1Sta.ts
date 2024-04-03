import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("XMOE1STA", { schema: "RefasKpi" })
export class Xmoe1Sta {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  ID: number;

  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  AZIENDA: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  TIPO: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  CODICE: string | null;

  @Column("decimal", {
    name: "IND_OEE_U06",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  IND_OEE_U06: string | null;

  @Column("decimal", {
    name: "IND_OEE_TREND",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  IND_OEE_TREND: string | null;

  @Column("varchar", { name: "TIPOLOGIA_LINEA", nullable: true, length: 5 })
  TIPOLOGIA_LINEA: string | null;
}