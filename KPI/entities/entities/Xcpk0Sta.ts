import { Column, Entity } from "typeorm";

@Entity("XCPK0STA", { schema: "RefasKpi" })
export class Xcpk0Sta {
  @Column("varchar", { name: "CENTRO", nullable: true, length: 5 })
  centro: string | null;

  @Column("varchar", { name: "ORDINE", nullable: true, length: 6 })
  ordine: string | null;

  @Column("varchar", { name: "FASE", nullable: true, length: 4 })
  fase: string | null;

  @Column("varchar", { name: "DESCRIZIONE_FASE", nullable: true, length: 30 })
  descrizioneFase: string | null;

  @Column("varchar", { name: "ARTICOLO_COD", nullable: true, length: 15 })
  articoloCod: string | null;

  @Column("varchar", { name: "DESCRIZIONE_PARTE", nullable: true, length: 30 })
  descrizioneParte: string | null;

  @Column("varchar", { name: "CLASSE", nullable: true, length: 2 })
  classe: string | null;

  @Column("varchar", { name: "CLASSE_APP", nullable: true, length: 4 })
  classeApp: string | null;

  @Column("decimal", { name: "SEQ", nullable: true, precision: 3, scale: 1 })
  seq: string | null;

  @Column("varchar", { name: "CONTROLLO_TIPO", nullable: true, length: 1 })
  controlloTipo: string | null;

  @Column("varchar", { name: "CONTROLLO_COD", nullable: true, length: 7 })
  controlloCod: string | null;

  @Column("decimal", {
    name: "NR_CAMPIONI_TOT",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  nrCampioniTot: string | null;

  @Column("decimal", {
    name: "NR_CAMPIONE",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  nrCampione: string | null;

  @Column("decimal", { name: "DATA", nullable: true, precision: 8, scale: 0 })
  data: string | null;

  @Column("decimal", { name: "ORA", nullable: true, precision: 6, scale: 0 })
  ora: string | null;

  @Column("decimal", {
    name: "ORE_DEC",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  oreDec: string | null;

  @Column("varchar", { name: "ORA_DES", nullable: true, length: 5 })
  oraDes: string | null;

  @Column("decimal", {
    name: "PZ_PRODOTTI",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  pzProdotti: string | null;

  @Column("decimal", {
    name: "PZ_TOTALI",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  pzTotali: string | null;

  @Column("varchar", { name: "ID_PCP", nullable: true, length: 35 })
  idPcp: string | null;

  @Column("varchar", { name: "PCP_VERIFICATA", nullable: true, length: 1 })
  pcpVerificata: string | null;

  @Column("varchar", { name: "PCP_RISORSA", nullable: true, length: 6 })
  pcpRisorsa: string | null;

  @Column("decimal", {
    name: "DATA_REG",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  dataReg: string | null;

  @Column("decimal", {
    name: "ORA_REG",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  oraReg: string | null;

  @Column("varchar", { name: "PCP_ESITO_CONTROLLO", nullable: true, length: 2 })
  pcpEsitoControllo: string | null;

  @Column("decimal", {
    name: "PCP_VALORE",
    nullable: true,
    precision: 11,
    scale: 4,
  })
  pcpValore: string | null;

  @Column("varchar", { name: "TIPO_FREQ_COD", nullable: true, length: 2 })
  tipoFreqCod: string | null;

  @Column("varchar", { name: "TIPO_FREQ_DES", nullable: true, length: 40 })
  tipoFreqDes: string | null;

  @Column("varchar", { name: "CONTROLLO_DES", nullable: true, length: 30 })
  controlloDes: string | null;

  @Column("varchar", { name: "CONTROLLO_RIF", nullable: true, length: 30 })
  controlloRif: string | null;

  @Column("decimal", {
    name: "VALORE_MINIMO",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  valoreMinimo: string | null;

  @Column("decimal", {
    name: "VALORE_MASSIMO",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  valoreMassimo: string | null;

  @Column("varchar", { name: "ID_CTR", nullable: true, length: 13 })
  idCtr: string | null;

  @Column("varchar", { name: "PCP_AUTOMATICO_A_M", nullable: true, length: 1 })
  pcpAutomaticoAM: string | null;

  @Column("varchar", { name: "PCP_OPERATORE_P_Q", nullable: true, length: 1 })
  pcpOperatorePQ: string | null;
}
