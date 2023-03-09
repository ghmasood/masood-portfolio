import { ISSRLocale } from "../types";
import { ILOCALE } from "../types/localeType";

export interface IFullLocale extends ISSRLocale {
  dict: ILOCALE;
}

export type FullLocaleContext = {
  locale: IFullLocale;
};
