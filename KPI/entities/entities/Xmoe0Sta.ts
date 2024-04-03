import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("XMOE0STA", { schema: "RefasKpi" })
export class Xmoe0Sta {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  ID: number;

  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  AZIENDA: string | null;

  @Column("varchar", { name: "ORD_RESPONSABILE", nullable: true, length: 5 })
  ORD_RESPONSABILE: string | null;

  @Column("varchar", { name: "ORD_REPARTO", nullable: true, length: 4 })
  ORD_REPARTO: string | null;

  @Column("varchar", { name: "ORD_CENTRO", nullable: true, length: 5 })
  ORD_CENTRO: string | null;

  @Column("varchar", { name: "DESCRIZIONE", nullable: true, length: 30 })
  DESCRIZIONE: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  TIPO: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  CODICE: string | null;

  @Column("varchar", { name: "TIPOLOGIA_LINEA", nullable: true, length: 5 })
  TIPOLOGIA_LINEA: string | null;
}