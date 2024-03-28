import { Column, Entity } from "typeorm";

@Entity("LazioCities", { schema: "RefasKpi" })
export class LazioCities {
  @Column("varchar", { primary: true, name: "city_name", length: 255 })
  cityName: string;

  @Column("double", { name: "latitude", nullable: true, precision: 22 })
  latitude: number | null;

  @Column("double", { name: "longitude", nullable: true, precision: 22 })
  longitude: number | null;

  @Column("int", { name: "value", nullable: true })
  value: number | null;
}
