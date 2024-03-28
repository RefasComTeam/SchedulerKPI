import { Column, Entity } from "typeorm";

@Entity("XFORM00F_O", { schema: "RefasKpi" })
export class Xform00FO {
  @Column("varchar", { name: "ANNUM", nullable: true, length: 1 })
  annum: string | null;

  @Column("varchar", { name: "UTENM", nullable: true, length: 10 })
  utenm: string | null;

  @Column("decimal", { name: "DAUAM", nullable: true, precision: 6, scale: 0 })
  dauam: string | null;

  @Column("varchar", { name: "NMTRM", nullable: true, length: 10 })
  nmtrm: string | null;

  @Column("varchar", { name: "CDCLM", nullable: true, length: 4 })
  cdclm: string | null;

  @Column("varchar", { name: "DECLM", nullable: true, length: 50 })
  declm: string | null;
}
