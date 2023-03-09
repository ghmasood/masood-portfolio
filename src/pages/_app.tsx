import LocaleProvider from "@/context";
import useDirection from "@/hooks/useDirection";
import locale from "@/locale";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  //DICTIONARY TOP LEVEL PROPS
  const lang = pageProps.lang ?? ("en" as keyof typeof locale);
  const dir = pageProps.dir ?? "ltr";
  useDirection(dir);
  return (
    <LocaleProvider lang={lang} dir={dir}>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
