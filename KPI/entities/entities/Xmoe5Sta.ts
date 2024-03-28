import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("XMOE5STA", { schema: "RefasKpi" })
export class Xmoe5Sta {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  ID: number;

  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  AZIENDA: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  TIPO: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  CODICE: string | null;

  @Column("varchar", { name: "DETTAGLIO_COD", nullable: true, length: 5 })
  DETTAGLIO_COD: string | null;

  @Column("varchar", { name: "DETTAGLIO_DES", nullable: true, length: 30 })
  DETTAGLIO_DES: string | null;

  @Column("decimal", {
    name: "ORE_PROD_EFF",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ORE_PROD_EFF: string | null;

  @Column("decimal", { name: "OEE", nullable: true, precision: 4, scale: 0 })
  OEE: string | null;

  @Column("decimal", {
    name: "PRESIDIO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  PRESIDIO: string | null;
}
