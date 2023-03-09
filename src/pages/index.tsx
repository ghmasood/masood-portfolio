import ChangeLang from "@/components/changeLang";
import HeroSection from "@/components/HeroSection";
import locale from "@/locale";
import { GetStaticProps } from "next";
import { ISSRLocale } from "../types";

export default function Home() {
  return (
    <div className="w-full ">
      <ChangeLang />
      <HeroSection />
    </div>
  );
}

export const getStaticProps: GetStaticProps<ISSRLocale> = async (ctx) => {
  //LOCALE
  const lang = ctx.locale as keyof typeof locale;
  const fullDictionary = locale[lang];

  return {
    props: {
      lang,
      dir: fullDictionary.config.dir,
    },
    revalidate: 900,
  };
};
