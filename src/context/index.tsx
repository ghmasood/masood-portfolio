import React from "react";

import locale from "@/locale";

import { ISSRLocale } from "../types";
import { FullLocaleContext } from "./types";

export const SSRLocaleContext = React.createContext<FullLocaleContext | null>(
  null
);

interface ILocleProviderProps extends ISSRLocale {
  children: React.ReactNode;
}

const LocaleProvider: React.FC<ILocleProviderProps> = ({
  children,
  dir,
  lang,
}) => {
  return (
    <SSRLocaleContext.Provider
      value={{ locale: { dir, lang, dict: locale[lang] } }}
    >
      {children}
    </SSRLocaleContext.Provider>
  );
};

export default LocaleProvider;
