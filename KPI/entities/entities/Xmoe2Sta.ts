import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("XMOE2STA", { schema: "RefasKpi" })
export class Xmoe2Sta {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  ID: number;

  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  AZIENDA: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  TIPO: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  CODICE: string | null;

  @Column("decimal", {
    name: "DISP_ORE_EFFETTIVE",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  DISP_ORE_EFFETTIVE: string | null;

  @Column("decimal", {
    name: "DISP_ORE_PREVISTE",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  DISP_ORE_PREVISTE: string | null;
}