import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("XMOE6STA", { schema: "RefasKpi" })
export class Xmoe6Sta {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  ID: number;

  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  AZIENDA: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  TIPO: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  CODICE: string | null;

  @Column("varchar", { name: "ATTIVITA_COD", nullable: true, length: 4 })
  ATTIVITA_COD: string | null;

  @Column("varchar", { name: "ATTIVITA_DES", nullable: true, length: 30 })
  ATTIVITA_DES: string | null;

  @Column("decimal", {
    name: "ORE_MAC_EXTRA",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ORE_MAC_EXTRA: string | null;

  @Column("decimal", {
    name: "ORE_MAC_FERMO",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ORE_MAC_FERMO: string | null;

  @Column("decimal", {
    name: "ORE_MAC_TOTALI",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ORE_MAC_TOTALI: string | null;
}
