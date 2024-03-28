import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("coordinate_province", { schema: "RefasKpi" })
export class CoordinateProvince {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "sigla_provincia", length: 6 })
  siglaProvincia: string;

  @Column("varchar", { name: "provincia", length: 50 })
  provincia: string;

  @Column("decimal", { name: "latitudine", precision: 9, scale: 6 })
  latitudine: string;

  @Column("decimal", { name: "longitudine", precision: 9, scale: 6 })
  longitudine: string;
}
