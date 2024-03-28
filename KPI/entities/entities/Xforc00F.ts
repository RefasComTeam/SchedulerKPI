import { Column, Entity } from "typeorm";

@Entity("XFORC00F", { schema: "RefasKpi" })
export class Xforc00F {
  @Column("varchar", { name: "ANNUC", nullable: true, length: 1 })
  annuc: string | null;

  @Column("varchar", { name: "UTENC", nullable: true, length: 10 })
  utenc: string | null;

  @Column("decimal", { name: "DAUAC", nullable: true, precision: 6, scale: 0 })
  dauac: string | null;

  @Column("varchar", { name: "NMTRC", nullable: true, length: 10 })
  nmtrc: string | null;

  @Column("varchar", { name: "CDCLC", nullable: true, length: 4 })
  cdclc: string | null;

  @Column("varchar", { name: "DECLC", nullable: true, length: 50 })
  declc: string | null;
}
