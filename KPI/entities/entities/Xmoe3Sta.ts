import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("XMOE3STA", { schema: "RefasKpi" })
export class Xmoe3Sta {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  ID: number;

  @Column("varchar", { name: "AZIENDA", nullable: true, length: 10 })
  AZIENDA: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  TIPO: string | null;

  @Column("varchar", { name: "CODICE", nullable: true, length: 5 })
  CODICE: string | null;

  @Column("decimal", {
    name: "ORE_DISP_GG",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  ORE_DISP_GG: string | null;

  @Column("decimal", {
    name: "ORE_EXTRA_U6",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ORE_EXTRA_U6: string | null;

  @Column("decimal", {
    name: "ORE_FERMI_U6",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ORE_FERMI_U6: string | null;

  @Column("decimal", {
    name: "ORE_ATTR_U6",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ORE_ATTR_U6: string | null;

  @Column("decimal", {
    name: "ORE_ALIM_U6",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ORE_ALIM_U6: string | null;
}
