export interface ILocaleConfig {
  title: string;
  dir: "ltr" | "rtl";
  shortHand: string;
}
export interface ILOCALE {
  config: ILocaleConfig;
  title: string;
}
