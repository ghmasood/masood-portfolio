import locale from "@/locale";

export interface ISSRLocale {
  lang: keyof typeof locale;
  dir: "rtl" | "ltr";
}
